<i18n>
{
  "en": {
    "title": "Legal Notice",
    "subtitle": "Information obligation according to §5 E-Commerce Law, §14 Corporate Code, §63 Trade Regulations and disclosure obligation according to §25 Media Law.",

    "1-1": "EU dispute settlement",
    "1-2": "In accordance with the regulation on online dispute resolution in consumer affairs (ODR regulation), we would like to inform you about the online dispute resolution platform (OS platform).",
    "1-3": "Consumers have the opportunity to submit complaints to the European Commission's online dispute resolution platform at |https://ec.europa.eu/odr?tid=221142477|. You can find the necessary contact details above in our legal notice.",
    "1-4": "However, we would like to point out that we are not willing or obliged to participate in dispute settlement proceedings before a consumer arbitration board.",

    "2-1": "Liability for the content of this website",
    "2-2": "We are constantly developing the content of this website and strive to provide correct and up-to-date information. Unfortunately, we cannot accept any liability for the correctness of all content on this website, especially for those provided by third parties.",
    "2-3": "If you notice problematic or illegal content, please contact us immediately, you will find the contact details in the imprint.",

    "3-1": "Liability for links on this website",
    "3-2": "Our website contains links to other websites for whose content we are not responsible. According to |§ 17 ECG|, we are not liable for linked websites, as we had no knowledge of illegal activities, we have not noticed such illegal activities and we would remove links immediately if we became aware of illegal activities.",
    "3-3": "If you notice illegal links on our website, please contact us, you will find the contact details in the legal notice.",

    "4-1": "Copyright notice",
    "4-2": "All contents of this website (images, photos, texts, videos) are subject to copyright. If necessary, we will legally prosecute the unauthorized use of parts of the content on our site.",

    "5-1": "Photo credit",
    "5-2": "The images, photos and graphics on this website are protected by copyright.",

    "6-1": "Source: Created with the |imprint generator| from firmenwebseiten.at"
  },
  "de": {
    "title": "Impressum",
    "subtitle": "Informationspflicht laut §5 E-Commerce Gesetz, §14 Unternehmensgesetzbuch, §63 Gewerbeordnung und Offenlegungspflicht laut §25 Mediengesetz.",

    "1-1": "EU-Streitschlichtung",
    "1-2": "Gemäß Verordnung über Online-Streitbeilegung in Verbraucherangelegenheiten (ODR-Verordnung) möchten wir Sie über die Online-Streitbeilegungsplattform (OS-Plattform) informieren.",
    "1-3": "Verbraucher haben die Möglichkeit, Beschwerden an die Online Streitbeilegungsplattform der Europäischen Kommission unter |https://ec.europa.eu/odr?tid=221142477| zu richten. Die dafür notwendigen Kontaktdaten finden Sie oberhalb in unserem Impressum.",
    "1-4": "Wir möchten Sie jedoch darauf hinweisen, dass wir nicht bereit oder verpflichtet sind, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",

    "2-1": "Haftung für Inhalte dieser Webseite",
    "2-2": "Wir entwickeln die Inhalte dieser Webseite ständig weiter und bemühen uns korrekte und aktuelle Informationen bereitzustellen. Leider können wir keine Haftung für die Korrektheit aller Inhalte auf dieser Webseite übernehmen, speziell für jene die seitens Dritter bereitgestellt wurden.",
    "2-3": "Sollten Ihnen problematische oder rechtswidrige Inhalte auffallen, bitten wir Sie uns umgehend zu kontaktieren, Sie finden die Kontaktdaten im Impressum.",

    "3-1": "Haftung für Links auf dieser Webseite",
    "3-2": "Unsere Webseite enthält Links zu anderen Webseiten für deren Inhalt wir nicht verantwortlich sind. Haftung für verlinkte Websites besteht laut |§ 17 ECG| für uns nicht, da wir keine Kenntnis rechtswidriger Tätigkeiten hatten und haben, uns solche Rechtswidrigkeiten auch bisher nicht aufgefallen sind und wir Links sofort entfernen würden, wenn uns Rechtswidrigkeiten bekannt werden.",
    "3-3": "Wenn Ihnen rechtswidrige Links auf unserer Website auffallen, bitten wir Sie uns zu kontaktieren, Sie finden die Kontaktdaten im Impressum.",

    "4-1": "Urheberrechtshinweis",
    "4-2": "Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos) unterliegen dem Urheberrecht. Falls notwendig, werden wir die unerlaubte Nutzung von Teilen der Inhalte unserer Seite rechtlich verfolgen.",

    "5-1": "Bildernachweis",
    "5-2": "Die Bilder, Fotos und Grafiken auf dieser Webseite sind urheberrechtlich geschützt.",

    "6-1": "Quelle: Erstellt mit dem |Impressum Generator| von firmenwebseiten.at"
  }
}
</i18n>

<template>
  <div class="row">
    <div class="col-12">
      <h1>{{ $t("title") }}</h1>
      <p>{{ $t("subtitle") }}</p>
      <p>Sebastian Pernthaler</p>
      <p><a href="mailto:Sebastian Pernthaler <sebastian@pernthaler.me>">sebastian@pernthaler.me</a></p>

      <h2>{{ $t("1-1") }}</h2>
      <p>{{ $t("1-2") }}</p>
      <p>{{ $t("1-3").split("|")[0] }}<a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=DE" target="_blank" rel="noopener">{{ $t("1-3").split("|")[1] }}</a>{{ $t("1-3").split("|")[2] }}</p>
      <p>{{ $t("1-4") }}</p>

      <h2>{{ $t("2-1") }}</h2>
      <p>{{ $t("2-2") }}</p>
      <p>{{ $t("2-3") }}</p>

      <h2>{{ $t("3-1") }}</h2>
      <p>{{ $t("3-2").split("|")[0] }}<a href="https://www.ris.bka.gv.at/Dokument.wxe?Abfrage=Bundesnormen&Dokumentnummer=NOR40025813&tid=221142477" target="_blank" rel="noopener">{{ $t("3-2").split("|")[1] }}</a>{{ $t("3-2").split("|")[2] }}</p>
      <p>{{ $t("3-3") }}</p>

      <h2>{{ $t("4-1") }}</h2>
      <p>{{ $t("4-2") }}</p>

      <h2>{{ $t("5-1") }}</h2>
      <p>{{ $t("5-2") }}</p>

      <p>{{ $t("6-1").split("|")[0] }}<a href="https://www.firmenwebseiten.at/impressum-generator/" target="_blank" rel="noopener">{{ $t("6-1").split("|")[1] }}</a>{{ $t("6-1").split("|")[2] }}</p>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.commit("SET_TITLE", this.$t("title"));
  },
  nuxtI18n: {
    paths: {
      en: encodeURI("/legal-notice"),
      de: encodeURI("/impressum")
    }
  }
}
</script>