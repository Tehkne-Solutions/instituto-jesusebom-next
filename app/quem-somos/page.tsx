import type { Metadata } from "next";
import { InstitutionalPage } from "@/components/InstitutionalPage";
import { pagesContent } from "@/data/pagesContent";

const page = pagesContent["quem-somos"];

export const metadata: Metadata = {
  title: "Quem Somos — Instituto Jesus é Bom",
  description: "Uma missão que transforma vidas através da fé, educação e esperança."
};

export default function Page() {
  return <InstitutionalPage page={page} />;
}
