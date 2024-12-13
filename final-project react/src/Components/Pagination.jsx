import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adddata, apifetch, deletedata, editdata } from "../Features/Slice";
import Navbar from "./Navbar";

export default function Pagination() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [editId, setEditId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apifetch());
  }, [dispatch]);

  useEffect(() => {
    dispatch(apifetch());
  });

  const apiuse = useSelector((state) => state.apikey.data);

  const add = () => {
    if (editId) {
      dispatch(editdata({ id: editId, category, price, title }));
      setEditId(null);
    } else {
      dispatch(adddata({ id: String(Date.now()), price, category, title }));
    }

    setCategory("");
    setPrice("");
    setTitle("");
    setEditId(null);
  };

  const edit = (e) => {
    setCategory(e.category);
    setPrice(e.price);
    setTitle(e.title);
    setEditId(e.id); // Set editId to the current item's id for editing
  };

  return (
    <>
      <div className="container mx-auto p-4 md:p-6 lg:p-8 flex flex-col gap-6">
        <Navbar />

        <div className="bg-gradient-to-br from-blue-50 to-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Add or Edit Product
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">Category</label>
              <input
                type="text"
                placeholder="Enter category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Price</label>
              <input
                type="number"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Title</label>
              <input
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <button
            onClick={add}
            className="mt-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105"
          >
            {editId ? "Update Data" : "Add Data"}
          </button>
        </div>

        <div className="mt-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {apiuse &&
              apiuse.map((e, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-2 duration-300"
                >
                  <div className="h-[25vh]">
                    <img
                      src={e.image || "https://via.placeholder.com/150"}
                      alt={e.title}
                      className="h-48 w-full object-contain rounded-t-lg mb-4"
                    />
                  </div>
                  <div className="p-4 h-[20vh]">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {e.title}
                    </h3>
                    <p className="text-gray-500">{e.category}</p>
                    <p className="text-gray-700 font-bold">${e.price}</p>
                  </div>
                  <button className="bg-green-600 text-white w-full h-10" >Add to Cart</button>
                  <div className="flex justify-between m-4">
                    <button
                      onClick={() => dispatch(deletedata(e.id))}
                      className="bg-blue-400 text-white py-2 px-4 rounded-lg shadow hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => edit(e)}
                      className="bg-gray-700 text-white py-2 px-4 rounded-lg shadow hover:bg-yellow-600 transition"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
