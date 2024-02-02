import ibgroup from "/src/assets/images/mlp.webp";
import memento from "/src/assets/images/a.webp";
import acc from "/src/assets/images/3d.webp";
import daddy from "/src/assets/images/vscode.webp";
import sunnyside from "/src/assets/images/Rej.webp";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change overflow-hidden my-[10%]"
    >
      <Heading title="Projects" />
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {/* Project #1 */}
        <div className=" col-span-1 md:col-span-12">
          <Projects
            link="https://codewithusman0.github.io/MLP/"
            img={ibgroup}
            alt="modern landing page"
            name="modern landing page"
            type="Not For Moblie • Frontend Development"
            year="2023"
            tools="HTML • CSS • JAVASCRIPT • SHERY.JS"
          />
        </div>
        {/* Project #2 */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
            link="https://codewithusman0.github.io/one24/"
            img={memento}
            alt="Awwesome animations"
            name="Awwesome animations"
            type="Frontend Development"
            year="2023"
            tools="HTML • CSS • JAVASCRIPT"
          />
        </div>
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
          <Projects
            link="https://nike-store-jsstack.vercel.app/"
            img={acc}
            alt="Nike Store"
            name="Nike store"
            type="Frontend Development"
            year="2023"
            tools="REACT • TAILWINDCSS • JAVASCRIPT"
          />
        </div>
        <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20">
          <Projects
            link="https://godaddyuiclone.netlify.app"
            img={daddy}
            alt="Full Stack VS Code CLONE"
            name="Full Stack VS Code CLONE"
            type="Full Stack Development"
            year="2024"
            tools="EJS • TAILWINDCSS • JAVASCRIPT • NODE.JS • MONGODB"
          />
        </div>
        <div className="col-span-1 h-fit md:col-span-4">
          <Projects
            link="https://codewithusman0.github.io/REJ/"
            img={sunnyside}
            alt="REJOUICE WEBSITE CLONE"
            name="REJOUICE WEBSITE CLONE"
            type="Frontend Development"
            year="2023"
            tools="HTML • CSS • JAVASCRIPT"
          />

        </div>
      </div>
    </section>
  );
}
