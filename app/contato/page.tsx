import type { Metadata } from "next";
import { InstitutionalPage } from "@/components/InstitutionalPage";
import { pagesContent } from "@/data/pagesContent";

const page = pagesContent["contato"];

export const metadata: Metadata = {
  title: "Contato — Instituto Jesus é Bom",
  description: "Fale com o Instituto Jesus é Bom."
};

export default function Page() {
  return <InstitutionalPage page={page} />;
}
