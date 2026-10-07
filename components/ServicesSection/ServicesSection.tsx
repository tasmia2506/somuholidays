import Image from "next/image";
import Link from "next/link";
import Icon, { type IconName } from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { unsplash, waLink } from "@/lib/site";
import styles from "./ServicesSection.module.css";

export const SERVICES: {
  icon: IconName;
  tag: string;
  img: string;
  title: string;
  desc: string;
  points: [string, string];
}[] = [
  {
    icon: "pin",
    tag: "Tailored Planning",
    img: "/Customized and tailormade itenary.jpeg",
    title: "Customised & Tailor-Made Itineraries",
    desc: "Tell us where you want to go and for how long — we'll put together a route, vehicle and price to match.",
    points: ["Route, vehicle and stay plan built around your dates", "Transparent per-km pricing, no hidden add-ons"],
  },
  {
    icon: "sparkle",
    tag: "Multi-Day Packages",
    img: "/domestic theme.jpeg",
    title: "Domestic Tours",
    desc: "Multi-day holiday packages across South India, Rajasthan and the Himalayas, with vehicle and sightseeing sorted.",
    points: ["Pre-built circuits across South India, Rajasthan & the Himalayas", "Sightseeing stops and halts planned in advance"],
  },
  {
    icon: "shield",
    tag: "Offsites & MICE",
    img: "/cooprate.jpeg",
    title: "Corporate & MICE Travel",
    desc: "Offsites, conferences and incentive trips, with monthly billing available for corporate accounts.",
    points: ["Offsite, conference and incentive trip logistics", "Monthly billing available for corporate accounts"],
  },
  {
    icon: "star",
    tag: "Heritage & Pilgrimage",
    img: "/theme based2.jpeg",
    title: "Theme-Based Tours",
    desc: "Pilgrimage circuits, heritage trails and wildlife safaris, curated around what your group wants to see.",
    points: ["Pilgrimage circuits and heritage trail routing", "Wildlife safari transfers curated to your group"],
  },
  {
    icon: "rupee",
    tag: "Punctual Transfers",
    img: "/airport transfer2.jpeg",
    title: "Cab & Airport Transport",
    desc: "Point-to-point city cabs and airport pickups/drops, billed per kilometre with no hidden charges.",
    points: ["Point-to-point city cabs and airport transfers", "Billed per kilometre, with no hidden charges"],
  },
  {
    icon: "clock",
    tag: "Always On Call",
    img: "/support.jpeg",
    title: "24/7 On-Trip Support",
    desc: "Once you're on the road, our team stays reachable for the full length of the trip.",
    points: ["A reachable contact for the full length of the trip", "Quick help with route or schedule changes on the go"],
  },
];

export default function ServicesSection({ limit }: { limit?: number }) {
  const services = limit ? SERVICES.slice(0, limit) : SERVICES;

  return (
    <section className={`section ${styles.band}`} id="services">
      <div className="container">
        <div className="sectionHead">
          <Reveal>
            <h2 className="display h2 gradientHeading">
              Travel Services Built Around You
            </h2>
            <p className="lead">
              From a one-off airport run to a company&apos;s annual offsite, each service is managed with dedicated
              drivers.
            </p>
            {limit && (
              <Link href="/services" className={`btn btnForest ${styles.headAction}`}>
                View More Services <Icon name="arrow" size={16} />
              </Link>
            )}
          </Reveal>
        </div>

        <div className={styles.grid}>
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 0.07}>
              <article className={styles.card}>
                <div className={styles.media}>
                  <Image
                    src={service.img.startsWith("/") ? service.img : unsplash(service.img, 700)}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className={styles.avatarWrap}>
                  <div className={styles.avatar}>
                    <Image
                      src={service.img.startsWith("/") ? service.img : unsplash(service.img, 300)}
                      alt=""
                      fill
                      sizes="92px"
                    />
                    <span className={styles.avatarBadge}>
                      <Icon name={service.icon} size={14} />
                    </span>
                  </div>
                  <span className={styles.tag}>{service.tag}</span>
                </div>
                <div className={styles.body}>
                  <h3>
                    <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
                    {service.title}
                  </h3>
                  <p>{service.desc}</p>
                  <ul className={styles.points}>
                    {service.points.map((point) => (
                      <li key={point}>
                        <Icon name="check" size={13} />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className={styles.foot}>
                    <Link href="/services" className="linkArrow">
                      Learn More <Icon name="arrow" size={14} />
                    </Link>
                    <a
                      className="btn btnPrimary"
                      href={waLink(`Hi Somu Holidays, I'd like to enquire about ${service.title}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
