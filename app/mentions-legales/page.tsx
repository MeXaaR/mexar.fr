export default function MentionsLegales() {
  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold">Mentions légales</h1>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Éditeur du site</h2>
          <div className="space-y-2 text-muted-foreground">
            <p>
              <strong>Raison sociale :</strong> mexar SARL
            </p>
            <p>
              <strong>Siège social :</strong> [Adresse à compléter]
            </p>
            <p>
              <strong>SIRET :</strong> [Numéro SIRET à compléter]
            </p>
            <p>
              <strong>Capital social :</strong> [Montant à compléter]
            </p>
            <p>
              <strong>Email :</strong>{" "}
              <a href="mailto:contact@mexar.fr" className="text-primary hover:underline">
                contact@mexar.fr
              </a>
            </p>
            <p>
              <strong>Directeur de la publication :</strong> François Aubeut
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Hébergement</h2>
          <div className="space-y-2 text-muted-foreground">
            <p>
              <strong>Hébergeur :</strong> Vercel Inc.
            </p>
            <p>
              <strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
            </p>
            <p>
              <strong>Site web :</strong>{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                vercel.com
              </a>
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Propriété intellectuelle</h2>
          <p className="text-muted-foreground leading-relaxed">
            L'ensemble du contenu de ce site (textes, images, vidéos, logos, etc.) est la propriété exclusive de mexar
            SARL, sauf mention contraire. Toute reproduction, distribution, modification, adaptation, retransmission ou
            publication de ces différents éléments est strictement interdite sans l'accord exprès par écrit de mexar
            SARL.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Données personnelles</h2>
          <p className="text-muted-foreground leading-relaxed">
            Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés,
            vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles
            vous concernant. Pour exercer ces droits, vous pouvez nous contacter à l'adresse{" "}
            <a href="mailto:contact@mexar.fr" className="text-primary hover:underline">
              contact@mexar.fr
            </a>
            .
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Cookies</h2>
          <p className="text-muted-foreground leading-relaxed">
            Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie de tracking ou
            publicitaire n'est utilisé sans votre consentement préalable.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Limitation de responsabilité</h2>
          <p className="text-muted-foreground leading-relaxed">
            mexar SARL s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site.
            Toutefois, mexar SARL ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à
            disposition sur ce site.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Droit applicable</h2>
          <p className="text-muted-foreground leading-relaxed">
            Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français
            seront seuls compétents.
          </p>
        </section>

        <p className="text-sm text-muted-foreground pt-8">Dernière mise à jour : Janvier 2025</p>
      </div>
    </div>
  )
}
