import { useState } from 'react'

const formKosong = {
  nama: '',
  level: 'Pemula',
  jadwal: '',
  harga: '',
  pengajar: '',
}

const kelasInput =
  'w-full rounded-lg border border-mist bg-white px-3.5 py-2.5 text-base focus:border-gold focus:outline-2 focus:outline-gold'
const kelasLabel = 'mb-1.5 block font-semibold'

function FormTambahKursus({ onTambah }) {
  // nilai setiap input disimpan di state, jadi inputnya "controlled"
  const [form, setForm] = useState(formKosong)
  const [pesanError, setPesanError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const nama = form.nama.trim()
    const jadwal = form.jadwal.trim()
    const pengajar = form.pengajar.trim()
    const harga = Number(form.harga)

    if (!nama || !jadwal || !pengajar || harga <= 0) {
      setPesanError('Semua kolom wajib diisi dan harga harus lebih dari 0.')
      return
    }

    onTambah({ nama, level: form.level, jadwal, harga, pengajar })
    setForm(formKosong)
    setPesanError('')
  }

  return (
    <section
      aria-labelledby="judul-form"
      className="rounded-lg bg-white p-6 shadow-card md:p-8"
    >
      <h2 id="judul-form" className="mb-5 text-xl font-bold md:text-2xl">
        Tambah Kursus
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nama" className={kelasLabel}>
            Nama Kursus
          </label>
          <input
            id="nama"
            name="nama"
            type="text"
            value={form.nama}
            onChange={handleChange}
            placeholder="Contoh: Bahasa Korea"
            required
            className={kelasInput}
          />
        </div>

        <div>
          <label htmlFor="level" className={kelasLabel}>
            Level
          </label>
          <select
            id="level"
            name="level"
            value={form.level}
            onChange={handleChange}
            className={kelasInput}
          >
            <option value="Pemula">Pemula</option>
            <option value="Lanjutan">Lanjutan</option>
          </select>
        </div>

        <div>
          <label htmlFor="jadwal" className={kelasLabel}>
            Jadwal Kelas
          </label>
          <input
            id="jadwal"
            name="jadwal"
            type="text"
            value={form.jadwal}
            onChange={handleChange}
            placeholder="Contoh: Jumat, 16.00"
            required
            className={kelasInput}
          />
        </div>

        <div>
          <label htmlFor="harga" className={kelasLabel}>
            Harga per Bulan (Rp)
          </label>
          <input
            id="harga"
            name="harga"
            type="number"
            min="1"
            value={form.harga}
            onChange={handleChange}
            placeholder="199999"
            required
            className={kelasInput}
          />
        </div>

        <div>
          <label htmlFor="pengajar" className={kelasLabel}>
            Nama Pengajar
          </label>
          <input
            id="pengajar"
            name="pengajar"
            type="text"
            value={form.pengajar}
            onChange={handleChange}
            placeholder="Contoh: Kim Minjun"
            required
            className={kelasInput}
          />
        </div>

        {pesanError && (
          <p role="alert" className="text-sm font-semibold text-danger">
            {pesanError}
          </p>
        )}

        <button
          type="submit"
          className="w-full cursor-pointer rounded-full bg-ink px-8 py-3 font-bold text-white transition-colors duration-300 hover:bg-gold hover:text-ink"
        >
          Tambah
        </button>
      </form>
    </section>
  )
}

export default FormTambahKursus