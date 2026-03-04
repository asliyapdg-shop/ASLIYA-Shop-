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
    { name: "Lunettes Premium", price: "35€" },
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
        padding: "20px 80px",
        background: "#0f172a",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 1000
      }}>
        <h2 style={{ fontWeight: "bold", fontSize: 24 }}>
          ASLIYA <span style={{ color: "#f59e0b" }}>Shop</span>
        </h2>

        <div style={{
          flex: 1,
          margin: "0 50px",
          display: "flex",
          background: "white",
          borderRadius: 50,
          overflow: "hidden"
        }}>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un produit..."
            style={{
              flex: 1,
              padding: "14px 25px",
              border: "none",
              outline: "none"
            }}
          />
          <button style={{
            background: "#f59e0b",
            border: "none",
            padding: "0 30px",
            fontWeight: "bold",
            cursor: "pointer"
          }}>
            🔍
          </button>
        </div>

        <div style={{ display: "flex", gap: 25 }}>
          <span>Connexion</span>
          <span>Panier 🛒</span>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        height: "75vh",
        background: "linear-gradient(135deg,#111,#1e293b)",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: 60, fontWeight: "bold" }}>
          Marketplace Premium
        </h1>
        <p style={{ marginTop: 20, fontSize: 18, opacity: 0.8 }}>
          Les meilleures offres. Expérience moderne. Paiement sécurisé.
        </p>
        <button style={{
          marginTop: 30,
          padding: "15px 40px",
          background: "#f59e0b",
          border: "none",
          borderRadius: 50,
          fontWeight: "bold",
          cursor: "pointer"
        }}>
          Explorer
        </button>
      </section>

      {/* SECTION CATEGORIES */}
      <section style={{ padding: "70px 80px" }}>
        <h2 style={{ fontSize: 30, marginBottom: 40 }}>
          Catégories Populaires
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: 30
        }}>
          {["Électronique", "Mode", "Maison", "Accessoires"].map((cat, i) => (
            <div key={i} style={{
              background: "white",
              padding: 40,
              borderRadius: 25,
              textAlign: "center",
              boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
              cursor: "pointer",
              transition: "0.3s"
            }}
            onMouseOver={(e)=> e.currentTarget.style.transform="translateY(-8px)"}
            onMouseOut={(e)=> e.currentTarget.style.transform="translateY(0)"}
            >
              <h3>{cat}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUITS */}
      <section style={{ padding: "70px 80px", background: "#eef2f7" }}>
        <h2 style={{ fontSize: 30, marginBottom: 40 }}>
          Meilleures Ventes
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: 40
        }}>
          {filtered.map((product, i) => (
            <div key={i} style={{
              background: "white",
              borderRadius: 25,
              padding: 25,
              boxShadow: "0 15px 35px rgba(0,0,0,0.07)",
              transition: "0.3s",
              cursor: "pointer"
            }}
            onMouseOver={(e)=> e.currentTarget.style.transform="translateY(-10px)"}
            onMouseOut={(e)=> e.currentTarget.style.transform="translateY(0)"}
            >
              <div style={{
                height: 220,
                background: "#f3f4f6",
                borderRadius: 20,
                marginBottom: 20
              }} />

              <h3>{product.name}</h3>
              <p style={{
                color: "#f59e0b",
                fontSize: 20,
                fontWeight: "bold",
                marginTop: 8
              }}>
                {product.price}
              </p>

              <button style={{
                marginTop: 15,
                width: "100%",
                padding: 12,
                background: "#111",
                color: "white",
                border: "none",
                borderRadius: 12,
                fontWeight: "bold"
              }}>
                Ajouter au panier
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* AVANTAGES */}
      <section style={{
        background: "#0f172a",
        color: "white",
        padding: "80px 60px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
        gap: 40
      }}>
        <div>
          <h3>🚚 Livraison Rapide</h3>
          <p style={{ opacity: 0.7 }}>
            Expédition sous 24h partout.
          </p>
        </div>

        <div>
          <h3>🔒 Paiement Sécurisé</h3>
          <p style={{ opacity: 0.7 }}>
            Transactions protégées.
          </p>
        </div>

        <div>
          <h3>⭐ Qualité Premium</h3>
          <p style={{ opacity: 0.7 }}>
            Satisfaction garantie.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: "#000",
        color: "white",
        padding: 40,
        textAlign: "center"
      }}>
        © 2026 ASLIYA Shop — Tous droits réservés
      </footer>

    </main>
  );
                }
