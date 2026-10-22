// Regression checks run with the project's existing React and TypeScript dependencies.
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('node:assert/strict');
const { createRequire } = require('node:module');
const requireFrontend = createRequire(path.resolve('frontend/package.json'));
const ts = requireFrontend('typescript');
const React = requireFrontend('react');
const { renderToStaticMarkup } = requireFrontend('react-dom/server');
const { MemoryRouter, Routes, Route } = requireFrontend('react-router-dom');

function load(file, requireModule = requireFrontend) {
  const source = fs.readFileSync(file, 'utf8');
  const compiled = ts.transpileModule(source, { compilerOptions: {
    module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX,
    esModuleInterop: true,
  } }).outputText;
  const module = { exports: {} };
  vm.runInNewContext(compiled, { module, exports: module.exports, require: requireModule, console }, { filename: file });
  return module.exports;
}

const { normalizeBlogArticles } = load('frontend/src/services/blogArticles.ts');
const newPost = JSON.parse(fs.readFileSync('backend/database/seeders/data/uganda_hidden_beauty_2026_2027.json', 'utf8'));
newPost.status = 'published';
// This is the shape returned by the live server: 1..9 followed by 0, encoded as an object.
const objectSections = {};
for (let index = 1; index < newPost.sections.length; index++) objectSections[index] = newPost.sections[index];
objectSections[0] = newPost.sections[0];
newPost.sections = objectSections;
const oldPost = { ...newPost, slug: 'old-featured', title: 'An older featured story', publishedDate: 'October 2, 2026', featured: true };
const input = [oldPost, newPost];
const before = JSON.stringify(input);
const posts = normalizeBlogArticles(input);
assert.equal(JSON.stringify(input), before, 'Normalization must not mutate the API data');
assert.equal(posts[0].slug, newPost.slug, 'Newest publication must come first');
assert.equal(Array.isArray(posts[0].sections), true);
assert.equal(posts[0].sections.length, 10);
assert.match(posts[0].sections[0].paragraphs[0], /^Uganda, known as the Pearl of Africa/);

function renderArticle(articleList) {
  const BlogPost = load('frontend/src/pages/BlogPost.tsx', spec => {
    // Decorative icons are irrelevant to the article body and its data-shape regression.
    if (spec === 'lucide-react') return new Proxy({}, { get: () => () => null });
    if (spec === '../services/websiteContent') return { useBlogPosts: () => ({ posts: articleList, loading: false, error: '' }) };
    if (spec === '../context/CustomSafariModalContext') return { useCustomSafariModal: () => ({ openBookingModal() {}, openModal() {} }) };
    if (['../components/SEO', '../components/Footer', '../components/TrustBadges'].includes(spec)) return { __esModule: true, default: () => null };
    return requireFrontend(spec);
  }).default;
  return renderToStaticMarkup(React.createElement(MemoryRouter, { initialEntries: [`/blog/${newPost.slug}`] },
    React.createElement(Routes, null, React.createElement(Route, { path: '/blog/:slug', element: React.createElement(BlogPost) }))));
}

assert.throws(() => renderArticle(input), /\.map is not a function/, 'Raw numeric-object sections reproduce the production crash');
const html = renderArticle(posts);
assert.ok(html.includes('Discover the Hidden Beauty of Uganda'));
assert.ok(html.includes('1. Bwindi Impenetrable National Park'));
assert.ok(html.includes('7. The Source of the Nile in Jinja'));
assert.ok(html.includes('info@comeagaintoursandtravels.com'));
if (process.argv[2]) {
  const livePosts = JSON.parse(fs.readFileSync(process.argv[2], 'utf8')).data;
  const replay = renderArticle(normalizeBlogArticles(livePosts));
  assert.ok(replay.includes('Discover the Hidden Beauty of Uganda'));
  assert.ok(replay.includes('1. Bwindi Impenetrable National Park'));
  assert.ok(replay.includes('7. The Source of the Nile in Jinja'));
  console.log('Captured live API response also renders successfully.');
}
console.log('Blog regression checks passed: reproduced raw-data crash; normalized article renders all seven destinations; newest-first ordering; input preserved.');
