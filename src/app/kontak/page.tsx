import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return <><Header /><main className="section"><div className="container max-w-3xl"><p className="eyebrow">CONTACT / SAY HELLO</p><h1 className="mt-5 text-4xl font-black sm:text-6xl">Mari mulai <span className="gradient-text">percakapan.</span></h1><p className="mt-6 text-lg leading-8 text-[var(--muted)]">Untuk pertanyaan produk, kerja sama, atau informasi CUPTEA, hubungi kanal resmi yang akan ditetapkan oleh pengelola.</p><div className="card mt-10 p-7"><h2 className="text-xl font-bold">Kanal komunikasi</h2><p className="mt-3 text-sm leading-7 text-[var(--muted)]">Nomor WhatsApp, email bisnis, alamat kantor, dan akun media sosial resmi belum dimasukkan. Lengkapi data tersebut sebelum website dipublikasikan.</p></div></div></main><Footer /></>;
}
