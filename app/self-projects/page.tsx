import type { Metadata } from "next";
import { Project } from "@/components/Project";

export const metadata: Metadata = {
  title: "Self Projects",
};

export default function SelfProjectsPage() {
  return <Project mode="self" standalone />;
}
