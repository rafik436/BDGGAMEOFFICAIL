import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Link } from '../lib/router';
import { usePageSeo } from '../lib/seo';
import { GUIDE_PAGES } from '../data/guides';
import { BLOG_ARTICLES } from '../data/blogs';
import { Breadcrumbs } from '../components/Breadcrumbs';

export function SitemapPage() {
  usePageSeo({
    title: 'HTML Sitemap & Google Search Console Guide – BDG Game Official',
    description:
      'Complete HTML sitemap of BDGGameOfficial.net guides and blog articles, plus step-by-step Google Search Console verification and XML sitemap instructions.',
    canonicalPath: '/sitemap/',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Sitemap', path: '/sitemap/' },
    ],
  });

  return (
    <div className="bg-[#09090B]/20 py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Breadcrumbs
          items={[
            { name: 'Home', path: '/' },
            { name: 'Sitemap', path: '/sitemap/' },
          ]}
        />

        <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Website Sitemap &amp; Search Console Reference
        </h1>
        <p className="mt-3 max-w-2xl text-base text-zinc-300">
          Direct internal navigation to every page on BDGGameOfficial.net along with technical
          endpoints and Google Search Console setup steps.
        </p>

        {/* Directory Grid */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Core & Legal Pages */}
          <section className="rounded-xl border border-white/10 bg-[#111216] p-6">
            <h2 className="font-display text-lg font-semibold text-[#FACC15]">
              Core &amp; Institutional Pages
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-zinc-200 hover:text-[#FACC15]">
                  Homepage — Complete BDG Game Guide
                </Link>
              </li>
              <li>
                <Link to="/blog/" className="text-zinc-200 hover:text-[#FACC15]">
                  Blog Directory (All 10 Articles)
                </Link>
              </li>
              <li>
                <Link to="/about/" className="text-zinc-200 hover:text-[#FACC15]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact/" className="text-zinc-200 hover:text-[#FACC15]">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy/" className="text-zinc-200 hover:text-[#FACC15]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms/" className="text-zinc-200 hover:text-[#FACC15]">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link to="/disclaimer/" className="text-zinc-200 hover:text-[#FACC15]">
                  Disclaimer
                </Link>
              </li>
              <li className="border-t border-white/10 pt-3">
                <a
                  href="/sitemap.xml"
                  className="inline-flex items-center gap-1 font-mono text-xs text-[#FACC15] hover:underline"
                >
                  <span>/sitemap.xml</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="/robots.txt"
                  className="inline-flex items-center gap-1 font-mono text-xs text-[#FACC15] hover:underline"
                >
                  <span>/robots.txt</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </section>

          {/* 7 Individual SEO Pages */}
          <section className="rounded-xl border border-white/10 bg-[#111216] p-6">
            <h2 className="font-display text-lg font-semibold text-[#FACC15]">
              Dedicated User Guides (7 Pages)
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              {GUIDE_PAGES.map((guide) => (
                <li key={guide.path}>
                  <Link to={guide.path} className="font-medium text-zinc-200 hover:text-[#FACC15]">
                    {guide.h1}
                  </Link>
                  <p className="font-mono text-xs text-zinc-500">{guide.path}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* 10 Blog Articles */}
          <section className="rounded-xl border border-white/10 bg-[#111216] p-6">
            <h2 className="font-display text-lg font-semibold text-[#FACC15]">
              Educational Blog Articles (10 Posts)
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {BLOG_ARTICLES.map((post) => (
                <li key={post.slug}>
                  <Link to={post.path} className="text-zinc-200 hover:text-[#FACC15]">
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Google Search Console Verification Instructions */}
        <section className="mt-12 rounded-2xl border border-[#FACC15]/30 bg-[#121318] p-6 sm:p-8">
          <h2 className="font-display text-2xl font-bold text-white">
            Google Search Console Setup &amp; Verification Instructions
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-300">
            This application includes pre-configured canonical tags, clean trailing-slash URLs,{' '}
            <code className="font-mono text-[#FACC15]">/robots.txt</code>, and{' '}
            <code className="font-mono text-[#FACC15]">/sitemap.xml</code>. Follow these steps to
            verify <strong className="text-white">https://bdggameofficial.net</strong> in Google
            Search Console:
          </p>

          <ol className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <li className="rounded-xl border border-white/10 bg-[#0D0E12] p-5">
              <span className="font-mono text-xs tabular-nums text-[#FACC15]">Step 01</span>
              <h3 className="mt-1 font-display text-base font-semibold text-white">
                Add Domain or URL-Prefix Property
              </h3>
              <p className="mt-2 text-sm text-zinc-300">
                Sign in to Google Search Console, choose <strong>Add Property</strong>, and enter{' '}
                <code className="font-mono text-xs text-zinc-200">bdggameofficial.net</code> (Domain
                property recommended) or{' '}
                <code className="font-mono text-xs text-zinc-200">
                  https://bdggameofficial.net/
                </code>
                .
              </p>
            </li>

            <li className="rounded-xl border border-white/10 bg-[#0D0E12] p-5">
              <span className="font-mono text-xs tabular-nums text-[#FACC15]">Step 02</span>
              <h3 className="mt-1 font-display text-base font-semibold text-white">
                Verify Ownership (DNS TXT or HTML Tag)
              </h3>
              <p className="mt-2 text-sm text-zinc-300">
                Copy the DNS TXT record into your domain registrar’s DNS panel and click Verify—or
                add the <code className="font-mono text-xs text-zinc-200">google-site-verification</code>{' '}
                meta tag inside <code className="font-mono text-xs text-zinc-200">index.html</code>{' '}
                and redeploy.
              </p>
            </li>

            <li className="rounded-xl border border-white/10 bg-[#0D0E12] p-5">
              <span className="font-mono text-xs tabular-nums text-[#FACC15]">Step 03</span>
              <h3 className="mt-1 font-display text-base font-semibold text-white">
                Submit XML Sitemap
              </h3>
              <p className="mt-2 text-sm text-zinc-300">
                In the Search Console left menu, open <strong>Sitemaps</strong>, enter{' '}
                <code className="font-mono text-xs text-zinc-200">sitemap.xml</code>, and click{' '}
                <strong>Submit</strong>. Confirm status reports &ldquo;Success&rdquo; for all 25
                URLs.
              </p>
            </li>

            <li className="rounded-xl border border-white/10 bg-[#0D0E12] p-5">
              <span className="font-mono text-xs tabular-nums text-[#FACC15]">Step 04</span>
              <h3 className="mt-1 font-display text-base font-semibold text-white">
                Inspect URLs &amp; Monitor Core Web Vitals
              </h3>
              <p className="mt-2 text-sm text-zinc-300">
                Use the <strong>URL Inspection</strong> tool on priority guides like{' '}
                <code className="font-mono text-xs text-zinc-200">/bdg-game-login/</code> to confirm
                HTTPS canonicals, structured data validity, and mobile usability.
              </p>
            </li>
          </ol>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-zinc-300">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-[#FACC15]" aria-hidden="true" />
              <span>25 Clean Canonical URLs Indexed in sitemap.xml</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-[#FACC15]" aria-hidden="true" />
              <span>Schema.org JSON-LD Graph Active Per Route</span>
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
