import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader/SiteHeader";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import FloatingActions from "@/components/FloatingActions/FloatingActions";
import Icon from "@/components/Icon";
import FaqSection from "@/components/FaqSection/FaqSection";
import CtaSection from "@/components/CtaSection/CtaSection";
import { getAllBlogSlugs, getBlogPostBySlug, BLOG_POSTS } from "@/lib/blogs";
import { SITE, waLink } from "@/lib/site";
import { renderMarkdown } from "@/lib/markdown";
import LongWeekendPlanner from "@/components/LongWeekendPlanner/LongWeekendPlanner";
import styles from "./page.module.css";

type PageParams = Promise<{ slug: string }>;

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Article Not Found", robots: { index: false, follow: true } };

  const fullImg = post.heroImg.startsWith("http") ? post.heroImg : `${SITE.url}${post.heroImg}`;

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${SITE.url}/blog/${slug}`,
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: fullImg, width: 1200, height: 675, alt: post.heroImgAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [fullImg],
    },
  };
}

export default async function BlogPostPage({ params }: { params: PageParams }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const otherPosts = BLOG_POSTS.filter((b) => b.slug !== slug);
  const fullImg = post.heroImg.startsWith("http") ? post.heroImg : `${SITE.url}${post.heroImg}`;

  const schemaJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${SITE.url}/blog/${post.slug}#article`,
        headline: post.title,
        description: post.excerpt,
        image: fullImg,
        datePublished: post.date,
        dateModified: post.date,
        author: {
          "@type": "Person",
          name: post.author,
          jobTitle: "Fleet Operations Manager",
          worksFor: { "@type": "TravelAgency", name: SITE.name },
        },
        publisher: {
          "@type": "TravelAgency",
          name: SITE.name,
          logo: { "@type": "ImageObject", url: `${SITE.url}/logo.jpeg` },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE.url}/blog/${post.slug}` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE.url}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: `${SITE.url}/blog/${post.slug}` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: post.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
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
          style={{ background: "linear-gradient(135deg, #090909 0%, #171717 50%, var(--terracotta-600) 100%)" }}
        >
          <div className="container">
            <div className="crumb">
              <Link href="/" title="Go to home">Home</Link>
              <Icon name="chevron" size={14} />
              <Link href="/blog" title="Browse all travel articles">Blog</Link>
              <Icon name="chevron" size={14} />
              <span>{post.category}</span>
            </div>
            <span className="eyebrow" style={{ color: "var(--terracotta-300)" }}>
              {post.category} · {post.readTime}
            </span>
            <h1 className="display" style={{ maxWidth: 900 }}>{post.title}</h1>
            <p>
              Published on {post.date} by {post.author} · Somu Holidays Tours &amp; Travels, Bengaluru
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={styles.articleWrap}>
              {/* Main Content Area */}
              <article>
                {/* Hero Image with Anchor, Title, Alt */}
                <div className={styles.heroImageWrap}>
                  <a
                    href={post.heroImg}
                    title={post.heroImgTitle}
                    aria-label={`View full resolution image: ${post.heroImgTitle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={post.heroImg}
                      alt={post.heroImgAlt}
                      title={post.heroImgTitle}
                      fill
                      priority
                      sizes="(min-width: 992px) 65vw, 100vw"
                    />
                  </a>
                </div>

                {/* AEO Key Takeaways Box */}
                <div className={styles.takeawaysBox}>
                  <h3>
                    <Icon name="sparkle" size={18} /> Key Takeaways at a Glance
                  </h3>
                  <ul>
                    {post.keyTakeaways.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Article Content Render */}
                {post.content.includes("<!-- PLANNER_EMBED -->") ? (
                  (() => {
                    const [part1, part2] = post.content.split("<!-- PLANNER_EMBED -->");
                    return (
                      <>
                        <div
                          className={styles.articleBody}
                          dangerouslySetInnerHTML={{ __html: renderMarkdown(part1) }}
                        />
                        <LongWeekendPlanner />
                        <div
                          className={styles.articleBody}
                          dangerouslySetInnerHTML={{ __html: renderMarkdown(part2) }}
                        />
                      </>
                    );
                  })()
                ) : (
                  <div
                    className={styles.articleBody}
                    dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
                  />
                )}

                {/* Direct Action Callout */}
                <div
                  style={{
                    background: "var(--ivory-50)",
                    border: "1px solid var(--line)",
                    borderRadius: "var(--radius)",
                    padding: "32px",
                    marginTop: "48px",
                    textAlign: "center",
                  }}
                >
                  <h3 style={{ fontSize: "1.4rem", marginBottom: "8px" }}>
                    Ready to Book Your Group Travel in Bangalore?
                  </h3>
                  <p style={{ color: "var(--muted)", maxWidth: "540px", margin: "0 auto 20px" }}>
                    Speak directly with our dispatch team in Rajajinagar. We provide verified chauffeurs, sanitised
                    vehicles, and transparent per-km billing.
                  </p>
                  <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                    <a
                      href={waLink(`Hi Somu Holidays, I read your article "${post.title}" and would like a quote.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btnPrimary"
                      title="Chat on WhatsApp with Somu Holidays"
                      aria-label="Chat on WhatsApp with Somu Holidays"
                    >
                      <Icon name="whatsapp" size={18} /> Chat on WhatsApp
                    </a>
                    <Link
                      href="/21-seater-bus-rental-bangalore"
                      className="btn btnForest"
                      title="View 21 Seater Bus Rental Rates and Specs"
                      aria-label="View 21 Seater Bus Rental Rates and Specs"
                    >
                      21-Seater Bus Rates <Icon name="arrow" size={16} />
                    </Link>
                  </div>
                </div>
              </article>

              {/* Sidebar */}
              <aside className={styles.sidebar}>
                <div className={styles.ctaCard}>
                  <h3>Need a Quick Quote?</h3>
                  <p>Innova Crysta, sedans, and 21/25-seater AC buses available 24×7 across Bengaluru.</p>
                  <a
                    href={`tel:${SITE.phonePrimaryTel}`}
                    className="btn btnPrimary"
                    style={{ width: "100%", marginBottom: "12px" }}
                    title={`Call Somu Holidays at ${SITE.phonePrimary}`}
                    aria-label={`Call Somu Holidays at ${SITE.phonePrimary}`}
                  >
                    <Icon name="phone" size={16} /> Call {SITE.phonePrimary}
                  </a>
                  <Link
                    href="/contact#book"
                    className="btn btnGhost"
                    style={{ width: "100%" }}
                    title="Book online with Somu Holidays"
                    aria-label="Book online with Somu Holidays"
                  >
                    Book Online <Icon name="arrow" size={16} />
                  </Link>
                </div>

                <div
                  style={{
                    background: "#fff",
                    border: "1px solid var(--line)",
                    borderRadius: "var(--radius)",
                    padding: "24px",
                  }}
                >
                  <h4 style={{ fontSize: "1.1rem", marginBottom: "16px" }}>Related Articles</h4>
                  <ul className={styles.recentList}>
                    {otherPosts.map((op) => (
                      <li key={op.slug} className={styles.recentItem}>
                        <Link
                          href={`/blog/${op.slug}`}
                          title={op.title}
                          aria-label={`Read ${op.title}`}
                        >
                          {op.title}
                        </Link>
                        <div className={styles.recentMeta}>
                          {op.date} · {op.readTime}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <FaqSection
          items={post.faqs}
          title={`FAQs: ${post.title}`}
          lead="Answers to the most common traveler questions about this route and vehicle option."
          id="post-faqs"
        />

        <CtaSection bgImage="/21 SEATER.jpeg" />
      </main>
      <SiteFooter />
      <FloatingActions />
    </>
  );
}
