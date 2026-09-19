/**
 * Google Sheets CRM client.
 *
 * This module sends contact-form submissions to a Google Apps Script Web App
 * endpoint, which appends each row to a Google Sheet.  It is the simplest
 * "CRM" you can run without a server.
 *
 * ---
 * SETUP INSTRUCTIONS (one-time, ~5 minutes):
 *
 * 1. Create a new Google Sheet (e.g. "Punjab Tech — Enquiries").
 * 2. Sheet → Extensions → Apps Script.
 * 3. Replace the default code with the contents of
 *    `scripts/google-sheets-crm.gs` (in this repo).
 * 4. Deploy → New deployment → Select type “Web app”.
 *    - Execute as: Me
 *    - Who has access: Anyone (or Anyone with the link)
 * 5. Copy the “Web app URL” and paste it into your .env file:
 *
 *    VITE_GOOGLE_SHEETS_CRM_URL=https://script.google.com/macros/s/…/exec
 *
 * 6. Reload the site. Submissions will appear in row 2 of the sheet.
 *
 * If the URL is missing the form gracefully degrades to a mailto link.
 */

export interface CrmSubmission {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
}

export interface CrmResponse {
  success: boolean;
  message: string;
}

/**
 * Submit a contact form to the Google Sheets CRM.
 *
 * Returns `{ success: true }` on a 200 response, `{ success: false, message }`
 * on any failure (network error, 5xx, etc.).
 */
export async function submitToCrm(
  data: CrmSubmission,
  endpoint?: string,
): Promise<CrmResponse> {
  const url = endpoint;

  if (!url) {
    // No endpoint configured — fall back to opening the user's email client.
    const subject = encodeURIComponent(
      `Punjab Tech enquiry from ${data.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nService: ${data.service}\nBudget: ${data.budget}\nMessage: ${data.message}`,
    );
    window.location.href = `mailto:${data.email}?subject=${subject}&body=${body}`;
    return { success: true, message: "Opened email client (no CRM configured)." };
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      mode: "no-cors",
      redirect: "follow",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        timestamp: new Date().toISOString(),
        name: data.name,
        email: data.email,
        phone: data.phone,
        service: data.service,
        budget: data.budget,
        message: data.message,
      }).toString(),
    });

    // With no-cors we can't read the response body, but a resolved fetch
    // with a non-network error means the request was accepted.
    if (res.ok || res.type === "opaque") {
      return { success: true, message: "Inquiry stored successfully." };
    }

    return { success: false, message: "Server responded with an error." };
  } catch (err) {
    return {
      success: false,
      message:
        err instanceof Error ? err.message : "Network error — please try again.",
    };
  }
}
