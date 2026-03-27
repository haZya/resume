import { Email, External, Globe, Linkedin, LogoGithub, Pen, Phone } from "geist-icons";
import { useState } from "react";

import "./App.css";
import photo from "./assets/photo.jfif";
import Link from "./components/Link";
import Skill from "./components/Skill";
import Title from "./components/Title";
import Toggle from "./components/Toggle";
import { cn } from "./lib/cn";

const phone = import.meta.env.VITE_PHONE ?? "";
const email = import.meta.env.VITE_EMAIL ?? "";

function App() {
  const [displayPhoto, setDisplayPhoto] = useState(true);

  const toggle = () => {
    setDisplayPhoto(prev => !prev);
  };

  return (
    <>
      <div id="options" className="m-12 print:hidden">
        <Toggle value={displayPhoto} toggle={toggle} />
      </div>
      <main className="grid h-[297mm] w-[210mm] grid-cols-5 gap-2.5 p-2.5">
        <section id="header" className="col-span-2 rounded-lg bg-white/30 py-8 text-white">
          <header className={cn("flex flex-col items-center gap-y-5", !displayPhoto && "gap-y-6")}>
            <div id="title" className="w-full px-4">
              <h1 className="text-5xl font-light">Hasitha</h1>
              <h1 className="text-4xl font-medium tracking-tight">Wickramasinghe</h1>
              <p className="text-xl">Application Architect</p>
            </div>
            <div id="about" className={cn("mt-18 w-full rounded-lg border-y-2 bg-white/20", !displayPhoto && "mt-0")}>
              <img className={cn("mx-auto -mt-18 w-36 rounded-full border-3", !displayPhoto && "hidden")} src={photo} alt="photo" />
              <div className="space-y-2 p-4">
                <h2 className="text-sm font-semibold tracking-wider">ABOUT ME</h2>
                <p className={cn("text-[10pt]/tight tracking-tight", !displayPhoto && "text-sm")}>
                  Application Architect and Sr. Full-Stack Engineer with 7+ years of experience
                  shipping scalable and resilient web applications using a modern tech stack that includes
                  React, Next.js, Node.js and GenAI, on AWS leveraging Cloud-Native & AI-Native technologies
                  such as Serverless and the Bedrock AgentCore runtime, using IaC.
                </p>
              </div>
            </div>
            <div id="connect" className="w-full space-y-2 px-4 font-mono text-[10pt]">
              <Link icon={Phone} href={`tel:${phone}`} content={phone} />
              <Link icon={Email} href={`mailto:${email}`} content={email.split("@").join(" @")} />
              <Link icon={Linkedin} href="https://linkedin.com/in/hasitha-wickramasinghe-92483a19b" content="in/hasitha-wickramasinghe-92483a19b" />
              <Link icon={LogoGithub} href="https://github.com/haZya" content="github.com/haZya" />
              <Link icon={Globe} href="https://haZya.dev" content="https://haZya.dev" />
              <Link icon={Pen} href="https://blog.hazya.dev" content="https://blog.haZya.dev" />
            </div>
            <div id="skills" className="w-full space-y-2 px-4">
              <h2 className="text-[13px] font-medium tracking-wider">TOP SKILLS</h2>
              <div className="flex flex-wrap gap-x-1 gap-y-1.25 font-mono text-xs tracking-tight">
                <Skill>AWS</Skill>
                <Skill>React</Skill>
                <Skill>Next</Skill>
                <Skill>AWS CDK</Skill>
                <Skill>Terraform</Skill>
                <Skill>IaC</Skill>
                <Skill>Express</Skill>
                <Skill>Node.js</Skill>
                <Skill>Strapi CMS</Skill>
                <Skill>SEO</Skill>
                <Skill>CI/CD</Skill>
                <Skill>DevOps</Skill>
                <Skill>GitHub Actions</Skill>
                <Skill>RBAC</Skill>
                <Skill>GenAI</Skill>
                <Skill>RAG</Skill>
                <Skill>Bedrock AgentCore</Skill>
                <Skill>Platform Engineering</Skill>
                <Skill>Cloud-Native</Skill>
                <Skill>Microservices</Skill>
                <Skill>Serverless</Skill>
                <Skill>Docker</Skill>
                <Skill>API Gateway</Skill>
                <Skill>GraphQL Federation</Skill>
                <Skill>Distributed Systems</Skill>
                <Skill>Feature Flags</Skill>
                <Skill>Event-Driven Architecture</Skill>
                <Skill>Canary</Skill>
                <Skill>Trunk-Based Development</Skill>
                <Skill>GitFlow</Skill>
                <Skill>Blue/Green</Skill>
                <Skill>A/B Testing</Skill>
                <Skill>Monorepo</Skill>
              </div>
            </div>
            <div id="hobbies" className={cn("w-full space-y-2 px-4", displayPhoto && "hidden")}>
              <h2 className="text-[13px] font-medium tracking-wider">HOBBIES</h2>
              <div className="flex flex-wrap gap-x-1 gap-y-1.25 font-mono text-xs tracking-tight">
                <Skill>Custom PC Building</Skill>
                <Skill>Anime</Skill>
                <Skill>Gaming</Skill>
                <Skill>Reading</Skill>
                <Skill>Cricket</Skill>
                <Skill>Music</Skill>
              </div>
            </div>
          </header>
        </section>
        <section id="body" className="col-span-3 space-y-5 rounded-lg bg-white px-6 py-8">
          <section id="education" className="space-y-4">
            <Title content="EDUCATION & CERTS" />
            <div className="space-y-2.5">
              <a
                className="block"
                href="https://www.credly.com/badges/3a25dc02-285a-43b9-80cc-42d7f108591d"
                target="_blank"
                rel="noopener"
              >
                <h3 className="text-[11pt]/tight font-semibold">
                  AWS Certified Solutions Architect - Professional
                </h3>
                <p className="font-mono text-[13px] tracking-tight">Issued Jan 2026 · Expires Jan 2029</p>
              </a>
              <a
                className="block"
                href="https://www.credly.com/badges/b41fa631-6361-4760-ad97-ff3f59671b45"
                target="_blank"
                rel="noopener"
              >
                <h3 className="text-[11pt]/tight font-semibold">
                  AWS Certified Generative AI Developer - Professional
                </h3>
                <p className="font-mono text-[13px] tracking-tight">Issued Mar 2026 · Expires Mar 2029 (Early Adopter)</p>
              </a>
              <div>
                <h3 className="text-[11pt]/tight font-semibold">
                  BEng (Hons) in Software Engineering
                  {" "}
                  <span className="font-normal">(2019)</span>
                </h3>
                <p className="font-mono text-[13px] tracking-tight">London Metropolitan University</p>
              </div>
            </div>
          </section>
          <section id="experience" className="space-y-4">
            <Title content="EXPERIENCE" />
            <div className="space-y-3">
              <div>
                <h3 className="flex items-center justify-between text-[11pt] font-semibold">
                  Jaiden Group
                  <span className="font-mono text-[13px] font-normal"> Houston, TX, USA (Remote)</span>
                </h3>
                <div className="space-y-2">
                  <div className="relative pl-4.5 before:absolute before:top-6 before:-bottom-2 before:left-0.5 before:w-0.5 before:rounded-full before:bg-slate-300">
                    <span className="absolute top-2 left-0 size-1.5 rounded-full bg-slate-400" aria-hidden="true" />
                    <p className="flex items-center justify-between font-mono text-[13px] tracking-tight">
                      <span className="text-sm">Application Architect</span>
                      {" "}
                      Feb 2025 - Present
                    </p>
                    <ul>
                      <li>
                        <p className="pt-1.25 text-[10pt]/tight font-light tracking-tight">
                          <strong className="font-semibold">Driving the transition to cloud-native</strong>
                          {" "}
                          architectures, leveraging Serverless & Microservices to enhance scalability and cost-efficiency.
                        </p>
                      </li>
                      <li>
                        <p className="pt-1.25 text-[10pt]/tight font-light tracking-tight">
                          <strong className="font-semibold">Standardized DevOps workflows</strong>
                          {" "}
                          by implementing automated CI/CD pipelines via GitHub Actions across all active projects.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="relative pl-4.5">
                    <span className="absolute top-2 left-0 size-1.5 rounded-full bg-slate-400" aria-hidden="true" />
                    <p className="flex items-center justify-between font-mono text-[13px] tracking-tight">
                      <span className="text-sm">Sr. Full Stack Developer</span>
                      {" "}
                      Feb 2023 - Feb 2025
                    </p>
                    <ul>
                      <li>
                        <p className="pt-1.25 text-[10pt]/tight font-light tracking-tight">
                          <strong className="font-semibold">Accelerated deployment cycles</strong>
                          {" "}
                          by transitioning internal tools to IaC (AWS CDK & CloudFormation), significantly reducing manual overhead and infrastructure drift.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="flex items-center justify-between text-[11pt] font-semibold">
                  Sketch Your Brand
                  <span className="font-mono text-[13px] font-normal"> Houston, TX, USA (Remote)</span>
                </h3>
                <div className="space-y-2">
                  <div className="relative pl-4.5">
                    <span className="absolute top-2 left-0 size-1.5 rounded-full bg-slate-400" aria-hidden="true" />
                    <p className="flex items-center justify-between font-mono text-[13px] tracking-tight">
                      <span className="text-sm">Sr. Full Stack Engineer</span>
                      {" "}
                      Mar 2024 - Present
                    </p>
                    <ul>
                      <li>
                        <p className="pt-1.25 text-[10pt]/tight font-light tracking-tight">
                          <strong className="font-semibold">Architected event-driven workflows</strong>
                          {" "}
                          using AWS Step Functions to handle complex business logic and
                          {" "}
                          <strong className="font-semibold">workflow automation</strong>
                          .
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="flex items-center justify-between text-[11pt] font-semibold">
                  Ok Webs IT Solutions
                  <span className="font-mono text-[13px] font-normal"> Colombo, LK (On-site)</span>
                </h3>
                <div className="space-y-2">
                  <div className="relative pl-4.5 before:absolute before:top-6 before:-bottom-2 before:left-0.5 before:w-0.5 before:rounded-full before:bg-slate-300">
                    <span className="absolute top-2 left-0 size-1.5 rounded-full bg-slate-400" aria-hidden="true" />
                    <p className="flex items-center justify-between font-mono text-[13px] tracking-tight">
                      <span className="text-sm">Technical Lead</span>
                      {" "}
                      Jul 2022 - Present
                    </p>
                    <ul>
                      <li>
                        <p className="pt-1.25 text-[10pt]/tight font-light tracking-tight">
                          <strong className="font-semibold">Led the architecture and delivery</strong>
                          {" "}
                          of high-scale cloud solutions, including an
                          {" "}
                          <strong className="font-semibold">ML-driven recommendation engine</strong>
                          {" "}
                          for a dating platform and a property
                          {" "}
                          <strong className="font-semibold">service marketplace</strong>
                          {" "}
                          for the ANZ market.
                        </p>
                      </li>
                      <li>
                        <p className="pt-1.25 text-[10pt]/tight font-light tracking-tight">
                          <strong className="font-semibold">Mentored a cross-functional team</strong>
                          {" "}
                          through rigorous code reviews and technical roadmap planning.
                        </p>
                      </li>
                      <li>
                        <p className="pt-1.25 text-[10pt]/tight font-light tracking-tight">
                          <strong className="font-semibold">Streamlined internal operations</strong>
                          {" "}
                          by building a custom
                          {" "}
                          <strong className="font-semibold">AWS deployment portal</strong>
                          {" "}
                          using Coolify and Service Catalog to empower non-technical teams with
                          {" "}
                          <strong className="font-semibold">one-click infra provisioning</strong>
                          .
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="relative pl-4.5">
                    <span className="absolute top-2 left-0 size-1.5 rounded-full bg-slate-400" aria-hidden="true" />
                    <p className="flex items-center justify-between font-mono text-[13px] tracking-tight">
                      <span className="text-sm">Full Stack Web Developer</span>
                      {" "}
                      Aug 2020 - Jul 2022
                    </p>
                    <ul>
                      <li>
                        <p className="pt-1.25 text-[10pt]/tight font-light tracking-tight">
                          <strong className="font-semibold">Owned the full-stack development lifecycle</strong>
                          {" "}
                          for diverse web applications, ranging from an
                          {" "}
                          <strong className="font-semibold">online exam system</strong>
                          {" "}
                          to a complex
                          {" "}
                          <strong className="font-semibold">inventory management</strong>
                          {" "}
                          SPA integrated with Clover.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="flex items-center justify-between text-[11pt] font-semibold">
                  Self-employed
                  <span className="font-mono text-[13px] font-normal"> Colombo, LK (Hybrid)</span>
                </h3>
                <div className="space-y-2">
                  <div className="relative pl-4.5">
                    <span className="absolute top-2 left-0 size-1.5 rounded-full bg-slate-400" aria-hidden="true" />
                    <p className="flex items-center justify-between font-mono text-[13px] tracking-tight">
                      <span className="text-sm">Developer | Consultant</span>
                      {" "}
                      Jun 2019 - Aug 2020
                    </p>
                    <ul>
                      <li>
                        <p className="pt-1.25 text-[10pt]/tight font-light tracking-tight">
                          <strong className="font-semibold">Delivered end-to-end web and mobile solutions</strong>
                          {" "}
                          while providing strategic
                          {" "}
                          <strong className="font-semibold">technical consultancy</strong>
                          {" "}
                          to non-technical stakeholders.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="projects" className="space-y-4">
            <Title content="OPEN-SOURCE HIGHLIGHTS" />
            <div>
              <h3 className="flex items-center justify-between text-[11pt] font-semibold">
                <a className="flex items-center gap-2" href="https://github.com/infinitered/nsfwjs" target="_blank" rel="noopener">
                  NSFWJS
                  {" "}
                  <External className="size-3.5 shrink-0" />
                </a>
                <span className="font-mono font-normal"> Top Contributor</span>
              </h3>
              <div className="space-y-2">
                <div>
                  <ul>
                    <li>
                      <p className="pt-1.5 text-[10pt]/tight font-light tracking-tight">
                        Open-source image classification library with
                        {" "}
                        <strong className="font-semibold">8.8K GitHub Stars</strong>
                        {" "}
                        for NSFW (indecent) image detection on client-side via TensorFlow.js.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

export default App;
