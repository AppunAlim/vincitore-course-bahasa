function RingkasanKursus({ total, pemula, lanjutan }) {
  const ringkasan = [
    { label: 'Total Kursus', nilai: total },
    { label: 'Level Pemula', nilai: pemula },
    { label: 'Level Lanjutan', nilai: lanjutan },
  ]

  return (
    <section
      aria-label="Ringkasan data kursus"
      aria-live="polite"
      className="grid gap-4 sm:grid-cols-3"
    >
      {ringkasan.map((item) => (
        <div
          key={item.label}
          className="rounded-lg border-l-4 border-gold bg-white p-5 shadow-card"
        >
          <p className="text-sm font-semibold text-ink/70">{item.label}</p>
          <p className="mt-1 text-4xl font-extrabold text-navy">{item.nilai}</p>
        </div>
      ))}
    </section>
  )
}

export default RingkasanKursus