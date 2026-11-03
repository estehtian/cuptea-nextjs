import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] py-10">
      <div className="container flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div><p className="font-black tracking-[.2em]">CUPTEA</p><p className="mt-2 text-sm text-[var(--muted)]">ESTEH TIAN GROUP · A fresh taste for tomorrow.</p></div>
        <div className="flex gap-5 text-sm text-[var(--muted)]"><Link href="/menu">Menu</Link><Link href="/kemitraan">Kemitraan</Link><Link href="/kontak">Kontak</Link></div>
        <p className="text-xs text-[var(--muted)]">© {new Date().getFullYear()} CUPTEA. All rights reserved.</p>
      </div>
    </footer>
  );
}
