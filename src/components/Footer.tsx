export function Footer() {
  return (
    <footer className="bg-linear-to-b from-chalkboard to-chalkboard-dark text-chalk/70">
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 text-sm">
        <p>
          &copy; Copyright {new Date().getFullYear()}
        </p>
        <p>
          Fakultas Teknik Universtias Pembangunan Nasional "Veteran" Jakarta.
        </p>
      </div>
    </footer>
  );
}