import { Email, Globe, Linkedin, LogoGithub, Pen, Phone } from 'geist-icons';
import "./App.css";
import photo from './assets/photo.jfif';

function App() {
  const phone = import.meta.env.VITE_PHONE ?? ''
  const email = import.meta.env.VITE_EMAIL ?? ''

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
          <div id="connect" className='space-y-3 px-4 font-mono text-sm'>
            <a className='flex place-items-center gap-3 rounded-full bg-white/20 px-4 py-1.5' href={`tel:${phone}`} target='_blank' rel='noopener'>
              <Phone className='size-4 shrink-0' />
              <p>{phone}</p>
            </a>
            <a className='flex place-items-center gap-3 rounded-full bg-white/20 px-4 py-1.5' href={`mailto:${email}`} target='_blank' rel='noopener'>
              <Email className='size-4 shrink-0' />
              <p>{email.split("@").join(" @")}</p>
            </a>
            <a className='flex place-items-center gap-3 rounded-full bg-white/20 px-4 py-1.5' href='https://linkedin.com/in/hasitha-wickramasinghe-92483a19b' target='_blank' rel='noopener'>
              <Linkedin className='size-4 shrink-0' />
              <p>in/hasitha-wickramasinghe-92483a19b</p>
            </a>
            <a className='flex place-items-center gap-3 rounded-full bg-white/20 px-4 py-1.5' href='https://github.com/haZya' target='_blank' rel='noopener'>
              <LogoGithub className='size-4 shrink-0' />
              <p>github.com/haZya</p>
            </a>
            <a className='flex place-items-center gap-3 rounded-full bg-white/20 px-4 py-1.5' href='https://hazya.dev' target='_blank' rel='noopener'>
              <Globe className='size-4 shrink-0' />
              <p>https://haZya.dev</p>
            </a>
            <a className='flex place-items-center gap-3 rounded-full bg-white/20 px-4 py-1.5' href='https://blog.hazya.dev' target='_blank' rel='noopener'>
              <Pen className='size-4 shrink-0' />
              <p>https://blog.haZya.dev</p>
            </a>
          </div>
        </header>
      </section>
      <section id="body" className="col-span-3 rounded-lg bg-white">
      </section>
    </main>
  )
}

export default App
