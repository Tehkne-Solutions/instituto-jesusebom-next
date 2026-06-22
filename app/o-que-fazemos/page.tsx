import type { Metadata } from "next";
import { InstitutionalPage } from "@/components/InstitutionalPage";
import { pagesContent } from "@/data/pagesContent";

const page = pagesContent["o-que-fazemos"];

export const metadata: Metadata = {
  title: "O Que Fazemos — Instituto Jesus é Bom",
  description: "Projetos que cuidam da criança por inteiro."
};

export default function Page() {
  return <InstitutionalPage page={page} />;
}
