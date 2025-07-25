import React from "react";
import { Navigation } from "../components/nav";

const services = [
  {
    name: "Websites",
    description: "Professional websites tailored to your needs.",
    price: "Starting at 300 euro",
  },
  {
    name: "Web Apps",
    description: "Custom web applications for your business or idea.",
    price: "Custom Inquiry",
  },
  {
    name: "Mobile Apps",
    description: "Cross-platform mobile app development.",
    price: "Custom Inquiry",
  },
  {
    name: "Web Hosting",
    description: "Reliable and fast web hosting services.",
    price: "Starting at 5 euro per month",
  },
  {
    name: "Email Hosting",
    description: "Professional email hosting for your domain.",
    price: "Starting at 5 euro per month",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
      <Navigation />
      <main className="max-w-2xl mx-auto px-6 pt-32 pb-24">
        {/* Name and summary */}
        <header className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Services</h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-xl mx-auto font-normal">
            I offer a range of digital services to help you grow your business or bring your ideas to life. Get in touch for a custom quote or more information.
          </p>
        </header>

        {/* Services List */}
        <section>
          <h2 className="text-xl font-semibold text-zinc-200 mb-4 border-b border-zinc-800 pb-1 tracking-tight">What I Offer</h2>
          <div className="space-y-8">
            {services.map((service, idx) => (
              <div key={idx} className="p-6 rounded-lg bg-zinc-800/60 border border-zinc-700 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <span className="font-medium text-zinc-100 text-lg font-display">{service.name}</span>
                  <span className="text-zinc-400 text-sm font-mono mt-1 sm:mt-0">{service.price}</span>
                </div>
                <p className="text-zinc-300 text-base leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
} 