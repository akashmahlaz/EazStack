import LegalPage from "@/components/LegalPage";

const Cookies = () => (
  <LegalPage
    title="Cookie Policy"
    description="How Punjab Tech uses cookies and similar tracking technologies."
    lastUpdated="23 September 2026"
  >
    <p>
      Punjab Tech (&ldquo;we&rdquo;) uses cookies and similar technologies to
      keep our site working and to understand how visitors use it. This policy
      explains what we use and how you can control them.
    </p>

    <h2>What are cookies?</h2>
    <p>
      Cookies are small text files stored on your device when you visit a site.
      They help the site function and help us (and some third parties) learn
      about user behaviour.
    </p>

    <h2>Technologies we use</h2>
    <ul>
      <li>
        <strong>Essential cookies.</strong> Session/security cookies that let
        you navigate the site and use core features (for example a cookie to
        remember your light/dark theme preference, if you toggle it).
      </li>
      <li>
        <strong>Font &amp; content delivery.</strong> We load the DM Serif
        Display and DM Sans fonts from Google Fonts (googleapis.com). Google may
        set its own cookies in accordance with Google&rsquo;s policy.
      </li>
    </ul>

    <h2>Analytics &amp; advertising</h2>
    <p>
      We do <strong>not</strong> currently use analytics cookies (such as
      Google Analytics) or advertising/tracking cookies on our site. If we add
      such services in the future, we will ask for your consent where required
      by law and update this policy.
    </p>

    <h2>Third-party cookies</h2>
    <p>
      When you click through to external services (WhatsApp, Calendly, PayPal,
      Razorpay), those providers may set their own cookies on your device. We
      do not control those cookies. Please review the relevant third-party
      policies.
    </p>

    <h2>How to control cookies</h2>
    <p>
      You can refuse or delete cookies through your browser settings. Blocking
      essential cookies may affect site functionality. To delete or manage
      cookies on mobile apps, use your device settings.
    </p>

    <h2>Changes to this policy</h2>
    <p>
      We may update this policy. The &ldquo;Last updated&rdquo; date above shows
      the most recent revision.
    </p>
  </LegalPage>
);

export default Cookies;
