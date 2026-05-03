import type { Metadata } from "next";
import { Project } from "@/components/Project";

export const metadata: Metadata = {
  title: "Industry Projects",
};

export default function IndustryProjectsPage() {
  return <Project mode="industry" standalone />;
}
