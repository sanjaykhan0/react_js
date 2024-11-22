import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMoney } from "../redux/BudgetSlice";
import { addProduct } from "../redux/ProductSlice";

export default function Home() {
  const [amount, setAmount] = useState("");
  const [ProductPrice, setProductPrice] = useState("");
  const [ProductName, setProductName] = useState("");

  const dispatch = useDispatch();

  const viewBudget = useSelector((state) => state.budget);
  const viewProduct = useSelector((state) => state.product);

  const handleBudget = () => {
    dispatch(addMoney(amount));
    setAmount("");
  };

  const handleProduct = () => {
    dispatch(
      addProduct({
        id: viewProduct.items.length + 1,
        ProductPrice,
        ProductName,
      })
    );
    setProductPrice("");
    setProductName("");
  };

  // Inline styles for medical design
  const styles = {
    container: {
      backgroundColor: "#eaf6f6", // Light blue/green background for calming effect
      padding: "30px",
      fontFamily: "'Roboto', sans-serif", // Modern, clean font
      color: "#2e4053",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    header: {
      color: "#2980b9", // Medical blue for headers
      textAlign: "center",
      marginBottom: "30px",
      fontSize: "36px",
    },
    inputSection: {
      marginBottom: "30px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      border: "1px solid #d5d8dc",
      borderRadius: "10px",
      padding: "20px",
      backgroundColor: "#fff",
    },
    input: {
      padding: "12px",
      margin: "10px",
      width: "250px",
      borderRadius: "8px",
      border: "1px solid #b2babb",
    },
    button: {
      padding: "12px 25px",
      backgroundColor: "#48c9b0", // Soothing green button
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "16px",
      marginTop: "15px",
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
    },
    buttonHover: {
      backgroundColor: "#1abc9c",
    },
    budgetDisplay: {
      fontSize: "30px",
      color: "#1abc9c", // Green for budget display
      textAlign: "center",
      margin: "20px 0",
    },
    productSection: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "30px",
    },
    productRow: {
      backgroundColor: "#f8f9f9",
      padding: "15px",
      textAlign: "left",
      borderBottom: "2px solid #d5dbdb",
    },
    productCell: {
      padding: "15px",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Medical Budget Tracker</h1>

      {/* Budget Section */}
      <div style={styles.inputSection}>
        {viewBudget && (
          <h2 style={styles.budgetDisplay}>Budget: ${viewBudget.budgetMoney}</h2>
        )}
        <input
          type="text"
          value={amount}
          placeholder="Enter Budget Amount"
          onChange={(e) => setAmount(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleBudget} style={styles.button}>
          Add Budget
        </button>
        <span style={{ color: "#34495e", marginTop: "15px" }}>
          Items in Inventory: {viewProduct.items.length}
        </span>
      </div>

      {/* Product Section */}
      <div style={styles.inputSection}>
        <input
          type="number"
          value={ProductPrice}
          placeholder="Enter Product Price"
          onChange={(e) => setProductPrice(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          value={ProductName}
          placeholder="Enter Product Name"
          onChange={(e) => setProductName(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleProduct} style={styles.button}>
          Add Product
        </button>
      </div>

      {/* Product List */}
      {viewProduct.items.length > 0 && (
        <table style={styles.productSection}>
          <thead>
            <tr>
              <th style={styles.productCell}>ID</th>
              <th style={styles.productCell}>Name</th>
              <th style={styles.productCell}>Price</th>
            </tr>
          </thead>
          <tbody>
            {viewProduct.items.map((item) => (
              <tr key={item.id} style={styles.productRow}>
                <td style={styles.productCell}>{item.id}</td>
                <td style={styles.productCell}>{item.ProductName}</td>
                <td style={styles.productCell}>${item.ProductPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
