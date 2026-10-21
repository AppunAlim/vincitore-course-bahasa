function formatRupiah(angka) {
  return 'Rp' + String(angka).replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

function KartuKursus({ id, nama, level, jadwal, harga, pengajar, onHapus }) {
  const kelasBadge =
    level === 'Lanjutan'
      ? 'bg-linear-to-br from-ember to-danger text-white'
      : 'bg-gold text-ink'

  return (
    <article className="flex h-full flex-col rounded-lg bg-white p-6 shadow-card">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-bold text-navy">{nama}</h3>
        <span
          className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${kelasBadge}`}
        >
          {level}
        </span>
      </div>

      <dl className="mt-4 space-y-2 text-[0.95rem]">
        <div className="flex justify-between gap-4">
          <dt className="text-ink/70">Jadwal</dt>
          <dd className="text-right font-semibold">{jadwal}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-ink/70">Pengajar</dt>
          <dd className="text-right font-semibold">{pengajar}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-ink/70">Harga / Bulan</dt>
          <dd className="text-right font-bold text-navy">
            {formatRupiah(harga)}
          </dd>
        </div>
      </dl>

      <button
        type="button"
        onClick={() => onHapus(id)}
        aria-label={`Hapus kursus ${nama} level ${level}`}
        className="mt-5 cursor-pointer self-start rounded-full bg-snow px-5 py-2 text-sm font-bold transition-colors duration-300 hover:bg-danger hover:text-white"
      >
        Hapus
      </button>
    </article>
  )
}

export default KartuKursus