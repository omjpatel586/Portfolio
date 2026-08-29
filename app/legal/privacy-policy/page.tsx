import { buildMetadata } from "@/app/utils/metadata";
import { CONTACT_INFO } from "@/data/contact-info";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: `Privacy Policy for ${CONTACT_INFO.siteUrl}, the personal portfolio website of ${CONTACT_INFO.name}.`,
  path: "/legal/privacy-policy",
  keywords: [
    "Om J Patel privacy policy",
    "omjpatel.dev privacy",
    "portfolio website privacy policy",
  ],
});

const sections = [
  { id: "information-we-collect", label: "Information we collect" },
  { id: "how-information-is-used", label: "How information is used" },
  { id: "cookies", label: "Cookies and similar technologies" },
  { id: "advertising", label: "Google AdSense and advertising" },
  { id: "third-party-services", label: "Third-party services and links" },
  { id: "data-sharing", label: "Data sharing" },
  { id: "data-security", label: "Data security" },
  { id: "data-retention", label: "Data retention" },
  { id: "privacy-rights", label: "Your privacy rights" },
  { id: "childrens-privacy", label: "Children's privacy" },
  { id: "international-visitors", label: "International visitors" },
  { id: "changes", label: "Changes to this policy" },
  { id: "contact", label: "Contact" },
];

const informationProvided = [
  "Your name",
  "Email address",
  "Message or inquiry",
  "Professional or project-related information you choose to provide",
];

const automaticallyCollected = [
  "IP address",
  "Browser and device type",
  "Operating system",
  "Pages visited",
  "Referring website",
  "Date and time of access",
  "General usage and interaction information",
  "Other technical information required for security, functionality, analytics, or advertising",
];

const informationUses = [
  "Respond to inquiries and messages",
  "Communicate regarding professional opportunities or collaborations",
  "Provide and maintain the website",
  "Improve website performance and user experience",
  "Understand website usage and traffic",
  "Maintain website security and prevent abuse",
  "Display and measure advertising",
  "Comply with applicable legal obligations",
];

const serviceReasons = [
  "Operate and maintain the website",
  "Provide hosting or infrastructure",
  "Process communications",
  "Provide analytics or security services",
  "Deliver and measure advertising",
  "Comply with legal requirements",
];

const privacyRights = [
  "Request access to personal information",
  "Request correction of inaccurate information",
  "Request deletion of information where applicable",
  "Object to or restrict certain processing",
  "Withdraw consent where processing is based on consent",
  "Request information about how your data is processed",
];

function PolicySection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-t border-brand/20 pt-8 first:border-t-0 first:pt-0"
    >
      <div className="mb-4 flex items-baseline gap-3">
        <span className="font-mono text-sm text-brand">{String(number).padStart(2, "0")}</span>
        <h2 className="text-xl font-semibold tracking-tight text-brand-light md:text-2xl">
          {title}
        </h2>
      </div>
      <div className="space-y-4 text-sm leading-7 text-brand-light/75 md:text-base">{children}</div>
    </section>
  );
}

function PolicyList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 pl-5 marker:text-brand">
      {items.map((item) => (
        <li key={item} className="pl-2">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto w-[min(100%-2rem,1180px)] py-12 md:py-20">
      <header className="mb-12 max-w-3xl md:mb-16">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-brand">
          Legal / Privacy
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-brand-light md:text-6xl">
          Privacy Policy
        </h1>
        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-brand-light/60">
          <span>Last updated: August 29, 2026</span>
          <span className="hidden text-brand md:inline">•</span>
          <span>{CONTACT_INFO.siteUrl.replace("https://", "")}</span>
        </div>
        <p className="mt-8 max-w-2xl text-base leading-8 text-brand-light/75 md:text-lg">
          Welcome to{" "}
          <span className="text-brand">{CONTACT_INFO.siteUrl.replace("https://", "")}</span>, the
          personal portfolio website of{" "}
          <span className="text-brand-light">{CONTACT_INFO.name}</span>. This Privacy Policy
          explains how information may be collected, used, and protected when you visit or interact
          with this website.
        </p>
        <p className="mt-4 text-sm leading-7 text-brand-light/60">
          By using this website, you acknowledge the practices described in this Privacy Policy.
        </p>
      </header>

      <div className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start lg:gap-16">
        <aside className="lg:sticky lg:top-28">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-light/45">
            On this page
          </p>
          <nav
            aria-label="Privacy Policy sections"
            className="grid gap-2 border-l border-brand/25 pl-4 text-sm text-brand-light/60"
          >
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="transition-colors hover:text-brand"
              >
                {section.label}
              </a>
            ))}
          </nav>
        </aside>

        <article className="rounded-3xl border border-brand/20 bg-surface/70 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.2)] md:p-10 lg:p-12">
          <div className="space-y-10">
            <PolicySection id="information-we-collect" number={1} title="Information We Collect">
              <p>The information collected depends on how you interact with the website.</p>
              <h3 className="pt-2 font-semibold text-brand-light">Information You Provide</h3>
              <p>
                If you contact me through a contact form, email, or another communication method
                provided on this website, you may voluntarily provide information such as:
              </p>
              <PolicyList items={informationProvided} />
              <p>
                This information is used only for legitimate communication and the purpose for which
                it was provided.
              </p>
              <h3 className="pt-2 font-semibold text-brand-light">
                Information Collected Automatically
              </h3>
              <p>
                When you visit the website, certain technical information may be collected
                automatically by the website, hosting providers, security services, analytics
                services, or advertising services.
              </p>
              <p>This may include information such as:</p>
              <PolicyList items={automaticallyCollected} />
            </PolicySection>

            <PolicySection id="how-information-is-used" number={2} title="How Information Is Used">
              <p>Information may be used to:</p>
              <PolicyList items={informationUses} />
              <p>
                I do not intentionally collect personal information that is unnecessary for these
                purposes.
              </p>
            </PolicySection>

            <PolicySection id="cookies" number={3} title="Cookies and Similar Technologies">
              <p>
                This website may use cookies, local storage, or similar technologies to provide
                website functionality, understand usage, maintain security, and support advertising
                services.
              </p>
              <p>
                Cookies are small data files stored on your device by websites and their service
                providers.
              </p>
              <p>
                You can control or restrict cookies through your browser settings. Disabling certain
                cookies may affect some website functionality or advertising preferences.
              </p>
            </PolicySection>

            <PolicySection id="advertising" number={4} title="Google AdSense and Advertising">
              <p>
                This website may use{" "}
                <strong className="font-medium text-brand-light">Google AdSense</strong> to display
                advertisements on selected technical articles, blog posts, and other content pages
                where advertising is enabled.
              </p>
              <p>
                Advertisements are not necessarily displayed across all sections of the website.
                Pages such as the homepage, portfolio sections, project pages, experience,
                education, and contact pages may not contain advertisements.
              </p>
              <p>
                Google and its advertising partners may use cookies, web beacons, IP addresses, or
                similar technologies to provide, measure, and personalize advertising based on
                applicable settings and user choices.
              </p>
              <p>
                Advertising cookies may allow Google and its partners to serve advertisements based
                on a user&apos;s visits to this website and other websites.
              </p>
              <p>
                Users may manage or control personalized advertising preferences through
                Google&apos;s advertising settings and available privacy controls.
              </p>
              <p>
                he availability, placement, and type of advertisements displayed on the website may
                change over time and are determined in accordance with applicable Google AdSense
                policies and settings.
              </p>
            </PolicySection>

            <PolicySection
              id="third-party-services"
              number={5}
              title="Third-Party Services and Links"
            >
              <p>
                This website may contain links to third-party websites and services, including
                professional platforms, project websites, software repositories, social networks,
                and other external resources.
              </p>
              <p>
                Examples may include services such as GitHub, LinkedIn, or other websites referenced
                throughout the portfolio.
              </p>
              <p>
                Third-party websites operate under their own privacy policies and terms. I do not
                control and am not responsible for the privacy practices, security, content, or
                availability of third-party websites.
              </p>
              <p>
                You should review the privacy policies of external services before providing them
                with personal information.
              </p>
            </PolicySection>

            <PolicySection id="data-sharing" number={6} title="Data Sharing">
              <p>Personal information is not intentionally sold or rented to third parties.</p>
              <p>
                Information may be processed or shared with service providers when reasonably
                necessary to:
              </p>
              <PolicyList items={serviceReasons} />
              <p>
                Third-party providers are responsible for handling information according to their
                own applicable policies and legal obligations.
              </p>
            </PolicySection>

            <PolicySection id="data-security" number={7} title="Data Security">
              <p>
                Reasonable technical and organizational measures may be used to protect information
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <p>
                However, no website, internet transmission, or electronic storage system can be
                guaranteed to be completely secure.
              </p>
            </PolicySection>

            <PolicySection id="data-retention" number={8} title="Data Retention">
              <p>
                Information submitted voluntarily through the website may be retained only for as
                long as reasonably necessary to respond to inquiries, maintain legitimate business
                or professional records, provide requested services, or comply with applicable legal
                obligations.
              </p>
              <p>
                The retention period may vary depending on the nature of the information and the
                purpose for which it was collected.
              </p>
            </PolicySection>

            <PolicySection id="privacy-rights" number={9} title="Your Privacy Rights">
              <p>
                Depending on your location and applicable law, you may have rights regarding your
                personal information, including the right to:
              </p>
              <PolicyList items={privacyRights} />
              <p>
                To make a privacy-related request, please use the contact information provided
                below.
              </p>
            </PolicySection>

            <PolicySection id="childrens-privacy" number={10} title="Children's Privacy">
              <p>
                This website is a professional portfolio and is not intentionally directed toward
                children.
              </p>
              <p>
                I do not knowingly seek to collect personal information from children through this
                website.
              </p>
            </PolicySection>

            <PolicySection id="international-visitors" number={11} title="International Visitors">
              <p>This website may be accessed by visitors from different countries.</p>
              <p>
                Depending on the services used by the website, information may be processed or
                stored in countries other than the country from which you access the website.
              </p>
              <p>
                Such processing may be subject to the privacy laws and requirements applicable to
                the relevant service providers.
              </p>
            </PolicySection>

            <PolicySection id="changes" number={12} title="Changes to This Privacy Policy">
              <p>
                This Privacy Policy may be updated from time to time to reflect changes to the
                website, services, technologies, legal requirements, or privacy practices.
              </p>
              <p>Any updates will be published on this page with a revised “Last Updated” date.</p>
            </PolicySection>

            <PolicySection id="contact" number={13} title="Contact">
              <p>
                If you have questions, concerns, or requests regarding this Privacy Policy or the
                handling of personal information, please contact:
              </p>
              <div className="rounded-2xl border border-brand/20 bg-brand/5 p-5">
                <p className="font-semibold text-brand-light">{CONTACT_INFO.name}</p>
                <p>
                  Website:{" "}
                  <a href={CONTACT_INFO.siteUrl} className="text-brand hover:text-brand-soft">
                    {CONTACT_INFO.siteUrl}
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-brand hover:text-brand-soft"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </p>
              </div>
              <p>
                For privacy-related inquiries, please use the contact method provided on the
                website&apos;s{" "}
                <Link href="/contact" className="text-brand hover:text-brand-soft">
                  Contact page
                </Link>
                .
              </p>
            </PolicySection>
          </div>

          <div className="mt-12 border-t border-brand/20 pt-6 text-sm text-brand-light/50">
            © 2026 {CONTACT_INFO.name}. All rights reserved.
          </div>
        </article>
      </div>
    </div>
  );
}
