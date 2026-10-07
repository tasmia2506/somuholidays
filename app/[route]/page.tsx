import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RouteSeoPage from "@/components/RouteSeoPage/RouteSeoPage";
import { getAllRouteSlugs, getRouteBySlug } from "@/lib/seo-routes";

type PageParams = Promise<{ route: string }>;

export function generateStaticParams() {
  return getAllRouteSlugs().map((route) => ({ route }));
}

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { route: slug } = await params;
  const route = getRouteBySlug(slug);
  if (!route) return { title: "Page not found", robots: { index: false, follow: true } };

  return {
    title: route.metaTitle,
    description: route.metaDescription,
    alternates: { canonical: `/${slug}` },
  };
}

export default async function RouteSlugPage({ params }: { params: PageParams }) {
  const { route: slug } = await params;
  const route = getRouteBySlug(slug);

  if (!route) {
    notFound();
  }

  return <RouteSeoPage route={route} />;
}
