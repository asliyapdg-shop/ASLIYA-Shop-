"use client";
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");

  const products = [
    { name: "Casque Bluetooth", price: "39€" },
    { name: "Montre Connectée", price: "59€" },
    { name: "Sac Élégant", price: "45€" },
    { name: "Chaussures Sport", price: "70€" },
    { name: "Parfum Luxe", price: "89€" },
    { name: "Lunettes Tendance", price: "35€" },
  ];

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main style={{ fontFamily: "system-ui", background: "#f8f9fa" }}>

      {/* NAVBAR */}
      <nav style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "15px 40px",
        background: "#0f172a",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 1000
      }}>
        <h2 style={{ color: "#f59e0b", fontWeight: "bold" }}>
          ASLIYA Shop
        </h2>

        <div style={{
          flex: 1,
          margin: "0 40px",
          display: "flex",
          background: "white",
          borderRadius: 50,
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
        }}>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un produit..."
            style={{
              flex: 1,
              padding: "12px 20px",
              border: "none",
              outline: "none",
              fontSize: 14
            }}
          />

          <button style={{
            background: "#f59e0b",
            border: "none",
            padding: "0 25px",
            fontWeight: "bold",
            cursor: "pointer"
          }}>
            🔍
          </button>
        </div>

        <div style={{ display: "flex", gap: 20 }}>
          <span style={{ cursor: "pointer" }}>Compte</span>
          <span style={{ cursor: "pointer" }}>Panier 🛒</span>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section style={{
        height: "80vh",
        background: "linear-gradient(135deg,#0f172a,#1e293b)",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column"
      }}>
        <h1 style={{ fontSize: 60, fontWeight: "bold" }}>
          L'avenir du Shopping
        </h1>
        <p style={{ marginTop: 20, fontSize: 18, opacity: 0.8 }}>
          Expérience premium, livraison rapide, paiement sécurisé.
        </p>

        <button style={{
          marginTop: 30,
          padding: "15px 40px",
          background: "#f59e0b",
          border: "none",
          borderRadius: 50,
          fontSize: 16,
          fontWeight: "bold",
          cursor: "pointer",
          transition: "0.3s",
        }}
        onMouseOver={(e)=> e.target.style.transform="scale(1.05)"}
        onMouseOut={(e)=> e.target.style.transform="scale(1)"}
        >
          Explorer maintenant
        </button>
      </section>

      {/* PRODUITS */}
      <section style={{ padding: 60 }}>
        <h2 style={{ fontSize: 28, marginBottom: 30 }}>
          Produits populaires
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: 30
        }}>
          {filtered.map((product, i) => (
            <div key={i} style={{
              background: "white",
              borderRadius: 20,
              padding: 20,
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              transition: "0.3s",
              cursor: "pointer"
            }}
            onMouseOver={(e)=> e.currentTarget.style.transform="translateY(-10px)"}
            onMouseOut={(e)=> e.currentTarget.style.transform="translateY(0)"}
            >
              <div style={{
                height: 200,
                background: "linear-gradient(135deg,#ddd,#eee)",
                borderRadius: 15,
                marginBottom: 15
              }} />

              <h3>{product.name}</h3>
              <p style={{
                color: "#f59e0b",
                fontWeight: "bold",
                fontSize: 18
              }}>
                {product.price}
              </p>

              <button style={{
                marginTop: 10,
                width: "100%",
                padding: 10,
                background: "#0f172a",
                color: "white",
                border: "none",
                borderRadius: 10,
                fontWeight: "bold",
                cursor: "pointer"
              }}>
                Ajouter au panier
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* PROMO SECTION */}
      <section style={{
        margin: 60,
        padding: 60,
        background: "linear-gradient(135deg,#f59e0b,#fb923c)",
        borderRadius: 30,
        textAlign: "center",
        color: "white"
      }}>
        <h2 style={{ fontSize: 32 }}>🔥 Mega Promotion</h2>
        <p style={{ marginTop: 15 }}>
          Jusqu'à -70% sur les articles sélectionnés
        </p>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: "#0f172a",
        color: "white",
        padding: 40,
        textAlign: "center"
      }}>
        © 2026 ASLIYA Shop — Tous droits réservés
      </footer>

    </main>
  );
}
