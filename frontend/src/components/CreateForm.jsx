import { useState } from "react";
import axios from "axios";

export default function CreateForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  };

  const handleAddAuthor = () => {
    handlePostRequest();
  };
  const handlePostRequest = async (e) => {
    const data = { name: name, surname: surname };
    try {
      const response = await axios.post("http://localhost:8000/authors", data);
      if(response.status == 200){
        window.location.reload()
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-red-100 p-2">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex flex-col gap-2 bg-white"
      >
        <div>
          <label>Name: </label>
          <input
            value={name}
            onChange={(e) => handleNameChange(e)}
            type="text"
            className="bg-gray-100 border-black border-1"
          />
        </div>
        <div>
          <label>Surname: </label>
          <input
            value={surname}
            onChange={(e) => handleSurnameChange(e)}
            type="text"
            className="bg-gray-100 border-black border-1"
          />
        </div>
        <div>
          <button
            onClick={handleAddAuthor}
            type="button"
            className="px-2 bg-green-200"
          >
            Add Author
          </button>
        </div>
      </form>
    </div>
  );
}
