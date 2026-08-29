import { buildMetadata } from "@/app/utils/metadata";
import { CONTACT_INFO } from "@/data/contact-info";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description: `Terms of Service for ${CONTACT_INFO.siteUrl}, the personal portfolio website of ${CONTACT_INFO.name}.`,
  path: "/legal/terms-of-service",
  keywords: ["Om J Patel terms of service", "omjpatel.dev terms", "portfolio website terms"],
});

const terms = [
  [
    "Purpose of This Website",
    `This is a personal professional portfolio created to present ${CONTACT_INFO.name}'s professional experience, software engineering work, backend development, DevOps and cloud engineering, artificial intelligence, technical skills, projects, education, certifications, technical knowledge, and professional achievements. The information provided is intended primarily for professional, educational, and informational purposes.`,
  ],
  [
    "Use of the Website",
    "You may access and use this website for lawful purposes and in accordance with these Terms. You agree not to attempt unauthorized access, interfere with the website or its security, introduce malware or harmful software, disrupt availability, use the website unlawfully or fraudulently, impersonate another person, misuse contact forms, or intentionally abuse website functionality.",
  ],
  [
    "Website Content",
    "Reasonable efforts are made to provide accurate and current information. However, information may change over time, and I do not guarantee that it will always be complete, accurate, or up to date. Portfolio information may be updated periodically.",
  ],
  [
    "Project Information",
    "This portfolio may describe software projects, products, systems, architectures, technologies, and professional work. Project descriptions are provided for professional and informational purposes. Some information may be limited or generalized to protect confidential, proprietary, private, or commercially sensitive information. Nothing on this website should be interpreted as a disclosure of confidential or proprietary information.",
  ],
  [
    "Intellectual Property",
    `Unless otherwise stated, original content created specifically for this website, including written content, portfolio materials, design elements, graphics, and other original works, belongs to ${CONTACT_INFO.name} or is used with appropriate permission. You may not reproduce, republish, distribute, modify, or commercially exploit original website content without appropriate permission, except where permitted by applicable law. Third-party names, trademarks, logos, software, products, services, and other intellectual property remain the property of their respective owners.`,
  ],
  [
    "Third-Party Websites and Services",
    "This website may contain links to third-party websites, applications, repositories, social networks, project websites, and other external resources. These links are provided for convenience. I do not control third-party websites and am not responsible for their content, availability, security, privacy practices, terms of service, accuracy, or policies. Your use of third-party websites is subject to their respective terms and policies.",
  ],
  [
    "Technical Articles and Information",
    "Technical articles, notes, examples, opinions, and other educational material are provided for informational and educational purposes. Technical information may become outdated as software, frameworks, libraries, platforms, and best practices evolve. Independently evaluate and test technical information before using it. Nothing published here constitutes legal, financial, medical, security, or other professional advice.",
  ],
  [
    "Website Availability",
    "Reasonable efforts may be made to keep the website available and functioning properly. However, uninterrupted availability cannot be guaranteed. The website may be unavailable because of maintenance, software updates, infrastructure or hosting issues, security measures, technical failures, third-party service interruptions, or circumstances outside reasonable control.",
  ],
  [
    "Advertising",
    `Advertisements may be displayed on selected technical articles, blog posts, and other content pages through third-party advertising services, including Google AdSense.

Advertisements are not necessarily displayed throughout the entire website.

Advertisements are provided by independent advertisers and advertising platforms. I do not necessarily endorse or guarantee the products, services, claims, or content presented in advertisements.

Any interaction, transaction, or relationship you establish with an advertiser is solely between you and the relevant advertiser or service provider.

The availability, placement, and content of advertisements may change from time to time in accordance with applicable advertising policies and website requirements.`,
  ],
  [
    "Limitation of Liability",
    `To the extent permitted by applicable law, ${CONTACT_INFO.name} shall not be responsible for losses, damages, interruptions, or other consequences arising from your use of, or inability to use, this website or information provided through it. This includes reliance on published information, third-party services, external links, temporary unavailability, or technical issues. Nothing in these Terms excludes or limits liability where prohibited by applicable law.`,
  ],
  [
    "Privacy",
    <p key="privacy">
      Your use of this website is also subject to the{" "}
      <Link href="/legal/privacy-policy" className="text-brand hover:text-brand-soft">
        Privacy Policy
      </Link>
      , which explains how information may be collected, used, and processed.
    </p>,
  ],
  [
    "Changes to These Terms",
    "These Terms of Service may be updated from time to time to reflect changes to the website, its functionality, applicable laws, or other circumstances. Updated Terms will be published on this page with a revised “Last Updated” date.",
  ],
  [
    "Contact",
    <>
      <p key="contact-intro">
        If you have questions regarding these Terms of Service, please contact:
      </p>
      <div key="contact-card" className="rounded-2xl border border-brand/20 bg-brand/5 p-5">
        <p className="font-semibold text-brand-light">{CONTACT_INFO.name}</p>
        <p>
          Website:{" "}
          <a href={CONTACT_INFO.siteUrl} className="text-brand hover:text-brand-soft">
            {CONTACT_INFO.siteUrl}
          </a>
        </p>
        <p>
          Email:{" "}
          <a href={`mailto:${CONTACT_INFO.email}`} className="text-brand hover:text-brand-soft">
            {CONTACT_INFO.email}
          </a>
        </p>
      </div>
      <p key="contact-outro">
        You may also use the contact method provided on the website&apos;s{" "}
        <Link href="/contact" className="text-brand hover:text-brand-soft">
          Contact page
        </Link>
        .
      </p>
    </>,
  ],
] as const;

export default function TermsOfServicePage() {
  return (
    <div className="mx-auto w-[min(100%-2rem,1180px)] py-12 md:py-20">
      <header className="mb-12 max-w-3xl md:mb-16">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-brand">
          Legal / Terms
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-brand-light md:text-6xl">
          Terms of Service
        </h1>
        <p className="mt-6 text-sm text-brand-light/60">Last updated: August 29, 2026</p>
        <p className="mt-8 text-base leading-8 text-brand-light/75 md:text-lg">
          Welcome to{" "}
          <span className="text-brand">{CONTACT_INFO.siteUrl.replace("https://", "")}</span>, the
          personal portfolio website of{" "}
          <span className="text-brand-light">{CONTACT_INFO.name}</span>.
        </p>
        <p className="mt-4 text-sm leading-7 text-brand-light/60">
          By accessing or using this website, you agree to comply with these Terms of Service. If
          you do not agree with these terms, please discontinue use of the website.
        </p>
      </header>
      <article className="rounded-3xl border border-brand/20 bg-surface/70 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.2)] md:p-10 lg:p-12">
        <div className="space-y-10">
          {terms.map(([title, content], index) => (
            <section
              key={title}
              className="border-t border-brand/20 pt-8 first:border-t-0 first:pt-0"
            >
              <div className="mb-4 flex items-baseline gap-3">
                <span className="font-mono text-sm text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="text-xl font-semibold tracking-tight text-brand-light md:text-2xl">
                  {title}
                </h2>
              </div>
              <div className="space-y-4 text-sm leading-7 text-brand-light/75 md:text-base">
                {typeof content === "string" ? <p>{content}</p> : content}
              </div>
            </section>
          ))}
        </div>
        <div className="mt-12 border-t border-brand/20 pt-6 text-sm text-brand-light/50">
          © 2026 {CONTACT_INFO.name}. All rights reserved.
        </div>
      </article>
    </div>
  );
}
