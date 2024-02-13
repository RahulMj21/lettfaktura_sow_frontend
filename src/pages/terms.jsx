import { useEffect, useRef } from "react";
import Header from "../components/header";
const headerProps = {
  logo: "https://storage.123fakturere.no/public/icons/diamond.png",
  languages: [
    {
      id: 1,
      name: "Bokmål",
      code: "bokmal",
      icon: "https://storage.123fakturere.no/public/flags/NO.png",
      is_default: true,
      is_active: true,
      is_premium: false,
    },
    {
      id: 2,
      name: "Nynorsk",
      code: "nynorsk",
      icon: "https://storage.123fakturere.no/public/flags/NO.png",
      is_default: false,
      is_active: true,
      is_premium: false,
    },
    {
      id: 3,
      name: "English",
      code: "english",
      icon: "https://storage.123fakturere.no/public/flags/GB.png",
      is_default: false,
      is_active: true,
      is_premium: false,
    },
  ],
  links: [
    { text: "home", href: "/" },
    { text: "orders", href: "/orders" },
    { text: "our_customer", href: "/customers" },
    { text: "about_us", href: "/about" },
    { text: "contact_us", href: "/contact" },
  ],
};

const termsContent = `
<p><span>VED Å</span> klikke på Fakturere Nå så velger dere å laste ned ifølge den informasjon som dere har lagt inn og teksten på last ned siden og vilkårene her, og aksepterer samtidig vilkårene her.</p>
<p>Dere kan bruke programmet GRATIS i 14 dager.</p>
<p>LettFaktura er så lett og selvforklarende at sjansen for at du vil komme til å trenge support er minimal, men hvis du skulle trenge support, så er vi her for deg, med vårt kontor bemannet større delen av døgnet. Etter prøveperioden så fortsetter abonnementet og koster 99 kroner eks. mva per måned, som faktureres årlig. Hvis du ikke ønsker å beholde programmet, så er det bare til å avbryte prøveperioden ved å gi beskjed innen 14 dager fra nedlasting.</p>
<br/>
<p>Dere har selvfølgelig rett til å avslutte bruken av programmet uten kostnad, ved å gi oss beskjed per email innen 14 dager fra nedlasting, om at dere ikke ønsker å fortsette med programmet, og betaler da selvfølgelig ikke heller noe.</p>
<br/>
<p>Hvis vi ikke innen 14 dager fra nedlasting mottar slik beskjed fra dere, så kan ordren av naturlige grunner ikke endres. Med nedlasting menes den dato og klokkeslett når dere har valgt å trykke på knappen Fakturere Nå.</p>
<br/>
<p>Fakturering skjer for ett år av gangen.</p>
<p>Prisen for LettFaktura (tilbudspris kr 99,- per måned / ord. pris kr 129,- per måned) er for årsavgift Start for ett års bruk av programmet.</p>
<p>(Ved bruk av tilbudsprisen kr 99,- så regnes ett års perioden fra nedlastning.)</p>
<p>Alle priser er eks. mva.</p>
<p>Timeregistrering. Kalkulering, Medlemsfakturering, Tilbud, Kunde Oppfølging, Lager Telling, Lagerstyring og Engelsk fakturatekst er tilleggsmoduler som kan bestilles etter installasjon av programmet.</p>
<p>Årsavgiften er løpende men hvis dere ikke ønsker å fortsette å bruke programmet, så er det bare å gi beskjed tretti dager før starten av den nestfølgende ett års perioden.</p>
<p>Introduksjonstilbudet (kr 99,- per måned) er for årsavgift Start for det første året. Etter det første året faktureres ord. pris hvilket for tiden er, for årsavgift Start, ett hundre og tjueni kroner per måned, for årsavgift Fjernstyring, to hundre og sekstifem kroner per måned og for årsavgift Pro, tre hundre og trettitre kroner per måned. Etter ett år faktureres årsavgift Fjernstyring som standard men dere kan velge Start eller Pro ved å gi beskjed når som helst før forfall.</p>
<p>Hvis dere velger å beholde programmet ved å ikke gi oss beskjed per email innen 14 dager fra nedlasting, om at dere ikke ønsker å fortsette med programmet, så aksepterer dere at dere kommer å betale fakturaen for deres bestilling. Kode til programmet vil sendes automatisk etter at fakturaen er betalt. Å ikke betale fakturaen eller sen betaling gir ikke rett til å annullere bestillingen. Vi hjelper gjerne å fikse logo for dere til selvkostpris.</p>
<p>Lisens for bruk av LettFaktura selges selvfølgelig i følge gjeldende lover.</p>
<p>For å lettere kunne hjelpe dere og gi dere support samt for å følge lovene må vi av naturlige grunner lagre deres informasjon.</p>
<p>I forbindelse med lagring av informasjon så krever loven at vi gir dere følgende informasjon:</p>
<p>Hvis dere bestiller som privatperson så har dere den angrerett som loven tilsier. Deres informasjon lagres slik at vi kan hjelpe dere m.m. Vi kommer til å bruke den for å kunne hjelpe dere hvis dere trenger hjelp, følge lovene vedr. bokføring m.m. Når det kommer oppgraderinger og lignende, kan vi komme til å sende dere tilbud og lignende om våre produkter og tjenester per email eller lignende. Dere kan komme til å bli kontaktet per email, post og telefon. Hvis dere ikke ønsker å bli kontaktet, bare send oss en email vedr. det. Dere kan når som helst be om å ikke få tilsendt informasjon om oppgraderinger per email, faks, brev eller lignende og vi kommer da selvfølgelig ikke å gjøre det. Slik begjæring sender dere til oss per email, faks, brev eller lignende.</p>
<p>Av naturlige grunner må vi lagre, databehandle og flytte deres data. Deres informasjon lagres inntil videre. Dere gir oss tillatelse til å lagre, databehandle og flytte deres data, samt å sende dere tilbud og lignende per email, faks, brev og lignende. Grunnet måten det fungerer på med programvare trenger tillatelsen også å gis til andre parter. Tillatelsen gis derfor til oss, samt til de bedrifter og/eller person/personer som eier programvaren, kildekoden, hjemmesiden og lignende. Det gis også til nåværende og fremtidige bedrifter eiet og/eller kontrollert av en eller flere av de som i dag eier og/eller kontrollerer oss. Det gis også til nåværende og fremtidige bedrifter eiet og/eller kontrollert av en eller flere av de som i dag eier og/eller kontrollerer de bedrifter, (om noen), som eier eller kommer til å eie programvaren, kildekoden, hjemmesiden og lignende. Det gis også til nåværende og fremtidige personer (om noen) som eier eller kommer til å eie programvaren, kildekoden, hjemmesiden og lignende. Dette både for nåværende og fremtidige produkter og tjenester. Det gis også til annen bedrift, som vi kan bruke for å sende/selge produkter, oppgraderinger og lignende, enten ved underlisensiering eller på annen måte.</p>
<p>Dere har selvfølgelig rett å begjære å få del av, endre og slette informasjonen vi holder om dere. Dere har også rett å begjære begrensing av databehandlingen, og å protestere mot databehandlingen og retten til dataportabilitet. Dere har rett å klage til tilsynsmyndighet. Mer juridisk info om oss finner dere her. Det er lovene i Irland som er gjeldende lover. Det er selvfølgelig helt frivillig å legge ordre. Vi bruker selvsagt ikke noen automatisert profileringer eller beslutninger.</p>
<p>Hvis dere ønsker å kontakte oss, vennligst bruk da informasjonen på denne eller noen av våre andre hjemmesider.</p>
<p>Klikk på Fakturere Nå for å laste ned i følge den informasjon som dere har lagt inn og vilkårene her. (Dato og tidspunkt for innleggelsen legges inn automatisk i våre register.)</p>
<p>Vår erfaring er at våre kunder er meget fornøyde med måten vi jobber på og håper og tror at det også kommer til å bli deres opplevelse.</p>
<p>Ha en flott dag!</p>
`;

const Terms = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) contentRef.current.innerHTML = termsContent;
  }, []);
  return (
    <main>
      <Header {...headerProps} />
      <section className="terms">
        <div className="container">
          <h1 className="terms-heading">Terms</h1>
          <button className="back-button">Close and Go Back</button>
          <div className="terms-content" ref={contentRef} />
          <button className="back-button">Close and Go Back</button>
        </div>
      </section>
    </main>
  );
};

export default Terms;
