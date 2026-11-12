import { ArrowRight, CheckCircle2, AlertTriangle, UserPlus, LogIn, Download, Send } from 'lucide-react';
import { Link } from '../lib/router';
import { usePageSeo } from '../lib/seo';
import { GUIDE_MAP, GUIDE_PAGES, GuidePageData } from '../data/guides';
import { BLOG_MAP } from '../data/blogs';
import { EXTERNAL_LINKS } from '../data/links';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FaqAccordion } from '../components/FaqAccordion';
import { SalaryChartsSection } from '../components/SalaryChartsSection';
import { LoginRegisterVisualGuide } from '../components/LoginRegisterVisualGuide';
import { GameplayPaymentVisualGuide } from '../components/GameplayPaymentVisualGuide';

export function GuideDetailPage({ guide }: { guide: GuidePageData }) {
  usePageSeo({
    title: guide.seoTitle,
    description: guide.metaDescription,
    canonicalPath: guide.path,
    ogType: 'article',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Guides', path: '/#guides' },
      { name: guide.shortLabel, path: guide.path },
    ],
    faqs: guide.faqs,
    article: {
      headline: guide.h1,
      datePublished: '2026-11-12',
      dateModified: '2026-11-12',
      authorName: 'BDG Game Official Editorial',
    },
  });

  const relatedGuides = guide.relatedGuidePaths
    .map((p) => GUIDE_MAP[p])
    .filter((item): item is GuidePageData => Boolean(item));

  const relatedBlogs = guide.relatedBlogSlugs
    .map((slug) => BLOG_MAP[slug])
    .filter(Boolean);

  return (
    <article className="bg-[#09090B]/20 py-10 lg:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Breadcrumbs
          items={[
            { name: 'Home', path: '/' },
            { name: 'Guides', path: '/#guides' },
            { name: guide.shortLabel, path: guide.path },
          ]}
        />

        {/* Header */}
        <header className="border-b border-white/10 pb-10">
          <div className="max-w-4xl">
            <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-zinc-400">
              <span className="font-medium text-[#FACC15]">User Guide</span>
              <span aria-hidden="true">·</span>
              <span>Updated {guide.updatedAt}</span>
              <span aria-hidden="true">·</span>
              <span>{guide.readTime}</span>
            </div>
            <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {guide.h1}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              {guide.subtitle}
            </p>

            {/* Quick Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              <a
                href={EXTERNAL_LINKS.registerLoginApk}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex min-h-[42px] items-center gap-1.5 whitespace-nowrap rounded-lg bg-[#FACC15] px-4 py-2 text-xs font-semibold text-[#09090B] transition-colors hover:bg-[#EAB308]"
              >
                <UserPlus className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Register</span>
              </a>
              <a
                href={EXTERNAL_LINKS.registerLoginApk}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex min-h-[42px] items-center gap-1.5 whitespace-nowrap rounded-lg border border-white/15 bg-[#121318] px-4 py-2 text-xs font-semibold text-white transition-colors hover:border-[#FACC15] hover:text-[#FACC15]"
              >
                <LogIn className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Login</span>
              </a>
              <a
                href={EXTERNAL_LINKS.registerLoginApk}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex min-h-[42px] items-center gap-1.5 whitespace-nowrap rounded-lg border border-white/15 bg-[#121318] px-4 py-2 text-xs font-semibold text-white transition-colors hover:border-[#FACC15] hover:text-[#FACC15]"
              >
                <Download className="h-3.5 w-3.5" aria-hidden="true" />
                <span>APK Download</span>
              </a>
              <a
                href={EXTERNAL_LINKS.telegram}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex min-h-[42px] items-center gap-1.5 whitespace-nowrap rounded-lg border border-[#FACC15]/40 bg-[#121318] px-4 py-2 text-xs font-semibold text-[#FACC15] transition-colors hover:bg-[#FACC15]/10"
              >
                <Send className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Join Telegram</span>
              </a>
            </div>

            {/* Key Summary Box */}
            <div className="mt-6 rounded-xl border border-white/10 bg-[#111216] p-5">
              <h2 className="font-display text-sm font-semibold text-[#FACC15]">
                Key Summary Points
              </h2>
              <ul className="mt-3 space-y-2">
                {guide.keySummary.map((point) => (
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
          </div>
        </header>

        {/* Main Asymmetric Content + Sidebar */}
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="space-y-12 lg:col-span-8">
            {guide.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                  {section.heading}
                </h2>
                <div className="mt-4 max-w-prose space-y-4 text-base leading-relaxed text-zinc-300">
                  {section.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>

                {section.steps && (
                  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {section.steps.map((step, i) => (
                      <div
                        key={step.title}
                        className="rounded-xl border border-white/10 bg-[#111216] p-5"
                      >
                        <span className="font-mono text-xs tabular-nums text-[#FACC15]">
                          Step 0{i + 1}
                        </span>
                        <h3 className="mt-1.5 font-display text-base font-semibold text-white">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-300">{step.detail}</p>
                      </div>
                    ))}
                  </div>
                )}

                {section.checklist && (
                  <ul className="mt-6 space-y-3 rounded-xl border border-white/10 bg-[#111216] p-5">
                    {section.checklist.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-zinc-200">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#FACC15]"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.table && (
                  <div className="mt-6 overflow-x-auto rounded-xl border border-white/10 bg-[#111216]">
                    <table className="w-full border-collapse text-left text-sm">
                      <thead>
                        <tr className="border-b border-white/10 bg-[#17181E]">
                          {section.table.headers.map((header) => (
                            <th
                              key={header}
                              className="px-4 py-3 font-display text-xs font-semibold text-[#FACC15]"
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        {section.table.rows.map((row) => (
                          <tr key={row[0]} className="hover:bg-white/[0.02]">
                            {row.map((cell, cellIdx) => (
                              <td
                                key={cell}
                                className={`px-4 py-3.5 align-top leading-relaxed ${
                                  cellIdx === 0 ? 'font-medium text-white' : 'text-zinc-300'
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            ))}

            {guide.path === '/bdg-game-register/' && (
              <LoginRegisterVisualGuide mode="register" />
            )}

            {guide.path === '/bdg-game-login/' && (
              <LoginRegisterVisualGuide mode="login" />
            )}

            {guide.path === '/how-to-play-bdg-game/' && (
              <GameplayPaymentVisualGuide mode="play-and-bonus" />
            )}

            {guide.path === '/bdg-game-deposit/' && (
              <GameplayPaymentVisualGuide mode="deposit" />
            )}

            {guide.path === '/bdg-game-withdraw/' && (
              <GameplayPaymentVisualGuide mode="withdraw" />
            )}

            {guide.path === '/bdg-game-salary/' && (
              <div className="space-y-8">
                <GameplayPaymentVisualGuide mode="bonus" />
                <div className="-mx-4 sm:-mx-6 lg:mx-0 lg:overflow-hidden lg:rounded-2xl lg:border lg:border-white/10">
                  <SalaryChartsSection />
                </div>
              </div>
            )}

            {/* Guide FAQ */}
            <section className="border-t border-white/10 pt-10">
              <FaqAccordion items={guide.faqs} heading={`${guide.shortLabel} FAQs`} />
            </section>

            {/* Independent Notice */}
            <div className="rounded-xl border border-[#FACC15]/30 bg-[#121318] p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#FACC15]"
                  aria-hidden="true"
                />
                <p className="text-sm leading-relaxed text-zinc-300">
                  <strong className="text-white">Independent Notice:</strong> BDGGameOfficial.net
                  is an independent informational website and is not affiliated with any BDG Game
                  operator. Verify platform authenticity, legal age (18+), and local laws before
                  using any gaming service.
                </p>
              </div>
            </div>
          </div>

          {/* Right Sidebar: Internal Links & Table of Contents */}
          <aside className="space-y-6 lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              {/* Section Jump Links */}
              <div className="rounded-xl border border-white/10 bg-[#111216] p-5">
                <h2 className="font-display text-sm font-semibold text-white">On This Page</h2>
                <ul className="mt-3 space-y-2 text-sm">
                  {guide.sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="text-zinc-300 transition-colors hover:text-[#FACC15]"
                      >
                        {s.heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related SEO Guides */}
              <div className="rounded-xl border border-white/10 bg-[#111216] p-5">
                <h2 className="font-display text-sm font-semibold text-white">
                  Related User Guides
                </h2>
                <ul className="mt-3 space-y-2.5">
                  {relatedGuides.map((rg) => (
                    <li key={rg.path}>
                      <Link
                        to={rg.path}
                        className="flex items-center justify-between rounded-lg border border-white/10 bg-[#16171E] px-3.5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-[#FACC15]/50 hover:text-[#FACC15]"
                      >
                        <span>{rg.shortLabel}</span>
                        <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Blog Articles */}
              {relatedBlogs.length > 0 && (
                <div className="rounded-xl border border-white/10 bg-[#111216] p-5">
                  <h2 className="font-display text-sm font-semibold text-white">
                    Recommended Reading
                  </h2>
                  <ul className="mt-3 space-y-3 text-sm">
                    {relatedBlogs.map((blog) => (
                      <li key={blog.slug} className="border-b border-white/10 pb-3 last:border-b-0 last:pb-0">
                        <Link
                          to={blog.path}
                          className="font-medium text-zinc-200 transition-colors hover:text-[#FACC15]"
                        >
                          {blog.title}
                        </Link>
                        <p className="mt-1 text-xs text-zinc-500">{blog.readTime}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* All 7 Guides Directory */}
              <div className="rounded-xl border border-white/10 bg-[#111216] p-5">
                <h2 className="font-display text-sm font-semibold text-white">All BDG Guides</h2>
                <ul className="mt-3 space-y-1.5 text-xs">
                  {GUIDE_PAGES.map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className={`block rounded px-2 py-1.5 transition-colors ${
                          item.path === guide.path
                            ? 'bg-[#FACC15]/15 font-semibold text-[#FACC15]'
                            : 'text-zinc-400 hover:text-white'
                        }`}
                      >
                        {item.shortLabel}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
