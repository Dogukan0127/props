import logo from "./logo.svg";
import "./App.css";
import Button from "./components/button";
import Tab from "./components/tab";
import Fruit from "./components/ornek";
import Yeni from "./components/Yeni";
import Ogrenciler from "./components/Ogrenciler";
import { useState } from "react";

function App() {
  const [ogrenciler, setOgrenciler] = useState([
    { id: 1, name: "dogukan", lastName: "ateş" },
    { id: 2, name: "dogukan", lastName: "ateş" },
    { id: 3, name: "dogukan", lastName: "ateş" },
    { id: 4, name: "dogukan", lastName: "ateş" },
    { id: 5, name: "dogukan", lastName: "ateş" },
    { id: 6, name: "dogukan", lastName: "ateş" },
  ]);

  const yeniOgrenciEkle = () => {
    const yeniOgrenci = {
      id: ogrenciler.length + 1,
      name: "yağmur",
      lastName: "ateş",
    };

    setOgrenciler([...ogrenciler, yeniOgrenci]);
  };

  return (
    <>
      <ul>
        {ogrenciler.map((og) => (
          <li key={og.id}>
            <Ogrenciler name={og.name} lastName={og.lastName} />
          </li>
        ))}
      </ul>

      <button onClick={yeniOgrenciEkle}>Öğrenci Ekle</button>
    </>
  );
}

export default App;
