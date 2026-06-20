import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { legalPages } from "@/data/legalContent";

const page = legalPages["termos"];

export const metadata: Metadata = {
  title: `${page.title} — Instituto Jesus é Bom`,
  description: page.description
};

export default function Page() {
  return <LegalPage page={page} />;
}
