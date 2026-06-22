import type { Metadata } from "next";
import { InstitutionalPage } from "@/components/InstitutionalPage";
import { pagesContent } from "@/data/pagesContent";

const page = pagesContent["impacto-social"];

export const metadata: Metadata = {
  title: "Impacto Social — Instituto Jesus é Bom",
  description: "Cada número representa uma vida alcançada."
};

export default function Page() {
  return <InstitutionalPage page={page} />;
}
