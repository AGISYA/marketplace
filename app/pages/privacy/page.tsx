import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="pt-20 bg-white text-black min-h-screen">
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">
            Privacy Policy
          </h1>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <p className="mb-4">
              At Grochy, we are committed to protecting your privacy and
              ensuring the security of your personal information. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website or use our services.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              1. Information We Collect
            </h2>
            <p className="mb-4">
              We may collect the following types of information:
            </p>
            <ul className="list-disc pl-8 mb-4">
              <li>
                Personal information (such as name, email address, phone number)
              </li>
              <li>Billing and payment information</li>
              <li>Delivery address</li>
              <li>Shopping preferences and history</li>
              <li>Device and browser information</li>
            </ul>
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="mb-4">
              We use the collected information for various purposes, including:
            </p>
            <ul className="list-disc pl-8 mb-4">
              <li>Processing and fulfilling your orders</li>
              <li>Providing customer support</li>
              <li>Improving our products and services</li>
              <li>
                Sending promotional emails and updates (with your consent)
              </li>
              <li>Analyzing website usage and trends</li>
            </ul>
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              3. Information Sharing and Disclosure
            </h2>
            <p className="mb-4">
              We do not sell or rent your personal information to third parties.
              We may share your information with:
            </p>
            <ul className="list-disc pl-8 mb-4">
              <li>
                Service providers who assist us in operating our website and
                conducting our business
              </li>
              <li>
                Law enforcement or government agencies when required by law
              </li>
              <li>Other parties with your consent or at your direction</li>
            </ul>
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              4. Data Security
            </h2>
            <p className="mb-4">
              We implement a variety of security measures to maintain the safety
              of your personal information. However, no method of transmission
              over the Internet or electronic storage is 100% secure, and we
              cannot guarantee absolute security.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              5. Cookies and Tracking Technologies
            </h2>
            <p className="mb-4">
              We use cookies and similar tracking technologies to track activity
              on our website and hold certain information. You can instruct your
              browser to refuse all cookies or to indicate when a cookie is
              being sent.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Rights</h2>
            <p className="mb-4">
              You have the right to access, update, or delete your personal
              information. You can also opt-out of marketing communications at
              any time.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              7. Changes to This Privacy Policy
            </h2>
            <p className="mb-4">
              {` We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the "Last Updated" date.`}
            </p>
            <p className="mt-8">
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
              <Link
                href="mailto:privacy@grochy.com"
                className="text-primary hover:underline"
              >
                privacy@grochy.com
              </Link>
              .
            </p>
            <p className="mt-4 text-sm text-gray-600">
              Last Updated: June 1, 2023
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
