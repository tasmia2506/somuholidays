import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader/SiteHeader";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import FloatingActions from "@/components/FloatingActions/FloatingActions";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import PackageCard from "@/components/PackageCard/PackageCard";
import EnquiryModal from "@/components/EnquiryModal/EnquiryModal";
import { getAllSlugs, getDestinationBySlug, getRelated } from "@/lib/destinations";
import { unsplash, waLink } from "@/lib/site";
import styles from "./page.module.css";

type PageParams = Promise<{ slug: string }>;

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) return { title: "Package not found", robots: { index: false, follow: true } };

  return {
    title: `${destination.name} — ${destination.category}`,
    description: `${destination.tagline} ${destination.duration}, starting ₹${destination.price.toLocaleString("en-IN")}. Full itinerary, inclusions and booking with Somu Holidays.`,
    alternates: { canonical: `/destinations/${slug}` },
  };
}

export default async function PackagePage({ params }: { params: PageParams }) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    notFound();
  }

  const related = getRelated(destination.slug, 3);
  const priceLabel = destination.priceType === "person" ? "Starting price / person" : "Starting price / vehicle";
  const priceSuffix = destination.priceType === "person" ? " / person" : " / day";
  const waMessage = `Hi Somu Holidays, I'd like to book the ${destination.name} package (${destination.duration}). Please share availability and the next steps.`;

  return (
    <>
      <SiteHeader alwaysSolid />
      <main>
        <section
          className="pageBanner pageBannerPhoto"
          style={{ backgroundImage: `url('${unsplash(destination.heroImg, 1600)}')` }}
        >
          <div className="container">
            <div className="crumb">
              <Link href="/">Home</Link>
              <Icon name="chevron" size={14} />
              <Link href="/destinations">Destinations</Link>
              <Icon name="chevron" size={14} />
              <span>{destination.name}</span>
            </div>
            <span className="pkgBadge">{destination.category}</span>
            <h1 className="display">{destination.name} Holiday Package</h1>
            <p>
              {destination.tagline} {destination.meta}
            </p>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 64 }}>
          <div className="container">
            <div className={styles.gallery}>
              {destination.gallery.map((img, i) => (
                <div className={`${styles.galleryImg} ${i === 0 ? styles.galleryFirst : ""}`} key={img + i}>
                  <Image
                    src={unsplash(img)}
                    alt={destination.name}
                    fill
                    sizes={i === 0 ? "100vw" : "(min-width: 640px) 33vw, 50vw"}
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>

            <div className={styles.wrap}>
              <div>
                <div className={styles.block}>
                  <h2>Trip highlights</h2>
                  <ul className={styles.highlights}>
                    {destination.highlights.map((h) => (
                      <li key={h}>
                        <Icon name="check" size={18} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.block}>
                  <h2>Day-by-day itinerary</h2>
                  <div>
                    {destination.itinerary.map((step, i) => (
                      <div className={styles.itinStep} key={step.day}>
                        <span className={styles.itinNum}>{i + 1}</span>
                        <div>
                          <span className={styles.dayLabel}>{step.day}</span>
                          <h3>{step.title}</h3>
                          <p>{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.block}>
                  <h2>What&apos;s included</h2>
                  <div className={styles.inclExcl}>
                    <div>
                      <h3>Inclusions</h3>
                      <ul>
                        {destination.inclusions.map((i) => (
                          <li className={styles.yes} key={i}>
                            <Icon name="check" size={16} />
                            {i}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3>Exclusions</h3>
                      <ul>
                        {destination.exclusions.map((i) => (
                          <li className={styles.no} key={i}>
                            <Icon name="x" size={16} />
                            {i}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <aside className={styles.sticky}>
                <div className={styles.priceCard}>
                  <span className={styles.pcLabel}>{priceLabel}</span>
                  <div className={styles.pcPrice}>
                    ₹{destination.price.toLocaleString("en-IN")}
                    <span>{priceSuffix}</span>
                  </div>
                  <p className={styles.pcNote}>{destination.priceNote}</p>
                  <dl className={styles.pcFacts}>
                    <div>
                      <dt>Duration</dt>
                      <dd>{destination.duration}</dd>
                    </div>
                    <div>
                      <dt>Best time to go</dt>
                      <dd>{destination.bestTime}</dd>
                    </div>
                    <div>
                      <dt>Pickup point</dt>
                      <dd>{destination.pickup}</dd>
                    </div>
                  </dl>
                  <a className="btn btnPrimary" href={waLink(waMessage)} target="_blank" rel="noopener noreferrer">
                    Book on WhatsApp
                  </a>
                  <EnquiryModal
                    destinationName={destination.name}
                    triggerClassName="btn btnOutline"
                    ariaLabel={`Enquire about a cab for ${destination.name}`}
                    triggerLabel="Enquire / Get Callback"
                  />
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="section bgIvory50">
          <div className="container">
            <div className="sectionHead">
              <Reveal>
                <span className="eyebrow">You may also like</span>
                <h2 className="display h2">Other destinations &amp; packages</h2>
              </Reveal>
              <Link href="/destinations" className="linkArrow">
                View All Destinations <Icon name="arrow" size={16} />
              </Link>
            </div>
            <div className={styles.relatedGrid}>
              {related.map((d) => (
                <PackageCard key={d.slug} destination={d} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingActions />
    </>
  );
}
