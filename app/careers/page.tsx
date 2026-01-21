"use client"

import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion"
import { Badge } from "../../components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, Mail, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CareersPage() {
    const jobs = [
        {
            id: "backend",
            title: "Backend Developer",
            type: "Full-time",
            exp: "0-3 Years", // Explicitly 0-3 years as requested
            location: "Onsite",
            description: "We are looking for a backend developer to build scalable observability pipelines. Perfect for those starting their journey or with early experience in high-throughput systems.",
            requirements: [
                "Strong knowledge of Go or Rust",
                "Experience with distributed systems concepts",
                "Familiarity with Kafka and event-driven architecture",
                "Understanding of database internals (SQL/NoSQL)",
            ],
        },
        {
            id: "fullstack",
            title: "Full Stack Developer",
            type: "Full-time",
            exp: "2+ Years",
            location: "Onsite",
            description: "Join us to build the next generation of observability dashboards. You'll work across the stack, from React/Next.js frontends to efficient API layers.",
            requirements: [
                "Proficiency in React, Next.js, and TypeScript",
                "Experience with modern CSS (Tailwind)",
                "Ability to design clean, responsive interfaces",
                "Knowledge of REST/gRPC APIs",
            ],
        },
        {
            id: "devops",
            title: "DevOps Engineer",
            type: "Full-time",
            exp: "3+ Years",
            location: "Onsite",
            description: "Help us maintain 99.99% uptime. You'll manage our Kubernetes clusters, CI/CD pipelines, and infrastructure as code.",
            requirements: [
                "Strong experience with Kubernetes and Docker",
                "Proficiency in Terraform or Ansible",
                "Experience monitoring high-scale production systems",
                "Cloud native mindset (AWS/GCP)",
            ],
        },
        {
            id: "internships",
            title: "SDE Intern (Fullstack & Backend)",
            type: "Internship",
            exp: "6 Months",
            location: "Hybrid / Onsite",
            description: "Hungry to learn? Join our internship program. You'll work on real production code and be mentored by senior engineers.",
            requirements: [
                "Strong CS fundamentals (Data Structures, Algorithms)",
                "Passion for building software",
                "Available for 6 months",
                "Willingness to learn new technologies fast",
            ],
        },
    ]

    // Application Modal State
    const [selectedRole, setSelectedRole] = useState("")
    const [open, setOpen] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        college: "",
        experience: "",
        internRole: "Fullstack", // Default for interns
        targetRole: "" // For general application
    })

    const handleApplyClick = (roleTitle: string) => {
        setSelectedRole(roleTitle)
        setOpen(true)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        // Formal Email Generation
        const isIntern = selectedRole.toLowerCase().includes("intern")
        const isGeneral = selectedRole === "General Application"

        const subject = `Application for ${isGeneral && formData.targetRole ? formData.targetRole : selectedRole} - ${formData.name}`

        let emailBody = `Dear Hiring Team,

I am writing to express my interest in the ${isGeneral && formData.targetRole ? formData.targetRole : selectedRole} position at Coerror.

Name: ${formData.name}
Current Role/Education: ${formData.college}
`
        // Only show experience if NOT an intern
        if (!isIntern) {
            emailBody += `Experience: ${formData.experience}\n`
        }

        if (isIntern) {
            emailBody += `Interested Track: ${formData.internRole}\n`
        }

        emailBody += `
I have attached my resume for your review. I look forward to the possibility of discussing how my skills align with your needs.

Sincerely,
${formData.name}`

        // Encode for mailto
        const encodedSubject = encodeURIComponent(subject)
        const encodedBody = encodeURIComponent(emailBody)

        // Open default mail client
        window.location.href = `mailto:career@coerror.com?subject=${encodedSubject}&body=${encodedBody}`

        // Close modal optionally
        setOpen(false)
    }

    return (
        <main className="min-h-screen bg-white relative">
            {/* Back Button */}
            <div className="absolute top-6 left-6 z-50">
                <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-gray-200 text-sm font-medium text-gray-600 hover:bg-black hover:text-white hover:border-black transition-all group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>
            </div>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 border-b border-gray-100">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <Badge variant="outline" className="rounded-full px-4 py-1 text-sm border-gray-200 text-black">
                        We are hiring
                    </Badge>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-neutral-900">
                        Build the future of <br />
                        <span className="text-gray-500">Observability.</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Join the team that's solving problems before they happen. We're looking for builders, thinkers, and explorers.
                    </p>
                </div>
            </section>

            {/* Roles Section */}
            <section className="py-24 px-4 bg-gray-50">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-neutral-900 text-center">Open Positions</h2>

                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                        <Accordion type="single" collapsible className="w-full">
                            {jobs.map((job) => (
                                <AccordionItem key={job.id} value={job.id} className="border-b border-gray-100 last:border-0 px-6">
                                    <AccordionTrigger className="hover:no-underline py-6 group">
                                        <div className="flex flex-col md:flex-row md:items-center w-full text-left gap-4">
                                            <div className="flex-1">
                                                <h3 className="text-xl font-semibold text-neutral-900 group-hover:text-blue-600 transition-colors">
                                                    {job.title}
                                                </h3>
                                                <div className="flex gap-3 mt-2 text-sm text-gray-500">
                                                    <span className="flex items-center gap-1">
                                                        {job.type}
                                                    </span>
                                                    <span>•</span>
                                                    <span>{job.exp}</span>
                                                    <span>•</span>
                                                    <span>{job.location}</span>
                                                </div>
                                            </div>
                                            <Badge className="w-fit bg-black text-white hover:bg-neutral-800 font-medium px-4 py-1.5 rounded-full">
                                                Apply
                                            </Badge>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-8 pt-2">
                                        <div className="space-y-6 text-gray-600">
                                            <p className="text-lg leading-relaxed">{job.description}</p>

                                            <div>
                                                <h4 className="font-semibold text-neutral-900 mb-3">Requirements:</h4>
                                                <ul className="space-y-2 list-disc pl-5">
                                                    {job.requirements.map((req, i) => (
                                                        <li key={i}>{req}</li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-4 items-center justify-end">
                                                <Button
                                                    size="lg"
                                                    className="rounded-full bg-black hover:bg-neutral-800 text-white px-8"
                                                    onClick={() => handleApplyClick(job.title)}
                                                >
                                                    Apply Now <Mail className="ml-2 w-4 h-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    {/* General Application CTA */}
                    <div className="mt-16 text-center bg-neutral-900 text-white rounded-3xl p-12 relative overflow-hidden">
                        <div className="relative z-10 space-y-6">
                            <h3 className="text-3xl font-bold">Don't see your role?</h3>
                            <p className="text-gray-400 max-w-lg mx-auto">
                                We are always looking for exceptional talent. If you think you can help us build the next big thing, we want to hear from you.
                            </p>
                            <Button
                                size="lg"
                                className="rounded-full !bg-white border text-black hover:bg-gray-100 mt-4 custom-email-btn"
                                onClick={() => handleApplyClick("General Application")}
                            >
                                Email us at career@coerror.com <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </div>
                        {/* Abstract bg decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 blur-[100px] rounded-full pointer-events-none" />
                    </div>

                </div>
            </section>

            {/* Application Dialog */}
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent
                    className="sm:max-w-[425px] text-black"
                    style={{
                        background: 'rgba(255, 255, 255, 0.7)', // Less transparent as requested
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                        borderRadius: '16px',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        boxShadow: '0 0 30px 0px rgba(0, 0, 0, 0.3)',
                    }}
                >
                    <DialogHeader>
                        <DialogTitle className="text-black">Apply for {selectedRole}</DialogTitle>
                        <DialogDescription className="text-black/70">
                            Enter these details to pre-fill your email application.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="grid gap-6 py-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name" className="text-black">Full Name</Label>
                            <Input
                                id="name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="Your Name"
                                required
                                className="bg-white/50 border-black/10 focus:border-black/30 placeholder:text-black/40 text-black"
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="college" className="text-black">College / Current Company</Label>
                            <Input
                                id="college"
                                value={formData.college}
                                onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                                placeholder="College Name / Company Name"
                                required
                                className="bg-white/50 border-black/10 focus:border-black/30 placeholder:text-black/40 text-black"
                            />
                        </div>
                        {!selectedRole.toLowerCase().includes("intern") && (
                            <div className="grid gap-2">
                                <Label htmlFor="experience" className="text-black">Years of Experience</Label>
                                <Input
                                    id="experience"
                                    value={formData.experience}
                                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                                    placeholder="e.g. 2 years, or 'Fresher'"
                                    required={!selectedRole.toLowerCase().includes("intern")}
                                    className="bg-white/50 border-black/10 focus:border-black/30 placeholder:text-black/40 text-black"
                                />
                            </div>
                        )}

                        {/* Dropdown for Intern Role */}
                        {selectedRole.toLowerCase().includes("intern") && (
                            <div className="grid gap-2">
                                <Label htmlFor="internRole" className="text-black">Internship Track</Label>
                                <Select
                                    value={formData.internRole}
                                    onValueChange={(value) => setFormData({ ...formData, internRole: value })}
                                >
                                    <SelectTrigger className="w-full bg-white/60 border-black/20 text-black h-10 rounded-lg">
                                        <SelectValue placeholder="Select a track" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white border text-black">
                                        <SelectItem value="Fullstack">Fullstack Developer</SelectItem>
                                        <SelectItem value="Backend">Backend Developer</SelectItem>
                                        <SelectItem value="React Dev">React Developer</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        )}

                        {/* Generic Application Target Role */}
                        {selectedRole === "General Application" && (
                            <div className="grid gap-2">
                                <Label htmlFor="targetRole" className="text-black">Role you are interested in</Label>
                                <Input
                                    id="targetRole"
                                    value={formData.targetRole}
                                    onChange={(e) => setFormData({ ...formData, targetRole: e.target.value })}
                                    placeholder="e.g. Product Designer"
                                    required
                                    className="bg-white/50 border-black/10 focus:border-black/30 placeholder:text-black/40 text-black"
                                />
                            </div>
                        )}

                        <DialogFooter>
                            <Button type="submit" className="w-full bg-black text-white hover:bg-neutral-800">
                                Open Email Client
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>

            <Footer />
        </main>
    )
}
