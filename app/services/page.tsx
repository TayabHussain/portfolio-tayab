import React from "react";
import { Navigation } from "../components/nav";
import { Check, Mail, MessageSquare } from "lucide-react";
import { Card } from "../components/card";

const services = [
  {
    name: "Email Hosting",
    price: "From €5/month",
    features: [
      "Create a custom email like info@yourbusiness.com",
      "Extra email addresses, aliases, or domain setup available upon request",
    ],
    cta: "Enquire",
  },
  {
    name: "Web Hosting",
    price: "From €5/month",
    features: [
      "Host your website or web app on a fast, secure server",
      "Includes SSL certificate (HTTPS)",
    ],
    cta: "Enquire",
  },
  {
    name: "Website Development",
    price: "Starting at €300",
    features: [
      "Fully responsive design (mobile & desktop)",
      "WordPress, Framer, or custom HTML/Next.js",
      "Includes 1–3 pages, contact form, basic SEO setup",
      "Add-ons: Extra pages (+€50/page), Multilingual (+€100), Webshop (+€200)",
    ],
    cta: "Book Now",
  },
  {
    name: "Web App Development",
    price: "Starting at €800",
    features: [
      "Advanced custom tools, dashboards, admin panels",
      "Authentication, user roles, dashboards, custom CRUD",
      "API integrations (Stripe, payment gateways, etc.)",
    ],
    cta: "Enquire",
  },
  {
    name: "Mobile App Development",
    price: "Starting at €1,000",
    features: [
      "Cross-platform apps (React Native, iOS & Android)",
      "Custom UI, smooth performance",
      "User authentication, push notifications, secure backend",
      "Optional web-based admin panel",
    ],
    cta: "Enquire",
  },
];

export default function ServicesPage() {
  const mainServices = [services[2], services[3], services[4]]; // Website, Web App, Mobile App
  const hostingServices = [services[0], services[1]]; // Email Hosting, Web Hosting
  return (
    <div className="min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 pt-32 pb-24">
        <header className="mb-14 text-center">
          <div className="text-zinc-400 text-base mb-2">Simple Pricing. Exceptional Service.</div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-100 mb-2">Clear rates for every need.<br className="hidden sm:block"/>Book confidently.</h1>
        </header>
        <section className="space-y-10">
          {/* Main Services Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mainServices.map((service, idx) => (
              <Card key={idx}>
                <div className="flex flex-col h-full p-8">
                  <div className="mb-2 text-zinc-100 text-lg font-semibold">{service.name}</div>
                  <div className="mb-4 text-3xl font-bold text-zinc-50">{service.price}</div>
                  <div className="border-b border-zinc-700 mb-4" />
                  <ul className="mb-6 text-zinc-300 text-[1.08rem] leading-relaxed list-disc list-inside space-y-2 text-left">
                    {service.name === "Website Development"
                      ? [
                          <li key="responsive">Fully responsive design (mobile & desktop)</li>,
                          <li key="stack">WordPress, Framer, or custom HTML/Next.js</li>,
                          <li key="includes">Includes 1–3 pages, contact form, basic SEO setup</li>,
                          <li key="addons" className="list-none mt-2">
                            <span className="font-semibold text-zinc-200">Add-ons:</span>
                            <ul className="ml-6 mt-1 list-disc text-zinc-400 text-[0.98rem] space-y-1">
                              <li>Extra pages (+€50/page)</li>
                              <li>Blog/CMS (+€75)</li>
                              <li>Multilingual (+€100)</li>
                              <li>E-commerce (custom pricing)</li>
                            </ul>
                          </li>,
                        ]
                      : service.features.map((feature, i) => <li key={i}>{feature}</li>)}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
          {/* Hosting Services Row, side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl md:max-w-none mx-auto md:mx-0">
            {hostingServices.map((service, idx) => (
              <Card key={idx}>
                <div className="flex flex-col h-full p-6">
                  <div className="mb-2 text-zinc-100 text-base font-semibold">{service.name}</div>
                  <div className="mb-3 text-2xl font-bold text-zinc-50">{service.price}</div>
                  <div className="border-b border-zinc-700 mb-4" />
                  <ul className="mb-2 text-zinc-300 text-[1.08rem] leading-relaxed list-disc list-inside space-y-2 text-left">
                    {service.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </section>
        {/* CTA Section */}
        <div className="mt-24 flex flex-col items-center">
          <div className="w-full max-w-2xl">
            <div className="rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-900/90 via-zinc-800/80 to-zinc-900/80 shadow-2xl px-10 py-14 flex flex-col items-center relative overflow-hidden">
              <div className="absolute -inset-1 rounded-2xl pointer-events-none" style={{boxShadow: '0 0 80px 0 rgba(80,180,255,0.08)'}} />
              <div className="text-2xl sm:text-3xl text-zinc-100 font-bold mb-6 text-center drop-shadow-lg">Let's build something great together</div>
              <div className="text-lg text-zinc-400 mb-8 text-center max-w-xl">Ready to get started or have questions? Reach out and let's talk about your project, idea, or business needs.</div>
              <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
                <a
                  href="mailto:contact@tayab.dev"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-zinc-800 border border-zinc-600 text-zinc-100 font-semibold text-base shadow-xl hover:bg-zinc-700 transition-colors text-center w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-zinc-400/40"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail className="w-5 h-5" />
                  Mail Me
                </a>
                <a
                  href="https://wa.me/310645279564?text=I%20am%20interested%20in%20your%20services%20for"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-zinc-800 border border-zinc-600 text-zinc-100 font-semibold text-base shadow-xl hover:bg-zinc-700 transition-colors text-center w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-zinc-400/40"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="w-5 h-5" />
                  Message Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 