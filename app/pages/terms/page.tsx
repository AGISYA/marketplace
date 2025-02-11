import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <main className="pt-20 bg-white text-black min-h-screen">
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">
            Terms and Conditions
          </h1>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <p className="mb-4">
              {`
              Welcome to Grochy. These terms and conditions outline the rules
              and regulations for the use of Grochy's Website.`}
            </p>
            <p className="mb-4">
              {`
              By accessing this website, we assume you accept these terms and
              conditions in full. Do not continue to use Grochy's website if you
              do not accept all of the terms and conditions stated on this page.`}
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. License</h2>
            <p className="mb-4">
              Unless otherwise stated, Grochy and/or its licensors own the
              intellectual property rights for all material on Grochy. All
              intellectual property rights are reserved. You may view and/or
              print pages from https://www.grochy.com for your own personal use
              subject to restrictions set in these terms and conditions.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              2. Restrictions
            </h2>
            <p className="mb-4">
              You are specifically restricted from all of the following:
            </p>
            <ul className="list-disc pl-8 mb-4">
              <li>publishing any website material in any other media;</li>
              <li>
                selling, sublicensing and/or otherwise commercializing any
                website material;
              </li>
              <li>publicly performing and/or showing any website material;</li>
              <li>
                using this website in any way that is or may be damaging to this
                website;
              </li>
              <li>
                using this website in any way that impacts user access to this
                website;
              </li>
              <li>
                using this website contrary to applicable laws and regulations,
                or in any way may cause harm to the website, or to any person or
                business entity;
              </li>
              <li>
                engaging in any data mining, data harvesting, data extracting or
                any other similar activity in relation to this website;
              </li>
              <li>
                using this website to engage in any advertising or marketing.
              </li>
            </ul>
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              3. Your Content
            </h2>
            <p className="mb-4">
              {`  In these terms and conditions, "Your Content" shall mean any
              audio, video, text, images or other material you choose to display
              on this website. By displaying Your Content, you grant Grochy a
              non-exclusive, worldwide, irrevocable, royalty-free, sublicensable
              license to use, reproduce, adapt, publish, translate and
              distribute it in any and all media.`}
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              4. No warranties
            </h2>
            <p className="mb-4">
              {`  This website is provided "as is," with all faults, and Grochy
              makes no express or implied representations or warranties, of any
              kind related to this website or the materials contained on this
              website.`}
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              5. Limitation of liability
            </h2>
            <p className="mb-4">
              In no event shall Grochy, nor any of its officers, directors and
              employees, be held liable for anything arising out of or in any
              way connected with your use of this website, whether such
              liability is under contract, tort or otherwise.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              6. Indemnification
            </h2>
            <p className="mb-4">
              {`You hereby indemnify to the fullest extent Grochy from and against
              any and all liabilities, costs, demands, causes of action, damages
              and expenses (including reasonable attorney's fees) arising out of
              or in any way related to your breach of any of the provisions of
              these terms.`}
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              7. Severability
            </h2>
            <p className="mb-4">
              If any provision of these terms is found to be unenforceable or
              invalid under any applicable law, such unenforceability or
              invalidity shall not render these terms unenforceable or invalid
              as a whole, and such provisions shall be deleted without affecting
              the remaining provisions herein.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              8. Variation of Terms
            </h2>
            <p className="mb-4">
              Grochy is permitted to revise these terms at any time as it sees
              fit, and by using this website you are expected to review such
              terms on a regular basis to ensure you understand all terms and
              conditions governing use of this website.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              9. Governing Law & Jurisdiction
            </h2>
            <p className="mb-4">
              These terms will be governed by and construed in accordance with
              the laws of [Your Country], and you submit to the non-exclusive
              jurisdiction of the state and federal courts located in [Your
              Country] for the resolution of any disputes.
            </p>
            <p className="mt-8">
              If you have any questions about these Terms and Conditions, please
              contact us at{" "}
              <Link
                href="mailto:legal@grochy.com"
                className="text-primary hover:underline"
              >
                legal@grochy.com
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
