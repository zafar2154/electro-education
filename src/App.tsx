import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { BankSoal } from './pages/BankSoal';
import { SoalDetail } from './pages/SoalDetail';
import { BukuBelajar } from './pages/BukuBelajar';
import { BukuDetail } from './pages/BukuDetail';
import { LabMaya } from './pages/LabMaya';
import { Tentang } from './pages/Tentang';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="buku-belajar" element={<BukuBelajar />} />
          <Route path="buku-belajar/:id" element={<BukuDetail />} />
          <Route path="bank-soal" element={<BankSoal />} />
          <Route path="bank-soal/:id" element={<SoalDetail />} />
          <Route path="lab-maya" element={<LabMaya />} />
          <Route path="tentang" element={<Tentang />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
