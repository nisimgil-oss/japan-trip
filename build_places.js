// Parse the Google My Map KML into a compact places.js for our app
const fs = require('fs');
const kml = fs.readFileSync('C:/Users/nisim/Downloads/_places.kml', 'utf8');
const clean = s => (s || '').replace(/<!\[CDATA\[|\]\]>/g, '').replace(/<br\s*\/?>/gi, ' · ').replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#39;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, ' ').trim();
const folders = [...kml.matchAll(/<Folder>([\s\S]*?)<\/Folder>/g)];
const cats = [];
const pts = [];
folders.forEach((f, ci) => {
  const cname = clean((f[1].match(/<name>([\s\S]*?)<\/name>/) || [])[1] || ('קטגוריה ' + (ci + 1)));
  cats.push(cname);
  const pms = [...f[1].matchAll(/<Placemark>([\s\S]*?)<\/Placemark>/g)];
  pms.forEach(p => {
    const co = ((p[1].match(/<coordinates>([\s\S]*?)<\/coordinates>/) || [])[1] || '').trim();
    if (!co) return;
    const [lng, lat] = co.split(',').map(Number);
    if (!isFinite(lat) || !isFinite(lng)) return;
    const n = clean((p[1].match(/<name>([\s\S]*?)<\/name>/) || [])[1] || '');
    let d = clean((p[1].match(/<description>([\s\S]*?)<\/description>/) || [])[1] || '');
    if (d.length > 220) d = d.slice(0, 217) + '…';
    const o = { n, c: ci, lat: +lat.toFixed(6), lng: +lng.toFixed(6) };
    if (d) o.d = d;
    pts.push(o);
  });
});
const out = 'window.TRIP_PLACES = ' + JSON.stringify({ source: 'Ptitim Tokyo guide (Google My Maps)', cats, pts }) + ';\n';
fs.writeFileSync('C:/Users/nisim/japan-trip/places.js', out);
console.log('categories:', cats.length, '| points:', pts.length, '| places.js size:', Math.round(out.length / 1024) + 'KB');
console.log('with descriptions:', pts.filter(p => p.d).length);
