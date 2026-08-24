import { buildMetadata } from "@/app/utils/metadata";
import { Icon } from "@/components/Icon";
import { CONTACT_INFO } from "@/data/contact-info";
import { asupxSuite } from "@/data/projects/asupxsuite";
import { testimonials } from "@/data/testimonials";
import Image from "next/image";
import Link from "next/link";

const { path } = asupxSuite;
const { description } = asupxSuite.seo;

export const metadata = buildMetadata({
  title: asupxSuite.seo.title,
  description,
  path,
  keywords: [...asupxSuite.seo.keywords],
});

const umangSharmaReview = testimonials.find((testimonial) => testimonial.name === "Umang Sharma");
const shubhamReview = testimonials.find((testimonial) => testimonial.name === "Shubham");

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: CONTACT_INFO.siteUrl },
        {
          "@type": "ListItem",
          position: 2,
          name: "Industry Projects",
          item: `${CONTACT_INFO.siteUrl}/industry-projects`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "ASUPX Suite V2",
          item: `${CONTACT_INFO.siteUrl}${path}`,
        },
      ],
    },
    {
      "@type": "CreativeWork",
      name: "ASUPX Suite V2 Backend Architecture Case Study",
      url: `${CONTACT_INFO.siteUrl}${path}`,
      description,
      author: { "@type": "Person", name: CONTACT_INFO.name, url: CONTACT_INFO.siteUrl },
      about: { "@type": "SoftwareApplication", name: "ASUPX Suite V2" },
    },
    {
      "@type": "SoftwareApplication",
      name: "ASUPX Suite V2",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Music distribution and royalty management platform",
      operatingSystem: "Web",
      description:
        "A white-label, multi-tenant music distribution and royalty management platform for artists, labels, distributors, and digital service providers.",
      creator: { "@type": "Person", name: CONTACT_INFO.name, jobTitle: CONTACT_INFO.role },
      publisher: { "@type": "Organization", name: "ASUP Records LLP" },
    },
  ],
};

function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="text-xs uppercase tracking-eyebrow text-brand-soft">{eyebrow}</p>
      <h2 className="mt-3 text-[clamp(1.9rem,4vw,3.15rem)] font-semibold leading-tight text-brand">
        {title}
      </h2>
      <div className="mt-4 grid gap-3 text-base leading-7 text-brand-light/85">{children}</div>
    </div>
  );
}

function Flow({ steps }: { steps: string[] }) {
  return (
    <ol className="grid gap-3 sm:grid-cols-[repeat(auto-fit,minmax(10rem,1fr))]">
      {steps.map((step, index) => (
        <li
          key={step}
          className="flex items-center gap-3 rounded-2xl border border-brand bg-brand/8 p-4 text-sm font-medium text-brand-light"
        >
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand text-xs font-bold text-ink">
            {index + 1}
          </span>
          {step}
        </li>
      ))}
    </ol>
  );
}

export default function AsupxSuiteCaseStudyPage() {
  return (
    <article className="pb-24 pt-10 sm:pt-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <div className="mx-auto w-[min(100%-2rem,1180px)]">
        <nav aria-label="Breadcrumb" className="mb-10 text-sm text-brand-light/65">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-brand">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/industry-projects" className="hover:text-brand">
                Projects
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-brand-light">
              ASUPX Suite
            </li>
          </ol>
        </nav>

        <header className="py-4 sm:py-8">
          <div className="flex flex-col items-start">
            <p className="text-xs uppercase tracking-eyebrow text-brand-soft">
              ASUP Records LLP / Case Study
            </p>
            <h1 className="mt-5 max-w-3xl text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[0.96] text-brand">
              ASUPX Suite V2 - White-Label Music Distribution Platform
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-light/90">
              A white-label music distribution and royalty management platform built for artists,
              labels, white-label partners, and digital service providers.
            </p>
            <dl className="mt-8 grid w-full gap-4 text-sm sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-brand bg-black/30 p-4">
                <dt className="text-xs uppercase tracking-[0.16em] text-brand-soft">Role</dt>
                <dd className="mt-2 font-medium text-brand-light">
                  Backend Architecture & Development
                </dd>
              </div>
              <div className="rounded-2xl border border-brand bg-black/30 p-4">
                <dt className="text-xs uppercase tracking-[0.16em] text-brand-soft">Company</dt>
                <dd className="mt-2 font-medium text-brand-light">ASUP Records LLP</dd>
              </div>
              <div className="rounded-2xl border border-brand bg-black/30 p-4">
                <dt className="text-xs uppercase tracking-[0.16em] text-brand-soft">Built at</dt>
                <dd className="mt-2 font-medium text-brand-light">
                  Transcodezy IT Solutions Pvt. Ltd.
                </dd>
              </div>
              <div className="rounded-2xl border border-brand bg-black/30 p-4">
                <dt className="text-xs uppercase tracking-[0.16em] text-brand-soft">Website</dt>
                <dd className="mt-2 font-medium text-brand">
                  <a
                    href="https://www.asuprecords.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-brand-light"
                  >
                    www.asuprecords.com
                  </a>
                </dd>
              </div>
            </dl>
            <div className="mt-7 flex flex-wrap gap-2">
              {asupxSuite.hero.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-brand bg-brand/10 px-3 py-1.5 text-xs font-medium text-brand-light"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
          <figure className="mt-10 w-full">
            <Image
              src="/images/projects/asupxsuite/wlpdashboard.webp"
              alt="ASUPX Suite white-label platform dashboard"
              width={3840}
              height={2620}
              priority
              className="h-auto w-full"
            />
          </figure>
        </header>

        {umangSharmaReview && (
          <section
            className="border-y border-brand/60 py-14 sm:py-16"
            aria-labelledby="review-heading"
          >
            <div className="mb-7 max-w-3xl">
              <p className="text-xs uppercase tracking-eyebrow text-brand-soft">Founder review</p>
              <h2
                id="review-heading"
                className="mt-3 text-[clamp(1.9rem,4vw,3.15rem)] font-semibold leading-tight text-brand"
              >
                How Om&apos;s work helped ASUP Records And Transcodezy IT Solutions Pvt. Ltd.
              </h2>
              <p className="mt-4 leading-7 text-brand-light/85">
                Feedback from the founder and CEO of ASUP Records LLP, the company behind ASUPX
                Suite.
              </p>
            </div>
            <article className="relative overflow-hidden rounded-3xl border border-brand bg-gradient-to-br from-brand/16 to-surface p-7 sm:p-10">
              <Icon
                name="quote-right"
                className="pointer-events-none absolute right-7 top-6 h-12 w-12 text-brand/15 sm:h-14 sm:w-14"
              />
              <blockquote className="relative max-w-4xl text-lg font-medium leading-8 text-brand-light/90 sm:text-xl sm:leading-9">
                {umangSharmaReview.message}
              </blockquote>
              <footer className="relative mt-8 flex items-center gap-4 border-t border-brand/20 pt-6">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand/30 bg-brand/15 text-sm font-semibold text-brand">
                  US
                </span>
                <div>
                  <p className="font-semibold text-brand">{umangSharmaReview.name}</p>
                  <p className="text-sm text-brand-light/70">Founder &amp; CEO, ASUP Records LLP</p>
                </div>
              </footer>
            </article>
            {shubhamReview && (
              <article className="relative mt-4 overflow-hidden rounded-3xl border border-brand bg-black/35 p-7 sm:p-10">
                <p className="relative text-xs uppercase tracking-eyebrow text-brand-soft">
                  Opportunity at Transcodezy
                </p>
                <blockquote className="relative mt-4 max-w-4xl text-lg font-medium leading-8 text-brand-light/90 sm:text-xl sm:leading-9">
                  {shubhamReview.message}
                </blockquote>
                <footer className="relative mt-8 flex items-center gap-4 border-t border-brand/20 pt-6">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand/30 bg-brand/15 text-sm font-semibold text-brand">
                    SS
                  </span>
                  <div>
                    <p className="font-semibold text-brand">Shubham Sutariya</p>
                    <p className="text-sm text-brand-light/70">
                      CTO, Transcodezy IT Solutions Pvt. Ltd.
                    </p>
                  </div>
                </footer>
              </article>
            )}
          </section>
        )}

        <section className="py-20" aria-labelledby="overview-heading">
          <SectionHeading
            eyebrow="01 / Project overview"
            title="A V2 backend built for a complex music platform"
          >
            <p id="overview-heading">
              ASUPX Suite is the V2 evolution of the ASUP Records platform: a white-label,
              multi-tenant system for music distribution, catalogs, royalties, finance, support,
              notifications, and third-party integrations.
            </p>
            <p>
              I designed and built the V2 backend architecture and major backend functionality for
              ASUP Records LLP. The work focused on giving artists, labels, white-label operators,
              and digital service providers a shared platform with tenant-specific brand and payment
              configuration.
            </p>
          </SectionHeading>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-brand bg-black/35 p-6">
              <p className="text-xs uppercase tracking-eyebrow text-brand-soft">
                V1 / Previous generation
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-brand">Laravel + MariaDB</h3>
              <p className="mt-3 leading-7 text-brand-light/80">
                The original ASUP Records platform used a previous-generation Laravel and MariaDB
                architecture.
              </p>
            </div>
            <div className="rounded-3xl border border-brand bg-gradient-to-br from-brand/18 to-surface p-6">
              <p className="text-xs uppercase tracking-eyebrow text-brand-soft">V2 / ASUPX Suite</p>
              <h3 className="mt-4 text-2xl font-semibold text-brand">Nx monolith + NestJS</h3>
              <p className="mt-3 leading-7 text-brand-light/80">
                V2 modernized the platform with an Nx monorepo-based monolithic architecture,
                NestJS, Node.js, TypeScript, MongoDB, Docker, and CI/CD.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-brand/60 py-20" aria-labelledby="architecture-heading">
          <SectionHeading
            eyebrow="02 / Architecture"
            title="A modular backend without pretending to be microservices"
          >
            <p id="architecture-heading">
              ASUPX Suite uses an Nx monorepo-based monolithic architecture. The backend is
              organized into clear domain and business modules while retaining a centralized
              codebase and consistent deployment model.
            </p>
          </SectionHeading>
          <div className="rounded-3xl border border-brand bg-black/40 p-5 sm:p-8">
            <div className="grid items-center gap-3 text-center sm:grid-cols-5">
              {[
                "Client / frontend",
                "Nx monolith",
                "NestJS backend",
                "Domain modules",
                "MongoDB",
              ].map((item, index) => (
                <div key={item} className="contents">
                  <div className="rounded-2xl border border-brand bg-brand/10 p-4 text-sm font-semibold text-brand-light">
                    {item}
                  </div>
                  {index < 4 && (
                    <span aria-hidden="true" className="hidden text-brand sm:block">
                      &rarr;
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {asupxSuite.architecture.modules.map((module) => (
              <article
                key={module.title}
                className="rounded-2xl border border-brand bg-surface/85 p-5"
              >
                <Icon name={module.icon} className="text-xl text-brand" />
                <h3 className="mt-4 text-lg font-semibold text-brand">{module.title}</h3>
                <p className="mt-2 text-sm leading-6 text-brand-light/80">{module.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-brand/60 py-20" aria-labelledby="nx-heading">
          <SectionHeading
            eyebrow="03 / Nx monolith architecture"
            title="One codebase, shared foundations, clearer boundaries"
          >
            <p id="nx-heading">
              Nx keeps the V2 backend centralized while making shared libraries, types, DTOs,
              utilities, and reusable business logic easier to manage. This supports consistent
              backend development, dependency management, and code organization as platform domains
              grow.
            </p>
          </SectionHeading>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Centralized codebase",
              "Shared libraries",
              "Reusable business logic",
              "Shared types, DTOs, and utilities",
              "Clearer dependency management",
              "Consistent development practices",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-brand bg-brand/8 p-4 text-sm text-brand-light"
              >
                <Icon name="check" className="text-brand" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-brand/60 py-20" aria-labelledby="tenancy-heading">
          <SectionHeading
            eyebrow="04 / White-label architecture"
            title="A platform designed to let tenants run their own brand"
          >
            <p id="tenancy-heading">
              ASUPX Suite is designed so multiple white-label tenants and distributors can operate
              within the platform. Each tenant can configure its business presence while working
              from the shared backend foundation.
            </p>
          </SectionHeading>
          <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-3xl border border-brand bg-gradient-to-b from-brand/15 to-surface p-6">
              <p className="text-xs uppercase tracking-eyebrow text-brand-soft">
                Tenant-level configuration
              </p>
              <ul className="mt-5 grid gap-3 text-brand-light/85">
                {[
                  "Branding",
                  "Plans and pricing",
                  "Razorpay or Stripe account connection",
                  "Business details",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <Icon name="check" className="mt-1 text-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-brand bg-black/40 p-6">
              <p className="mb-4 text-center text-sm font-semibold text-brand">
                ASUPX Suite platform
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                {["Tenant A", "Tenant B", "Tenant C"].map((tenant) => (
                  <div key={tenant} className="rounded-2xl border border-brand bg-brand/8 p-4">
                    <h3 className="font-medium text-brand-light">{tenant}</h3>
                    <ul className="mt-3 grid gap-1 text-xs leading-5 text-brand-light/75">
                      <li>Branding</li>
                      <li>Pricing</li>
                      <li>Payment configuration</li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-brand/60 py-20" aria-labelledby="data-heading">
          <SectionHeading
            eyebrow="05 / MongoDB data architecture"
            title="A generalized model for catalog, users, and royalties"
          >
            <p id="data-heading">
              I designed a generalized MongoDB schema for the platform. The architecture is
              described conceptually here to respect private implementation details while showing
              the data domains it supports.
            </p>
          </SectionHeading>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Tenant and user hierarchy",
                text: "Admin and white-label users sit at the platform level. White labels can organize artists, labels, and members; collaborators work under artists, and artists can work under labels.",
              },
              {
                title: "Music catalog",
                text: "Releases and tracks support the audio catalog and its path through review and distribution workflows.",
              },
              {
                title: "Royalties and finance",
                text: "Royalty files, royalty rows, store revenue, user royalties, and finance data support management and reporting.",
              },
              {
                title: "Subscriptions",
                text: "Subscription records, payments, and webhook histories support platform and tenant billing flows.",
              },
              {
                title: "Roles and permissions",
                text: "Permissions define user actions. Admin is a platform role; white-label, artist, label, and collaborator roles are seeded when a tenant registers.",
              },
              {
                title: "Scoped platform data",
                text: "White-label-aware data boundaries support a shared platform while allowing tenant-specific operations.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-brand bg-surface/85 p-5"
              >
                <h3 className="text-lg font-semibold text-brand">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-brand-light/80">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-brand/60 py-20" aria-labelledby="distribution-heading">
          <SectionHeading
            eyebrow="06 / Distribution and royalties"
            title="From release review to delivery and royalty context"
          >
            <p id="distribution-heading">
              Artists and labels can prepare audio releases in the platform. After administrative
              review, approved releases can move into delivery workflows for distributors such as
              RouteNote and State51, and onward to digital music services. The same platform context
              supports catalog relationships, royalty tracking, finance, and reporting workflows.
            </p>
          </SectionHeading>
          <Flow
            steps={[
              "Artist / label",
              "Audio release",
              "Admin review",
              "Distributor delivery",
              "DSP ecosystem",
            ]}
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {["Spotify", "Apple Music", "YouTube Music"].map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-brand bg-brand/8 p-5 text-center font-semibold text-brand-light"
              >
                {service}
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-brand/60 py-20" aria-labelledby="payments-heading">
          <SectionHeading
            eyebrow="07 / Payments and APIs"
            title="Tenant-configured payment flows and RESTful platform APIs"
          >
            <p id="payments-heading">
              White-label tenants can connect their own Razorpay or Stripe accounts. Cashfree
              supports pay-as-you-go subscription mandate flows for tenants. Comprehensive REST APIs
              support artist catalogs, label management, royalties, finance, support tickets,
              notifications, and tenant/platform functionality without exposing private endpoint
              details.
            </p>
          </SectionHeading>
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-3xl border border-brand bg-black/40 p-6">
              <h3 className="text-xl font-semibold text-brand">Payment architecture</h3>
              <div className="mt-5">
                <Flow
                  steps={[
                    "Tenant subscription or mandate",
                    "Tenant payment configuration",
                    "Razorpay / Stripe",
                  ]}
                />
              </div>
            </div>
            <div className="rounded-3xl border border-brand bg-black/40 p-6">
              <h3 className="text-xl font-semibold text-brand">API domains</h3>
              <ul className="mt-5 grid gap-2 text-sm leading-6 text-brand-light/80">
                {[
                  "Artist catalogs and label management",
                  "Royalty, finance, and reporting workflows",
                  "Support tickets and notifications",
                  "Tenant and platform functionality",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <Icon name="check" className="mt-1 text-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-t border-brand/60 py-20" aria-labelledby="deployment-heading">
          <SectionHeading
            eyebrow="08 / Infrastructure and deployment"
            title="A deployable backend foundation"
          >
            <p id="deployment-heading">
              The backend is containerized with Docker and deployed to a DigitalOcean VPS through
              CI/CD pipelines. The implementation keeps infrastructure details private while
              documenting the delivery path used for the platform.
            </p>
          </SectionHeading>
          <Flow steps={["Code", "CI pipeline", "Docker", "DigitalOcean VPS", "ASUPX Suite"]} />
        </section>

        <section className="border-t border-brand/60 py-20" aria-labelledby="contribution-heading">
          <SectionHeading
            eyebrow="09 / My role and contribution"
            title="Backend architecture for ASUPX Suite V2"
          >
            <p id="contribution-heading">
              I designed and built the V2 backend architecture of ASUPX Suite for ASUP Records LLP,
              and worked on major backend functionality across the product.
            </p>
          </SectionHeading>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Backend and Nx monolith architecture",
              "NestJS backend and REST API development",
              "MongoDB schema design",
              "Multi-tenant and white-label capability",
              "Payment and DSP integrations",
              "Backend modules for catalog, royalty, finance, support, and notifications",
              "Docker deployment, CI/CD, and infrastructure work",
              "A scalable foundation for future platform development",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-2xl border border-brand bg-brand/8 p-4 text-sm leading-6 text-brand-light"
              >
                <Icon name="check" className="mt-1 shrink-0 text-brand" />
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-brand/60 py-20" aria-labelledby="stack-heading">
          <SectionHeading
            eyebrow="10 / Technology stack"
            title="Tools chosen for the platform foundation"
          >
            <p id="stack-heading">
              The V2 stack pairs a modular Node.js backend with an Nx monorepo, MongoDB, and
              practical deployment and integration tooling.
            </p>
          </SectionHeading>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {asupxSuite.technologyStack.groups.map((group) => (
              <section
                key={group.title}
                className="rounded-2xl border border-brand bg-surface/85 p-5"
              >
                <h3 className="text-sm uppercase tracking-[0.14em] text-brand-soft">
                  {group.title}
                </h3>
                <ul className="mt-4 grid gap-2 text-sm text-brand-light/85">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>

        <section
          className="rounded-[2rem] border border-brand bg-gradient-to-br from-brand/18 to-surface p-7 text-center sm:p-12"
          aria-labelledby="cta-heading"
        >
          <p className="text-xs uppercase tracking-eyebrow text-brand-soft">Next</p>
          <h2
            id="cta-heading"
            className="mt-3 text-[clamp(2rem,4vw,3.25rem)] font-semibold text-brand"
          >
            Want to explore more of my engineering work?
          </h2>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/industry-projects"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-5 text-sm font-semibold text-ink transition hover:-translate-y-0.5"
            >
              View all projects
            </Link>
            <Link
              href="/#about"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-brand bg-brand/10 px-5 text-sm font-medium text-brand-light transition hover:-translate-y-0.5 hover:bg-brand/20"
            >
              About Om J Patel
            </Link>
            <a
              href={CONTACT_INFO.socialMedia.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-brand bg-brand/10 px-5 text-sm font-medium text-brand-light transition hover:-translate-y-0.5 hover:bg-brand/20"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </article>
  );
}
