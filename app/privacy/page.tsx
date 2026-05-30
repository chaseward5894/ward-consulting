import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Ward Consulting",
  description: "Privacy policy for Ward Consulting.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto prose prose-slate">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
          <p className="text-slate-500 text-sm mb-10">Last updated: May 2026</p>

          <div className="space-y-8 text-slate-600 leading-relaxed">

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">1. Who We Are</h2>
              <p>Ward Consulting is a consulting business based in Nashville, TN that helps small local service businesses set up workflow automations. This privacy policy explains how we collect and use information submitted through our website at wardconsultingco.com.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">2. Information We Collect</h2>
              <p>When you fill out the contact form on our website, we collect the following information:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Your name</li>
                <li>Your business name</li>
                <li>Your email address</li>
                <li>Your phone number (optional)</li>
                <li>Your business website (optional)</li>
                <li>Your business type</li>
                <li>A description of the problem you're trying to solve</li>
              </ul>
              <p className="mt-3">We do not collect any payment information, and we do not use cookies for tracking or advertising.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">3. How We Use Your Information</h2>
              <p>The information you submit is used solely to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Follow up with you about your inquiry</li>
                <li>Understand your business situation before a call</li>
                <li>Send you a confirmation that we received your message</li>
              </ul>
              <p className="mt-3">We do not sell, rent, or share your information with third parties for marketing purposes.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">4. How We Store Your Information</h2>
              <p>Form submissions are stored in a private Google Sheet accessible only to Ward Consulting. Notification emails are sent via Resend, a transactional email service. Your information is not shared with any other parties.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">5. Your Rights</h2>
              <p>You can request that we delete your information at any time by emailing us at wardconsulting99@gmail.com. We will remove your data from our records within 7 business days.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">6. Contact</h2>
              <p>If you have any questions about this privacy policy, please reach out:</p>
              <ul className="list-none mt-2 space-y-1">
                <li>Email: <a href="mailto:wardconsulting99@gmail.com" className="text-blue-600 hover:underline">wardconsulting99@gmail.com</a></li>
                <li>Phone: <a href="tel:6156639319" className="text-blue-600 hover:underline">(615) 663-9319</a></li>
              </ul>
            </div>

          </div>

          <div className="mt-12">
            <a href="/" className="text-blue-600 hover:underline text-sm">← Back to Home</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
