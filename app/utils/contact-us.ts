// ───────────────────────────────────────────────────────────────────────────

/**
 * Call this on your form's submit button click
*
* @param {{ name: string, email: string, message: string }} formData
*/
export async function sendContactForm({ name, email, message }: { name: string; email: string; message: string }) {
  const LAMBDA_URL = process.env.NEXT_PUBLIC_AWS_LAMBDA_FUNCTION_URL || '';

  try {
    const response = await fetch(LAMBDA_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await response.json();

    if (response.ok && data.success) {
      // ✅ Success
      return { success: true };
    } else {
      // ❌ Server-side error
      return { success: false, error: data.error || "Something went wrong. Please try again." };
    }
  } catch (err) {
    // ❌ Network error
    console.error("Contact form error:", err);
    return { success: false, error: "Network error. Please check your connection." };
  } finally {
    // Re-enable button
    const submitButton = document.getElementById("contact-submit") as HTMLButtonElement;
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent = "Send Message";
    }
  }
}