import { Email, External, Globe, Linkedin, LogoGithub, Pen, Phone } from "geist-icons";

import photo from "./assets/photo.jfif";
import Link from "./components/Link";
import Title from "./components/Title";
import "./App.css";

function App() {
  const phone = import.meta.env.VITE_PHONE ?? "";
  const email = import.meta.env.VITE_EMAIL ?? "";

  return (
    <main className="grid h-[297mm] w-[210mm] grid-cols-5 gap-2.5 p-2.5">
      <section id="header" className="col-span-2 rounded-lg bg-white/30 py-8 text-white backdrop-blur-xl">
        <header className="flex flex-col items-center gap-y-8">
          <div id="title">
            <h1 className="text-5xl font-light">Hasitha</h1>
            <h1 className="text-4xl font-medium tracking-tight">Wickramasinghe</h1>
            <p className="text-xl">Application Architect</p>
          </div>
          <div id="about" className="mt-22 rounded-lg border-2 bg-white/30">
            <img className="mx-auto -mt-22 w-44 rounded-full border-4" src={photo} alt="photo" />
            <div className="space-y-2 p-6">
              <h2 className="font-bold">ABOUT ME</h2>
              <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, quas.</p>
            </div>
          </div>
          <div id="connect" className="space-y-3 px-4 font-mono text-sm">
            <Link icon={Phone} href={`tel:${phone}`} content={phone} />
            <Link icon={Email} href={`mailto:${email}`} content={email.split("@").join(" @")} />
            <Link icon={Linkedin} href="https://linkedin.com/in/hasitha-wickramasinghe-92483a19b" content="in/hasitha-wickramasinghe-92483a19b" />
            <Link icon={LogoGithub} href="https://github.com/haZya" content="github.com/haZya" />
            <Link icon={Globe} href="https://haZya.dev" content="https://haZya.dev" />
            <Link icon={Pen} href="https://blog.hazya.dev" content="https://blog.haZya.dev" />
          </div>
        </header>
      </section>
      <section id="body" className="col-span-3 space-y-6 rounded-lg bg-white px-6 py-8">
        <div id="education" className="space-y-4">
          <Title content="EDUCATION" />
          <div>
            <h3 className="font-semibold">
              BEng (Hons) in Software Engineering
              {" "}
              <span className="font-normal">(2019)</span>
            </h3>
            <p className="text-[17px]">London Metropolitan University</p>
            <p className="font-mono text-sm font-light">Grade: First-Class Honours</p>
          </div>
          <div>
            <h3 className="font-semibold">
              AWS Certified Solutions Architect - Professional
            </h3>
            <p>Issued Jan 2026 · Expires Jan 2029</p>
            <a
              className="flex items-center gap-2.5"
              href="https://www.credly.com/badges/3a25dc02-285a-43b9-80cc-42d7f108591d"
              target="_blank"
              rel="noopener"
            >
              <p className="font-mono text-sm font-light">Credential: 16f19b08b58240548b6eb26776b1a13d</p>
              <External className="size-3.5 shrink-0" />
            </a>
          </div>
          <div>
            <h3 className="font-semibold">
              AWS Certified Generative AI Developer - Professional
            </h3>
            <p>Issued Mar 2026 · Expires Mar 2029 (Early Adopter)</p>
            <a
              className="flex items-center gap-2.5"
              href="https://www.credly.com/badges/b41fa631-6361-4760-ad97-ff3f59671b45"
              target="_blank"
              rel="noopener"
            >
              <p className="font-mono text-sm font-light">Credential: 42d2b2e423094e5eb5aa69a5b50e575b</p>
              <External className="size-3.5 shrink-0" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
