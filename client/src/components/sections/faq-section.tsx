import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react"; // modern lightweight icons
import { Helmet } from "react-helmet"; // SEO & Schema

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

const faqs: FAQItem[] = [
  {
    question: "How can I book my stay?",
    answer: (
      <>
        You can book directly via <span className="font-semibold text-[hsl(var(--mountain-gold))]">WhatsApp</span> using the Send inquiry button after filling all the appropriate details in our <span className="font-semibold text-[hsl(var(--mountain-gold))]">contact section</span>, or reach us through the <span className="font-semibold text-[hsl(var(--mountain-gold))]">number</span> provided on our website. Also you can DM us on our <span className="font-semibold text-[hsl(var(--mountain-gold))]">Instagram page</span> provided at the bottom of the website.
      </>
    ),
  },
  {
    question: "Do you provide local food options?",
    answer: (
      <>
        Yes, we serve <span className="font-semibold text-[hsl(var(--mountain-gold))]">traditional Himachali meals</span> prepared with locally sourced organic ingredients and family recipes.
      </>
    ),
  },
  {
    question: "Is parking available at the property?",
    answer: (
      <>
        Yes, free <span className="font-semibold text-[hsl(var(--mountain-gold))]">private parking is available</span> for all our guests right beside the homestay.
      </>
    ),
  },
  {
    question: "Do you have free Wi-Fi available at the property?",
    answer: (
      <>
        Yes, we offer complimentary <span className="font-semibold text-[hsl(var(--mountain-gold))]">Jio AirFiber high-speed Wi-Fi</span> <i className="fas fa-wifi text-[hsl(var(--mountain-gold))] mr-2"></i>throughout the property, including all guest rooms and common areas.  
      </>
    ),
  },
  {
    question: "What’s the best time to visit Kalpa, and when should I avoid visiting?",
    answer: (
    <span>
      Kalpa offers a unique charm in every season. The best time to visit is from{" "}
      <span className="font-semibold text-[hsl(var(--mountain-gold))]">March to June</span> and{" "}
      <span className="font-semibold text-[hsl(var(--mountain-gold))]">September to November</span>,
      when the valley is full of apple blossoms and clear mountain views. We usually advise guests
      to avoid the monsoon months {" "}
      (<span className="font-semibold text-[hsl(var(--mountain-gold))]">July and August</span>) as
      heavy rains can sometimes lead to landslides or temporary road closures. Winter (
      <span className="font-semibold text-[hsl(var(--mountain-gold))]">December to February</span>)
      is serene and snowy, perfect for those who love quiet mountain retreats, though access can
      occasionally be affected by snowfall.
    </span>
  ),
  },
  {
    question: "When is the best time to see snowfall and enjoy stargazing in Kalpa?",
    answer: (
    <span>
      If you wish to experience both <span className="font-semibold text-[hsl(var(--mountain-gold))]">snowfall</span> and breathtaking{" "}
      <span className="font-semibold text-[hsl(var(--mountain-gold))]">stargazing</span>, the best time to visit{" "}
      <span className="font-semibold text-[hsl(var(--mountain-gold))]">Kalpa</span> is from{" "}
      <span className="font-semibold text-[hsl(var(--mountain-gold))]">November to February</span>.{" "}
      The air is crisp and the sky is perfectly clear, ideal for watching the{" "}
      <span className="font-semibold text-[hsl(var(--mountain-gold))]"> countless stars</span> right from our homestay terrace.
      <br /><br />
      As your hosts, we suggest planning your trip in{" "}
      <span className="font-semibold text-[hsl(var(--mountain-gold))]">January</span> for the best mix of fresh snow and cloud free nights. 
      Just remember, after heavy snowfall there can be <span className="font-semibold text-[hsl(var(--mountain-gold))]">brief road closures</span>, so do check in with us before traveling we’ll happily update you on weather and road conditions.
    </span>
    ),
  }
];

type FAQSectionProps = {
  id?: string;
}

export default function FAQSection({ id }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  // SEO + FAQ JSON-LD structured data
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text:
          typeof faq.answer === "string"
            ? faq.answer
            : "Visit the FAQ section on Raldang View Homestay’s website for details.",
      },
    })),
  };
  return (
    <section id="faq" className="py-20 bg-[hsl(var(--mountain-white))]">
      {/* SEO Metadata */}
      <Helmet>
        <title>FAQs – Raldang View Homestay | Homestay in Kalpa, Kinnaur Valley, Himachal Pradesh</title>
        <meta
          name="description"
          content="Find answers about Raldang View Homestay in Kalpa — best time to visit, Wi-Fi, food, parking, booking details, and family-friendly amenities."
        />
        <meta name="keywords" content="Kalpa homestay, best time to visit Kalpa, Raldang View Homestay, Himachali food, Wi-Fi, parking, Kinnaur Valley stay, Kalpa hotel" />
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
      </Helmet>

      <div className="container mx-auto px-4 md:px-8">
        {/* Section heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[hsl(var(--mountain-pine))] mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-[hsl(var(--mountain-red))] mx-auto"></div>
        </motion.div>

        {/* FAQ items */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto space-y-6"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-[hsl(var(--mountain-blue))]/30 pb-4"
            >
              <button
                className="flex items-center w-full text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <div className="mr-4 flex-shrink-0 text-[hsl(var(--mountain-gold))]">
                  {openIndex === index ? (
                    <Minus size={24} />
                  ) : (
                    <Plus size={24} />
                  )}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-[hsl(var(--mountain-pine))]">
                  {faq.question}
                </h3>
              </button>

              <motion.div
                initial={false}
                animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden pl-10 pr-4 text-[hsl(var(--mountain-pine))]/80"
              >
                <div className="mt-2 text-base leading-relaxed">{faq.answer}</div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
