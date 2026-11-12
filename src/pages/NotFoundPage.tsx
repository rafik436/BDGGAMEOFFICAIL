import { ArrowLeft } from 'lucide-react';
import { Link } from '../lib/router';
import { usePageSeo } from '../lib/seo';
import { GUIDE_PAGES } from '../data/guides';

export function NotFoundPage() {
  usePageSeo({
    title: '404 – Page Not Found | BDG Game Official',
    description: 'The requested page could not be found on BDGGameOfficial.net.',
    canonicalPath: '/404/',
    noindex: true,
  });

  return (
    <div className="bg-[#09090B]/20 py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="font-mono text-sm tabular-nums text-[#FACC15]">Error 404</p>
        <h1 className="mt-2 font-display text-3xl font-bold text-white sm:text-5xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-base text-zinc-300">
          The URL you requested may have moved or does not exist. Explore our verified user guides
          or return to the homepage below.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#FACC15] px-6 py-2.5 text-sm font-semibold text-[#09090B] hover:bg-[#EAB308]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Back to Homepage</span>
          </Link>
          <Link
            to="/blog/"
            className="inline-flex min-h-[44px] items-center rounded-lg border border-white/15 bg-[#111216] px-6 py-2.5 text-sm font-semibold text-white hover:border-[#FACC15] hover:text-[#FACC15]"
          >
            Browse Blog Articles
          </Link>
        </div>

        <div className="mt-12 rounded-xl border border-white/10 bg-[#111216] p-6 text-left">
          <h2 className="font-display text-sm font-semibold text-[#FACC15]">
            Popular User Information Guides
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {GUIDE_PAGES.map((g) => (
              <Link
                key={g.path}
                to={g.path}
                className="rounded-lg px-3 py-2 text-sm text-zinc-200 transition-colors hover:bg-white/[0.04] hover:text-[#FACC15]"
              >
                {g.h1}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
