"use server"

export async function submitWaitlist(email: string) {
  try {
    // Validate email
    if (!email || !email.includes("@")) {
      return { success: false, error: "Invalid email address" }
    }

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Valid email (already checked above), return success
    return { success: true }
  } catch (error) {
    return { success: false, error: "An error occurred. Please try again." }
  }
}
