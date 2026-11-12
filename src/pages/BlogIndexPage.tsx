import { useState, useMemo } from 'react';
import { ArrowRight, Search } from 'lucide-react';
import { Link } from '../lib/router';
import { usePageSeo } from '../lib/seo';
import { BLOG_ARTICLES, BlogArticle } from '../data/blogs';
import { Breadcrumbs } from '../components/Breadcrumbs';

const CATEGORIES: ('All' | BlogArticle['category'])[] = [
  'All',
  'Getting Started',
  'Account & App',
  'Gameplay',
  'Payments & Safety',
];

export function BlogIndexPage() {
  usePageSeo({
    title: 'BDG Game Blog – Educational Guides, Safety Tips & Tutorials',
    description:
      'Browse 10 original educational articles covering BDG Game fundamentals, login security, registration rules, APK safety, deposits, withdrawals, and FAQs.',
    canonicalPath: '/blog/',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog/' },
    ],
  });

  const [category, setCategory] = useState<'All' | BlogArticle['category']>('All');
  const [query, setQuery] = useState('');

  const filteredArticles = useMemo(() => {
    return BLOG_ARTICLES.filter((article) => {
      const matchCat = category === 'All' || article.category === category;
      const q = query.trim().toLowerCase();
      const matchQuery =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [category, query]);

  return (
    <div className="bg-[#09090B]/20 py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Breadcrumbs
          items={[
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog/' },
          ]}
        />

        <header className="border-b border-white/10 pb-8">
          <p className="mb-2 font-mono text-xs text-[#FACC15]">Educational Publications</p>
          <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">
            BDG Game Information &amp; Safety Blog
          </h1>
          <p className="mt-3 max-w-2xl text-base text-zinc-300">
            Ten original educational articles written to help users navigate account access,
            registration terms, app safety, gameplay rules, and payment verification responsibly.
          </p>

          {/* Interactive Filter & Search Bar */}
          <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div
              role="group"
              aria-label="Filter articles by category"
              className="flex flex-wrap items-center gap-1.5 rounded-xl border border-white/10 bg-[#111216] p-1"
            >
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`whitespace-nowrap rounded-lg px-3.5 py-2 text-xs font-semibold transition-colors ${
                    category === cat
                      ? 'bg-[#FACC15] text-[#09090B]'
                      : 'text-zinc-300 hover:bg-white/[0.04] hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-72">
              <Search
                className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400"
                aria-hidden="true"
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles..."
                aria-label="Search blog articles"
                className="w-full rounded-xl border border-white/15 bg-[#111216] py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-zinc-500 focus:border-[#FACC15] focus:outline-none"
              />
            </div>
          </div>
        </header>

        {filteredArticles.length === 0 ? (
          <div className="mt-10 rounded-xl border border-white/10 bg-[#111216] p-8 text-center">
            <p className="text-base font-medium text-white">No matching articles found.</p>
            <button
              type="button"
              onClick={() => {
                setCategory('All');
                setQuery('');
              }}
              className="mt-4 rounded-lg bg-[#FACC15] px-4 py-2 text-xs font-semibold text-[#09090B]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => (
              <article
                key={article.slug}
                className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#111216] p-5 transition-colors hover:border-[#FACC15]/45"
              >
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400">
                      <span className="font-medium text-[#FACC15]">{article.category}</span>
                      <span aria-hidden="true">·</span>
                      <time dateTime={article.isoDate}>{article.publishedAt}</time>
                      <span aria-hidden="true">·</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h2 className="mt-2.5 font-display text-lg font-semibold leading-snug text-white">
                      <Link to={article.path} className="hover:text-[#FACC15]">
                        {article.title}
                      </Link>
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">{article.excerpt}</p>
                  </div>
                  <div className="mt-5 border-t border-white/10 pt-4">
                    <Link
                      to={article.path}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#FACC15] hover:underline"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
