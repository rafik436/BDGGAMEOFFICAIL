import React, { useState } from 'react';
import { CheckCircle2, Mail, ShieldAlert } from 'lucide-react';
import { Link } from '../lib/router';
import { usePageSeo } from '../lib/seo';
import { Breadcrumbs } from '../components/Breadcrumbs';

export function AboutPage() {
  usePageSeo({
    title: 'About Us – BDG Game Official Editorial Standards',
    description:
      'Learn about BDGGameOfficial.net, our independent editorial mission, content verification standards, and commitment to accurate gaming user guides.',
    canonicalPath: '/about/',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'About Us', path: '/about/' },
    ],
  });

  return (
    <div className="bg-[#09090B]/20 py-12 lg:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Breadcrumbs
          items={[
            { name: 'Home', path: '/' },
            { name: 'About Us', path: '/about/' },
          ]}
        />
        <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">
          About BDG Game Official
        </h1>
        <div className="mt-6 max-w-prose space-y-5 text-base leading-relaxed text-zinc-300">
          <p>
            BDGGameOfficial.net is an independent educational and informational publication created
            to give players, researchers, and everyday mobile users clear, accurate guidance on BDG
            Game concepts, account safety, gameplay rules, and financial verification practices.
          </p>
          <h2 className="pt-4 font-display text-2xl font-semibold text-white">
            Why We Built This Resource
          </h2>
          <p>
            Search results around online prediction and gaming platforms are frequently crowded
            with exaggerated bonus claims, fake "prediction trick" promises, unverified APK mirrors,
            and misleading recruitment posts. Our objective is to replace noise with factual,
            transparent documentation that helps users make informed decisions and avoid online
            scams.
          </p>
          <h2 className="pt-4 font-display text-2xl font-semibold text-white">
            Editorial Independence &amp; Standards
          </h2>
          <ul className="space-y-2.5 rounded-xl border border-white/10 bg-[#111216] p-5 text-sm text-zinc-200">
            <li>
              • We are not owned by, affiliated with, or compensated as an official operator of any
              BDG Game platform.
            </li>
            <li>
              • We never publish fabricated user testimonials, guaranteed winning formulas, or
              invented login/download URLs.
            </li>
            <li>
              • All guides highlight age restrictions (18+), regional legal compliance, and
              financial risk transparently.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export function ContactPage() {
  usePageSeo({
    title: 'Contact Us – BDG Game Official',
    description:
      'Get in touch with the BDGGameOfficial.net editorial team for content corrections, broken link reports, or informational inquiries.',
    canonicalPath: '/contact/',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Contact Us', path: '/contact/' },
    ],
  });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Editorial Correction');
  const [message, setMessage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (name.trim().length < 2) {
      setError('Please enter your name (at least 2 characters).');
      return;
    }
    if (!emailPattern.test(email.trim())) {
      setError('Please provide a valid email address.');
      return;
    }
    if (message.trim().length < 15) {
      setError('Please write a message of at least 15 characters.');
      return;
    }
    setError(null);
    setSubmitted(true);
  };

  return (
    <div className="bg-[#09090B]/20 py-12 lg:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Breadcrumbs
          items={[
            { name: 'Home', path: '/' },
            { name: 'Contact Us', path: '/contact/' },
          ]}
        />
        <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">Contact Us</h1>
        <p className="mt-3 max-w-2xl text-base text-zinc-300">
          Have a factual correction, accessibility suggestion, or general question about our
          educational articles? Use the form below to reach our editorial team.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="rounded-xl border border-[#FACC15]/40 bg-[#111216] p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-[#FACC15]" />
                  <div>
                    <h2 className="font-display text-xl font-semibold text-white">
                      Inquiry Prepared
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                      Thank you, {name}. Your {topic.toLowerCase()} message has been recorded for
                      review. Please note that as an independent informational site, we cannot assist
                      with external platform account logins, deposits, or withdrawals.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setName('');
                        setEmail('');
                        setMessage('');
                      }}
                      className="mt-4 rounded-lg bg-[#FACC15] px-4 py-2 text-xs font-semibold text-[#09090B]"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-5 rounded-xl border border-white/10 bg-[#111216] p-6"
              >
                {error && (
                  <div
                    role="alert"
                    className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200"
                  >
                    {error}
                  </div>
                )}

                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-white">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="mt-1.5 w-full rounded-lg border border-white/15 bg-[#09090B] px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:border-[#FACC15] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-white">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="mt-1.5 w-full rounded-lg border border-white/15 bg-[#09090B] px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:border-[#FACC15] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="contact-topic" className="block text-sm font-medium text-white">
                    Inquiry Topic
                  </label>
                  <select
                    id="contact-topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-white/15 bg-[#09090B] px-3.5 py-2.5 text-sm text-white focus:border-[#FACC15] focus:outline-none"
                  >
                    <option value="Editorial Correction">Editorial Correction</option>
                    <option value="Safety & Scam Report">Safety &amp; Scam Report</option>
                    <option value="Technical / SEO Feedback">Technical / SEO Feedback</option>
                    <option value="Privacy Request">Privacy Request</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-white">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your feedback or correction..."
                    className="mt-1.5 w-full rounded-lg border border-white/15 bg-[#09090B] px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:border-[#FACC15] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#FACC15] px-6 py-2.5 text-sm font-semibold text-[#09090B] transition-colors hover:bg-[#EAB308]"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>

          <div className="space-y-5 lg:col-span-5">
            <div className="rounded-xl border border-white/10 bg-[#111216] p-6">
              <div className="flex items-center gap-2.5 text-[#FACC15]">
                <Mail className="h-5 w-5" aria-hidden="true" />
                <h2 className="font-display text-base font-semibold text-white">
                  Editorial Desk
                </h2>
              </div>
              <p className="mt-2 text-sm text-zinc-300">
                Direct editorial correspondence:{' '}
                <span className="font-medium text-white">editorial@bdggameofficial.net</span>
              </p>
            </div>

            <div className="rounded-xl border border-[#FACC15]/30 bg-[#121318] p-6">
              <div className="flex items-center gap-2.5 text-[#FACC15]">
                <ShieldAlert className="h-5 w-5" aria-hidden="true" />
                <h2 className="font-display text-base font-semibold text-white">
                  Account Support Notice
                </h2>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                BDGGameOfficial.net cannot reset passwords, verify KYC documents, or process
                deposits and withdrawals for any gaming platform. Never send passwords, OTPs, or
                bank details through this contact form.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PrivacyPolicyPage() {
  usePageSeo({
    title: 'Privacy Policy – BDG Game Official',
    description:
      'Privacy Policy explaining how BDGGameOfficial.net handles minimal technical data, cookies, external links, and user privacy rights.',
    canonicalPath: '/privacy-policy/',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Privacy Policy', path: '/privacy-policy/' },
    ],
  });

  return (
    <div className="bg-[#09090B]/20 py-12 lg:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Breadcrumbs
          items={[
            { name: 'Home', path: '/' },
            { name: 'Privacy Policy', path: '/privacy-policy/' },
          ]}
        />
        <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-xs text-zinc-400">Effective Date: November 12, 2026</p>
        <div className="mt-6 max-w-prose space-y-5 text-base leading-relaxed text-zinc-300">
          <p>
            BDGGameOfficial.net respects visitor privacy. Because this website operates solely as
            an informational publication, we do not require user accounts, collect banking details,
            or process payment transactions.
          </p>
          <h2 className="pt-3 font-display text-xl font-semibold text-white">
            1. Information We Collect
          </h2>
          <p>
            Standard server logs may record non-identifying technical metadata (such as browser
            type, screen resolution, and referring page) to preserve site security and performance.
            If you voluntarily submit our contact form, we use your provided name and email solely
            to respond to your inquiry.
          </p>
          <h2 className="pt-3 font-display text-xl font-semibold text-white">
            2. Cookies and Analytics
          </h2>
          <p>
            Essential functional storage may be used to maintain navigation state. We do not sell
            visitor data or share personal contact submissions with third-party marketing brokers.
          </p>
          <h2 className="pt-3 font-display text-xl font-semibold text-white">
            3. Third-Party Websites
          </h2>
          <p>
            Any external references discussed in our guides operate under their own separate privacy
            policies and terms. Always review an operator’s privacy policy before submitting
            personal information externally.
          </p>
        </div>
      </div>
    </div>
  );
}

export function TermsPage() {
  usePageSeo({
    title: 'Terms and Conditions – BDG Game Official',
    description:
      'Terms and Conditions governing educational use of BDGGameOfficial.net, age restrictions (18+), and disclaimers of liability.',
    canonicalPath: '/terms/',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Terms and Conditions', path: '/terms/' },
    ],
  });

  return (
    <div className="bg-[#09090B]/20 py-12 lg:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Breadcrumbs
          items={[
            { name: 'Home', path: '/' },
            { name: 'Terms and Conditions', path: '/terms/' },
          ]}
        />
        <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Terms and Conditions
        </h1>
        <p className="mt-2 text-xs text-zinc-400">Last Updated: November 12, 2026</p>
        <div className="mt-6 max-w-prose space-y-5 text-base leading-relaxed text-zinc-300">
          <p>
            By accessing BDGGameOfficial.net, you agree to use all articles, guides, and reference
            materials strictly for lawful, informational purposes.
          </p>
          <h2 className="pt-3 font-display text-xl font-semibold text-white">
            1. Informational Nature Only
          </h2>
          <p>
            Nothing published on this website constitutes financial advice, legal counsel, or an
            invitation to wager. You remain solely responsible for verifying whether online gaming
            platforms are legal in your jurisdiction.
          </p>
          <h2 className="pt-3 font-display text-xl font-semibold text-white">
            2. Age Eligibility (18+)
          </h2>
          <p>
            Content discussing real-money or prize-based gaming mechanics is intended exclusively
            for adults aged 18 years or older (or the applicable age of majority in your region).
          </p>
          <h2 className="pt-3 font-display text-xl font-semibold text-white">
            3. Limitation of Liability
          </h2>
          <p>
            BDGGameOfficial.net is not responsible for financial losses, account disputes, payment
            delays, or software issues arising from third-party gaming platforms.
          </p>
        </div>
      </div>
    </div>
  );
}

export function DisclaimerPage() {
  usePageSeo({
    title: 'Disclaimer – Independent Informational Notice | BDG Game Official',
    description:
      'Official disclaimer clarifying that BDGGameOfficial.net is an independent informational portal not affiliated with any BDG Game operator.',
    canonicalPath: '/disclaimer/',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Disclaimer', path: '/disclaimer/' },
    ],
  });

  return (
    <div className="bg-[#09090B]/20 py-12 lg:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Breadcrumbs
          items={[
            { name: 'Home', path: '/' },
            { name: 'Disclaimer', path: '/disclaimer/' },
          ]}
        />
        <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">Disclaimer</h1>

        <div className="mt-6 rounded-2xl border border-[#FACC15]/35 bg-[#121318] p-6 sm:p-8">
          <h2 className="font-display text-xl font-semibold text-[#FACC15]">
            Non-Affiliation Statement
          </h2>
          <p className="mt-3 text-base leading-relaxed text-zinc-200">
            BDGGameOfficial.net is an independent informational website. It is not affiliated with,
            endorsed by, or operated by any BDG Game platform or operator. Users should
            independently verify platform details, applicable laws and terms before using any gaming
            service.
          </p>
        </div>

        <div className="mt-8 max-w-prose space-y-5 text-base leading-relaxed text-zinc-300">
          <h2 className="font-display text-xl font-semibold text-white">
            Financial Risk &amp; No Guarantees
          </h2>
          <p>
            Participation in prediction, skill, or chance-based online gaming involves financial
            risk. No strategy, statistical chart, or guide published on this site can guarantee
            winnings, salary earnings, or withdrawal approvals on external websites.
          </p>
          <h2 className="font-display text-xl font-semibold text-white">
            Legal &amp; Age Compliance
          </h2>
          <p>
            Laws regulating online gaming vary by state, province, and country. Visitors must ensure
            they are at least 18 years old and comply strictly with local laws before registering on
            any external gaming service.
          </p>
          <div className="pt-4">
            <Link to="/" className="text-sm font-semibold text-[#FACC15] hover:underline">
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
