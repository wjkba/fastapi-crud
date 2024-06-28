import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

export default function TabelaRow({ id, name, surname }) {
  const [editName, setEditName] = useState(name);
  const [editSurname, setEditSurname] = useState(surname);
  const [isEditing, setIsEditing] = useState(false);
  const [displayConfirm, setDisplayConfirm] = useState(false);
  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleCloseEdit = () => {
    const data = { name: editName, surname: editSurname };
    if (data.name.length > 0 && data.surname.length > 0) {
      setIsEditing(false);
      handlePutRequest(data);
    }
  };
  const handleDelete = () => {
    if (!displayConfirm) {
      setDisplayConfirm(true);
    } else {
      handleDeleteRequest();
    }
  };

  const handlePutRequest = async (data) => {
    try {
      const response = await axios.put(
        `http://localhost:8000/authors/${id}`,
        data
      );
      console.log(response);
      if (response.status == 200) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteRequest = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/authors/${id}`
      );
      console.log(response);
      if (response.status == 200) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleNameChange = (e) => {
    setEditName(e.target.value);
  };
  const handleSurnameChange = (e) => {
    setEditSurname(e.target.value);
  };

  return (
    <>
      {!isEditing ? (
        <div>{editName}</div>
      ) : (
        <input
          className="border-b-2 border-black bg-yellow-100 outline-none"
          value={editName}
          onChange={(e) => handleNameChange(e)}
        />
      )}
      {!isEditing ? (
        <div>{editSurname}</div>
      ) : (
        <input
          className="border-b-2 border-black bg-yellow-100 outline-none"
          value={editSurname}
          onChange={(e) => handleSurnameChange(e)}
        />
      )}
      <div className="flex gap-1 justify-between pb-1">
        {!isEditing ? (
          <button
            onClick={handleEdit}
            className="max-w-[4rem] w-full px-1 py-0.5 bg-yellow-400 hover:bg-yellow-500 font-semibold text-white drop-shadow rounded"
          >
            <p>EDIT</p>
          </button>
        ) : (
          <button
            onClick={handleCloseEdit}
            className=" bg-[#fca130] hover:bg-[#db8c2a] max-w-[4rem] w-full px-1 py-0.5 font-semibold text-white drop-shadow rounded"
          >
            PUT
          </button>
        )}
        <button
          onClick={handleDelete}
          className={`${displayConfirm && "bg-[#3d3d3d] hover:bg-black"} w-full px-1 py-0.5 bg-[#f93e3e] hover:bg-[#ca3434] font-semibold text-white drop-shadow rounded`}
        >
          {!displayConfirm ? "DELETE" : "CONFIRM"}
        </button>
      </div>
    </>
  );
}

TabelaRow.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
};
