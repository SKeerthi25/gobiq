import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Mail, Loader2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { companyData } from "../data/company";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  location: string;
  budget: string;
  startDate: string;
  description: string;
  consent: boolean;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  location?: string;
  description?: string;
  consent?: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    projectType: "New-Build Homes",
    location: "",
    budget: "",
    startDate: "",
    description: "",
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionRef, setSubmissionRef] = useState<string>("");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid UK or international email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please provide a contact telephone number.";
    } else if (formData.phone.replace(/[\s\-\(\)\+]/g, "").length < 9) {
      newErrors.phone = "Please enter a valid contact phone number (at least 9 digits).";
    }

    if (!formData.projectType) {
      newErrors.projectType = "Please select the project category.";
    }

    if (!formData.location.trim()) {
      newErrors.location = "Please specify the project location or postcode (e.g., Tipton, Birmingham).";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Please provide an outline of your domestic project requirements.";
    } else if (formData.description.trim().length < 15) {
      newErrors.description = "Please provide at least 15 characters to explain your requirements.";
    }

    if (!formData.consent) {
      newErrors.consent = "You must agree to the privacy notice before submitting an enquiry.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Clear field-level error as user edits
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable network request
    await new Promise((resolve) => setTimeout(resolve, 900));

    // Generate verified reference number
    const refCode = `GBQ-${Date.now().toString().slice(-6)}`;
    setSubmissionRef(refCode);

    // Persist locally for enquiry record
    try {
      const existing = JSON.parse(localStorage.getItem("gobiq_enquiries") || "[]");
      existing.push({
        ref: refCode,
        timestamp: new Date().toISOString(),
        ...formData,
      });
      localStorage.setItem("gobiq_enquiries", JSON.stringify(existing));
    } catch {
      // ignore storage errors
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  // Prefilled mailto link as direct email fallback
  const mailtoSubject = encodeURIComponent(`Project Enquiry: ${formData.projectType || "Domestic Building"}`);
  const mailtoBody = encodeURIComponent(
    `Name: ${formData.fullName}\nPhone: ${formData.phone}\nLocation: ${formData.location}\nBudget: ${formData.budget || "Unspecified"}\nTarget Start: ${formData.startDate || "Unspecified"}\n\nProject Outline:\n${formData.description}`
  );
  const directMailtoUrl = `mailto:${companyData.contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 sm:p-10 rounded-sm border border-forest/15 shadow-card animate-in fade-in duration-300 text-charcoal">
        <div className="w-14 h-14 rounded-full bg-forest-50 text-forest flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8 text-forest" />
        </div>

        <span className="text-xs uppercase font-semibold text-gold tracking-widest">Enquiry Received</span>
        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-charcoal mt-1">
          Thank You, {formData.fullName.split(" ")[0]}
        </h3>

        <p className="mt-3 text-sm text-charcoal-muted leading-relaxed">
          Your project details have been successfully captured under reference number{" "}
          <strong className="text-forest font-mono">{submissionRef}</strong>. We review all residential enquiries and will contact you via phone or email within two business days.
        </p>

        {/* Development & Verification State Notice as specified in Section 5 */}
        <div className="my-6 p-4 bg-forest-50/70 border border-forest/15 rounded-sm text-xs text-forest-800 space-y-2">
          <div className="flex items-center gap-1.5 font-bold text-forest">
            <AlertCircle className="w-4 h-4 text-gold shrink-0" />
            <span>Development State Notice &amp; Direct Channel:</span>
          </div>
          <p>
            This website is operating in production development mode. Your submission is recorded locally. For instantaneous dispatch directly to the director&apos;s mailbox, click the button below:
          </p>
          <a
            href={directMailtoUrl}
            className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-forest text-white rounded-sm text-xs font-semibold hover:bg-forest-600 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-gold" />
            <span>Send Copy Directly via Email Client ({companyData.contact.email})</span>
          </a>
        </div>

        <div className="pt-4 border-t border-forest/10 flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                fullName: "",
                email: "",
                phone: "",
                projectType: "New-Build Homes",
                location: "",
                budget: "",
                startDate: "",
                description: "",
                consent: false,
              });
            }}
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-charcoal border border-forest/20 rounded-sm hover:bg-forest/5 transition-colors"
          >
            Submit Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white p-6 sm:p-8 lg:p-10 rounded-sm border border-forest/10 shadow-card"
    >
      <div className="mb-6 pb-4 border-b border-forest/10">
        <h3 className="font-heading text-xl sm:text-2xl font-bold text-charcoal">
          Request a Project Consultation
        </h3>
        <p className="text-xs sm:text-sm text-charcoal-muted mt-1">
          Complete the fields below with your proposed domestic construction requirements.
        </p>
      </div>

      <div className="space-y-5">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
            Full Name <span className="text-red-600">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. David Harrison"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            className={`w-full px-4 py-3 text-sm bg-ivory-light border rounded-sm transition-colors focus:bg-white ${
              errors.fullName
                ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                : "border-forest/20 focus:border-forest"
            }`}
          />
          {errors.fullName && (
            <p id="fullName-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        {/* Email & Phone Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
              Email Address <span className="text-red-600">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. david@example.co.uk"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={`w-full px-4 py-3 text-sm bg-ivory-light border rounded-sm transition-colors focus:bg-white ${
                errors.email
                  ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  : "border-forest/20 focus:border-forest"
              }`}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
              Telephone Number <span className="text-red-600">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. 07700 900123"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className={`w-full px-4 py-3 text-sm bg-ivory-light border rounded-sm transition-colors focus:bg-white ${
                errors.phone
                  ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  : "border-forest/20 focus:border-forest"
              }`}
            />
            {errors.phone && (
              <p id="phone-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>
        </div>

        {/* Project Type & Location Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="projectType" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
              Project Type <span className="text-red-600">*</span>
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full px-4 py-3 text-sm bg-ivory-light border border-forest/20 rounded-sm transition-colors focus:bg-white focus:border-forest"
            >
              <option value="New-Build Homes">New-Build Homes</option>
              <option value="Home Extensions">Home Extensions</option>
              <option value="Property Renovations">Property Renovations</option>
              <option value="Structural & Building Works">Structural &amp; Building Works</option>
              <option value="Other Domestic Construction">Other Domestic Construction</option>
            </select>
          </div>

          <div>
            <label htmlFor="location" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
              Project Location / Postcode <span className="text-red-600">*</span>
            </label>
            <input
              id="location"
              name="location"
              type="text"
              required
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g. Tipton, DY4 or Solihull"
              aria-invalid={!!errors.location}
              aria-describedby={errors.location ? "location-error" : undefined}
              className={`w-full px-4 py-3 text-sm bg-ivory-light border rounded-sm transition-colors focus:bg-white ${
                errors.location
                  ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  : "border-forest/20 focus:border-forest"
              }`}
            />
            {errors.location && (
              <p id="location-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.location}</span>
              </p>
            )}
          </div>
        </div>

        {/* Optional Budget & Preferred Start Date */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="budget" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
              Estimated Budget <span className="text-charcoal-muted font-normal">(Optional)</span>
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 text-sm bg-ivory-light border border-forest/20 rounded-sm transition-colors focus:bg-white focus:border-forest"
            >
              <option value="">Select an approximate range...</option>
              <option value="Under £30,000">Under £30,000</option>
              <option value="£30,000 – £75,000">£30,000 – £75,000</option>
              <option value="£75,000 – £150,000">£75,000 – £150,000</option>
              <option value="£150,000 – £300,000">£150,000 – £300,000</option>
              <option value="£300,000+">£300,000+</option>
            </select>
          </div>

          <div>
            <label htmlFor="startDate" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
              Target Start Timeline <span className="text-charcoal-muted font-normal">(Optional)</span>
            </label>
            <select
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full px-4 py-3 text-sm bg-ivory-light border border-forest/20 rounded-sm transition-colors focus:bg-white focus:border-forest"
            >
              <option value="">Select target timeline...</option>
              <option value="Immediate (Within 1 Month)">Immediate (Within 1 Month)</option>
              <option value="1 to 3 Months">1 to 3 Months</option>
              <option value="3 to 6 Months">3 to 6 Months</option>
              <option value="6+ Months / Early Planning">6+ Months / Early Planning</option>
            </select>
          </div>
        </div>

        {/* Project Description */}
        <div>
          <label htmlFor="description" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
            Project Description &amp; Scope <span className="text-red-600">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            required
            value={formData.description}
            onChange={handleChange}
            placeholder="Please describe your domestic property, proposed works (e.g. rear kitchen extension, structural beam work, full refurbishment), and whether you have architectural plans or planning approval in place."
            aria-invalid={!!errors.description}
            aria-describedby={errors.description ? "description-error" : undefined}
            className={`w-full px-4 py-3 text-sm bg-ivory-light border rounded-sm transition-colors focus:bg-white ${
              errors.description
                ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                : "border-forest/20 focus:border-forest"
            }`}
          />
          {errors.description && (
            <p id="description-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.description}</span>
            </p>
          )}
        </div>

        {/* Consent Checkbox */}
        <div>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              aria-invalid={!!errors.consent}
              aria-describedby={errors.consent ? "consent-error" : undefined}
              className="mt-1 h-4 w-4 rounded-sm border-forest/30 text-forest focus:ring-gold"
            />
            <span className="text-xs text-charcoal-light leading-relaxed">
              I consent to GOBIQ LTD processing my submitted contact details in accordance with the{" "}
              <Link to="/privacy" target="_blank" className="text-forest font-semibold underline hover:text-gold">
                Privacy Policy
              </Link>{" "}
              for the purpose of evaluating and responding to this domestic building construction enquiry. <span className="text-red-600">*</span>
            </span>
          </label>
          {errors.consent && (
            <p id="consent-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.consent}</span>
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-forest text-white font-heading text-sm font-semibold uppercase tracking-wider rounded-sm hover:bg-forest-600 active:scale-[0.99] transition-all disabled:opacity-60 shadow-sm hover:shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-gold" />
                <span>Processing Enquiry...</span>
              </>
            ) : (
              <>
                <span>Submit Project Enquiry</span>
                <Send className="w-4 h-4 text-gold" />
              </>
            )}
          </button>
        </div>

        {/* Direct Email alternative link */}
        <div className="text-center pt-2">
          <a
            href={`mailto:${companyData.contact.email}`}
            className="inline-flex items-center gap-1.5 text-xs text-charcoal-muted hover:text-forest transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-gold" />
            <span>Prefer to email directly? Click here to write to {companyData.contact.email}</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </form>
  );
};
