import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Beranda', end: true },
  { to: '/buku-belajar', label: 'Buku Belajar' },
  { to: '/bank-soal', label: 'Bank Soal' },
  { to: '/lab-maya', label: 'Lab Maya' },
  { to: '/tentang', label: 'Tentang' },
];

export function Header() {
  return (
    <header className="bg-linear-to-b from-chalkboard-light to-chalkboard text-chalk">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="font-hand text-3xl leading-none flex items-center gap-6">
          <img src="/images/logo1.png" alt="logo" className="h-10 w-auto" />
          <img src="/images/logo2.png" alt="logo" className="h-10 w-auto" />
        </NavLink>
        <nav>
          <ul className="flex items-center gap-6 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `pb-1 transition-colors ${isActive
                      ? 'border-b-2 border-chalk-yellow text-chalk-yellow'
                      : 'border-b-2 border-transparent text-chalk/85 hover:text-chalk'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
