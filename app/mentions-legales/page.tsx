export default function MentionsLegales() {
  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold">Mentions légales</h1>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Éditeur du site</h2>
          <div className="space-y-2 text-muted-foreground">
            <p>
              <strong>Raison sociale :</strong> MEXAR SARL
            </p>
            <p>
              <strong>Siège social :</strong> 31000 Toulouse, France
            </p>
            <p>
              <strong>SIRET :</strong> En cours d'immatriculation
            </p>
            <p>
              <strong>Capital social :</strong> 1 000 €
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
            L'ensemble du contenu de ce site (textes, images, vidéos, logos, etc.) est la propriété exclusive de MEXAR
            SARL, sauf mention contraire. Toute reproduction, distribution, modification, adaptation, retransmission ou
            publication de ces différents éléments est strictement interdite sans l'accord exprès par écrit de MEXAR
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
          <p className="text-muted-foreground leading-relaxed">
            Les données collectées via ce site (formulaires de contact, prise de rendez-vous) sont utilisées uniquement
            dans le cadre de la relation commerciale et ne sont jamais transmises à des tiers sans votre consentement
            explicite.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Cookies</h2>
          <p className="text-muted-foreground leading-relaxed">
            Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie de tracking ou
            publicitaire n'est utilisé sans votre consentement préalable. Les cookies techniques permettent notamment de
            mémoriser vos préférences de navigation et d'améliorer votre expérience utilisateur.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Limitation de responsabilité</h2>
          <p className="text-muted-foreground leading-relaxed">
            MEXAR SARL s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site.
            Toutefois, MEXAR SARL ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à
            disposition sur ce site. En conséquence, MEXAR SARL décline toute responsabilité pour toute imprécision,
            inexactitude ou omission portant sur des informations disponibles sur ce site.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Liens externes</h2>
          <p className="text-muted-foreground leading-relaxed">
            Ce site peut contenir des liens vers des sites externes. MEXAR SARL n'exerce aucun contrôle sur ces sites et
            décline toute responsabilité quant à leur contenu, leur disponibilité ou leur politique de confidentialité.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Droit applicable</h2>
          <p className="text-muted-foreground leading-relaxed">
            Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut d'accord
            amiable, les tribunaux français seront seuls compétents.
          </p>
        </section>

        <p className="text-sm text-muted-foreground pt-8">Dernière mise à jour : Janvier 2025</p>
      </div>
    </div>
  )
}
