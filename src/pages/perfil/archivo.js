import axios from "axios";
import { useState } from "react";
import Layout from "../../../components/layout";

export default function Archivo() {
  const [dragging, setDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleDragEnter = (event) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setDragging(false);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false);
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const handleFileUpload = () => {
    const formData = new FormData();
    formData.append("file", selectedFile);
  
    axios
      .post("/api/upload", formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  

  return (
    <Layout title="Subir archivos">
        <h1 className="text-center mt-5 text-3xl uppercase font-bold">Subir archivos, <span className="text-orange-400">arrasta los archivos en la caja</span></h1>
      <div
        className={`flex items-center justify-center h-screen ${
          dragging ? "bg-gray-200" : ""
        }`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {selectedFile ? (
          <div className="w-1/2 p-4">
            <div className="bg-white rounded-lg shadow-lg">
              <div className="flex items-center justify-center h-32 border-dashed border-4 border-gray-400 rounded-lg">
                <span className="text-gray-400 font-bold text-lg">
                  {selectedFile.name}
                </span>
              </div>
              <div className="flex items-center justify-center p-4">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleFileUpload}
                >
                  Subir archivo
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-1/2 p-4">
            <div className="bg-white rounded-lg shadow-lg">
              <div className="flex items-center justify-center h-32 border-dashed border-4 border-gray-400 rounded-lg">
                <span className="text-gray-400 font-bold text-lg">
                  Arrastre y suelte aquí
                </span>
              </div>
              <div className="flex items-center justify-center p-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleFileUpload}>
                  Subir archivo
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

