import type { Metadata } from "next";
import { InstitutionalPage } from "@/components/InstitutionalPage";
import { pagesContent } from "@/data/pagesContent";

const page = pagesContent["como-ajudar"];

export const metadata: Metadata = {
  title: "Como Ajudar — Instituto Jesus é Bom",
  description: "Doe, seja mantenedor, voluntário ou parceiro do Instituto Jesus é Bom."
};

export default function Page() {
  return <InstitutionalPage page={page} />;
}
