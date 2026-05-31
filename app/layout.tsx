import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ward Consulting | Lead Response & Google Review Automation for Local Service Businesses",
  description:
    "Ward Consulting helps small service businesses automate lead follow-up and Google review requests — so you stop losing leads and start getting more reviews without extra admin work.",
  keywords:
    "lead response automation, Google review automation, local service business, electrician, HVAC, plumber, roofer, landscaper, small business consulting",
  openGraph: {
    title: "Ward Consulting | Automation for Local Service Businesses",
    description:
      "Stop losing leads. Start getting more reviews. Ward Consulting sets up simple automations for small service businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-slate-800 antialiased`}>
        {children}
      </body>
    </html>
  );
}
