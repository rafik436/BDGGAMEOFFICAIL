import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from '../lib/router';
import { usePageSeo } from '../lib/seo';
import { BLOG_ARTICLES, BlogArticle } from '../data/blogs';
import { Breadcrumbs } from '../components/Breadcrumbs';

export function BlogArticlePage({ article }: { article: BlogArticle }) {
  usePageSeo({
    title: article.seoTitle,
    description: article.metaDescription,
    canonicalPath: article.path,
    ogType: 'article',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog/' },
      { name: article.title, path: article.path },
    ],
    article: {
      headline: article.title,
      datePublished: article.isoDate,
      dateModified: article.isoDate,
      authorName: 'BDG Game Official Editorial',
    },
  });

  const moreArticles = BLOG_ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <article className="bg-[#09090B]/20 py-10 lg:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Breadcrumbs
          items={[
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog/' },
            { name: article.title, path: article.path },
          ]}
        />

        <header className="mb-8 border-b border-white/10 pb-8">
          <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-zinc-400">
            <span className="font-medium text-[#FACC15]">{article.category}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={article.isoDate}>{article.publishedAt}</time>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
          </div>
          <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {article.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-zinc-300 sm:text-lg">
            {article.excerpt}
          </p>
        </header>

        {/* Key Takeaways */}
        <div className="mb-10 rounded-xl border border-white/10 bg-[#111216] p-6">
          <h2 className="font-display text-sm font-semibold text-[#FACC15]">Key Takeaways</h2>
          <ul className="mt-3 space-y-2.5">
            {article.keyTakeaways.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm text-zinc-200">
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#FACC15]"
                  aria-hidden="true"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Article Body */}
        <div className="space-y-10">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-2xl font-bold text-white">{section.heading}</h2>
              <div className="mt-3 max-w-prose space-y-4 text-base leading-relaxed text-zinc-300">
                {section.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              {section.bullets && (
                <ul className="mt-4 max-w-prose space-y-2.5 rounded-xl border border-white/10 bg-[#111216] p-5 text-sm text-zinc-200">
                  {section.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FACC15]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Related Guide CTA */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded-xl border border-[#FACC15]/30 bg-[#121318] p-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-medium text-[#FACC15]">Continue Reading</p>
            <h3 className="mt-1 font-display text-lg font-semibold text-white">
              {article.relatedGuideLabel}
            </h3>
          </div>
          <Link
            to={article.relatedGuidePath}
            className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-lg bg-[#FACC15] px-5 py-2.5 text-sm font-semibold text-[#09090B] transition-colors hover:bg-[#EAB308]"
          >
            <span>Open Guide</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Disclaimer */}
        <p className="mt-8 border-t border-white/10 pt-6 text-xs leading-relaxed text-zinc-400">
          Disclaimer: BDGGameOfficial.net is an independent informational portal not affiliated with
          any BDG Game operator. Content is provided strictly for educational purposes for adults
          aged 18+.
        </p>

        {/* More Articles */}
        <section className="mt-12 border-t border-white/10 pt-10">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-display text-xl font-bold text-white">More Articles</h2>
            <Link
              to="/blog/"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#FACC15] hover:underline"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              <span>All Articles</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {moreArticles.map((item) => (
              <Link
                key={item.slug}
                to={item.path}
                className="rounded-xl border border-white/10 bg-[#111216] p-4 transition-colors hover:border-[#FACC15]/50"
              >
                <span className="text-xs text-[#FACC15]">{item.category}</span>
                <h3 className="mt-1.5 font-display text-sm font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-zinc-400">{item.readTime}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
