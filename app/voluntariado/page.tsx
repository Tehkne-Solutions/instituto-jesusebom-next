import type { Metadata } from "next";
import { InstitutionalPage } from "@/components/InstitutionalPage";
import { pagesContent } from "@/data/pagesContent";

const page = pagesContent["voluntariado"];

export const metadata: Metadata = {
  title: "Voluntariado — Instituto Jesus é Bom",
  description: "Doe tempo, talento e presença para transformar vidas."
};

export default function Page() {
  return <InstitutionalPage page={page} />;
}
