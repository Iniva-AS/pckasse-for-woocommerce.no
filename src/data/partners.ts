export interface Partner {
  title: string
  slug: string
  logo: string
  profileImage?: string
  description: string
  fullDescription: string
  website: string
  email: string
  phone: string
  location: string
  services: string[]
  featured: boolean
}

export const partners: Partner[] = [
  {
    title: 'Veniro Media Solutions AS',
    slug: 'veniro',
    logo: '/partners/veniro/logo.svg',
    profileImage: '/partners/veniro/benjamin-lind-enger.jpeg',
    description:
      'Din støttespiller langs veien. Veniro tilbyr profesjonelle tjenester innen webutvikling, design og e-handel. Vi hjelper deg med å komme i gang med PCKasse for WooCommerce.',
    fullDescription: `## Om oss

Veniro Media Solutions AS er et etablert mediebyrå med base i Tønsberg, dedikert til å levere topp kvalitet innen webutvikling, design og digitale løsninger. Med vår omfattende erfaring og kompetanse, tilbyr vi skreddersydde tjenester som møter behovene til både små og store bedrifter.

## Våre tjenester

### Utvikling & Webdesign
Vi skaper moderne, brukervennlige nettsider som gjenspeiler din bedrifts identitet. Fra enkle informasjonssider til komplekse webapplikasjoner, vårt team sikrer at din nettside er både funksjonell og visuelt tiltalende.

### E-handelsløsninger
Vi spesialiserer oss på å bygge kraftige nettbutikker ved bruk av WooCommerce. Med vår ekspertise kan du være trygg på at din e-handelsløsning er optimalisert for både brukeropplevelse og konvertering.

### Design & Identitet
Vi utvikler visuell identitet som skiller deg ut i markedet. Dette inkluderer logodesign, fargepaletter, typografi og merkevareretningslinjer som sikrer en konsistent og profesjonell fremtoning.

### PCKasse for WooCommerce Implementering
Som sertifiserte implementeringspartnere hjelper vi deg med å sette opp og konfigurere PCKasse for WooCommerce. Vi sørger for en sømløs integrasjon mellom din nettbutikk og kassasystem.

### Hosting & Serverløsninger
Vi tilbyr pålitelige og sikre hosting- og serverløsninger som sikrer at din nettside alltid er tilgjengelig og kjører optimalt.

### Søkemotoroptimalisering (SEO)
Våre SEO-tjenester er designet for å øke din synlighet på nett. Vi arbeider med både teknisk SEO og innholdsoptimalisering for å sikre at din nettside rangerer høyt i søkemotorene.

## Hvorfor velge Veniro?

- **Erfaring og ekspertise**: Vårt team har lang erfaring med WooCommerce og kasseintegrasjoner
- **Skreddersydde løsninger**: Vi tilpasser våre tjenester til dine spesifikke behov
- **Dedikert support**: Vi er alltid tilgjengelige for å hjelpe deg
- **Konkurransedyktige priser**: Kvalitet til en pris som passer din bedrift
- **Langsiktig partnerskap**: Vi ser på oss selv som din partner, ikke bare en leverandør

## Kontakt oss i dag

Ta kontakt for en uforpliktende samtale om hvordan vi kan hjelpe deg med PCKasse for WooCommerce.

**Adresse**: Havnegata 9, 3126 Tønsberg, Norge`,
    website: 'https://www.veniro.no',
    email: 'hello@veniro.no',
    phone: '+47 906 95 555',
    location: 'Tønsberg, Norge',
    services: [
      'Utvikling & Webdesign',
      'E-handelsløsninger',
      'Design & Identitet',
      'PCKasse for WooCommerce Implementering',
      'Hosting & Serverløsninger',
      'Søkemotoroptimalisering (SEO)',
    ],
    featured: true,
  },
]
