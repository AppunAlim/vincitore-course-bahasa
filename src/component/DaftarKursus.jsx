import KartuKursus from './KartuKursus'

function DaftarKursus({ daftarKursus, onHapus }) {
  return (
    <section aria-labelledby="judul-daftar">
      <h2 id="judul-daftar" className="mb-5 text-xl font-bold md:text-2xl">
        Daftar Kursus
      </h2>

      {daftarKursus.length === 0 ? (
        <p className="rounded-lg border-2 border-dashed border-mist bg-white p-10 text-center text-lg font-semibold text-ink/70">
          Belum ada data kursus
        </p>
      ) : (
        <ul className="grid gap-5 md:grid-cols-2">
          {daftarKursus.map((kursus) => (
            // key harus unik: pakai id, bukan index
            <li key={kursus.id}>
              <KartuKursus
                id={kursus.id}
                nama={kursus.nama}
                level={kursus.level}
                jadwal={kursus.jadwal}
                harga={kursus.harga}
                pengajar={kursus.pengajar}
                onHapus={onHapus}
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default DaftarKursus