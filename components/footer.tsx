import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative py-12 px-4 border-t border-[rgba(55,50,47,0.08)] bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-[#605A57]">© 2025 coerror. All rights reserved.</p>

        <nav className="flex items-center gap-8 text-sm font-medium text-[#37322F]">
          <Link href="/careers" className="hover:text-black transition-colors">Careers</Link>
        </nav>
      </div>
    </footer>
  )
}
