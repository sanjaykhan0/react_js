import React, { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
// import './Dashboard.css';
import { auth, db } from "../../Fireconfig";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [record, setRecord] = useState([]);
  const [editIndex,setEditIndex] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
    });
    fetchData();
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const data = await getDoc(doc(db, "users", user.uid));
        if (data.exists()) {
          setUserData(data.data());
        } else {
          console.log("No user data found");
        }
      }
    };
    fetchUserData();
  }, [user]);

  const handleAdd = async () => {
    if (user) {
      const obj = { userId: user.uid, name, age };
      await addDoc(collection(db, "todos"), obj);
     
      fetchData();
    }
       else if (user) {
    // Add new record
    await addDoc(collection(db, "todos",editIndex), obj);
    console.log("User added");
  }
  setName("");
  setAge("");
  };

  const fetchData = async () => {
    if (user) {
      const querySnapshot = await getDocs(collection(db, "todos"));
      const newData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRecord(newData);
    }
  };


  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
    fetchData();
  };

  const handleEdit = async (id) => {
    const docRef = doc(db, "todos", id);
    const docSnap = await getDoc(docRef);
    
      const data = docSnap.data();
      setName(data.name);
      setAge(data.age);
      setEditIndex(id)
  
  }

  return (
    <div
      className="dashboard"
      style={{
        display: "flex",
        backgroundColor: "#f5f7fa",
        minHeight: "100vh",
        fontFamily: "'Arial', sans-serif",
      }}
    >
      {/* Sidebar */}
      <div
  className="sidebar"
  style={{
    width: "25%",
    backgroundColor: "#1e293bb2", // Modern dark tone for sidebar
    boxShadow: "2px 0 10px rgba(0,0,0,0.2)",
    padding: "30px 20px",
    position: "sticky",
    top: 0,
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    color: "#ffffff",
  }}
>
  {/* Header Section */}
  <div style={{ textAlign: "center" }}>
    <h1
      style={{
        fontSize: "24px",
        fontWeight: "bold",
        marginBottom: "10px",
        color: "#38bdf8",
      }}
    >
      Hello, {userData?.name || "User"}!
    </h1>
    <p style={{ fontSize: "14px", color: "#cbd5e1" }}>
      Welcome to your dashboard
    </p>
  </div>

  {/* Input Section */}
  <div
    style={{
      marginTop: "40px",
      backgroundColor: "#334155",
      borderRadius: "10px",
      padding: "20px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
    }}
  >
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter Name"
      style={{
        width: "100%",
        padding: "12px",
        marginBottom: "10px",
        borderRadius: "8px",
        border: "none",
        fontSize: "14px",
        outline: "none",
        backgroundColor: "#475569",
        color: "#fff",
      }}
    />
    <input
      type="text"
      value={age}
      onChange={(e) => setAge(e.target.value)}
      placeholder="Enter Age"
      style={{
        width: "100%",
        padding: "12px",
        marginBottom: "10px",
        borderRadius: "8px",
        border: "none",
        fontSize: "14px",
        outline: "none",
        backgroundColor: "#475569",
        color: "#fff",
      }}
    />
    <button
      onClick={handleAdd}
      style={{
        width: "100%",
        padding: "12px",
        backgroundColor: "#38bdf8",
        color: "#ffffff",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "bold",
        transition: "background-color 0.3s",
      }}
      onMouseOver={(e) =>
        (e.target.style.backgroundColor = "#0ea5e9")
      }
      onMouseOut={(e) => (e.target.style.backgroundColor = "#38bdf8")}
    >
      Add User
    </button>
  </div>

  {/* Footer Section */}
  <div style={{ textAlign: "center", marginTop: "40px" }}>
    <p style={{ fontSize: "12px", color: "#94a3b8" }}>
      © 2024 Your Company Name
    </p>
  </div>
</div>


      {/* Main Content */}
      <div
        className="main-content"
        style={{
          flex: 1,
          padding: "20px",
          overflowY: "auto",
          backgroundColor: "#1e293bc2",
        }}
      >
        {record &&
          record
            .filter((e) => user.uid === e.userId)
            .map((e, i) => (
              <div
                key={i}
                className="card"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "10px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                  margin: "20px 0",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src="https://static.vecteezy.com/system/resources/previews/030/690/466/non_2x/office-worker-2d-cartoon-illustraton-on-white-background-h-free-photo.jpg"
                  alt=""
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    marginBottom: "15px",
                  }}
                />
                <h3 style={{ marginBottom: "10px" }}>{e.name}</h3>
                <p style={{ color: "#555", marginBottom: "20px" }}>
                  Age: {e.age}
                </p>
                <button
                  onClick={() => handleEdit(e.id)}
                  style={{
                    backgroundColor: "#38bdf8",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "20px",
                    cursor: "pointer",
                    width:"80px"
                  }}
                >
                   Edit 
                </button>
                <br />
                <button
                  onClick={() => handleDelete(e.id)}
                  style={{
                    backgroundColor: "#e63946",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "20px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
      </div>
    </div>
  );
}
