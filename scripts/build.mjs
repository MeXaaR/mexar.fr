import {cp, mkdir, readFile, rm, writeFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const dist=path.join(root,'dist');
await rm(dist,{recursive:true,force:true});
await cp(path.join(root,'site'),dist,{recursive:true});
const content=JSON.parse(await readFile(path.join(root,'content/legacy-apps.json'),'utf8'));
const escape=value=>String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const domain='https://www.mexar.fr';
const routes=['/'];

function page({title,description,route,lang='fr',body,alternate,robots='index, follow'}) {
  return `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escape(title)}</title><meta name="description" content="${escape(description)}"><meta name="robots" content="${robots}"><link rel="canonical" href="${domain+route}"><link rel="stylesheet" href="/styles.css?v=4"><link rel="icon" href="/assets/favicon.svg" type="image/svg+xml"><meta name="theme-color" content="#335cff"><meta property="og:type" content="website"><meta property="og:title" content="${escape(title)}"><meta property="og:description" content="${escape(description)}"><meta property="og:url" content="${domain+route}"><meta property="og:image" content="${domain}/assets/mexar-roi-first-og.jpg"><meta name="twitter:card" content="summary_large_image">${alternate?`<link rel="alternate" hreflang="fr" href="${domain+alternate.fr}"><link rel="alternate" hreflang="en" href="${domain+alternate.en}">`:''}</head><body><a class="skip" href="#contenu">${lang==='fr'?'Aller au contenu':'Skip to content'}</a><header class="header wrap"><a href="/" class="brand" aria-label="Mexar">mexar<span class="brand-dot">.</span></a><nav class="legal-language" aria-label="${lang==='fr'?'Navigation et langue':'Navigation and language'}"><a href="/">${lang==='fr'?'Accueil':'Home'}</a>${alternate?`<a href="${alternate.fr}" lang="fr" hreflang="fr">Français</a><a href="${alternate.en}" lang="en" hreflang="en">English</a>`:''}</nav></header><main id="contenu" class="wrap legal-main">${body}</main><footer class="wrap footer"><a href="/" class="brand">mexar<span class="brand-dot">.</span></a><a href="mailto:contact@mexar.fr">contact@mexar.fr</a><span>© Mexar 2026</span></footer></body></html>`;
}

for(const lang of ['fr','en']) {
  const {privacy:p,supportPage:s,faq}=content[lang];
  const prefix=lang==='fr'?'':'/en';
  if(prefix) await mkdir(path.join(dist,'en'),{recursive:true});
  let body=`<h1>${escape(p.title)}</h1><p>${escape(p.intro)}</p><p class="small">${escape(p.lastUpdated)}</p>`;
  for(let i=1;i<=10;i++) {
    body+=`<section><h2>${escape(p[`section${i}Title`])}</h2><p>${escape(p[`section${i}Content`])}</p>`;
    if(p[`section${i}Items`]) body+=`<ul>${p[`section${i}Items`].map(item=>`<li>${escape(item)}</li>`).join('')}</ul>`;
    if(p[`section${i}Outro`]) body+=`<p>${escape(p[`section${i}Outro`])}</p>`;
    if(i===10) body+=`<p><a href="mailto:${escape(p.contactEmail)}">${escape(p.contactEmail)}</a></p><p>${escape(p.contactAddress)}</p>`;
    body+='</section>';
  }
  await writeFile(path.join(dist,prefix,'privacy.html'),page({title:p.title+' | Mexar',description:p.intro,lang,route:prefix+'/privacy',body,alternate:{fr:'/privacy',en:'/en/privacy'}}));
  routes.push(prefix+'/privacy');

  const apps={unfed:'Unfed',voical:'VoiCal',shrimpkeeper:'ShrimpKeeper',aurora:'Aurora Now'};
  body=`<h1>${escape(s.helpCenter)}</h1><p>${escape(s.helpDesc)}</p><h2>${escape(s.contactUs)}</h2><p><a href="mailto:support@mexar.fr">support@mexar.fr</a></p><p>${escape(s.contactUsDesc)}</p><p>${escape(s.responseTime)} : ${escape(s.responseValue)}</p><h2>${escape(s.faqTitle)}</h2><nav class="app-links" aria-label="Applications">${Object.entries(apps).map(([id,name])=>`<a href="#${id}">${name}</a>`).join('')}</nav>`;
  for(const [id,name] of Object.entries(apps)) {
    const data=faq[id];
    body+=`<section id="${id}"><h2>${name}</h2><p>${escape(data.description)}</p><div class="faq-list">`;
    for(let i=1;data[`q${i}`];i++) body+=`<details><summary>${escape(data[`q${i}`])}<span aria-hidden="true">+</span></summary><p>${escape(data[`a${i}`])}</p></details>`;
    body+='</div></section>';
  }
  body+=`<h2>${escape(s.otherRequest)}</h2><p>${escape(s.otherRequestDesc)}</p><p><a href="mailto:contact@mexar.fr">contact@mexar.fr</a></p>`;
  await writeFile(path.join(dist,prefix,'support.html'),page({title:s.metaTitle,description:s.metaDesc,lang,route:prefix+'/support',body,alternate:{fr:'/support',en:'/en/support'}}));
  routes.push(prefix+'/support');
}

await writeFile(path.join(dist,'confidentialite.html'),page({title:'Confidentialité du site | Mexar',description:'Fonctionnement du simulateur, du formulaire de contact et traitement des données sur le site de l’agence Mexar.',route:'/confidentialite',body:`<h1>Confidentialité du site</h1><p>Cette page concerne le site de l’agence Mexar. Pour nos applications mobiles, consultez la <a href="/privacy">politique de confidentialité des applications</a>.</p><h2>Simulateur</h2><p>Les calculs s’effectuent dans votre navigateur. Les valeurs saisies ne sont ni envoyées à Mexar ni conservées dans une base de données par cette page.</p><h2>Contact</h2><p>Le formulaire prépare un email dans votre messagerie. Vous choisissez de l’envoyer. Les données du formulaire ne sont pas transmises à un serveur par cette page. Si vous envoyez un email, son contenu est utilisé pour répondre à votre demande.</p><h2>Mesure d’audience et hébergement</h2><p>Cette version du site n’installe aucun outil de mesure d’audience, cookie publicitaire ou stockage local. L’hébergement est assuré par Vercel, dont l’infrastructure peut traiter des données techniques nécessaires à la délivrance et à la sécurité du site.</p><h2>Vos demandes</h2><p>Pour toute question sur vos données ou une demande d’accès, de rectification ou de suppression concernant vos échanges avec Mexar, écrivez à <a href="mailto:contact@mexar.fr">contact@mexar.fr</a>.</p>`}));
routes.push('/confidentialite');
await writeFile(path.join(dist,'404.html'),page({title:'Page introuvable | Mexar',description:'Cette page n’existe pas. Retrouvez les applications métier sur mesure et la méthode ROI-first de Mexar.',route:'/404',robots:'noindex, follow',body:'<p class="eyebrow">Erreur 404</p><h1>Cette page n’existe pas.</h1><p>Retrouvez notre méthode et nos réalisations sur la page d’accueil.</p><p><a class="button" href="/">Revenir à l’accueil ↗</a></p>'}));
await writeFile(path.join(dist,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map(route=>`<url><loc>${domain+route}</loc></url>`).join('')}</urlset>\n`);
console.log(`Built ${routes.length} static pages, 404, sitemap and assets.`);
