function Header({ judul, subjudul }) {
  return (
    <header>
      <nav className="sticky top-0 z-50 bg-white shadow-card">
        <div className="flex w-full items-center px-5 py-4 md:px-[50px] md:py-[22px]">
          <span className="flex items-center gap-2.5 text-xl font-extrabold tracking-[1px] md:text-[1.35rem]">
            <svg
              viewBox="0 0 24 24"
              className="size-7 fill-gold md:size-8"
              aria-hidden="true"
            >
              <path d="M12 3 1 9l11 6 9-4.9V17h2V9L12 3Z" />
              <path d="M5 13.2V17c0 1.7 3.1 3 7 3s7-1.3 7-3v-3.8l-7 3.8-7-3.8Z" />
            </svg>
            <span>
              COURSE <span className="text-gold-dark">BAHASA</span>
            </span>
          </span>
        </div>
      </nav>

      <div className="bg-linear-to-br from-ink to-navy px-5 py-12 text-center text-white md:py-16">
        <h1 className="text-[1.6rem] font-extrabold tracking-[1px] md:text-[2.4rem]">
          {judul}
        </h1>
        <p className="mx-auto mt-3 max-w-[650px] text-[0.95rem] text-snow md:text-[1.05rem]">
          {subjudul}
        </p>
      </div>
    </header>
  )
}

export default Header