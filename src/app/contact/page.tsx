"use client";

import { useRef, FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import Container from "@/components/shared/Container";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

interface BusinessHour {
  day: string;
  hours: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const CONTACT_INFO: ContactInfo[] = [
  {
    icon: <Phone size={15} strokeWidth={1.8} />,
    label: "Phone",
    value: "773-365-1240",
    href: "tel:7733651240",
  },
  {
    icon: <Mail size={15} strokeWidth={1.8} />,
    label: "Email",
    value: "office@stoponetrans.com",
    href: "mailto:office@stoponetrans.com",
  },
  {
    icon: <MapPin size={15} strokeWidth={1.8} />,
    label: "Address",
    value: "1425 N McLean Blvd, Elgin, IL",
  },
];

const BUSINESS_HOURS: BusinessHour[] = [
  { day: "Monday – Friday", hours: "9:00 am – 8:00 pm" },
  { day: "Saturday", hours: "9:00 am – 6:00 pm" },
  { day: "Sunday", hours: "9:00 am – 5:00 pm" },
];

// ─── Animation Config ─────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const, delay },
  }),
};

// ─── Sub-components ───────────────────────────────────────────────────────────



import emailjs from "@emailjs/browser";
import {  useState } from "react";
import { toast } from "sonner";

function ContactForm() {
  const [loading, setLoading] = useState(false);

 async function handleSubmit(
  e: FormEvent<HTMLFormElement>
) {
  e.preventDefault();

  const form = e.currentTarget;

  setLoading(true);

  try {
    await emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      form,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );

    toast.success("Message sent successfully!");

    form.reset();

  } catch (error) {
    console.error("EMAILJS ERROR:", error);

    toast.error("Failed to send message.");
  } finally {
    setLoading(false);
  }
}

  return (
    <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm">
      <h2 className="text-[11px] lg:text-[11px] 2xl:text-[18px] font-['Geologica'] font-semibold uppercase tracking-[0.12em] text-neutral-800 mb-5">
        Get in touch
      </h2>

      <form
        onSubmit={handleSubmit}
        noValidate
        aria-label="Contact form"
      >
        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
          <div>
            <label
              htmlFor="contact-name"
              className="block text-[10px] lg:text-[11px] 2xl:text-[16px] font-['Geologica'] font-medium uppercase tracking-[0.1em] text-neutral-400 mb-1"
            >
              Name
            </label>

            <input
              id="contact-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Enter your name*"
              aria-required="true"
              className="w-full h-[46px] rounded-md border border-neutral-200 bg-white px-3 text-sm lg:text-[12px] 2xl:text-[15px] text-neutral-900 placeholder:text-neutral-300 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900/10 transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="contact-phone"
              className="block text-[10px] lg:text-[11px] 2xl:text-[16px] font-['Geologica'] font-medium uppercase tracking-[0.1em] text-neutral-400 mb-1"
            >
              Phone number
            </label>

            <input
              id="contact-phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              placeholder="Enter your phone number*"
              aria-required="true"
              className="w-full h-[46px] rounded-md border border-neutral-200 bg-white px-3 text-sm lg:text-[12px] 2xl:text-[15px] text-neutral-900 placeholder:text-neutral-300 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900/10 transition-colors"
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-3">
          <label
            htmlFor="contact-email"
            className="block text-[10px] lg:text-[11px] 2xl:text-[16px] font-['Geologica'] font-medium uppercase tracking-[0.1em] text-neutral-400 mb-1"
          >
            Email
          </label>

          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Enter your email*"
            aria-required="true"
            className="w-full h-[46px] rounded-md border border-neutral-200 bg-white px-3 text-sm lg:text-[12px] 2xl:text-[15px] text-neutral-900 placeholder:text-neutral-300 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900/10 transition-colors"
          />
        </div>

        {/* Message */}
        <div className="mb-4">
          <label
            htmlFor="contact-message"
            className="block text-[10px] lg:text-[11px] 2xl:text-[16px] font-['Geologica'] font-medium uppercase tracking-[0.1em] text-neutral-400 mb-1"
          >
            Your message
          </label>

          <textarea
            id="contact-message"
            name="message"
            required
            rows={4}
            placeholder="Write your message here..."
            aria-required="true"
            className="w-full min-h-[100px] rounded-md border border-neutral-200 bg-white px-3 py-2.5 text-sm lg:text-[12px] 2xl:text-[15px] text-neutral-900 placeholder:text-neutral-300 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900/10 transition-colors resize-y"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full h-[46px] lg:h-[46px] 2xl:h-[46px] hover:cursor-pointer rounded-md bg-[#88A933] hover:bg-[#7a982d] active:bg-[#6f8c28] disabled:opacity-60 text-white text-[11px] lg:text-[12px] 2xl:text-[16px] font-semibold uppercase tracking-[0.12em] transition-colors duration-150"
        >
          {loading ? "Sending..." : "Send message"}
        </button>
      </form>
    </div>
  );
}

ContactForm;

function ContactInfoCard() {
  return (
    <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm">
      <h2 className="text-[11px] lg:text-[11px] 2xl:text-[16px] font-['Geologica'] font-semibold uppercase tracking-[0.12em] text-neutral-900 mb-4">
        Contact information
      </h2>

      <ul className="divide-y divide-neutral-100" aria-label="Contact details">
        {CONTACT_INFO.map((item) => (
          <li key={item.label} className="flex items-start gap-3 py-3 first:pt-0 last:pb-0">
            <span
              className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-red-700"
              aria-hidden="true"
            >
              {item.icon}
            </span>
            <div>
              <p className="text-[10px] lg:text-[11px] 2xl:text-[16px] font-['Geologica'] font-semibold uppercase tracking-[0.1em] text-neutral-400 mb-0.5">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-[13px] lg:text-[14px] 2xl:text-[16px]  text-neutral-800 hover:text-neutral-600 transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-[13px] lg:text-[14px] 2xl:text-[16px] text-neutral-800">{item.value}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BusinessHoursCard() {
  return (
    <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm">
      <h2 className="text-[11px] lg:text-[11px] 2xl:text-[16px] font-['Geologica'] font-semibold uppercase tracking-[0.12em] text-neutral-900 mb-4">
        Business hours
      </h2>

    <div
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 lg:divide-x divide-neutral-100 gap-4"
  role="list"
  aria-label="Business hours"
>
  {BUSINESS_HOURS.map((item) => (
    <div
      key={item.day}
      className="py-3 lg:py-0 lg:px-4 first:lg:pl-0 last:lg:pr-0"
      role="listitem"
    >
      <p className="text-[9.5px] lg:text-[10px] 2xl:text-[16px] font-['Geologica'] font-semibold uppercase tracking-[0.12em] text-neutral-400 mb-1">
        {item.day}
      </p>

      <p className="text-[12.5px] lg:text-[13px] 2xl:text-[16px] text-neutral-800 leading-snug">
        {item.hours}
      </p>
    </div>
  ))}
</div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      aria-label="Contact Us"
      className="bg-neutral-50 py-28 lg:py-27 2xl:py-40 px-6 lg:px-10"
    >
        <Container>
      <div className="max-w-6xl 2xl:max-w-[1400px] mx-auto">

   <motion.div
  className="flex flex-col items-center text-center gap-6 mb-10"
  initial="hidden"
  animate={inView ? "visible" : "hidden"}
  variants={fadeUp}
  custom={0}
>
  {/* First Row */}
  <div className="w-full flex justify-center">
    <h1 className="text-[22px] sm:text-[28px] lg:text-[42px] 2xl:text-[55px] font-['Geologica'] font-semibold tracking-tight text-[#0B67B2] leading-tight max-w-[1300px] lg:max-w-[1200px]">
      For quality,  consistency,
  
      reach out to us.
    </h1>
  </div>

  {/* Second Row */}
  <div className="w-full flex justify-center">
    <p className="text-[14px] sm:text-[15px] lg:text-[17px] 2xl:text-[20px] leading-7 text-neutral-500 max-w-[650px] lg:max-w-[950px] 2xl:max-w-[1050px] font-['Geologica']">
      If you have any questions, please feel free to get in touch
      with us via phone, text, email, or the form below.
    </p>
  </div>
</motion.div>

        {/* ── Content Grid ────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 2xl:gap-7 items-start">

          {/* Left: Contact Form */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={0.1}
          >
            <ContactForm />
          </motion.div>

          {/* Right: Info + Hours stacked */}
          <div className="flex flex-col gap-5 2xl:gap-7">
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              custom={0.2}
            >
              <ContactInfoCard />
            </motion.div>

            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              custom={0.3}
            >
              <BusinessHoursCard />
            </motion.div>
          </div>
        </div>

      </div>
      </Container>
    </section>
  );
}