"use client";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
// import { HanumanCanvas } from "@/components/HanumanCanvas";
import { Headlines } from "@/components/Headlines";
import { Project } from "@/components/Project";
import { SectionBreak } from "@/components/SectionBreak";

export default function HomePage() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  // if (loading) {
  //   return (
  //     <div className="flex justify-center items-center h-100">
  //       <GadaSpinner />
  //     </div>
  //   );
  // }

  return (
    <>
      <section className="relative min-h-screen overflow-hidden">
        {/* <HanumanCanvas /> */}
        <div className="relative z-30 flex min-h-screen items-center">
          <Headlines />
        </div>
      </section>
      <SectionBreak />
      <About />
      <Project mode="self" />
      <SectionBreak />
      <Project mode="industry" />
      <SectionBreak />
      <Experience />
      <SectionBreak />
      <Education />
    </>
  );
}
