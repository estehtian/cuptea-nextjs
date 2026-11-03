import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function StoryPage() {
  return <><Header /><main className="section"><div className="container max-w-4xl"><p className="eyebrow">OUR STORY / ESTEH TIAN GROUP</p><h1 className="mt-5 text-4xl font-black leading-tight sm:text-6xl">Membawa kesegaran sederhana menuju <span className="gradient-text">masa depan.</span></h1><div className="mt-10 space-y-6 text-lg leading-8 text-[var(--muted)]"><p>CUPTEA hadir dengan gagasan sederhana: minuman yang menyenangkan seharusnya mudah dijangkau, memiliki kualitas yang dijaga, dan memberi pengalaman yang berkesan.</p><p>Melalui Esteh Tian Group, kami ingin membangun merek yang terus belajar, berinovasi, dan membuka ruang kolaborasi. Setiap langkah pertumbuhan dimulai dari kepercayaan pelanggan.</p></div><div className="glass mt-12 rounded-3xl p-8"><p className="eyebrow">OUR NORTH STAR</p><p className="mt-4 text-2xl font-bold">“Freshness for everyone. Opportunities for tomorrow.”</p></div></div></main><Footer /></>;
}
