// Preserve the existing public website content as a one-time database import.
const fs = require('fs');
const vm = require('vm');
const ts = require('../frontend/node_modules/typescript');
const { execFileSync } = require('child_process');
function evaluate(source, name) {
  const js = ts.transpileModule(source.replaceAll('import.meta.env.BASE_URL', "'/'"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const context = { exports: {} };
  vm.runInNewContext(js, context);
  return context.exports[name];
}
const blog = evaluate(fs.readFileSync('frontend/src/data/blogData.ts', 'utf8'), 'blogPosts').map(post => ({ ...post, status: 'published' }));
const business = evaluate(fs.readFileSync('frontend/src/data/businessConfig.ts', 'utf8'), 'businessConfig');
const oldFleet = execFileSync('git', ['show', 'HEAD:frontend/src/pages/CarHireUganda.tsx'], { encoding: 'utf8' });
const fleetSource = oldFleet.slice(oldFleet.indexOf('  const vehicles = [') + 2, oldFleet.indexOf('\n\n  return ('));
const vehicles = evaluate(fleetSource.replace('const vehicles', 'export const vehicles'), 'vehicles');
const fleet = vehicles.map((v, i) => ({
  id: `website-vehicle-${i + 1}`, name: v.name,
  category: ['4x4_safari_land_cruiser', 'safari_van', '4x4_safari_land_cruiser', 'rav4'][i],
  capacityPassengers: [8, 8, 5, 4][i], dailyRateSelfDriveUSD: [0, 0, 70, 45][i],
  dailyRateWithDriverUSD: [150, 90, 70, 0][i], features: [v.features], status: 'available',
  licensePlate: '', imageUrl: v.image,
}));
const settings = {
  companyName: business.name, tagline: business.tagline, primaryEmail: business.email.primary,
  phoneDisplay: business.phone.display, phoneRaw: business.phone.raw,
  whatsappDisplay: business.whatsapp.display, whatsappRaw: business.whatsapp.rawWithPlus,
  physicalAddress: business.address.street, city: business.address.city, country: business.address.country,
  currencyRates: { USD_TO_UGX: 3800, USD_TO_EUR: 0.92, USD_TO_GBP: 0.79 },
  licenses: business.licenses, socials: business.socials,
};
fs.writeFileSync('backend/database/seeders/data/website_content.json', JSON.stringify({ blog, fleet, settings }, null, 2));
console.log(`Exported ${blog.length} articles, ${fleet.length} vehicles, and business settings.`);
