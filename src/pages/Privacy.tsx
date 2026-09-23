import LegalPage from "@/components/LegalPage";

const Privacy = () => (
  <LegalPage
    title="Privacy Policy"
    description="How Punjab Tech collects, uses, and protects information when you contact us or hire our services."
    lastUpdated="23 September 2026"
  >
    <p>
      Punjab Tech (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;)
      respects your privacy. This policy explains what information we collect
      when you visit <a href="/">punjabtech.online</a> or contact us, and how
      we use it. We process very little personal data and never sell it.
    </p>

    <h2>What we collect</h2>
    <ul>
      <li>
        <strong>Information you give us.</strong> When you fill in our contact
        form or WhatsApp chat, we receive your name, email address, phone number,
        and details about your project (service, budget, message).
      </li>
      <li>
        <strong>Technical information.</strong> Our hosting provider (Vercel)
        keeps standard server logs such as your IP address, browser type, and
        the pages you request. We do not use this to identify you.
      </li>
      <li>
        <strong>Payment information.</strong> We do not store card or bank
        details. Payments are processed by third parties (see below).
      </li>
    </ul>

    <h2>How we use your information</h2>
    <ul>
      <li>To respond to your inquiry and start a project conversation.</li>
      <li>To scope and deliver the services you request (legal documents,
        invoices, source code, design files).</li>
      <li>To comply with our legal and tax obligations.</li>
    </ul>

    <h2>Legal basis</h2>
    <ul>
      <li><strong>Contract:</strong> to perform services we agree to deliver.</li>
      <li>
        <strong>Legitimate interests:</strong> to reply to business inquiries
        and operate our site.
      </li>
      <li>
        <strong>Consent:</strong> for any optional follow-up updates you opt into.
      </li>
    </ul>

    <h2>Sharing &amp; disclosure</h2>
    <p>
      We do not sell or rent your information. We share it only with trusted
      parties who help us run our business, and only to the extent necessary:
    </p>
    <ul>
      <li>
        <strong>WhatsApp / Google</strong> when you submit the contact form, it
        is delivered to our team via WhatsApp and, if configured, a copy is
        stored in a secure Google Sheet.
      </li>
      <li>
        <strong>Payment processors</strong> (Razorpay, PayPal) when you pay an
        invoice. They are contractually bound to protect your data.
      </li>
      <li>
        <strong>Legal &amp; tax advisors</strong> only when required to comply
        with the law or enforce our agreements.
      </li>
    </ul>

    <h2>International transfers</h2>
    <p>
      We operate from India. Your data may be processed in India and in the
      country where you are located, always under this policy.
    </p>

    <h2>Data retention</h2>
    <p>
      We keep contact and project information for as long as needed to respond
      to your request, deliver the agreed services, and meet legal obligations.
      You can ask us to delete your data at any time (see Rights below).
    </p>

    <h2>Your rights</h2>
    <p>You may request to:</p>
    <ul>
      <li>Access, correct, or delete your personal information.</li>
      <li>Object to or restrict certain processing.</li>
      <li>Export your data in a portable format.</li>
    </ul>
    <p>
      Contact us at <a href="mailto:akashdalla406@gmail.com">akashdalla406@gmail.com</a>
      or via WhatsApp at +91 78140 02784.
    </p>

    <h2>Security</h2>
    <p>
      We apply reasonable organisational and technical measures, but no method
      of transmission over the internet is completely secure. Use our services
      at your own risk; we are not liable for unauthorized access beyond our
      reasonable control.
    </p>

    <h2>Children</h2>
    <p>
      Our services are not directed to children under 16. We do not knowingly
      collect information from children.
    </p>

    <h2>Changes to this policy</h2>
    <p>
      We may update this policy. The &ldquo;Last updated&rdquo; date at the top
      will reflect the latest revision.
    </p>
  </LegalPage>
);

export default Privacy;
