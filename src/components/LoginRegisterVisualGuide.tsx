import { LogIn, UserPlus, CheckCircle2, ArrowRight } from 'lucide-react';
import { BRAND_ASSETS, EXTERNAL_LINKS } from '../data/links';
import { Link } from '../lib/router';

interface LoginRegisterVisualGuideProps {
  mode?: 'both' | 'register' | 'login';
}

const REGISTER_STEPS = [
  {
    title: '1. Open the Registration Screen',
    detail:
      'Tap the Register button to open the official signup form. Confirm the page loads securely in your mobile browser or app.',
  },
  {
    title: '2. Select Country Code & Enter Phone Number',
    detail:
      'Choose your country code (for example +91) from the dropdown and type your active 10-digit mobile number accurately without extra spaces.',
  },
  {
    title: '3. Set Password & Confirm Password',
    detail:
      'Under "Set password", create a strong combination of letters and numbers. Re-type the exact same password under "Confirm password" and tap the eye icon to verify there are no typos.',
  },
  {
    title: '4. Check the Invite Code',
    detail:
      'Verify the "Invite code" field (4561422700756 populates automatically when you open the registration link).',
  },
  {
    title: '5. Agree to Privacy Terms & Tap Register',
    detail:
      'Tick the "I have read and agree [Privacy Agreement]" checkbox, then tap the yellow Register button at the bottom to complete account creation.',
  },
];

const LOGIN_STEPS = [
  {
    title: '1. Go to the Log In Screen',
    detail:
      'Tap the Login button on this guide or select "I have an account Login" below the registration form.',
  },
  {
    title: '2. Choose Phone Number or Email / Account',
    detail:
      'At the top of the Log in form, select the "phone number" tab (default) or switch to "Email / Account" depending on how you registered.',
  },
  {
    title: '3. Enter Your Registered Phone Number',
    detail:
      'Confirm your country code (+91) and enter the exact mobile number linked to your account.',
  },
  {
    title: '4. Enter Password & Optional Remember Toggle',
    detail:
      'Type your account password carefully. Enable "Remember password" only on your personal phone—leave it unchecked on shared devices.',
  },
  {
    title: '5. Tap Log In (or Use Recovery Options)',
    detail:
      'Tap the Log in button to sign in to your dashboard. If you forgot your credentials, use the "Forgot password" or "Customer Service" icons below the button.',
  },
];

export function LoginRegisterVisualGuide({ mode = 'both' }: LoginRegisterVisualGuideProps) {
  const showRegister = mode === 'both' || mode === 'register';
  const showLogin = mode === 'both' || mode === 'login';

  return (
    <div
      className={`grid grid-cols-1 gap-8 ${
        mode === 'both' ? 'lg:grid-cols-2' : 'lg:grid-cols-1'
      }`}
    >
      {showRegister && (
        <article className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111216]">
          <div className="border-b border-white/10 bg-[#09090B] p-5">
            <div className="mx-auto max-w-[300px] overflow-hidden rounded-xl border border-white/10 bg-black">
              <img
                src={BRAND_ASSETS.registerGuideImg}
                alt="Step-by-step BDG Game mobile registration screen showing phone number, set password, confirm password, invite code, privacy agreement checkbox, and Register button"
                loading="lazy"
                decoding="async"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
            <div>
              <p className="mb-1.5 font-mono text-xs tabular-nums text-[#FACC15]">
                Visual Registration Walkthrough
              </p>
              <h3 className="font-display text-2xl font-bold text-white">
                How to Register on BDG Game
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                Follow the exact screen fields shown above to create a new account safely and avoid
                password or phone number entry mistakes.
              </p>

              <ol className="mt-5 space-y-3.5">
                {REGISTER_STEPS.map((step) => (
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
                <UserPlus className="h-4 w-4" aria-hidden="true" />
                <span>Open Register Page</span>
              </a>
              <Link
                to="/bdg-game-register/"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FACC15] hover:underline"
              >
                <span>Full Registration Safety Guide</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </article>
      )}

      {showLogin && (
        <article className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111216]">
          <div className="border-b border-white/10 bg-[#09090B] p-5">
            <div className="mx-auto max-w-[300px] overflow-hidden rounded-xl border border-white/10 bg-black">
              <img
                src={BRAND_ASSETS.loginGuideImg}
                alt="Step-by-step BDG Game mobile login screen showing phone number tab, password field, remember password option, Log in button, and Forgot password link"
                loading="lazy"
                decoding="async"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
            <div>
              <p className="mb-1.5 font-mono text-xs tabular-nums text-[#FACC15]">
                Visual Sign-In Walkthrough
              </p>
              <h3 className="font-display text-2xl font-bold text-white">
                How to Login to BDG Game
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                Use your registered mobile number or email credentials as shown in the login screen
                above to sign in securely.
              </p>

              <ol className="mt-5 space-y-3.5">
                {LOGIN_STEPS.map((step) => (
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
                <LogIn className="h-4 w-4" aria-hidden="true" />
                <span>Open Login Page</span>
              </a>
              <Link
                to="/bdg-game-login/"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FACC15] hover:underline"
              >
                <span>Full Login Troubleshooting Guide</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </article>
      )}
    </div>
  );
}
