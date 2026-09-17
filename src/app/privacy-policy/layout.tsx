import type { Metadata } from "next";
export const metadata: Metadata = { title: "Política de privacidad", alternates: { canonical: "/privacy-policy/" } };
export default function LegalLayout({children}: {children: React.ReactNode}) { return children; }
