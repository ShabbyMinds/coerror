"use server"

export async function submitWaitlist(email: string) {
  try {
    // Validate email
    if (!email || !email.includes("@")) {
      return { success: false, error: "Invalid email address" }
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "70d7fde7-df84-442b-adf9-5e7653adaa7d",
        subject: "New Waitlist Signup - coerror",
        from_name: "coerror Waitlist",
        to: "shabbyminds@gmail.com",
        email: email,
        message: `New waitlist signup from: ${email}\n\nTimestamp: ${new Date().toISOString()}`,
      }),
    })

    const data = await response.json()

    if (data.success) {
      return { success: true }
    } else {
      return { success: false, error: "Failed to submit. Please try again." }
    }
  } catch (error) {
    return { success: false, error: "An error occurred. Please try again." }
  }
}
