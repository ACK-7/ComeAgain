import React, { useState, useEffect } from 'react';
import {
  FileText,
  Plus,
  Search,
  ExternalLink,
  Edit,
  Trash2,
  Sparkles,
  Globe,
  Tag,
  User,
} from 'lucide-react';
import { adminApi } from '../services/adminApi';
import type { BlogPost, BlogPostSection } from '../../data/blogData';
import { ImageUploadPicker } from '../components/ImageUploadPicker';

export const AdminBlog: React.FC = () => {
  // Initialize with real blog articles from blogPosts
  const [posts, setPosts] = useState<BlogPost[]>([]);
  useEffect(() => { adminApi.getBlog().then(setPosts).catch(() => {}); }, []);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [activeFormTab, setActiveFormTab] = useState<'content' | 'sections' | 'seo'>('content');

  // Form states aligned 100% with BlogPost
  const [publicationStatus, setPublicationStatus] = useState<'published' | 'draft' | 'archived'>('draft');
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [category, setCategory] = useState<BlogPost['category']>('Destinations');
  const [readTime, setReadTime] = useState('8 min read');
  const [featuredImage, setFeaturedImage] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [authorName, setAuthorName] = useState('Kawanguzi Wilson');
  const [authorRole, setAuthorRole] = useState('Managing Director, Come Again Tours');
  const [authorImage, setAuthorImage] = useState(`${import.meta.env.BASE_URL}images/wilson.webp`);
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState<string[]>(['Uganda Safari', 'Gorilla Trekking']);
  const [sections, setSections] = useState<BlogPostSection[]>([
    {
      heading: 'Introduction to Uganda Safaris',
      paragraphs: [
        'Uganda stands as Africa’s most diverse safari gem, combining the misty rainforests of Bwindi with sweeping golden savannas in Murchison Falls.',
      ],
      quote: 'More than a safari, it is a life-affirming story.',
    },
  ]);

  const openNew = () => {
    setSelectedPost(null);
    setPublicationStatus('draft');
    setTitle('');
    setSubtitle('Uganda Travel Guide | Discover East Africa with Come Again Tours');
    setCategory('Destinations');
    setReadTime('7 min read');
    setFeaturedImage(`${import.meta.env.BASE_URL}images/Gorillaa.webp`);
    setExcerpt('');
    setAuthorName('Kawanguzi Wilson');
    setAuthorRole('Managing Director, Come Again Tours');
    setAuthorImage(`${import.meta.env.BASE_URL}images/wilson.webp`);
    setMetaTitle('');
    setMetaDescription('');
    setTags(['Uganda', 'Wildlife', 'Safari Tips']);
    setSections([
      {
        heading: 'Why This Safari is Essential',
        paragraphs: [
          'Uganda offers a unique juxtaposition of primeval rainforests, snow-capped mountains, and sprawling savanna wildlife reserves.',
        ],
      },
    ]);
    setActiveFormTab('content');
    setShowModal(true);
  };

  const openEdit = (p: BlogPost) => {
    setSelectedPost(p);
    setTitle(p.title);
    setSubtitle(p.subtitle || '');
    setCategory(p.category);
    setReadTime(p.readTime);
    setFeaturedImage(p.featuredImage);
    setExcerpt(p.excerpt);
    setAuthorName(p.author.name);
    setAuthorRole(p.author.role);
    setAuthorImage(p.author.image);
    setMetaTitle(p.metaTitle || p.title);
    setMetaDescription(p.metaDescription || p.excerpt);
    setTags(p.tags || []);
    setSections(p.sections && p.sections.length > 0 ? p.sections : [
      {
        heading: 'Article Overview',
        paragraphs: [p.excerpt],
      },
    ]);
    setActiveFormTab('content');
    setShowModal(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    const publishedDate = selectedPost?.publishedDate || new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });

    const updated: BlogPost = {
      ...selectedPost,
      slug: selectedPost?.slug || slug,
      status: publicationStatus,
      title,
      subtitle,
      category,
      readTime,
      publishedDate,
      featuredImage,
      excerpt,
      metaTitle: metaTitle || `${title} | Come Again Safaris`,
      metaDescription: metaDescription || excerpt,
      tags,
      sections,
      featured: selectedPost?.featured ?? false,
      author: {
        name: authorName,
        role: authorRole,
        image: authorImage,
      },
    };

    await adminApi.saveBlog(updated, selectedPost?.slug);
    if (selectedPost) {
      setPosts((prev) => prev.map((item) => (item.slug === selectedPost.slug ? updated : item)));
    } else {
      setPosts([updated, ...posts]);
    }
    setShowModal(false);
  };

  const handleDelete = async (slug: string) => {
    if (window.confirm('Delete this safari guide article?')) {
      await adminApi.deleteBlog(slug);
      setPosts((prev) => prev.filter((p) => p.slug !== slug));
    }
  };

  // Tag helper
  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const removeTag = (t: string) => {
    setTags(tags.filter((x) => x !== t));
  };

  // Section helpers
  const addSection = () => {
    setSections([
      ...sections,
      {
        heading: `Section ${sections.length + 1}`,
        paragraphs: ['Enter detailed safari recommendations, logistics, and guidance here.'],
      },
    ]);
  };

  const updateSectionHeading = (idx: number, h: string) => {
    const list = [...sections];
    list[idx] = { ...list[idx], heading: h };
    setSections(list);
  };

  const updateSectionText = (idx: number, text: string) => {
    const list = [...sections];
    list[idx] = { ...list[idx], paragraphs: text.split('\n\n').filter(Boolean) };
    setSections(list);
  };

  const removeSection = (idx: number) => {
    setSections(sections.filter((_, i) => i !== idx));
  };

  const categories = ['all', 'Wildlife', 'Culture', 'Safari Tips', 'Destinations'];

  const filtered = posts.filter((p) => {
    const matchesCat = categoryFilter === 'all' || p.category === categoryFilter;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white font-serif flex items-center gap-2">
            <FileText className="h-6 w-6 text-brand-green" />
            Safari Journal & Travel Guides CMS
          </h1>
          <p className="text-xs text-zinc-400 mt-1">
            Author and publish expert Uganda safari guides, gorilla trekking tips, and SEO articles matching <code>blogData.ts</code>.
          </p>
        </div>

        <button
          onClick={openNew}
          className="inline-flex items-center gap-2 rounded-xl bg-brand-green hover:bg-[#4ea84e] text-black font-semibold px-4 py-2 text-xs transition-all shadow-md shadow-brand-green/20 cursor-pointer self-start sm:self-auto"
        >
          <Plus className="h-4 w-4" />
          <span>Write New Safari Article</span>
        </button>
      </div>

      {/* Search & Category Filter */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`rounded-xl px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-colors capitalize ${
                categoryFilter === cat
                  ? 'bg-brand-green text-black font-bold'
                  : 'bg-[#141e11] text-zinc-300 hover:bg-[#1b2816]'
              }`}
            >
              {cat === 'all' ? 'All Guides' : cat}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-400" />
          <input
            type="text"
            placeholder="Search guides or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl bg-[#141e11] border border-[#233519] pl-9 pr-4 py-2 text-xs text-white placeholder-zinc-500 focus:border-brand-green focus:outline-none"
          />
        </div>
      </div>

      {/* Articles Table */}
      <div className="overflow-hidden rounded-2xl bg-[#11190e] border border-[#223519] shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-zinc-300">
            <thead className="bg-[#0b1107] text-[11px] uppercase tracking-wider text-zinc-400 border-b border-[#223519]">
              <tr>
                <th className="py-3.5 px-4 font-semibold">Article</th>
                <th className="py-3.5 px-4 font-semibold">Category</th>
                <th className="py-3.5 px-4 font-semibold">Author</th>
                <th className="py-3.5 px-4 font-semibold">Published</th>
                <th className="py-3.5 px-4 font-semibold">Sections</th>
                <th className="py-3.5 px-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1e2e16]">
              {filtered.map((post) => (
                <tr key={post.slug} className="hover:bg-[#162312] transition-colors group">
                  <td className="py-3.5 px-4 max-w-md">
                    <div className="flex items-center gap-3">
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="h-10 w-14 rounded-lg object-cover shrink-0 border border-[#283e1d]"
                      />
                      <div>
                        <p className="font-semibold text-white group-hover:text-brand-accent transition-colors line-clamp-1">
                          {post.title}
                        </p>
                        <p className="text-[11px] text-zinc-400 line-clamp-1">{post.excerpt}</p>
                      </div>
                    </div>
                  </td>

                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <span className="rounded-lg bg-[#182613] px-2 py-0.5 text-[10px] text-brand-green border border-[#263c1e]">
                      {post.category}
                    </span>
                  </td>

                  <td className="py-3.5 px-4 whitespace-nowrap text-zinc-300">
                    {post.author.name}
                  </td>

                  <td className="py-3.5 px-4 whitespace-nowrap text-zinc-400">
                    {post.publishedDate}
                  </td>

                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <span className="text-zinc-400 font-mono text-[11px]">
                      {post.sections?.length || 1} sections
                    </span>
                  </td>

                  <td className="py-3.5 px-4 text-right whitespace-nowrap">
                    <div className="flex items-center justify-end gap-1.5">
                      <a
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Live Guide"
                        className="rounded-lg p-1.5 text-zinc-400 hover:bg-[#1a2914] hover:text-white transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                      <button
                        onClick={() => openEdit(post)}
                        title="Edit Guide"
                        className="rounded-lg p-1.5 text-zinc-400 hover:bg-brand-green/20 hover:text-brand-green transition-colors"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(post.slug)}
                        title="Delete Article"
                        className="rounded-lg p-1.5 text-zinc-400 hover:bg-rose-500/15 hover:text-rose-400 transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Write / Edit Article Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div
            className="w-full max-w-3xl rounded-3xl bg-[#11190e] border border-[#283e1c] text-white shadow-2xl max-h-[92vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 p-6 border-b border-[#213318] bg-[#0c1308]">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-brand-green" />
                <h3 className="text-base font-bold text-white font-serif">
                  {selectedPost ? 'Edit Safari Article' : 'Write Safari Travel Guide'}
                </h3>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="text-zinc-400 hover:text-white p-1 rounded-lg"
              >
                ✕
              </button>
            </div>

            {/* Form Tabs */}
            <div className="flex items-center border-b border-[#203218] px-6 bg-[#0e170c] text-xs">
              <button
                type="button"
                onClick={() => setActiveFormTab('content')}
                className={`py-2.5 px-4 font-semibold transition-colors border-b-2 ${
                  activeFormTab === 'content'
                    ? 'border-brand-green text-brand-green'
                    : 'border-transparent text-zinc-400 hover:text-white'
                }`}
              >
                1. Article Details & Cover
              </button>
              <button
                type="button"
                onClick={() => setActiveFormTab('sections')}
                className={`py-2.5 px-4 font-semibold transition-colors border-b-2 ${
                  activeFormTab === 'sections'
                    ? 'border-brand-green text-brand-green'
                    : 'border-transparent text-zinc-400 hover:text-white'
                }`}
              >
                2. Body Sections ({sections.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveFormTab('seo')}
                className={`py-2.5 px-4 font-semibold transition-colors border-b-2 flex items-center gap-1.5 ${
                  activeFormTab === 'seo'
                    ? 'border-brand-green text-brand-green'
                    : 'border-transparent text-zinc-400 hover:text-white'
                }`}
              >
                <Globe className="h-3.5 w-3.5" />
                <span>3. Google Search Preview (SEO)</span>
              </button>
            </div>

            {/* Scrollable Form Body */}
            <form onSubmit={handleSave} className="flex-1 overflow-y-auto p-6 space-y-5">
              <label className="block text-sm">Publication status<select className="ml-3 bg-zinc-900 p-2 rounded" value={publicationStatus} onChange={e => setPublicationStatus(e.target.value as typeof publicationStatus)}><option value="draft">Draft</option><option value="published">Published</option><option value="archived">Archived</option></select></label>
              {/* TAB 1: General Content & Cover */}
              {activeFormTab === 'content' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">
                      Article Main Headline *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 10 Reasons to Visit Uganda in 2026/2027"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:border-brand-green focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">
                      Subtitle / Guide Descriptor
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Uganda Travel Guide | Discover Uganda and East Africa with Come Again Tours & Travels"
                      value={subtitle}
                      onChange={(e) => setSubtitle(e.target.value)}
                      className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:border-brand-green focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">
                        Category
                      </label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value as BlogPost['category'])}
                        className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3 py-2 text-xs text-white focus:border-brand-green focus:outline-none"
                      >
                        <option value="Wildlife">Wildlife</option>
                        <option value="Culture">Culture</option>
                        <option value="Safari Tips">Safari Tips</option>
                        <option value="Destinations">Destinations</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">
                        Estimated Reading Time
                      </label>
                      <input
                        type="text"
                        placeholder="8 min read"
                        value={readTime}
                        onChange={(e) => setReadTime(e.target.value)}
                        className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3.5 py-2 text-xs text-white focus:border-brand-green focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Featured Hero Cover Image Upload (Local PC & Presets) */}
                  <div className="p-4 rounded-2xl bg-[#141e11] border border-[#233519]">
                    <ImageUploadPicker
                      label="Article Featured Cover Image *"
                      value={featuredImage}
                      onChange={(val) => setFeaturedImage(val)}
                      helperText="Choose a photo from your computer, website presets, or external URL."
                    />
                  </div>

                  {/* Author Card */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-[#141e11] border border-[#233519]">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1 flex items-center gap-1">
                        <User className="h-3.5 w-3.5 text-brand-green" />
                        Author Name
                      </label>
                      <input
                        type="text"
                        value={authorName}
                        onChange={(e) => setAuthorName(e.target.value)}
                        className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3 py-2 text-xs text-white focus:border-brand-green focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">
                        Author Title / Role
                      </label>
                      <input
                        type="text"
                        value={authorRole}
                        onChange={(e) => setAuthorRole(e.target.value)}
                        className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3 py-2 text-xs text-white focus:border-brand-green focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Summary / Excerpt */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">
                      Summary / Lead Excerpt *
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Engaging summary that appears on blog cards and Google snippets..."
                      value={excerpt}
                      onChange={(e) => setExcerpt(e.target.value)}
                      className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:border-brand-green focus:outline-none"
                    />
                  </div>

                  {/* Tags */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1 flex items-center gap-1">
                      <Tag className="h-3.5 w-3.5 text-brand-accent" />
                      Topic Tags
                    </label>
                    <div className="flex gap-2 mb-2">
                      <input
                        type="text"
                        placeholder="e.g. Gorilla Trekking, Bwindi, Packing"
                        value={tagInput}
                        onChange={(e) => setTagInput(e.target.value)}
                        className="flex-1 rounded-xl bg-[#172314] border border-[#273d1f] px-3 py-1.5 text-xs text-white focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={addTag}
                        className="rounded-xl bg-[#203318] px-3 py-1.5 text-xs text-brand-accent hover:bg-[#2b4421]"
                      >
                        Add Tag
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {tags.map((t, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 rounded-full bg-[#1b2b15] border border-[#2a4220] px-2.5 py-0.5 text-xs text-zinc-300"
                        >
                          <span>#{t}</span>
                          <button
                            type="button"
                            onClick={() => removeTag(t)}
                            className="hover:text-rose-400"
                          >
                            ✕
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: Body Sections */}
              {activeFormTab === 'sections' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-[#203218]">
                    <div>
                      <h4 className="text-sm font-bold text-white font-serif">
                        Article Content Sections
                      </h4>
                      <p className="text-xs text-zinc-400">
                        Add structured headings, paragraphs, and quotes for your safari guide.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={addSection}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-brand-green px-3.5 py-1.5 text-xs font-semibold text-black hover:bg-[#4ea84e] transition-colors"
                    >
                      <Plus className="h-3.5 w-3.5" />
                      <span>Add Section</span>
                    </button>
                  </div>

                  <div className="space-y-4">
                    {sections.map((sec, idx) => (
                      <div
                        key={idx}
                        className="rounded-2xl bg-[#141e11] border border-[#233519] p-4 space-y-3"
                      >
                        <div className="flex items-center justify-between">
                          <input
                            type="text"
                            placeholder="Section Heading (e.g. Best Season for Gorilla Trekking)"
                            value={sec.heading || ''}
                            onChange={(e) => updateSectionHeading(idx, e.target.value)}
                            className="flex-1 mr-3 rounded-xl bg-[#172314] border border-[#273d1f] px-3.5 py-2 text-xs text-white font-bold focus:border-brand-green focus:outline-none"
                          />
                          <button
                            type="button"
                            onClick={() => removeSection(idx)}
                            className="text-zinc-500 hover:text-rose-400 p-1"
                            title="Remove Section"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>

                        <div>
                          <label className="block text-[10px] text-zinc-400 mb-1">
                            Paragraphs (Separate multiple paragraphs with blank lines)
                          </label>
                          <textarea
                            rows={4}
                            placeholder="Write comprehensive guidance for travelers..."
                            value={sec.paragraphs.join('\n\n')}
                            onChange={(e) => updateSectionText(idx, e.target.value)}
                            className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3.5 py-2 text-xs text-zinc-200 placeholder-zinc-500 focus:border-brand-green focus:outline-none"
                          />
                        </div>

                        {sec.quote && (
                          <div className="p-2.5 rounded-xl bg-[#192714] border-l-4 border-brand-green text-xs italic text-zinc-300">
                            &ldquo;{sec.quote}&rdquo;
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: Google Search SEO Preview */}
              {activeFormTab === 'seo' && (
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-bold text-white font-serif flex items-center gap-2">
                      <Globe className="h-4 w-4 text-brand-green" />
                      Search Engine Metadata (SEO)
                    </h4>
                    <p className="text-xs text-zinc-400">
                      Optimize your snippet for high-intent safari travelers searching on Google.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">
                      Meta Title (Title Tag)
                    </label>
                    <input
                      type="text"
                      placeholder={title || '10 Reasons to Visit Uganda | Come Again Safaris'}
                      value={metaTitle}
                      onChange={(e) => setMetaTitle(e.target.value)}
                      className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3.5 py-2 text-xs text-white focus:border-brand-green focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">
                      Meta Description (Snippet)
                    </label>
                    <textarea
                      rows={3}
                      placeholder={excerpt || 'Discover why Uganda is your ultimate safari destination...'}
                      value={metaDescription}
                      onChange={(e) => setMetaDescription(e.target.value)}
                      className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3.5 py-2 text-xs text-white focus:border-brand-green focus:outline-none"
                    />
                  </div>

                  {/* Live Google Search Preview Card */}
                  <div className="rounded-2xl bg-white text-zinc-900 p-4 border border-zinc-300 shadow-md">
                    <p className="text-[10px] text-zinc-500 mb-1">Google Search Result Preview</p>
                    <div className="text-xs text-zinc-600 flex items-center gap-1">
                      <span>https://www.comeagaintoursandtravels.com</span>
                      <span>›</span>
                      <span>blog</span>
                      <span>›</span>
                      <span className="font-semibold text-zinc-800">
                        {selectedPost?.slug || title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                      </span>
                    </div>
                    <h4 className="text-base text-[#1a0dab] font-medium hover:underline mt-1 cursor-pointer">
                      {metaTitle || title || 'Come Again Safari Guide'}
                    </h4>
                    <p className="text-xs text-[#4d5156] mt-1 line-clamp-2">
                      {metaDescription || excerpt || 'Expert safari insights, gorilla trekking permits, and travel advice for exploring Uganda with Come Again Tours.'}
                    </p>
                  </div>
                </div>
              )}

              {/* Bottom Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-[#213318]">
                <div className="text-xs text-zinc-400">
                  Matches <code>blogData.ts</code>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="rounded-xl px-4 py-2 text-xs text-zinc-400 hover:bg-[#172314] hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-xl bg-brand-green hover:bg-[#4ea84e] text-black font-semibold px-6 py-2 text-xs cursor-pointer shadow-md shadow-brand-green/20"
                  >
                    Save Safari Article
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
export default AdminBlog;
