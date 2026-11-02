export default function PrivacyPolicy() {
  const updated = "October 18, 2026";

  return (
    <div className="min-h-screen bg-[#0b1120] text-gray-200">
      <div className="max-w-4xl mx-auto px-6 py-28 md:py-32">
        <a href="/" className="text-green-400 hover:text-green-300 text-sm">
          ← Back to Home
        </a>

        <h1 className="mt-6 text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        <p className="mt-4 text-gray-400">
          Effective date: {updated} · Last updated: {updated}
        </p>

        <div className="mt-10 space-y-8 text-[15px] leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Introduction</h2>
            <p>
              AgriGati (“we”, “our”, “us”), operated by LendenX in India, provides
              a unified digital agriculture platform (mobile app and website at{" "}
              <a href="https://agrigati.com" className="text-green-400 hover:underline">
                agrigati.com
              </a>
              ) integrating farmland discovery, AI crop advisory, mandi
              intelligence, and verified agricultural service providers. This
              Privacy Policy explains what information we collect through our
              mobile application (“App”) and website, how we use it, with whom
              we share it, and the choices available to you.
            </p>
            <p className="mt-3">
              By using AgriGati, you agree to the collection and use of
              information in accordance with this policy. If you do not agree,
              please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Contact Information</h2>
            <p>
              Data controller: AgriGati (LendenX), India.
              <br />
              Email:{" "}
              <a href="mailto:ceo@agrigati.com" className="text-green-400 hover:underline">
                ceo@agrigati.com
              </a>
              <br />
              Phone: +91 9990296759
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Information We Collect</h2>
            <h3 className="font-semibold text-green-400 mt-4 mb-2">
              3.1 Information you provide
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Account details: name, email address, phone number, password.</li>
              <li>Profile details: role (farmer, landowner, service provider), language preference, profile photo.</li>
              <li>Farm and land details: land location, area, crop information, listings, lease terms you publish.</li>
              <li>Service listings: machinery, inputs, storage, transport and pricing details you publish.</li>
              <li>Support communications: messages, enquiry forms, and feedback you send us.</li>
            </ul>
            <h3 className="font-semibold text-green-400 mt-4 mb-2">
              3.2 Information collected automatically
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Device information: device model, operating system version, unique device identifiers, mobile network information.</li>
              <li>Usage data: features used, mandi price queries viewed, advisory interactions, log data, crash reports and performance diagnostics.</li>
              <li>Approximate or precise location (only when you grant permission) used for geo-tagged listings, nearby services, mandi prices and location-aware advisories.</li>
            </ul>
            <h3 className="font-semibold text-green-400 mt-4 mb-2">
              3.3 Photos, camera, voice and files
            </h3>
            <p>
              With your permission, the App may access your camera and photo
              library (for crop disease image diagnosis and listing photos),
              microphone (for voice-based multilingual advisory), and file
              storage (to upload documents or download reports). You can revoke
              these permissions at any time in your device settings; some
              features may then be unavailable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. App Permissions We Request</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Location</strong> — to show nearby farmland, services, mandi prices and geo-tag listings.</li>
              <li><strong>Camera &amp; Photos</strong> — for crop image diagnosis, profile pictures and listing images.</li>
              <li><strong>Microphone</strong> — for voice-based AI advisory in your language.</li>
              <li><strong>Storage / Files</strong> — to upload documents and save reports.</li>
              <li><strong>Notifications</strong> — to send price alerts, booking updates and advisory responses (opt-out anytime).</li>
            </ul>
            <p className="mt-3">
              Permissions are requested only when the related feature is used,
              and never before. Denying a permission only disables the feature
              that needs it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>To create and manage your account and verified profile.</li>
              <li>To operate the marketplace: publish and match land, service and input listings.</li>
              <li>To provide AI crop advisory, mandi intelligence and analytics.</li>
              <li>To communicate with you about bookings, enquiries, updates and support.</li>
              <li>To improve our services, fix bugs, and analyse aggregated usage trends.</li>
              <li>To prevent fraud, enforce our terms, and comply with legal obligations.</li>
            </ul>
            <p className="mt-3">
              We do not sell your personal information to third parties, and we
              do not use it for third-party advertising.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Sharing of Information</h2>
            <p>We share information only as described below:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li><strong>With other users, as you choose:</strong> listing details (land, services, contact particulars you publish) are visible to other users to enable transactions.</li>
              <li><strong>Service providers:</strong> cloud hosting, push-notification, mapping, analytics and crash-reporting providers who process data on our behalf under contractual confidentiality obligations.</li>
              <li><strong>Legal compliance:</strong> when required by applicable law, court order, or government request in India.</li>
              <li><strong>Business transfer:</strong> in connection with a merger, acquisition or asset sale, with notice to users where required.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Data Retention and Deletion</h2>
            <p>
              We retain your information for as long as your account is active
              or as needed to provide services, comply with legal obligations,
              resolve disputes and enforce agreements. Listing content may be
              retained in anonymised or aggregated form for analytics.
            </p>
            <p className="mt-3">
              The fastest way is our self-service deletion page: visit{" "}
              <a href="/delete-account" className="text-green-400 hover:underline">
                agrigati.com/delete-account
              </a>
              , verify your registered mobile number with an OTP, and confirm
              deletion. Alternatively, you may request deletion of your account
              and personal data at any time by emailing{" "}
              <a href="mailto:ceo@agrigati.com" className="text-green-400 hover:underline">
                ceo@agrigati.com
              </a>{" "}
              from your registered email address with the subject “Delete My
              Account”. We will delete or anonymise your personal data within
              30 days, except where retention is required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Data Security</h2>
            <p>
              We use reasonable administrative, technical and organisational
              safeguards, including encrypted transport (HTTPS/TLS), access
              controls, and restricted internal access to personal data. No
              method of transmission or storage is completely secure, and we
              cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">9. Your Rights</h2>
            <p>
              Subject to applicable law (including India’s Digital Personal Data
              Protection Act, 2023), you have the right to access, correct,
              update, or delete your personal information, to withdraw consent,
              and to raise grievances. Contact us at{" "}
              <a href="mailto:ceo@agrigati.com" className="text-green-400 hover:underline">
                ceo@agrigati.com
              </a>{" "}
              to exercise these rights; we will respond within a reasonable
              timeframe.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">10. Children’s Privacy</h2>
            <p>
              AgriGati is not directed to children under the age of 13, and we
              do not knowingly collect personal information from children under
              13. If you believe a child has provided us personal data, contact
              us and we will promptly delete it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">11. Third-Party Links and Services</h2>
            <p>
              Our App and website may contain links to third-party websites or
              integrate third-party services (such as maps, payment or
              communication providers). Their privacy practices are governed by
              their own policies, and we encourage you to review them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">12. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Material
              changes will be notified through the App or on this page with a
              revised “Last updated” date. Continued use of AgriGati after
              changes take effect constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">13. Contact Us</h2>
            <p>
              For questions about this Privacy Policy or your data, contact:
              <br />
              Email:{" "}
              <a href="mailto:ceo@agrigati.com" className="text-green-400 hover:underline">
                ceo@agrigati.com
              </a>
              <br />
              Phone: +91 9990296759 · India
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
