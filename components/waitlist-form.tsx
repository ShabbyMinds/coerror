"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { submitWaitlist } from "@/app/actions/waitlist"

interface WaitlistFormProps {
  buttonText?: string
  subtext?: string
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
}

export function WaitlistForm({
  buttonText = "Join the Waitlist →",
  subtext,
  size = "lg",
  className = "",
}: WaitlistFormProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes("@")) {
      setStatus("error")
      setMessage("Please enter a valid email address")
      return
    }

    setStatus("loading")

    try {
      const result = await submitWaitlist(email)

      if (result.success) {
        setStatus("success")
        setMessage("You're on the list! We'll notify you when we launch.")
        setEmail("")
        // Close modal after 2 seconds
        setTimeout(() => {
          setIsOpen(false)
          setStatus("idle")
        }, 2000)
      } else {
        setStatus("error")
        setMessage(result.error || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setStatus("error")
      setMessage("Failed to join waitlist. Please try again.")
    }
  }

  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <Button
          onClick={() => setIsOpen(true)}
          size={size}
          className={`bg-black text-white hover:bg-gray-800 transition-all hover:scale-105 px-8 py-6 rounded-full shadow-lg ${className}`}
        >
          {buttonText}
        </Button>
        {subtext && <p className="text-sm text-muted-foreground">{subtext}</p>}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {status === "success" ? (
              <div className="text-center space-y-4 py-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-black">You're on the list!</h3>
                <p className="text-gray-600">{message}</p>
              </div>
            ) : (
              <>
                <div className="text-center space-y-2 mb-6">
                  <h3 className="text-2xl font-bold text-black">Join the Waitlist</h3>
                  <p className="text-gray-600">Be the first to experience pre-emptive observability.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={status === "loading"}
                      className="w-full px-4 py-6 text-base rounded-lg border-2 border-gray-200 focus:border-black transition-colors"
                      required
                      autoFocus
                    />
                  </div>

                  {status === "error" && <p className="text-sm text-red-600 text-center">{message}</p>}

                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-black text-white hover:bg-gray-800 transition-all py-6 rounded-lg text-base font-semibold"
                  >
                    {status === "loading" ? "Joining..." : "Join Waitlist"}
                  </Button>
                </form>

                <p className="text-xs text-gray-500 text-center mt-4">
                  We'll notify you when coerror launches. No spam, ever.
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
