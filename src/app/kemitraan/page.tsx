import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PartnerForm from "@/components/PartnerForm";

export default function PartnershipPage() {
  return <><Header /><main className="section"><div className="container grid gap-12 lg:grid-cols-[.9fr_1.1fr]"><div><p className="eyebrow">PARTNERSHIP / GROW TOGETHER</p><h1 className="mt-5 text-4xl font-black sm:text-6xl">Peluang tumbuh <span className="gradient-text">bersama.</span></h1><p className="mt-6 leading-8 text-[var(--muted)]">Punya ketertarikan untuk mengenal peluang kemitraan CUPTEA? Kirim informasi awal Anda. Tim kami dapat menindaklanjuti melalui WhatsApp setelah nomor kontak resmi disiapkan.</p><ul className="mt-8 space-y-4 text-sm text-[var(--muted)]"><li>✳ Informasi peluang dan model kerja sama</li><li>✳ Diskusi lokasi dan kesiapan operasional</li><li>✳ Komunikasi langsung dengan calon mitra</li></ul></div><PartnerForm /></div></main><Footer /></>;
}
