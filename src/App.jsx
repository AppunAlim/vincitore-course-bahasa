import { useState } from 'react'
import Header from './component/Header'
import RingkasanKursus from './component/Ringkasankursus'
import FormTambahKursus from './component/Formtambahkursus'
import KartuKursus from './component/KartuKursus'
import DaftarKursus from './component/DaftarKursus'
import Footer from './component/Footer'
import { kursusAwal } from './data/kursusAwal'

function App() {
  const [daftarKursus, setDaftarKursus] = useState(kursusAwal)

  const tambahKursus = (kursusBaru) => {
    setDaftarKursus((sebelumnya) => [
      ...sebelumnya,
      { id: Date.now(), ...kursusBaru },
    ])
  }

  const hapusKursus = (id) => {
    setDaftarKursus((sebelumnya) => sebelumnya.filter((k) => k.id !== id))
  }

  const jumlahPemula = daftarKursus.filter((k) => k.level === 'Pemula').length
  const jumlahLanjutan = daftarKursus.filter((k) => k.level === 'Lanjutan').length

  return (
    <div className="flex min-h-screen flex-col">
      <Header
        judul="COURSE BAHASA"
        subjudul="Kelola daftar kursus bahasa asing"
      />

      <main className="mx-auto w-full max-w-[1300px] flex-1 px-5 py-10 md:px-12 md:py-14">
        <RingkasanKursus
          total={daftarKursus.length}
          pemula={jumlahPemula}
          lanjutan={jumlahLanjutan}
        />

        <div className="mt-8 grid items-start gap-8 lg:grid-cols-[380px_1fr]">
          <FormTambahKursus onTambah={tambahKursus} />
          <DaftarKursus daftarKursus={daftarKursus} onHapus={hapusKursus} />
        </div>
      </main>

      <Footer email="vincitore@gmail.com" telepon="+62 878-123-536" />
    </div>
  )
}

export default App