import { ExternalLink, Send, UserPlus } from 'lucide-react';
import { BRAND_ASSETS, EXTERNAL_LINKS } from '../data/links';

const DAILY_SALARY_ROWS = [
  ['10 Active People', '₹600'],
  ['20 Active People', '₹1,100'],
  ['40 Active People', '₹2,600'],
  ['60 Active People', '₹4,100'],
  ['100 Active People', '₹8,100'],
  ['125 Active People', '₹10,000'],
  ['150 Active People', '₹13,000'],
  ['200 Active People', '₹20,000'],
  ['500 Active People', '₹50,000 (Elite Team)'],
];

const ADS_FUND_ROWS = [
  ['3–6 People', '3K – 4K', '800 + Daily Salary'],
  ['7–9 People', '5K – 7K', '1,200 + Daily Salary'],
  ['10–12 People', '8K – 11K', '2K + Daily Salary'],
  ['11–15 People', '12K – 17K', '3K + Daily Salary'],
  ['16–20 People', '18K – 20K', '4K + Daily Salary'],
  ['20 Above', '22K – Above', '6K + Daily Salary'],
];

export function SalaryChartsSection() {
  return (
    <section
      id="salary-chart"
      className="border-b border-white/10 bg-[#09090B]/20 py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 font-mono text-xs tabular-nums text-[#FACC15]">
              Team Rafsa Schedule · Promotional Reference
            </p>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              BDG Game Daily Salary &amp; Ads Fund Charts
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-300">
              Reference schedules for Team Rafsa daily salary tiers and Tier-1 Ads Fund allocations.
              All tiers are conditional on active participation and compliance with platform rules.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={EXTERNAL_LINKS.registerLoginApk}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex min-h-[44px] items-center gap-2 whitespace-nowrap rounded-lg bg-[#FACC15] px-5 py-2.5 text-sm font-semibold text-[#09090B] transition-colors hover:bg-[#EAB308]"
            >
              <UserPlus className="h-4 w-4" aria-hidden="true" />
              <span>Register Now</span>
            </a>
            <a
              href={EXTERNAL_LINKS.telegram}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex min-h-[44px] items-center gap-2 whitespace-nowrap rounded-lg border border-white/20 bg-[#121318] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-[#FACC15] hover:text-[#FACC15]"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              <span>Join Telegram</span>
            </a>
          </div>
        </div>

        {/* Visual Charts + Structured Tables */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Card 1: Daily Salary Chart */}
          <div className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111216]">
            <div className="border-b border-white/10 bg-[#09090B] p-4">
              <img
                src={BRAND_ASSETS.dailySalaryChart}
                alt="Team Rafsa BDG Game Exclusive Daily Salary Income Schedule Chart"
                loading="lazy"
                decoding="async"
                className="mx-auto max-h-[540px] w-full rounded-lg object-contain"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold text-white">
                Daily Salary Tier Breakdown
              </h3>
              <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
                <table className="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-white/10 bg-[#17181E]">
                      <th className="px-4 py-2.5 font-display text-xs font-semibold text-[#FACC15]">
                        Active People
                      </th>
                      <th className="px-4 py-2.5 font-display text-xs font-semibold text-[#FACC15]">
                        Daily Salary
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 font-mono text-xs tabular-nums">
                    {DAILY_SALARY_ROWS.map(([people, salary]) => (
                      <tr key={people} className="hover:bg-white/[0.02]">
                        <td className="px-4 py-2.5 text-zinc-200">{people}</td>
                        <td className="px-4 py-2.5 font-semibold text-[#FACC15]">{salary}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-5 space-y-1.5 text-xs leading-relaxed text-zinc-400">
                <p className="font-semibold text-zinc-200">Stated Terms &amp; Conditions:</p>
                <p>• Must be active and recharge daily to play; fake members result in salary hold.</p>
                <p>• Same IP, same bank details, or same phone number cannot claim salary.</p>
                <p>• At least 15% new member deposit ratio is required to qualify.</p>
              </div>
            </div>
          </div>

          {/* Card 2: Ads Fund Chart */}
          <div className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111216]">
            <div className="border-b border-white/10 bg-[#09090B] p-4">
              <img
                src={BRAND_ASSETS.adsFundChart}
                alt="Team Rafsa BDG Game Tier-1 Ads Fund Chart and Qualification Rules"
                loading="lazy"
                decoding="async"
                className="mx-auto max-h-[540px] w-full rounded-lg object-contain"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold text-white">
                Tier-1 Ads Fund Breakdown
              </h3>
              <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
                <table className="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-white/10 bg-[#17181E]">
                      <th className="px-3.5 py-2.5 font-display text-xs font-semibold text-[#FACC15]">
                        Daily New Deposit Member
                      </th>
                      <th className="px-3.5 py-2.5 font-display text-xs font-semibold text-[#FACC15]">
                        Deposit Amount
                      </th>
                      <th className="px-3.5 py-2.5 font-display text-xs font-semibold text-[#FACC15]">
                        Ads Fund
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 font-mono text-xs tabular-nums">
                    {ADS_FUND_ROWS.map(([members, deposit, fund]) => (
                      <tr key={members} className="hover:bg-white/[0.02]">
                        <td className="px-3.5 py-2.5 text-zinc-200">{members}</td>
                        <td className="px-3.5 py-2.5 text-zinc-300">{deposit}</td>
                        <td className="px-3.5 py-2.5 font-semibold text-[#FACC15]">{fund}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-5 space-y-1.5 text-xs leading-relaxed text-zinc-400">
                <p className="font-semibold text-zinc-200">Qualification Rules:</p>
                <p>• Only verified Wingo bettors qualify; no multi-account or arbitrage betting.</p>
                <p>• Consistent performance up to 3rd deposit and 1,000+ average recharge required.</p>
                <p>• Must be a daily salary achiever to qualify for Ads Fund support.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Subordinate Data & Salary Proof Screenshots */}
        <div className="mt-12 border-t border-white/10 pt-10">
          <div className="mb-6">
            <p className="mb-1.5 font-mono text-xs tabular-nums text-[#FACC15]">
              Dashboard Data &amp; Transaction Reference
            </p>
            <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
              Subordinate Data &amp; Salary Credit Proof
            </h3>
            <p className="mt-2 max-w-2xl text-sm text-zinc-300">
              Sample reference screenshots showing how team subordinate activity metrics and daily
              bonus/salary settlements appear inside the promotion and wallet transaction history
              tabs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Subordinate Data Card */}
            <div className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111216]/85 backdrop-blur-md">
              <div className="border-b border-white/10 bg-[#09090B] p-4">
                <img
                  src={BRAND_ASSETS.subordinateDataImg}
                  alt="BDG Game Subordinate Data dashboard showing deposit number, deposit amount, active bettors, total bet volume, and level commissions"
                  loading="lazy"
                  decoding="async"
                  className="mx-auto max-h-[520px] w-full rounded-lg object-contain"
                />
              </div>
              <div className="p-6">
                <h4 className="font-display text-lg font-semibold text-white">
                  Subordinate Data Breakdown (2026-11-02)
                </h4>
                <div className="mt-4 grid grid-cols-2 gap-3 font-mono text-xs tabular-nums">
                  <div className="rounded-lg border border-white/10 bg-[#16171E] p-3">
                    <span className="block text-zinc-400">Deposit Number</span>
                    <span className="mt-1 block text-base font-semibold text-white">10</span>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-[#16171E] p-3">
                    <span className="block text-zinc-400">Deposit Amount</span>
                    <span className="mt-1 block text-base font-semibold text-[#FACC15]">
                      16,400
                    </span>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-[#16171E] p-3">
                    <span className="block text-zinc-400">Number of Bettors</span>
                    <span className="mt-1 block text-base font-semibold text-white">29</span>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-[#16171E] p-3">
                    <span className="block text-zinc-400">Total Bet Volume</span>
                    <span className="mt-1 block text-base font-semibold text-[#FACC15]">
                      266,465.49
                    </span>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-[#16171E] p-3">
                    <span className="block text-zinc-400">First Deposit People</span>
                    <span className="mt-1 block text-base font-semibold text-white">2</span>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-[#16171E] p-3">
                    <span className="block text-zinc-400">First Deposit Amount</span>
                    <span className="mt-1 block text-base font-semibold text-[#FACC15]">700</span>
                  </div>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-zinc-400">
                  The Subordinate Data screen tracks daily deposits, bettor participation, and
                  tier-by-tier commission records by user ID (UID) and date.
                </p>
              </div>
            </div>

            {/* Salary / Bonus Proof Card */}
            <div className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111216]/85 backdrop-blur-md">
              <div className="border-b border-white/10 bg-[#09090B] p-4">
                <img
                  src={BRAND_ASSETS.salaryProofImg}
                  alt="BDG Game wallet transaction history showing Bonus salary credits of ₹3,000.00 on 2026-11-02 and 2026-11-03"
                  loading="lazy"
                  decoding="async"
                  className="mx-auto max-h-[520px] w-full rounded-lg object-contain"
                />
              </div>
              <div className="p-6">
                <h4 className="font-display text-lg font-semibold text-white">
                  Bonus &amp; Salary Transaction Ledger
                </h4>
                <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
                  <table className="w-full border-collapse text-left text-xs">
                    <thead>
                      <tr className="border-b border-white/10 bg-[#17181E]">
                        <th className="px-3.5 py-2.5 font-display font-semibold text-[#FACC15]">
                          Type
                        </th>
                        <th className="px-3.5 py-2.5 font-display font-semibold text-[#FACC15]">
                          Timestamp
                        </th>
                        <th className="px-3.5 py-2.5 font-display font-semibold text-[#FACC15]">
                          Credited Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10 font-mono tabular-nums">
                      <tr>
                        <td className="px-3.5 py-2.5 text-zinc-200">Bonus</td>
                        <td className="px-3.5 py-2.5 text-zinc-300">2026-11-03 21:47:05</td>
                        <td className="px-3.5 py-2.5 font-semibold text-emerald-400">₹3,000.00</td>
                      </tr>
                      <tr>
                        <td className="px-3.5 py-2.5 text-zinc-200">Bonus</td>
                        <td className="px-3.5 py-2.5 text-zinc-300">2026-11-02 22:11:24</td>
                        <td className="px-3.5 py-2.5 font-semibold text-emerald-400">₹3,000.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-zinc-400">
                  Qualifying team activity credits appear under the Wallet &rarr; Transaction History
                  filter as Bonus entries. Individual results vary based on active referrals,
                  deposits, and platform verification rules.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-white/10 bg-[#111216]/85 backdrop-blur-md px-5 py-4 text-xs text-zinc-400">
          <span>
            Note: Promotional salary, ads fund schedules, and historical bonus screenshots reflect
            conditional promotion rules and are not guaranteed income.
          </span>
          <a
            href={EXTERNAL_LINKS.telegram}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-1.5 font-semibold text-[#FACC15] hover:underline"
          >
            <span>Verify updates on Telegram</span>
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
