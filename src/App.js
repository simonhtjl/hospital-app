import "./App.css";

import { Login } from "./component/Login";
import { Homepage } from "./component/Homepage";
import { Treatment } from "./component/Treatment";
import { DaftarPasien } from "./component/DaftarPasien";
import { Registration } from "./component/Registration";
import { Header } from "./component/Header";
import { Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Pasien } from "./component/Pasien";
import Footer from "./component/Footer";
import { RecordTreatment } from "./component/RecordTreatment";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/pasien" element={<Pasien />} />
          <Route path="/dokter/daftarpasien" element={<DaftarPasien />} />
          <Route path="/dokter/treatment/:id" element={<Treatment />} />
          <Route path="/dokter/recordtreatment" element={<RecordTreatment />} />
        </Routes>
      </div>
      <div className="footer">
      <Footer />
      </div>
    </div>
  );
}

export default App;
