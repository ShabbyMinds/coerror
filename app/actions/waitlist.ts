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
        access_key: "74565a18-7402-45c3-b75b-2bb7e6d405f4",
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
