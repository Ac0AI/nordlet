import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getAllGuides, getGuide, AUTHOR } from "@/lib/guider";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return getAllGuides().map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: `${guide.title} | NordLet Pro`,
    description: guide.description,
    keywords: guide.keywords,
    alternates: { canonical: `/guider/${slug}` },
    openGraph: {
      title: guide.title,
      description: guide.description,
      type: "article",
      publishedTime: guide.date,
      authors: [AUTHOR.name],
      locale: "sv_SE",
    },
  };
}

const md = {
  h2: (p: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="mt-12 mb-4 text-2xl sm:text-3xl text-text leading-snug font-display"
      {...p}
    />
  ),
  h3: (p: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="mt-8 mb-3 text-xl font-semibold text-text" {...p} />
  ),
  p: (p: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mb-5 text-lg leading-relaxed text-text-muted" {...p} />
  ),
  ul: (p: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mb-5 ml-1 space-y-2.5" {...p} />
  ),
  li: (p: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="flex gap-3 text-lg leading-relaxed text-text-muted before:mt-3 before:h-1.5 before:w-1.5 before:flex-shrink-0 before:rounded-full before:bg-accent">
      <span>{p.children}</span>
    </li>
  ),
  a: (p: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-accent underline underline-offset-2 hover:text-accent-warm" {...p} />
  ),
  strong: (p: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-text" {...p} />
  ),
  blockquote: (p: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="my-6 border-l-2 border-accent pl-5 text-lg italic text-text"
      {...p}
    />
  ),
};

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    datePublished: guide.date,
    dateModified: guide.date,
    inLanguage: "sv-SE",
    author: { "@type": "Person", name: AUTHOR.name, url: AUTHOR.url },
    publisher: {
      "@type": "Organization",
      name: "NordLet",
      url: "https://nordlet.se",
    },
    mainEntityOfPage: `https://nordlet.se/guider/${slug}`,
  };

  return (
    <>
      <Header solid />
      <main className="pt-32 pb-20 sm:pt-40 sm:pb-28">
        <Container>
          <article className="mx-auto max-w-2xl">
            <Link
              href="/guider"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-text-muted hover:text-accent"
            >
              <ArrowLeft size={15} /> Alla guider
            </Link>

            <h1
              className="mt-6 text-4xl sm:text-5xl tracking-tight text-text leading-tight font-display"
            >
              {guide.title}
            </h1>

            <div className="mt-5 flex items-center gap-3 text-sm text-text-muted">
              <a
                href={AUTHOR.url}
                target="_blank"
                rel="noopener noreferrer author"
                className="font-semibold text-text hover:text-accent"
              >
                {AUTHOR.name}
              </a>
              <span aria-hidden>·</span>
              <time dateTime={guide.date}>
                {new Date(guide.date).toLocaleDateString("sv-SE", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span aria-hidden>·</span>
              <span>{guide.readingMinutes} min läsning</span>
            </div>

            <div className="mt-10">
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={md}>
                {guide.content}
              </ReactMarkdown>
            </div>

            <div className="mt-14 rounded-2xl border border-accent/30 bg-bg-warm p-8 text-center">
              <p
                className="text-2xl text-text font-display"
              >
                Redo att resa friare?
              </p>
              <p className="mt-2 text-text-muted">
                30 dagars öppet köp. Fri leverans i hela Sverige.
              </p>
              <div className="mt-6 flex justify-center">
                <Button href="/#bestall">Beställ NordLet Pro</Button>
              </div>
            </div>

            <div className="mt-12 border-t border-border pt-6 text-sm text-text-muted">
              <p className="font-semibold text-text">{AUTHOR.name}</p>
              <p className="mt-1">{AUTHOR.bio}</p>
            </div>
          </article>
        </Container>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
