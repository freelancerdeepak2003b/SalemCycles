import "../BrandMarquee.css";

const brands = [
  {
    name: "Raleigh",
    image: "/images/brands/Raleigh.jpg",
  },
  {
    name: "Suncross",
    image: "/images/brands/suncross.png",
  },
  {
    name: "Geekay",
    image: "/images/brands/geekay.png",
  },
  {
    name: "Firefox",
    image: "/images/brands/firefox.webp",
  },
  {
    name: "Montra ",
    image: "/images/brands/montra.jpg",
  },
  {
    name: "Hero",
    image: "/images/brands/hero.jpg",
  },
  {
    name: "Hercules",
    image: "/images/brands/hercules.jpg",
  },
  {
    name: "BSA",
    image: "/images/brands/bsa.jpg",
  },
  {
    name: "Basso",
    image: "/images/brands/Basso.svg",
  },
];

export default function BrandMarquee() {
  return (
    <section className="brand-marquee">
      <div className="brand-marquee__track">

        {/* First set */}
        <div className="brand-marquee__group">
          {brands.map((brand) => (
            <div className="brand-marquee__item" key={brand.name}>
              <img
                src={brand.image}
                alt={brand.name}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Duplicate set for seamless loop */}
        <div className="brand-marquee__group" aria-hidden="true">
          {brands.map((brand) => (
            <div className="brand-marquee__item" key={`${brand.name}-duplicate`}>
              <img
                src={brand.image}
                alt=""
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}