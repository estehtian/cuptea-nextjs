"use client";

import { useState } from "react";

export default function PartnerForm() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("Mitra outlet");
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
    if (!number) { window.alert("Nomor WhatsApp resmi belum dikonfigurasi."); return; }
    const message = encodeURIComponent(`Halo CUPTEA, saya tertarik dengan kemitraan.\nNama: ${name}\nKota: ${city}\nKontak: ${phone}\nMinat: ${interest}`);
    window.open(`https://wa.me/${number}?text=${message}`, "_blank", "noopener,noreferrer");
  }
  return <form onSubmit={submit} className="glass rounded-3xl p-6 sm:p-8"><h2 className="text-2xl font-bold">Form minat kemitraan</h2><p className="mt-2 text-sm text-[var(--muted)]">Data akan disiapkan sebagai pesan WhatsApp; belum disimpan ke database.</p><label className="mt-6 block text-sm">Nama lengkap<input required value={name} onChange={e=>setName(e.target.value)} className="mt-2 w-full rounded-xl border border-[var(--line)] bg-[#071114] px-4 py-3 outline-none focus:border-[var(--teal)]" placeholder="Nama Anda"/></label><label className="mt-4 block text-sm">Kota / lokasi rencana<input required value={city} onChange={e=>setCity(e.target.value)} className="mt-2 w-full rounded-xl border border-[var(--line)] bg-[#071114] px-4 py-3 outline-none focus:border-[var(--teal)]" placeholder="Contoh: Semarang"/></label><label className="mt-4 block text-sm">Nomor WhatsApp<input required value={phone} onChange={e=>setPhone(e.target.value)} className="mt-2 w-full rounded-xl border border-[var(--line)] bg-[#071114] px-4 py-3 outline-none focus:border-[var(--teal)]" placeholder="08xxxxxxxxxx"/></label><label className="mt-4 block text-sm">Minat kerja sama<select value={interest} onChange={e=>setInterest(e.target.value)} className="mt-2 w-full rounded-xl border border-[var(--line)] bg-[#071114] px-4 py-3"><option>Mitra outlet</option><option>Distribusi</option><option>Reseller</option><option>Kolaborasi bisnis</option></select></label><button className="btn-primary mt-7 w-full" type="submit">Kirim minat via WhatsApp ↗</button></form>;
}
