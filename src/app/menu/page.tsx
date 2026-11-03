import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OrderButton from "@/components/OrderButton";

const products = [
  { name: "Esteh Original", category: "SIGNATURE", price: 3000, description: "Kesegaran teh klasik untuk menemani hari." },
  { name: "Esteh Lemon", category: "CITRUS SERIES", price: 5000, description: "Sentuhan citrus yang menyegarkan." },
  { name: "Esteh Lychee", category: "FRUIT SERIES", price: 5000, description: "Karakter fruity dengan sensasi ringan." },
  { name: "Esteh Milk", category: "CREAMY SERIES", price: 6000, description: "Perpaduan teh dan rasa creamy." }
];

export default function MenuPage() {
  return <><Header /><main className="section"><div className="container"><p className="eyebrow">OUR MENU / FRESHLY SERVED</p><h1 className="mt-4 text-4xl font-black sm:text-6xl">Temukan <span className="gradient-text">favoritmu.</span></h1><p className="mt-5 max-w-2xl leading-7 text-[var(--muted)]">Pilihan awal menu CUPTEA. Nama, komposisi, dan harga di bawah adalah data contoh yang dapat disesuaikan sebelum dipublikasikan.</p><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{products.map((p, i) => <article className="card overflow-hidden p-5" key={p.name}><div className="grid h-48 place-items-center rounded-2xl bg-[radial-gradient(circle_at_50%_40%,#246d60,#0b2021_70%)]"><div className="grid h-36 w-24 place-items-center rounded-b-3xl rounded-t-xl border border-white/30 bg-gradient-to-br from-[#d6fff1]/80 to-[#176253]/90 text-center text-[#06362e] shadow-2xl"><span className="text-xl font-black">CUP</span><span className="text-[9px] font-bold tracking-widest">TEA</span></div></div><p className="mt-5 text-[10px] font-bold tracking-[.2em] text-[var(--teal)]">{p.category}</p><h2 className="mt-2 text-xl font-bold">{p.name}</h2><p className="mt-2 min-h-12 text-sm leading-6 text-[var(--muted)]">{p.description}</p><div className="mt-5 flex items-center justify-between gap-2"><strong className="text-lg">Rp{p.price.toLocaleString("id-ID")}</strong><OrderButton product={p.name} /></div></article>)}</div><p className="mt-8 text-xs text-[var(--muted)]">*Harga dan ketersediaan perlu dikonfirmasi oleh pengelola CUPTEA.</p></div></main><Footer /></>;
}
