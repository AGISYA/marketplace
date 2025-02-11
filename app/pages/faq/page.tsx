"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "How does Grochy ensure the freshness of its products?",
    answer:
      "At Grochy, we work directly with local farmers and suppliers to source the freshest products. Our inventory is carefully managed to ensure quick turnover, and we have strict quality control measures in place. We also offer a freshness guarantee - if you're not satisfied with the freshness of any product, we'll replace it or refund your money.",
  },
  {
    question: "What are your delivery options and fees?",
    answer:
      "We offer several delivery options to suit your needs. Standard delivery (2-3 business days) is free for orders over $50. Express delivery (next day) is available for a flat fee of $9.99. We also offer a subscription service called Grochy Prime, which provides unlimited free deliveries for a monthly fee.",
  },
  {
    question: "How do I return a product if I'm not satisfied?",
    answer:
      "We have a hassle-free return policy. If you're not satisfied with a product, you can return it within 14 days of delivery for a full refund. For perishable items, please contact our customer service within 24 hours of delivery. You can initiate a return through your account dashboard or by contacting our customer service team.",
  },
  {
    question: "Do you offer organic and locally sourced products?",
    answer:
      "Yes, we have a wide range of organic and locally sourced products. You can easily filter for these options while shopping on our website. We're committed to supporting local farmers and sustainable agriculture practices.",
  },
  {
    question: "How does Grochy handle substitutions for out-of-stock items?",
    answer:
      "If an item in your order is out of stock, our shoppers will choose the best possible substitute based on your preferences. You can set your substitution preferences in your account settings. We'll always ask for your approval on substitutions before finalizing your order.",
  },
  {
    question: "Is it possible to schedule a delivery for a specific time?",
    answer:
      "Yes, we offer scheduled deliveries. During checkout, you can select your preferred delivery date and time slot. Please note that popular time slots may fill up quickly, so we recommend placing your order in advance for the best selection of delivery times.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="bg-white text-black min-h-screen">
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h1>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  className="flex justify-between items-center w-full text-left p-4 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold">{faq.question}</span>
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openIndex === index && (
                  <div className="p-4 bg-gray-50 rounded-b-lg mt-1">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
          <p className="mb-8">Our customer support team is here to help you.</p>
          <button className="bg-white text-primary py-2 px-6 rounded-md hover:bg-gray-100 transition-colors">
            Contact Support
          </button>
        </div>
      </section>
    </main>
  );
}
