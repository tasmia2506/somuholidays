import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader/SiteHeader";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import FloatingActions from "@/components/FloatingActions/FloatingActions";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import CtaSection from "@/components/CtaSection/CtaSection";
import { BLOG_POSTS } from "@/lib/blogs";
import { SITE } from "@/lib/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Travel & Fleet Rental Blog | Road Trips & Bus Hire Bangalore",
  description:
    "Expert travel guides, 21-seater bus rental tips, vehicle comparison guides, and top weekend road trip itineraries from Bangalore by Somu Holidays.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Travel & Bus Rental Blog | Somu Holidays Bangalore",
    description: "Guides to 21-seater bus rentals, car hire rates, and Karnataka road trips.",
    url: `${SITE.url}/blog`,
    type: "website",
  },
};

export default function BlogIndexPage() {
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Somu Holidays Travel & Fleet Blog",
    description: "Insights on 21-seater bus rentals, road trip itineraries, and vehicle hire in Bangalore.",
    url: `${SITE.url}/blog`,
    publisher: {
      "@type": "TravelAgency",
      name: SITE.name,
      logo: `${SITE.url}/logo.jpeg`,
    },
    blogPost: BLOG_POSTS.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      url: `${SITE.url}/blog/${post.slug}`,
      image: post.heroImg.startsWith("http") ? post.heroImg : `${SITE.url}${post.heroImg}`,
      author: { "@type": "Person", name: post.author },
    })),
  };

  return (
    <>
      <SiteHeader alwaysSolid />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson).replace(/</g, "\\u003c") }}
        />

        <section
          className="pageBanner"
          style={{ background: "linear-gradient(135deg, #090909 0%, #1c1c1c 55%, var(--terracotta-600) 100%)" }}
        >
          <div className="container">
            <div className="crumb">
              <Link href="/" title="Go to home">Home</Link>
              <Icon name="chevron" size={14} />
              <span>Blog &amp; Travel Guides</span>
            </div>
            <span className="eyebrow" style={{ color: "var(--terracotta-300)" }}>
              Knowledge &amp; Travel Guides
            </span>
            <h1 className="display">Travel Insights, Bus Guides &amp; Route Tips</h1>
            <p>
              Practical road trip advice, vehicle selection breakdowns, and 21-seater bus hire guides from Bangalore&apos;s
              trusted tour and rental operator.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="sectionHead">
              <div>
                <span className="eyebrow">Latest Articles</span>
                <h2 className="display h2">Everything You Need Before Hitting the Highway</h2>
                <p className="lead">
                  Written by experienced highway tour planners to save you time, toll surprises, and coordination friction.
                </p>
              </div>
            </div>

            <div className={styles.blogGrid}>
              {BLOG_POSTS.map((post, idx) => (
                <Reveal key={post.slug} delay={idx * 0.08} className={styles.articleCard}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className={styles.thumbWrap}
                    title={post.title}
                    aria-label={`Read article: ${post.title}`}
                  >
                    <span className={styles.categoryBadge}>{post.category}</span>
                    <Image
                      src={post.heroImg}
                      alt={post.heroImgAlt}
                      title={post.heroImgTitle}
                      fill
                      sizes="(min-width: 992px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </Link>
                  <div className={styles.cardBody}>
                    <div className={styles.metaRow}>
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                      <span>·</span>
                      <span>By {post.author}</span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className={styles.cardTitle}
                      title={post.title}
                    >
                      {post.title}
                    </Link>
                    <p className={styles.cardExcerpt}>{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className={styles.readMore}
                      title={`Read full guide: ${post.title}`}
                      aria-label={`Read full guide: ${post.title}`}
                    >
                      Read Full Guide <Icon name="arrow" size={16} />
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CtaSection bgImage="/21 SEATER.jpeg" />
      </main>
      <SiteFooter />
      <FloatingActions />
    </>
  );
}
