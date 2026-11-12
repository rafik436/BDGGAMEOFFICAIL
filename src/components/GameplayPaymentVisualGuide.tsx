import {
  ArrowRight,
  CheckCircle2,
  Gamepad2,
  Gift,
  Wallet,
  ArrowDownToLine,
} from 'lucide-react';
import { BRAND_ASSETS, EXTERNAL_LINKS } from '../data/links';
import { Link } from '../lib/router';

export type VisualGuideMode =
  | 'all'
  | 'play-and-bonus'
  | 'deposit-and-withdraw'
  | 'play'
  | 'bonus'
  | 'deposit'
  | 'withdraw';

interface GameplayPaymentVisualGuideProps {
  mode?: VisualGuideMode;
}

const HOW_TO_PLAY_STEPS = [
  {
    title: '1. Select a Game from the Lobby',
    detail:
      'Open Mini Games or Lottery categories (such as Aviator, Wingo, Mines, or Dragon Tiger) and verify your available wallet balance at the top.',
  },
  {
    title: '2. Review Multiplier History & Round Rules',
    detail:
      'Inspect recent round multipliers and check the game’s payout rules and lock timer before placing an entry.',
  },
  {
    title: '3. Choose Stake & Mode (Bet / Auto)',
    detail:
      'Pick a preset amount (₹10, ₹100, ₹500, ₹1,000) or use +/- controls, then toggle Bet for manual play or Auto for preset limits.',
  },
  {
    title: '4. Confirm Entry & Manage Risk',
    detail:
      'Tap the green Bet button before the round cutoff. Never chase losses and always set strict session limits.',
  },
];

const CLAIM_BONUS_STEPS = [
  {
    title: '1. Open the Activity & Missions Tab',
    detail:
      'Tap "Activity" in the bottom navigation bar to view daily attendance rewards, recharge bonuses, and activity streak gifts.',
  },
  {
    title: '2. Check Floating Spin Wheel & Gift Icons',
    detail:
      'Use the floating "Get ₹500" wheel or gift box icons on the home screen to open eligible bonus draws or redeem verified promo/gift codes.',
  },
  {
    title: '3. Claim Promotion & Invitation Rewards',
    detail:
      'Visit the "Promotion" tab in the bottom bar to inspect valid referral rewards, first-deposit bonuses, and subordinate team rebates.',
  },
  {
    title: '4. Verify Turnover Rules Before Claiming',
    detail:
      'Check each bonus’s wagering (turnover) requirement and expiration timer before claiming so withdrawals remain unobstructed.',
  },
];

const HOW_TO_DEPOSIT_STEPS = [
  {
    title: '1. Open Wallet Deposit & Select Channel',
    detail:
      'Go to Wallet → Deposit, choose your preferred UPI channel (such as ArUpiPay), and enter your recharge amount to start the 15-minute payment timer.',
  },
  {
    title: '2. Choose Paytm / PhonePe or Scan QR Code',
    detail:
      'Tap Paytm/PhonePe wake-up support or scan the on-screen QR code. For amounts above ₹2,000, scan from a second device since gallery QR scans may be capped at ≤₹2,000.',
  },
  {
    title: '3. Pay Exact Displayed Amount',
    detail:
      'Send the exact invoice amount shown at the top (e.g., ₹99.81 after discount) inside your UPI app before the countdown runs out.',
  },
  {
    title: '4. Paste 12-Digit UTR & Tap Submit (Mandatory)',
    detail:
      'Copy the 12-digit UTR number from your UPI payment receipt, paste it into "Input 12 digits here", and tap Submit. Skipping UTR backfill causes deposit failure.',
  },
];

const HOW_TO_WITHDRAW_STEPS = [
  {
    title: '1. Link Your Verified UPI or Bank Account',
    detail:
      'Open Wallet → Withdraw and ensure your registered UPI ID or bank account belongs to you and matches your account details.',
  },
  {
    title: '2. Confirm Turnover & Minimum Balance',
    detail:
      'Verify that required game turnover is cleared and your withdrawable balance meets the platform’s minimum payout threshold.',
  },
  {
    title: '3. Submit Request & Wait for Processing',
    detail:
      'Enter the withdrawal amount, authorize with your security password, and avoid submitting duplicate requests while pending.',
  },
  {
    title: '4. Verify Order Number & UTR in History',
    detail:
      'Track status ("Completed"), Order Number (e.g., WD...), and the 12-digit settlement UTR inside Withdrawal History to confirm bank credit.',
  },
];

export function GameplayPaymentVisualGuide({
  mode = 'all',
}: GameplayPaymentVisualGuideProps) {
  const showPlay =
    mode === 'all' || mode === 'play-and-bonus' || mode === 'play';
  const showBonus =
    mode === 'all' || mode === 'play-and-bonus' || mode === 'bonus';
  const showDeposit =
    mode === 'all' || mode === 'deposit-and-withdraw' || mode === 'deposit';
  const showWithdraw =
    mode === 'all' || mode === 'deposit-and-withdraw' || mode === 'withdraw';

  const activeCount = [showPlay, showBonus, showDeposit, showWithdraw].filter(
    Boolean
  ).length;

  return (
    <div
      className={`grid grid-cols-1 gap-8 ${
        activeCount > 1 ? 'lg:grid-cols-2' : 'lg:grid-cols-1'
      }`}
    >
      {showPlay && (
        <article className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111216]/85 backdrop-blur-md">
          <div className="border-b border-white/10 bg-[#09090B] p-5">
            <div className="mx-auto max-w-[300px] overflow-hidden rounded-xl border border-white/10 bg-black">
              <img
                src={BRAND_ASSETS.howToPlayImg}
                alt="BDG Game gameplay screen showing Aviator live multiplier, preset stake buttons, manual Bet and Auto betting controls, and wallet balance"
                loading="lazy"
                decoding="async"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
            <div>
              <p className="mb-1.5 font-mono text-xs tabular-nums text-[#FACC15]">
                Visual Gameplay Walkthrough
              </p>
              <h3 className="font-display text-2xl font-bold text-white">
                How to Play BDG Game
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                Learn how in-game controls, bet amount selectors, Auto toggles, and live round
                histories appear inside BDG Game rounds such as Aviator and Mini Games.
              </p>

              <ol className="mt-5 space-y-3.5">
                {HOW_TO_PLAY_STEPS.map((step) => (
                  <li
                    key={step.title}
                    className="rounded-xl border border-white/10 bg-[#16171E] p-4"
                  >
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#FACC15]"
                        aria-hidden="true"
                      />
                      <div>
                        <h4 className="font-display text-sm font-semibold text-white">
                          {step.title}
                        </h4>
                        <p className="mt-1 text-xs leading-relaxed text-zinc-300">{step.detail}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
              <a
                href={EXTERNAL_LINKS.registerLoginApk}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex min-h-[42px] items-center gap-2 rounded-lg bg-[#FACC15] px-5 py-2 text-xs font-semibold text-[#09090B] transition-colors hover:bg-[#EAB308]"
              >
                <Gamepad2 className="h-4 w-4" aria-hidden="true" />
                <span>Open Game Lobby</span>
              </a>
              <Link
                to="/how-to-play-bdg-game/"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FACC15] hover:underline"
              >
                <span>Full Gameplay Rules</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </article>
      )}

      {showBonus && (
        <article className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111216]/85 backdrop-blur-md">
          <div className="border-b border-white/10 bg-[#09090B] p-5">
            <div className="mx-auto max-w-[300px] overflow-hidden rounded-xl border border-white/10 bg-black">
              <img
                src={BRAND_ASSETS.lobbyBonusImg}
                alt="BDG Game lobby showing Mini Games, Download App, Customer Service, Activity tab, Get ₹500 bonus wheel, Promotion tab, and Account navigation"
                loading="lazy"
                decoding="async"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
            <div>
              <p className="mb-1.5 font-mono text-xs tabular-nums text-[#FACC15]">
                Bonus, Gift Code &amp; Rewards Guide
              </p>
              <h3 className="font-display text-2xl font-bold text-white">
                How to Claim Bonus in BDG Game
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                Use the Lobby, Activity, Spin Wheel, and Promotion menus shown above to locate
                eligible bonuses and review wagering rules before claiming.
              </p>

              <ol className="mt-5 space-y-3.5">
                {CLAIM_BONUS_STEPS.map((step) => (
                  <li
                    key={step.title}
                    className="rounded-xl border border-white/10 bg-[#16171E] p-4"
                  >
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#FACC15]"
                        aria-hidden="true"
                      />
                      <div>
                        <h4 className="font-display text-sm font-semibold text-white">
                          {step.title}
                        </h4>
                        <p className="mt-1 text-xs leading-relaxed text-zinc-300">{step.detail}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
              <a
                href={EXTERNAL_LINKS.telegram}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex min-h-[42px] items-center gap-2 rounded-lg bg-[#FACC15] px-5 py-2 text-xs font-semibold text-[#09090B] transition-colors hover:bg-[#EAB308]"
              >
                <Gift className="h-4 w-4" aria-hidden="true" />
                <span>Bonus Updates on Telegram</span>
              </a>
              <Link
                to="/bdg-game-salary/"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FACC15] hover:underline"
              >
                <span>View Salary &amp; Bonus Terms</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </article>
      )}

      {showDeposit && (
        <article className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111216]/85 backdrop-blur-md">
          <div className="border-b border-white/10 bg-[#09090B] p-5">
            <div className="mx-auto max-w-[300px] overflow-hidden rounded-xl border border-white/10 bg-black">
              <img
                src={BRAND_ASSETS.depositGuideImg}
                alt="BDG Game ArUpiPay deposit screen showing Paytm and PhonePe options, QR scan instructions, payment timer, and mandatory 12-digit UTR input box"
                loading="lazy"
                decoding="async"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
            <div>
              <p className="mb-1.5 font-mono text-xs tabular-nums text-[#FACC15]">
                Visual UPI &amp; UTR Walkthrough
              </p>
              <h3 className="font-display text-2xl font-bold text-white">
                How to Deposit on BDG Game
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                Follow each ArUpiPay cashier step—especially scanning within the timer and pasting
                your 12-digit UTR—to avoid failed or delayed wallet top-ups.
              </p>

              <ol className="mt-5 space-y-3.5">
                {HOW_TO_DEPOSIT_STEPS.map((step) => (
                  <li
                    key={step.title}
                    className="rounded-xl border border-white/10 bg-[#16171E] p-4"
                  >
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#FACC15]"
                        aria-hidden="true"
                      />
                      <div>
                        <h4 className="font-display text-sm font-semibold text-white">
                          {step.title}
                        </h4>
                        <p className="mt-1 text-xs leading-relaxed text-zinc-300">{step.detail}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
              <a
                href={EXTERNAL_LINKS.registerLoginApk}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex min-h-[42px] items-center gap-2 rounded-lg bg-[#FACC15] px-5 py-2 text-xs font-semibold text-[#09090B] transition-colors hover:bg-[#EAB308]"
              >
                <Wallet className="h-4 w-4" aria-hidden="true" />
                <span>Go to Wallet Portal</span>
              </a>
              <Link
                to="/bdg-game-deposit/"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FACC15] hover:underline"
              >
                <span>Full Deposit Safety Guide</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </article>
      )}

      {showWithdraw && (
        <article className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111216]/85 backdrop-blur-md">
          <div className="border-b border-white/10 bg-[#09090B] p-5">
            <div className="mx-auto max-w-[300px] overflow-hidden rounded-xl border border-white/10 bg-black">
              <img
                src={BRAND_ASSETS.withdrawGuideImg}
                alt="BDG Game Withdraw and Withdrawal History screen displaying completed UPI withdrawals of ₹3,000.00 and ₹500.00 with order numbers and 12-digit UTR numbers"
                loading="lazy"
                decoding="async"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
            <div>
              <p className="mb-1.5 font-mono text-xs tabular-nums text-[#FACC15]">
                Visual Payout &amp; UTR Verification
              </p>
              <h3 className="font-display text-2xl font-bold text-white">
                How to Withdraw on BDG Game
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                Learn how UPI withdrawal requests, order tracking IDs, and 12-digit settlement UTR
                references work inside the Withdrawal History ledger.
              </p>

              <ol className="mt-5 space-y-3.5">
                {HOW_TO_WITHDRAW_STEPS.map((step) => (
                  <li
                    key={step.title}
                    className="rounded-xl border border-white/10 bg-[#16171E] p-4"
                  >
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#FACC15]"
                        aria-hidden="true"
                      />
                      <div>
                        <h4 className="font-display text-sm font-semibold text-white">
                          {step.title}
                        </h4>
                        <p className="mt-1 text-xs leading-relaxed text-zinc-300">{step.detail}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
              <a
                href={EXTERNAL_LINKS.registerLoginApk}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex min-h-[42px] items-center gap-2 rounded-lg bg-[#FACC15] px-5 py-2 text-xs font-semibold text-[#09090B] transition-colors hover:bg-[#EAB308]"
              >
                <ArrowDownToLine className="h-4 w-4" aria-hidden="true" />
                <span>Open Withdraw Section</span>
              </a>
              <Link
                to="/bdg-game-withdraw/"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FACC15] hover:underline"
              >
                <span>Full Withdrawal Conditions</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </article>
      )}
    </div>
  );
}
