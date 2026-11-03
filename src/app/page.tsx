import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const highlights = [
  { n: "01", title: "Fresh by design", text: "Kesegaran yang dirancang sederhana, konsisten, dan mudah dinikmati." },
  { n: "02", title: "Value that matters", text: "Harga bersahabat dengan pengalaman merek yang tetap terasa premium." },
  { n: "03", title: "Ready to grow", text: "Membangun peluang kolaborasi dan jaringan usaha secara bertahap." }
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="relative isolate overflow-hidden pb-24 pt-20 sm:pt-28">
          <div className="grid-glow pointer-events-none absolute inset-0 -z-10" />
          <div className="container grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
            <div>
              <p className="eyebrow">ESTEH TIAN GROUP · DIGITAL EXPERIENCE 3000</p>
              <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[1.02] tracking-[-.055em] sm:text-7xl">
                A fresh taste.<br /><span className="gradient-text">A brighter future.</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--muted)]">Kenalkan CUPTEA — pengalaman es teh yang dekat, segar, dan terus bergerak maju. Dibangun dengan semangat inovasi dan peluang untuk tumbuh bersama.</p>
              <div className="mt-9 flex flex-wrap gap-3"><Link className="btn-primary" href="/menu">Jelajahi Menu <span aria-hidden>↗</span></Link><Link className="btn-secondary" href="/kemitraan">Jelajahi Kemitraan</Link></div>
              <div className="mt-12 flex flex-wrap gap-8 border-t border-[var(--line)] pt-7">
                <div><strong className="text-2xl text-[var(--teal)]">Fresh</strong><p className="mt-1 text-xs text-[var(--muted)]">Everyday enjoyment</p></div>
                <div><strong className="text-2xl text-[var(--teal)]">Value</strong><p className="mt-1 text-xs text-[var(--muted)]">Accessible quality</p></div>
                <div><strong className="text-2xl text-[var(--teal)]">Future</strong><p className="mt-1 text-xs text-[var(--muted)]">Built to evolve</p></div>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="absolute inset-8 rounded-full bg-[#18cdb7]/15 blur-3xl" />
              <div className="glass relative overflow-hidden rounded-[34px] p-5 sm:p-8">
                <div className="flex items-center justify-between"><span className="eyebrow">SIGNATURE SERIES</span><span className="rounded-full border border-[var(--line)] px-3 py-1 text-[10px] text-[var(--teal)]">FUTURE EDITION</span></div>
                <div className="relative my-8 grid min-h-[300px] place-items-center overflow-hidden rounded-[26px] bg-[radial-gradient(circle_at_50%_45%,#1c655b,#0b2424_48%,#071113_75%)]">
                  <div className="absolute size-64 rounded-full border border-[#69ffe1]/20" />
                  <div className="absolute size-48 rounded-full border border-[#69ffe1]/20" />
                  <div className="relative flex h-64 w-40 -rotate-3 flex-col items-center rounded-b-[34px] rounded-t-[22px] border border-white/30 bg-gradient-to-br from-[#d9fff4]/80 via-[#5ec8ad]/70 to-[#124a43]/90 shadow-[0_25px_80px_rgba(0,0,0,.55)]">
                    <div className="mt-5 h-3 w-24 rounded-full bg-[#eafff8]/70" />
                    <div className="mt-14 text-center text-[#07342e]"><p className="text-3xl font-black tracking-widest">CUP</p><p className="text-xs font-bold tracking-[.35em]">TEA</p><div className="mx-auto mt-3 h-px w-14 bg-[#07342e]/50" /><p className="mt-2 text-[9px] font-bold tracking-widest">ESTEH TIAN</p></div>
                    <div className="absolute -bottom-2 h-5 w-32 rounded-full bg-black/30 blur-md" />
                  </div>
                  <span className="absolute bottom-5 right-5 text-[10px] tracking-[.25em] text-[#b6fff0]/70">FRESHNESS / 001</span>
                </div>
                <div className="flex items-end justify-between"><div><p className="text-sm text-[var(--muted)]">The everyday favorite</p><p className="mt-1 text-xl font-bold">Simple. Fresh. Meaningful.</p></div><span className="text-2xl text-[var(--teal)]">✳</span></div>
              </div>
            </div>
          </div>
        </section>
        <section className="section border-y border-[var(--line)] bg-[#071114]/70">
          <div className="container">
            <div className="max-w-2xl"><p className="eyebrow">THE CUPTEA PRINCIPLES</p><h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Lebih dari sekadar minuman.</h2><p className="mt-4 leading-7 text-[var(--muted)]">Kami membangun merek yang mengutamakan pengalaman pelanggan, nilai yang relevan, dan pertumbuhan yang berkelanjutan.</p></div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">{highlights.map(item => <article className="card p-7" key={item.n}><p className="text-sm font-bold text-[var(--teal)]">{item.n} / PRINCIPLE</p><h3 className="mt-8 text-xl font-bold">{item.title}</h3><p className="mt-3 leading-7 text-[var(--muted)]">{item.text}</p></article>)}</div>
          </div>
        </section>
        <section className="section"><div className="container glass flex flex-col items-start justify-between gap-8 rounded-[30px] p-8 sm:p-12 md:flex-row md:items-center"><div><p className="eyebrow">GROW WITH CUPTEA</p><h2 className="mt-4 max-w-xl text-3xl font-bold">Mari tumbuh bersama dalam perjalanan berikutnya.</h2><p className="mt-3 text-[var(--muted)]">Temukan informasi kemitraan dan mulai percakapan dengan tim kami.</p></div><Link className="btn-primary shrink-0" href="/kemitraan">Mulai Kolaborasi ↗</Link></div></section>
      </main>
      <Footer />
    </>
  );
}
