import {
  ArrowRight,
  BookOpen,
  ShieldCheck,
  Smartphone,
  Wallet,
  HelpCircle,
  Scale,
  UserPlus,
  LogIn,
  Download,
  Send,
} from 'lucide-react';
import { Link } from '../lib/router';
import { usePageSeo, FaqEntry } from '../lib/seo';
import { GUIDE_PAGES } from '../data/guides';
import { BLOG_ARTICLES } from '../data/blogs';
import { EXTERNAL_LINKS } from '../data/links';
import { FaqAccordion } from '../components/FaqAccordion';
import { SalaryChartsSection } from '../components/SalaryChartsSection';
import { LoginRegisterVisualGuide } from '../components/LoginRegisterVisualGuide';
import { GameplayPaymentVisualGuide } from '../components/GameplayPaymentVisualGuide';

const HOME_FAQS: FaqEntry[] = [
  {
    question: 'Is BDGGameOfficial.net the official operator of BDG Game?',
    answer:
      'No. BDGGameOfficial.net is strictly an independent informational and educational website. We do not own, develop, endorse, or operate any BDG Game platform, and we do not host login, registration, or payment portals.',
  },
  {
    question: 'How do users check if a gaming login or download link is authentic?',
    answer:
      'Always verify the domain spelling in your browser address bar, confirm active HTTPS encryption, avoid shortened links sent via unsolicited social messages, and never install APK files from unverified third-party blogs.',
  },
  {
    question: 'Can any strategy or prediction channel guarantee winnings in BDG Game?',
    answer:
      'No. Server-side randomized rounds are statistically independent events. No formula, bot, or paid VIP channel can guarantee wins, and users should never treat gaming as reliable income.',
  },
  {
    question: 'Why might a withdrawal request experience delays or verification checks?',
    answer:
      'Withdrawals depend entirely on the external operator’s terms, banking network clearing times, KYC identity verification, accurate bank details, and any applicable turnover conditions.',
  },
  {
    question: 'What does "BDG Game Salary" mean when seen online?',
    answer:
      'Online promotions using the word "salary" generally refer to conditional referral or affiliate commission programs governed by specific operator rules—not salaried employment or guaranteed payouts.',
  },
];

const FEATURE_CARDS = [
  {
    title: 'Mobile-First Web & App Access',
    description:
      'Modern gaming interfaces run directly inside encrypted mobile browsers or verified packages, adapting cleanly to smartphone screens.',
    link: '/bdg-game-download/',
    linkText: 'App Safety Guide',
    icon: Smartphone,
  },
  {
    title: 'Timed Round Structures',
    description:
      'Round-based prediction lobbies display transparent countdown timers, lock-in buffers, and public period outcome histories.',
    link: '/how-to-play-bdg-game/',
    linkText: 'Gameplay Rules',
    icon: BookOpen,
  },
  {
    title: 'Account & Credential Controls',
    description:
      'Standard platforms pair phone-number authentication with password recovery, CAPTCHA verification, and OTP device checks.',
    link: '/bdg-game-login/',
    linkText: 'Login Guide',
    icon: ShieldCheck,
  },
  {
    title: 'Wallet Ledger & Verification',
    description:
      'Integrated cashier modules log deposit order IDs, withdrawal request statuses, and turnover balances for user review.',
    link: '/bdg-game-deposit/',
    linkText: 'Payment Information',
    icon: Wallet,
  },
  {
    title: 'Withdrawal & KYC Rules',
    description:
      'Operators apply identity matching and banking validation checks to verify beneficiary ownership prior to releasing payouts.',
    link: '/bdg-game-withdraw/',
    linkText: 'Withdrawal Guide',
    icon: Scale,
  },
  {
    title: 'Terms & Promotional Clarity',
    description:
      'Understanding bonus wagering terms and affiliate commission rules prevents misunderstandings before participating.',
    link: '/bdg-game-salary/',
    linkText: 'Salary Information',
    icon: HelpCircle,
  },
];

export function HomePage() {
  usePageSeo({
    title: 'BDG Game Official – Login, Registration, Download & Game Guide',
    description:
      'Explore BDG Game information, login and registration guides, gameplay instructions, deposit and withdrawal information, FAQs and helpful gaming resources.',
    canonicalPath: '/',
    ogType: 'website',
    faqs: HOME_FAQS,
  });

  const latestArticles = BLOG_ARTICLES.slice(0, 6);

  return (
    <div>
      {/* HERO SECTION */}
      <section className="border-b border-white/10 bg-[#09090B]/15">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-20">
          <div className="max-w-3xl rounded-2xl border border-white/10 bg-[#09090B]/65 p-6 backdrop-blur-md sm:p-8">
            <p className="mb-3 text-xs font-medium text-[#FACC15]">
              BDG Game &amp; BDG Win – Smart Gameplay, Registration &amp; User Guide (18+)
            </p>
            <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-5xl lg:leading-[1.08]">
              BDG Game – Complete Information and User Guide
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              Objective documentation covering BDG Game login safety, registration verification,
              app compatibility, gameplay mechanics, deposit hygiene, and withdrawal conditions—all
              in one structured guide.
            </p>

            {/* Direct Action Buttons: Register, Login, APK Download, Telegram */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:max-w-xl sm:grid-cols-4">
              <a
                href={EXTERNAL_LINKS.registerLoginApk}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex min-h-[44px] items-center justify-center gap-1.5 whitespace-nowrap rounded-lg bg-[#FACC15] px-4 py-2.5 text-xs font-semibold text-[#09090B] transition-colors hover:bg-[#EAB308] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FACC15]"
              >
                <UserPlus className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                <span>Register</span>
              </a>
              <a
                href={EXTERNAL_LINKS.registerLoginApk}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex min-h-[44px] items-center justify-center gap-1.5 whitespace-nowrap rounded-lg border border-white/15 bg-[#121318] px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:border-[#FACC15] hover:text-[#FACC15]"
              >
                <LogIn className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                <span>Login</span>
              </a>
              <a
                href={EXTERNAL_LINKS.registerLoginApk}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex min-h-[44px] items-center justify-center gap-1.5 whitespace-nowrap rounded-lg border border-white/15 bg-[#121318] px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:border-[#FACC15] hover:text-[#FACC15]"
              >
                <Download className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                <span>APK Download</span>
              </a>
              <a
                href={EXTERNAL_LINKS.telegram}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex min-h-[44px] items-center justify-center gap-1.5 whitespace-nowrap rounded-lg border border-white/15 bg-[#121318] px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:border-[#FACC15] hover:text-[#FACC15]"
              >
                <Send className="h-3.5 w-3.5 shrink-0 text-[#FACC15]" aria-hidden="true" />
                <span>Telegram</span>
              </a>
            </div>
          </div>

          {/* Dedicated Full-Width Quick Guide Strip Below Hero Split */}
          <div
            id="guides"
            className="mt-12 grid grid-cols-2 gap-3 border-t border-white/10 pt-8 sm:grid-cols-4 lg:grid-cols-7"
          >
            {GUIDE_PAGES.map((guide, index) => (
              <Link
                key={guide.path}
                to={guide.path}
                className="group flex flex-col justify-between rounded-xl border border-white/10 bg-[#111216]/85 backdrop-blur-md p-3.5 transition-colors hover:border-[#FACC15]/60 hover:bg-[#16171E]"
              >
                <span className="font-mono text-xs tabular-nums text-[#FACC15]">
                  0{index + 1}.
                </span>
                <span className="mt-2 text-sm font-semibold text-white group-hover:text-[#FACC15]">
                  {guide.shortLabel}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 1: ABOUT BDG GAME */}
      <section className="border-b border-white/10 bg-[#0D0E12]/25 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <p className="mb-2 font-mono text-xs tabular-nums text-[#FACC15]">01. Platform Overview</p>
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                About BDG Game
              </h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-zinc-300">
                <p>
                  BDG Game refers broadly to mobile-accessible online gaming portals built around
                  fast-paced prediction rounds, number draws, and casual mini-game lobbies. Because
                  multiple unrelated websites and mirror links frequently share similar naming,
                  new users often struggle to distinguish accurate educational information from
                  misleading promotional claims.
                </p>
                <p>
                  Before interacting with any online gaming service, users should verify three
                  critical fundamentals: whether online gaming of that category is legal in their
                  jurisdiction, whether the operator discloses clear Privacy and Withdrawal terms,
                  and whether the site operates over a valid, authenticated HTTPS domain.
                </p>
                <p>
                  To verify authentic platform information, never rely on unsolicited messages or
                  shortened redirect links. Check domain spelling carefully, read official user
                  agreements in full, and confirm you meet the mandatory 18+ age threshold.
                </p>
              </div>
              <div className="mt-6">
                <Link
                  to="/about/"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#FACC15] hover:underline"
                >
                  <span>Read about our editorial standards</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#111216]/85 backdrop-blur-md p-6 lg:col-span-5">
              <h3 className="font-display text-lg font-semibold text-white">
                Before You Participate Checklist
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-zinc-300">
                <li className="border-b border-white/10 pb-3">
                  <span className="font-semibold text-[#FACC15]">Age 18+ Verification:</span>{' '}
                  Confirm you meet minimum legal age rules in your region.
                </li>
                <li className="border-b border-white/10 pb-3">
                  <span className="font-semibold text-[#FACC15]">HTTPS Domain Check:</span> Inspect
                  the browser address bar before entering mobile numbers or passwords.
                </li>
                <li>
                  <span className="font-semibold text-[#FACC15]">Risk Awareness:</span> Review
                  official platform terms and never risk money you cannot afford to lose.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 & 3: LOGIN & REGISTRATION */}
      <section className="border-b border-white/10 bg-[#09090B]/20 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* SECTION 2: BDG GAME LOGIN */}
            <article className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#111216]/85 backdrop-blur-md p-7">
              <div>
                <p className="mb-2 font-mono text-xs tabular-nums text-[#FACC15]">
                  02. Account Access
                </p>
                <h2 className="font-display text-2xl font-bold text-white">BDG Game Login</h2>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                  Returning users typically sign in using the exact registered mobile number or user
                  ID paired with their private password. For security, always inspect the browser
                  padlock icon before typing credentials and avoid logging in over public Wi-Fi.
                </p>
                <ol className="mt-5 space-y-2.5 text-sm text-zinc-300">
                  <li className="flex gap-2.5">
                    <span className="font-mono text-xs tabular-nums text-[#FACC15]">1.</span>
                    <span>Open your bookmarked, verified platform domain directly.</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="font-mono text-xs tabular-nums text-[#FACC15]">2.</span>
                    <span>Select the Login form and confirm your country dialing code.</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="font-mono text-xs tabular-nums text-[#FACC15]">3.</span>
                    <span>Enter your password carefully and complete any CAPTCHA or SMS OTP check.</span>
                  </li>
                </ol>
              </div>
              <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
                <Link
                  to="/bdg-game-login/"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#FACC15] hover:underline"
                >
                  <span>Read Complete Login Guide</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a
                  href={EXTERNAL_LINKS.registerLoginApk}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#FACC15] px-4 py-2 text-xs font-semibold text-[#09090B] hover:bg-[#EAB308]"
                >
                  <LogIn className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Login Now</span>
                </a>
              </div>
            </article>

            {/* SECTION 3: BDG GAME REGISTRATION */}
            <article className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#111216]/85 backdrop-blur-md p-7">
              <div>
                <p className="mb-2 font-mono text-xs tabular-nums text-[#FACC15]">
                  03. New Account Setup
                </p>
                <h2 className="font-display text-2xl font-bold text-white">
                  BDG Game Registration
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                  Before creating a profile on any gaming service, verify the operator’s terms of
                  use, privacy notices, and regional legality. Most platforms permit strictly one
                  account per individual, phone number, and bank account.
                </p>
                <ol className="mt-5 space-y-2.5 text-sm text-zinc-300">
                  <li className="flex gap-2.5">
                    <span className="font-mono text-xs tabular-nums text-[#FACC15]">1.</span>
                    <span>Confirm you meet the 18+ minimum legal age and regional laws.</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="font-mono text-xs tabular-nums text-[#FACC15]">2.</span>
                    <span>Provide a personal mobile number you actively control for OTP alerts.</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="font-mono text-xs tabular-nums text-[#FACC15]">3.</span>
                    <span>Choose a unique 12+ character password not reused elsewhere.</span>
                  </li>
                </ol>
              </div>
              <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
                <Link
                  to="/bdg-game-register/"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#FACC15] hover:underline"
                >
                  <span>Read Complete Registration Guide</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a
                  href={EXTERNAL_LINKS.registerLoginApk}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#FACC15] px-4 py-2 text-xs font-semibold text-[#09090B] hover:bg-[#EAB308]"
                >
                  <UserPlus className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Register Now</span>
                </a>
              </div>
            </article>
          </div>

          {/* Visual Step-by-Step Register & Login Screenshots + Detailed Explanations */}
          <div className="mt-12">
            <LoginRegisterVisualGuide mode="both" />
          </div>
        </div>
      </section>

      {/* SECTION 4: HOW TO PLAY BDG GAME */}
      <section className="border-b border-white/10 bg-[#0D0E12]/25 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <p className="mb-2 font-mono text-xs tabular-nums text-[#FACC15]">
                04. Beginner Gameplay Mechanics
              </p>
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                How to Play BDG Game
              </h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-zinc-300">
                <p>
                  Games associated with the BDG Game format operate primarily on structured
                  countdown intervals—often 1-minute, 3-minute, or 5-minute rounds. During the open
                  window, players review the stated rules, category options (colors, digits, or
                  ranges), and payout multipliers before confirming an entry ahead of the lock timer.
                </p>
                <p>
                  Once the cutoff expires, no further selections are accepted for that period ID,
                  and the server publishes the round outcome when the clock reaches zero. Every
                  round resolved by server-side randomization is statistically independent; past
                  streaks do not alter future odds.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  to="/how-to-play-bdg-game/"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#FACC15] px-5 py-2.5 text-sm font-semibold text-[#09090B] transition-colors hover:bg-[#EAB308]"
                >
                  <span>Read Full Gameplay Guide</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/bdg-game-download/"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-[#FACC15] hover:text-[#FACC15]"
                >
                  <span>Check App Download Safety</span>
                </Link>
              </div>
            </div>

            <div className="space-y-3 rounded-2xl border border-white/10 bg-[#111216]/85 backdrop-blur-md p-6 lg:col-span-5">
              <h3 className="font-display text-lg font-semibold text-white">
                Core Round Structure
              </h3>
              <div className="rounded-xl border border-white/10 bg-[#16171E] p-4">
                <span className="font-mono text-xs text-[#FACC15]">01. Timed Period</span>
                <p className="mt-1 text-sm text-zinc-300">
                  Rounds run on 1-min, 3-min, or 5-min countdowns tagged by a unique Period ID.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-[#16171E] p-4">
                <span className="font-mono text-xs text-[#FACC15]">02. Cutoff Window</span>
                <p className="mt-1 text-sm text-zinc-300">
                  Entries lock automatically during the final seconds before resolution.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-[#16171E] p-4">
                <span className="font-mono text-xs text-[#FACC15]">03. Independent Outcomes</span>
                <p className="mt-1 text-sm text-zinc-300">
                  Each round settles independently; avoid chasing streaks or paid signal claims.
                </p>
              </div>
            </div>
          </div>

          {/* Visual How to Play & How to Claim Bonus Walkthroughs */}
          <div className="mt-12">
            <GameplayPaymentVisualGuide mode="play-and-bonus" />
          </div>
        </div>
      </section>

      {/* SECTION 5 & 6: DEPOSIT & WITHDRAWAL INFORMATION */}
      <section className="border-b border-white/10 bg-[#09090B]/20 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 max-w-2xl">
            <p className="mb-2 font-mono text-xs tabular-nums text-[#FACC15]">
              05 &amp; 06. Financial Hygiene &amp; Verification
            </p>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Deposit and Withdrawal Information
            </h2>
            <p className="mt-3 text-base text-zinc-300">
              Understanding how payment verification and payout conditions work reduces avoidable
              delays and protects you from third-party payment scams.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* SECTION 5: DEPOSIT */}
            <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#111216]/85 backdrop-blur-md p-7">
              <div>
                <h3 className="font-display text-xl font-semibold text-white">
                  Deposit Information
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                  Initiate wallet top-ups exclusively through an authenticated platform’s official
                  cashier module. Never send money to private UPI handles or QR screenshots shared
                  in chat groups. Always review minimum thresholds and bonus turnover rules before
                  confirming, and keep your 12-digit UTR receipt until balance settlement updates.
                </p>
              </div>
              <div className="mt-6 border-t border-white/10 pt-4">
                <Link
                  to="/bdg-game-deposit/"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#FACC15] hover:underline"
                >
                  <span>Deposit Safety Guide</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* SECTION 6: WITHDRAWAL */}
            <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#111216]/85 backdrop-blur-md p-7">
              <div>
                <h3 className="font-display text-xl font-semibold text-white">
                  Withdrawal Information
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                  Payouts depend strictly on the external operator’s terms, banking network clearing
                  windows, identity (KYC) checks, and exact bank account name matching. No
                  third-party informational website can guarantee withdrawals, and users should
                  never pay "unlock fees" to agents claiming they can expedite pending payouts.
                </p>
              </div>
              <div className="mt-6 border-t border-white/10 pt-4">
                <Link
                  to="/bdg-game-withdraw/"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#FACC15] hover:underline"
                >
                  <span>Withdrawal Information Guide</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          {/* Visual How to Deposit & How to Withdraw Walkthroughs */}
          <div className="mt-12">
            <GameplayPaymentVisualGuide mode="deposit-and-withdraw" />
          </div>
        </div>
      </section>

      {/* SECTION 7: BDG GAME FEATURES */}
      <section className="border-b border-white/10 bg-[#0D0E12]/25 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 font-mono text-xs tabular-nums text-[#FACC15]">
                07. Core Platform Capabilities
              </p>
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                BDG Game Features Overview
              </h2>
            </div>
            <Link
              to="/bdg-game-salary/"
              className="text-sm font-semibold text-[#FACC15] hover:underline"
            >
              View BDG Game Salary Guide
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURE_CARDS.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#121318] p-6 transition-colors hover:border-[#FACC15]/40"
                >
                  <div>
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#FACC15]/25 bg-[#FACC15]/10 text-[#FACC15]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                      {feature.description}
                    </p>
                  </div>
                  <div className="mt-5 pt-3">
                    <Link
                      to={feature.link}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FACC15] hover:underline"
                    >
                      <span>{feature.linkText}</span>
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DAILY SALARY & ADS FUND CHARTS */}
      <SalaryChartsSection />

      {/* SECTION 8: LATEST ARTICLES */}
      <section className="border-b border-white/10 bg-[#09090B]/20 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 font-mono text-xs tabular-nums text-[#FACC15]">
                08. Educational Library
              </p>
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Latest Articles &amp; Guides
              </h2>
            </div>
            <Link
              to="/blog/"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#FACC15] hover:underline"
            >
              <span>Browse All 10 Blog Articles</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestArticles.map((article) => (
              <article
                key={article.slug}
                className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#111216]/85 backdrop-blur-md p-5 transition-colors hover:border-[#FACC15]/45"
              >
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    {/* Zero-pill clean unboxed metadata */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400">
                      <span className="font-medium text-[#FACC15]">{article.category}</span>
                      <span aria-hidden="true">·</span>
                      <time dateTime={article.isoDate}>{article.publishedAt}</time>
                      <span aria-hidden="true">·</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="mt-2.5 font-display text-lg font-semibold leading-snug text-white">
                      <Link to={article.path} className="hover:text-[#FACC15]">
                        {article.title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">{article.excerpt}</p>
                  </div>

                  <div className="mt-5 border-t border-white/10 pt-4">
                    <Link
                      to={article.path}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#FACC15] hover:underline"
                    >
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: FAQ */}
      <section className="border-b border-white/10 bg-[#0D0E12]/25 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <p className="mb-2 font-mono text-xs tabular-nums text-[#FACC15]">
            09. Common Questions
          </p>
          <FaqAccordion items={HOME_FAQS} heading="Frequently Asked Questions" />
        </div>
      </section>

      {/* SECTION 10: DISCLAIMER */}
      <section className="bg-[#09090B]/45 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="rounded-2xl border border-[#FACC15]/30 bg-[#121318] p-6 sm:p-8">
            <p className="mb-2 font-mono text-xs tabular-nums text-[#FACC15]">
              10. Independent Website Disclaimer
            </p>
            <h2 className="font-display text-xl font-bold text-white sm:text-2xl">
              Independent Informational Resource Notice
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-base">
              BDGGameOfficial.net is an independent informational website and is not affiliated
              with, endorsed by, or operated by any BDG Game platform or operator. We do not host
              games, manage user accounts, distribute APK files, or handle financial deposits or
              withdrawals. Online gaming carries financial risk and is strictly intended for adults
              (18+) where permitted by applicable law. Users should independently verify all
              platform terms and local regulations before participating.
            </p>
            <div className="mt-5 flex flex-wrap gap-4 text-sm">
              <Link to="/disclaimer/" className="font-semibold text-[#FACC15] hover:underline">
                Read Full Disclaimer
              </Link>
              <Link to="/terms/" className="text-zinc-300 hover:text-white hover:underline">
                Terms &amp; Conditions
              </Link>
              <Link to="/privacy-policy/" className="text-zinc-300 hover:text-white hover:underline">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
