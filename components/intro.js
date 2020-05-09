import { CMS_NAME, CMS_URL } from "../lib/constants";

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h2 className="text-6xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
        Deutch Lernen mit Janna
      </h2>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Wir erschrecken über unsere eigenen Sünden, wenn wir sie an anderen
        erblicken.
      </h4>
    </section>
  );
}
