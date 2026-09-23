import LegalPage from "@/components/LegalPage";

const Accessibility = () => (
  <LegalPage
    title="Accessibility Statement"
    description="Punjab Tech commitment to making punjabtech.online usable by everyone."
    lastUpdated="23 September 2026"
  >
    <p>
      Punjab Tech is committed to making punjabtech.online usable by everyone,
      including people with disabilities. We aim for WCAG 2.1 Level AA
      compliance and are continuously improving.
    </p>

    <h2>Standards &amp; guidelines</h2>
    <p>
      We follow the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA
      and use semantic HTML, proper heading order, keyboard navigation, focus
      indicators, and descriptive link text.
    </p>

    <h2>What we do</h2>
    <ul>
      <li>
        <strong>Semantic markup.</strong> Use of headings, lists, landmarks
        (<code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>,{" "}
        <code>&lt;main&gt;</code>, <code>&lt;footer&gt;</code>) and alt text for
        images.
      </li>
      <li>
        <strong>Keyboard access.</strong> All interactive elements are reachable
        and operable via keyboard.
      </li>
      <li>
        <strong>Focus styles.</strong> A visible focus ring is shown on every
        focusable element.
      </li>
      <li>
        <strong>Colour contrast.</strong> Text meets a minimum 4.5:1 contrast
        ratio against its background.
      </li>
      <li>
        <strong>Motion.</strong> We respect <code>prefers-reduced-motion</code>
        and avoid non-essential animation for users who disable motion.
      </li>
    </ul>

    <h2>Limitations</h2>
    <p>
      While we strive for accessibility, some content (for example embedded
      third-party widgets such as Calendly or video players) is controlled by
      third parties and may not fully meet these standards.
    </p>

    <h2>Feedback &amp; contact</h2>
    <p>
      If you encounter an accessibility barrier or have suggestions, please let
      us know so we can fix it:
    </p>
    <ul>
      <li>Email: <a href="mailto:akashdalla406@gmail.com">akashdalla406@gmail.com</a></li>
      <li>WhatsApp: +91 78140 02784</li>
    </ul>
    <p>
      We will respond within 5 business days and aim to resolve reported issues
      promptly.
    </p>
  </LegalPage>
);

export default Accessibility;
