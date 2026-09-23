# Mexar — méthode ROI-first

Site HTML statique de l’agence Mexar : https://www.mexar.fr.

## Développement

```sh
npm run build
npm test
python3 -m http.server 8767 --bind 127.0.0.1 --directory dist
```

Sources dans `site/`. Le build copie ces fichiers dans `dist/` et génère les pages d’assistance/confidentialité FR/EN, une page 404 et le sitemap. Les URLs sans extension sont gérées par Vercel. Aucune dépendance d’exécution ou de build à installer.

## Calculateur

Les trois curseurs définissent le nombre de personnes, le temps actuel et le temps visé en heures par semaine et par personne. Heures récupérables = personnes × max(0, actuel − visé). Valeur annuelle = heures × coût horaire × 52 semaines ; moyenne mensuelle = annuel / 12. Cette hypothèse est visible. Ce sont des heures valorisées, pas une garantie d’économies de trésorerie. Le coût horaire reste facultativement ajustable.

## SEO et partage

HTML lisible sans JavaScript, titre et description ciblés sur les applications métier sur mesure, canonique www, robots.txt, sitemap.xml, JSON-LD Organization/WebSite/WebPage/Service/FAQPage, Open Graph et Twitter Card. Image de partage JPEG 1200 × 630 : `site/assets/mexar-roi-first-og.jpg`. Portrait WebP optimisé, police Inter locale et SVG sans dépendance distante. Les réglages techniques ne constituent pas une garantie de positionnement dans les moteurs.

## Préservation des pages existantes

Les données de `content/legacy-apps.json` viennent du code du déploiement de production Vercel du 17 février 2026, `dpl_CVBHH29tRqEevJtaYaZ8Sk5PBnga`. Les textes d’assistance et de confidentialité des applications sont conservés en français et en anglais. Les liens `/support#unfed`, `#voical`, `#shrimpkeeper`, `#aurora` fonctionnent toujours. La confidentialité de ce site statique est décrite séparément dans `/confidentialite`.

## Déploiement et retour arrière

Projet Vercel : `mexar/v0-mexar-corporate-site`, ID `prj_TG7TVW5L2kfBbbOezY3JCQ2c5IcF`. Domaine principal existant : `www.mexar.fr` ; `mexar.fr` redirige vers celui-ci.

Le précédent dépôt Next.js est conservé dans l’historique Git, à partir du commit `e2af38b`. Le précédent site de production venait directement de v0, sans lien Git actif. Déploiement de retour arrière : `v0-mexar-corporate-site-ziniinkvn-mexar.vercel.app`.

```sh
npx vercel@latest link --project v0-mexar-corporate-site --scope mexar
npx vercel@latest deploy --prod --skip-domain --scope mexar
# Vérifier le déploiement, puis :
npx vercel@latest promote <deployment-url> --scope mexar
```

Le formulaire de contact ouvre un brouillon dans la messagerie du visiteur. Aucun email n’est envoyé par un serveur et aucun outil d’analytics n’est chargé.

## Références

- [Google Search : guide SEO](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Données structurées Organization](https://developers.google.com/search/docs/appearance/structured-data/organization)
- [Open Graph](https://ogp.me/)
- [Prompt de l’image de partage](docs/social-image.md)
