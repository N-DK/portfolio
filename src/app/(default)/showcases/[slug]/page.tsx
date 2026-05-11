import { Suspense, Fragment, use } from "react";
import {
  capitalize,
  extractIdFromSlug,
  extractTitleFromSlug,
} from "@/utils/string";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ play?: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const finalTitle = capitalize(extractTitleFromSlug(slug));

  return {
    title: finalTitle,
    description: `Watch ${finalTitle} on Mem.`,
  };
}

export default function WatchPage({ params, searchParams }: PageProps) {
  const resolvedParams = use(params);
  const resolvedSearchParams = use(searchParams);

  const slug = resolvedParams.slug;
  const play = resolvedSearchParams?.play;

  const titleId = extractIdFromSlug(slug);

  return (
    <main>
      <div>check</div>
    </main>
  );
}
