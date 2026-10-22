import React from "react";
import { ShieldCheck, Mail, Phone, MapPin, AlertCircle } from "lucide-react";
import { companyData } from "../data/company";

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="border-b border-forest/10 pb-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-widest rounded-full bg-sage/40 text-forest border border-forest/10">
            <ShieldCheck className="w-4 h-4 text-gold" />
            <span>UK Data Protection Notice</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal">
            Privacy Policy
          </h1>
          <p className="text-sm text-charcoal-muted">
            Last updated: October 2026 | Applicable under the UK GDPR &amp; Data Protection Act 2018
          </p>
        </div>

        {/* Legal Disclaimer / Draft Notice */}
        <div className="p-4 sm:p-5 bg-amber-50 border border-amber-200/80 rounded-sm text-xs sm:text-sm text-amber-900 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="font-bold">Draft Policy Notice:</strong> This privacy document constitutes the initial operating policy for GOBIQ LTD and reflects our domestic enquiry handling procedures. It is subject to periodic review by the company directors and legal counsel to reflect ongoing operational refinements.
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-10 text-sm sm:text-base text-charcoal-light leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-charcoal">
              1. Information We Collect
            </h2>
            <p>
              When you submit a domestic building enquiry through our website, communicate with us via telephone, or email us directly, GOBIQ LTD collects only information that is strictly necessary to evaluate your construction requirements:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm">
              <li><strong>Contact Information:</strong> Full name, telephone number, and email address.</li>
              <li><strong>Project Specifics:</strong> Site location/postcode, proposed scope of works (e.g. extension, renovation, new build), target commencement dates, and estimated budget range.</li>
              <li><strong>Technical Submissions:</strong> Architectural plans, structural drawings, or photographs provided by you for quotation purposes.</li>
              <li><strong>Technical Browser Data:</strong> Strictly necessary device parameters, IP address, and browser user agent for website security and firewall protection.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-charcoal">
              2. How Your Information is Used
            </h2>
            <p>
              Under Article 6 of the UK GDPR, we process your personal data on the lawful bases of:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm">
              <li><strong>Taking steps prior to entering a contract:</strong> Assessing your property plans, providing accurate quotations, and arranging site surveys.</li>
              <li><strong>Legitimate Interests:</strong> Managing ongoing communication, verifying project feasibility, and ensuring the technical security of our website.</li>
              <li><strong>Compliance with legal obligations:</strong> Maintaining domestic construction records, accounting requirements, and Building Control inspection compliance.</li>
            </ul>
            <p>
              We do not use your information for unsolicited third-party marketing, nor do we sell personal data under any circumstances.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-charcoal">
              3. Data Retention
            </h2>
            <p>
              Enquiry data that does not progress to a contracted construction project is securely purged within 12 months of the last communication. Information associated with confirmed domestic building contracts is retained for 6 to 12 years to comply with UK statutory warranty obligations, limitation periods under the Limitation Act 1980, and HMRC financial reporting laws.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-charcoal">
              4. Data Sharing &amp; Third Parties
            </h2>
            <p>
              We only share your information with trusted third parties strictly necessary to deliver construction services, including:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm">
              <li>Appointed structural engineers, party wall surveyors, and architectural consultants working on your build.</li>
              <li>Approved Local Authority Building Control inspectors or registered private building control inspectors.</li>
              <li>Secure web-hosting and IT infrastructure providers located within the United Kingdom or EEA.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-charcoal">
              5. Data Security
            </h2>
            <p>
              We apply technical and organizational security measures to protect your personal information against unauthorized access, loss, or alteration. All web transmissions are encrypted via SSL/TLS protocols, and digital records are stored in access-restricted environments.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-charcoal">
              6. Your Statutory UK Rights
            </h2>
            <p>
              Under UK data protection legislation, you have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm">
              <li>Request access to copies of your personal data held by GOBIQ LTD.</li>
              <li>Request rectification of inaccurate or incomplete information.</li>
              <li>Request the erasure of your data where retention is no longer legally required.</li>
              <li>Restrict or object to processing under certain conditions.</li>
              <li>Lodge a complaint with the UK Information Commissioner&apos;s Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-forest underline hover:text-gold">ico.org.uk</a> if you believe your data rights have been infringed.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="space-y-3 pt-6 border-t border-forest/10">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-charcoal">
              7. Contacting the Data Controller
            </h2>
            <p>
              If you have any questions regarding this Privacy Policy or wish to exercise your data rights, please contact our registered office:
            </p>
            <div className="p-5 bg-white rounded-sm border border-forest/10 space-y-2 text-sm">
              <p><strong>GOBIQ LTD</strong> (Company No. {companyData.companyNumber})</p>
              <p className="flex items-center gap-2 text-charcoal-muted">
                <MapPin className="w-4 h-4 text-forest" />
                <span>{companyData.registeredOffice.fullAddress}</span>
              </p>
              <p className="flex items-center gap-2 text-charcoal-muted">
                <Phone className="w-4 h-4 text-forest" />
                <a href={`tel:${companyData.contact.phoneTel}`} className="text-forest font-semibold hover:underline">
                  {companyData.contact.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2 text-charcoal-muted">
                <Mail className="w-4 h-4 text-forest" />
                <a href={`mailto:${companyData.contact.email}`} className="text-forest font-semibold hover:underline">
                  {companyData.contact.email}
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
