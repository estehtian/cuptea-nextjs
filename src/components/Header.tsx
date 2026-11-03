import Link from "next/link";

const links = [
  ["Beranda", "/"],
  ["Menu", "/menu"],
  ["Cerita", "/cerita"],
  ["Kemitraan", "/kemitraan"],
  ["Kontak", "/kontak"]
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[#050b0d]/85 backdrop-blur-xl">
      <div className="container flex min-h-[76px] items-center justify-between gap-5">
        <Link href="/" className="flex items-center gap-3" aria-label="CUPTEA beranda">
          <span className="grid size-10 place-items-center rounded-xl border border-[var(--line)] bg-[#102a2b] text-lg font-black text-[var(--teal)]">C</span>
          <span className="leading-tight"><strong className="block tracking-[.18em]">CUPTEA</strong><small className="text-[10px] tracking-[.22em] text-[var(--muted)]">ESTEH TIAN GROUP</small></span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-[var(--muted)] md:flex">
          {links.map(([label, href]) => <Link key={href} className="transition hover:text-[var(--teal)]" href={href}>{label}</Link>)}
        </nav>
        <Link href="/menu" className="btn-primary !px-5 !py-3 text-sm">Lihat Menu <span aria-hidden>↗</span></Link>
      </div>
    </header>
  );
}
