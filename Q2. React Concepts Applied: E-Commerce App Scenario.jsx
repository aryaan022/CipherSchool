import React, { useState, useContext, createContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// --- Theme Context ---
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// --- ProductCard Component ---
function ProductCard({ name, price }) {
  const [liked, setLiked] = useState(false);

  return (
    <div style={{ border: "1px solid #ccc", padding: 10, marginBottom: 10 }}>
      <h3>{name}</h3>
      <p>₹{price}</p>
      <button onClick={() => setLiked(!liked)}>
        {liked ? "Liked ❤️" : "Like 🤍"}
      </button>
    </div>
  );
}

// --- Search and Product List ---
function ProductList({ products }) {
  const [search, setSearch] = useState("");

  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: 5, marginBottom: 20 }}
      />
      {filtered.map((p, i) => (
        <ProductCard key={i} name={p.name} price={p.price} />
      ))}
    </div>
  );
}

// --- Private Route ---
function PrivateRoute({ children, isAuthenticated }) {
  return isAuthenticated ? children : <Navigate to="/login" />;
}

// --- Checkout Page ---
function Checkout() {
  return <h2>Welcome to the Checkout Page!</h2>;
}

// --- Login Page (Placeholder) ---
function Login() {
  return <h2>Please log in to continue</h2>;
}

// --- App Component ---
function App() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Change to false to test protection

  const sampleProducts = [
    { name: "Shoes", price: 1999 },
    { name: "Jacket", price: 2999 },
    { name: "Watch", price: 1499 },
  ];

  return (
    <div style={{ padding: 20, backgroundColor: theme === "dark" ? "#222" : "#fff", color: theme === "dark" ? "#fff" : "#000" }}>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>

      <h1>My E-Commerce App</h1>

      <Router>
        <Routes>
          <Route path="/" element={<ProductList products={sampleProducts} />} />
          <Route
            path="/checkout"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <Checkout />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

// --- Export App Wrapped with ThemeProvider ---
export default function WrappedApp() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
