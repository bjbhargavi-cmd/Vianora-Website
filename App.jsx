import React from "react";

export default function App() {
  const services = [
    {
      title: "Meta Ads",
      description:
        "Reach the right audience on Facebook and Instagram with targeted advertising campaigns.",
      icon: "🎯",
    },
    {
      title: "Google Ads",
      description:
        "Connect with customers actively searching for your products and services.",
      icon: "📈",
    },
    {
      title: "SEO Optimization",
      description:
        "Improve your website visibility and attract relevant organic traffic.",
      icon: "🔍",
    },
    {
      title: "Lead Generation",
      description:
        "Build effective campaigns designed to attract enquiries and potential customers.",
      icon: "🚀",
    },
    {
      title: "Video Editing",
      description:
        "Create engaging promotional videos, social media reels and brand content.",
      icon: "🎬",
    },
    {
      title: "AI Digital Solutions",
      description:
        "Use modern AI tools to streamline marketing workflows and content creation.",
      icon: "✨",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#home" className="text-2xl font-extrabold tracking-tight">
            Vian<span className="text-blue-700">ora</span>
            <span className="ml-2 text-sm text-yellow-600">✦</span>
          </a>

          <div className="hidden items-center gap-7 text-sm font-medium md:flex">
            <a href="#home" className="hover:text-blue-700">Home</a>
            <a href="#about" className="hover:text-blue-700">About</a>
            <a href="#services" className="hover:text-blue-700">Services</a>
            <a href="#reviews" className="hover:text-blue-700">Reviews</a>
            <a href="#contact" className="hover:text-blue-700">Contact</a>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-blue-800 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-900"
          >
            Get Started →
          </a>
        </nav>
      </header>

      <main>
        <section
          id="home"
          className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 text-white"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
            <div>
              <p className="mb-6 inline-block rounded-full border border-yellow-400/40 px-4 py-2 text-sm text-yellow-300">
                ✦ YOUR DIGITAL GROWTH PARTNER
              </p>

              <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
                Turn Your Digital Presence Into{" "}
                <span className="text-yellow-400">Real Growth.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
                Smart digital marketing solutions to help businesses build
                visibility, attract quality leads and grow with confidence.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-full bg-yellow-400 px-7 py-4 font-bold text-blue-950 hover:bg-yellow-300"
                >
                  Grow My Business →
                </a>

                <a
                  href="#services"
                  className="rounded-full border border-white/40 px-7 py-4 font-semibold hover:bg-white/10"
                >
                  Explore Services
                </a>
              </div>

              <p className="mt-8 text-sm text-blue-200">
                Strategy · Creativity · Performance
              </p>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/10 p-8 shadow-2xl backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-widest text-yellow-300">
                The Vianora Approach
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                Marketing with a purpose.
              </h2>

              <div className="mt-8 space-y-5">
                {[
                  ["01", "Understand", "Know your business and audience."],
                  ["02", "Strategize", "Create a focused marketing plan."],
                  ["03", "Grow", "Improve campaigns using data and insights."],
                ].map(([number, title, description]) => (
                  <div key={number} className="flex gap-4">
                    <span className="text-xl font-bold text-yellow-400">
                      {number}
                    </span>
                    <div>
                      <h3 className="font-bold">{title}</h3>
                      <p className="mt-1 text-sm text-blue-100">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold uppercase tracking-widest text-blue-700">
              About Vianora
            </p>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Helping Businesses Grow in the Digital World
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              Vianora is a digital marketing agency focused on helping
              businesses strengthen their online presence through strategic
              advertising, search engine optimization, creative content and
              lead generation.
            </p>
          </div>
        </section>

        <section id="services" className="bg-slate-50 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="font-bold uppercase tracking-widest text-blue-700">
                What We Do
              </p>
              <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
                Digital Solutions for Your Business
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                Everything you need to build your brand, connect with
                customers and generate opportunities online.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="text-4xl">{service.icon}</div>
                  <h3 className="mt-5 text-xl font-bold">
                    {service.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    className="mt-5 inline-block font-semibold text-blue-800"
                  >
                    Enquire Now →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-5xl rounded-3xl bg-blue-950 px-8 py-12 text-center text-white md:px-16">
            <p className="font-semibold uppercase tracking-widest text-yellow-400">
              Why Choose Vianora?
            </p>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Your Goals. Our Strategy. Shared Growth.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-100">
              We focus on understanding your business, reaching the right
              audience, creating meaningful content and measuring campaign
              performance.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-block rounded-full bg-yellow-400 px-7 py-4 font-bold text-blue-950"
            >
              Let's Discuss Your Business →
            </a>
          </div>
        </section>

        <section id="reviews" className="bg-slate-50 px-6 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-bold uppercase tracking-widest text-blue-700">
              Client Experience
            </p>
            <h2 className="mt-4 text-3xl font-extrabold">
              Your Success Matters to Us
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              We aim to build lasting partnerships through clear
              communication, thoughtful strategy and measurable marketing
              goals.
            </p>
            <p className="mt-4 text-sm text-slate-500">
              Client testimonials will be added as verified reviews become
              available.
            </p>
          </div>
        </section>

        <section id="contact" className="px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold uppercase tracking-widest text-blue-700">
              Let's Connect
            </p>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Ready to Grow Your Business?
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Tell us about your business and digital marketing goals.
              Contact our team to discuss the right solution for you.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/919025804482"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-blue-800 px-7 py-4 font-bold text-white hover:bg-blue-900"
              >
                Contact Us on WhatsApp
              </a>
              <a
                href="mailto:Digivianora@gmail.com"
                className="rounded-full border border-blue-800 px-7 py-4 font-bold text-blue-800"
              >
                Send an Email
              </a>
            </div>

            <p className="mt-8 text-slate-600">
              Phone: +91 90258 04482
            </p>
            <p className="mt-2 text-slate-600">
              Email: Digivianora@gmail.com
            </p>
            <p className="mt-2 text-slate-600">
              Instagram: @Vianora_2026
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-blue-950 px-6 py-8 text-center text-sm text-blue-100">
        <p>
          © {new Date().getFullYear()} Vianora Digital Marketing Agency.
          All rights reserved.
        </p>
        <p className="mt-2 text-yellow-400">
          Your Digital Growth Partner
        </p>
      </footer>
    </div>
  );
}
