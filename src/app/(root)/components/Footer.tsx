import { Container } from "@/components/ui/container";
import { Paragraph, Small } from "@/components/ui/typography";
import Link from "next/link";

const footerSections = [
  {
    title: "Company Information",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press / Media Kit", href: "/press" },
      { label: "Contact Us", href: "/contact" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Platform Features",
    links: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "Job Categories", href: "/job-categories" },
      { label: "Gig Opportunities", href: "/gig-opportunities" },
    ],
  },
  {
    title: "User Support",
    links: [
      { label: "Help Center / FAQs", href: "/help" },
      { label: "Guidelines for Job Seekers", href: "/job-seeker-guidelines" },
      { label: "Guidelines for Employers", href: "/employer-guidelines" },
      { label: "Contact Support", href: "/support" },
    ],
  },
  {
    title: "Legal Information",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Copyright Policy", href: "/copyright" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t bg-white border-gray-200 relative z-10">
      <Container className="py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {footerSections.map((section) => (
            <div key={section.title}>
              <Paragraph className="font-semibold mb-4 text-gray-700">
                {section.title}
              </Paragraph>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-primary transition-colors duration-200"
                    >
                      <Small>{link.label}</Small>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Small className="text-center block text-gray-500">
            © {new Date().getFullYear()} Your onlinestaff. All rights reserved.
          </Small>
        </div>
      </Container>
    </footer>
  );
}
