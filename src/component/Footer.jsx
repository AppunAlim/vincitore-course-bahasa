function Footer({ email, telepon }) {
  return (
    <footer className="bg-ink px-5 py-8 text-center text-snow">
      <p>
        Email: {email} | Telepon: {telepon}
      </p>
      <p className="mt-2 text-sm text-mist">
        &copy; 2026 Course Bahasa. Seluruh hak cipta dilindungi
      </p>
    </footer>
  )
}

export default Footer