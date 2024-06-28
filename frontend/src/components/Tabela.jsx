import axios from "axios";
import TabelaRow from "./TabelaRow";
import { useEffect, useState } from "react";

let data1 = [
  { name: "William ", surname: "Shakespeare" },
  { name: "Jane ", surname: "Austen" },
  { name: "Charles ", surname: "Dickens" },
  { name: "Mark ", surname: "Twain" },
  { name: "Leo ", surname: "Tolstoy" },
];

export default function Tabela() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/authors");
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-[30rem] bg-white">
      <div className="grid grid-cols-3">
        <div className="bg-blue-200">Imie</div>
        <div className="bg-blue-200">Naziwsko</div>
        <div className="bg-blue-200">Akcje</div>
      </div>
      {data.map((item, index) => (
        <div key={index} className="grid grid-cols-3">
          <TabelaRow id={item.id} name={item.name} surname={item.surname} />
        </div>
      ))}
    </div>
  );
}
