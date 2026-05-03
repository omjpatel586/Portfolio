import Image from "next/image";

export function About() {
  return (
    <section className="py-20" id="about">
      <div className="mx-auto w-[min(100%-2rem,1180px)]">
        <div className="mb-8 flex flex-col gap-2">
          <span className="text-xs uppercase tracking-eyebrow text-brand-soft">About</span>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] leading-none font-semibold text-brand">
            Me
          </h2>
          <p className="max-w-[42rem] text-base leading-7 text-brand-light/85">
            🔥 Passionate Software Developer | Node.js & NestJS Expert With Over 3 Years Of Hands-On
            Experience, I Specialize In Building Fast, Scalable, And Efficient Softwares. I’m On A
            Mission To Craft Digital Solutions That Empower Businesses, Streamline Operations, And
            Ignite Growth.🚀
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="rounded-3xl border border-brand bg-brand/8 p-6">
              <p className="leading-8 text-brand-light/85">
                💡 Solving Real-World Problems With AI & Scalable Microservices I Thrive On Building
                Smart Solutions Through AI Integration And Scalable Microservices. Whether It’s
                Optimizing APIs For Automating Complex Backend Workflows, I Deliver Innovation With
                Execution — Turning Ideas Into Impact.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-brand bg-brand/10 p-4">
                  <strong className="block text-2xl text-brand">3</strong>
                  <span className="text-sm text-brand-light/75">Years Of Experience</span>
                </div>
                <div className="rounded-2xl border border-brand bg-brand/10 p-4">
                  <strong className="block text-2xl text-brand">5+</strong>
                  <span className="text-sm text-brand-light/75">Software Developed</span>
                </div>
                <div className="rounded-2xl border border-brand bg-brand/10 p-4">
                  <strong className="block text-2xl text-brand">3</strong>
                  <span className="text-sm text-brand-light/75">Awards Won</span>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-brand bg-gradient-to-b from-brand/15 to-brand/5 p-4 md:col-span-5">
            <Image
              // src="/images/about/profile-card.svg"
              src="/images/about/profile-image.png"
              alt="Profile placeholder"
              width={640}
              height={640}
              className="h-auto w-full rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
