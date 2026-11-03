"use client";

export default function OrderButton({ product }: { product: string }) {
  function order() {
    const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
    const message = encodeURIComponent(`Halo CUPTEA, saya ingin bertanya/memesan ${product}. Mohon informasi ketersediaannya.`);
    if (!number) {
      window.alert("Nomor WhatsApp belum diatur. Silakan hubungi pengelola website.");
      return;
    }
    window.open(`https://wa.me/${number}?text=${message}`, "_blank", "noopener,noreferrer");
  }
  return <button onClick={order} className="rounded-full border border-[var(--line)] px-4 py-2 text-xs font-bold text-[var(--teal)] transition hover:bg-[var(--teal)] hover:text-[#031311]">Pesan ↗</button>;
}
