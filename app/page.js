"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [query, setQuery] = useState("");

  const productsList = [
    "Casque Bluetooth",
    "Montre connectée",
    "Sac élégant",
    "Chaussures sport",
    "Parfum luxe",
    "Lunettes tendance"
  ];

  const filtered = productsList.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: "#f3f4f6" }}>

      {/* HEADER */}
      <header style={{
        display: "flex",
        alignItems: "center",
        gap: 20,
        padding: "15px 40px",
        background: "#fff",
        borderBottom: "1px solid #ddd"
      }}>
        <Image src="/logo.png" alt="ASLIYA Shop" width={130} height={60} />

        {/* SEARCH BAR */}
        <div style={{
          flex: 1,
          position: "relative",
          display: "flex",
          alignItems: "center",
          background: "#fff",
          border: "1px solid #ccc",
          borderRadius: 6
        }}>
          <select style={{
            padding: 10,
            border: "none",
            borderRight: "1px solid #ccc",
            background: "#f3f4f6"
          }}>
            <option>Toutes catégories</option>
            <option>Électronique</option>
            <option>Mode</option>
            <option>Maison</option>
          </select>

          <span style={{ padding: "0 10px" }}>🔍</span>

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher sur ASLIYA Shop"
            style={{
              flex: 1,
              padding: 10,
              border: "none",
              outline: "none"
            }}
          />

          <button style={{
            padding: "10px 20px",
            background: "#f59e0b",
            border: "none",
            cursor: "pointer"
          }}>
            Rechercher
          </button>

          {/* Suggestions */}
          {query && (
            <div style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              background: "#fff",
              border: "1px solid #ccc",
              zIndex: 10
            }}>
              {filtered.length > 0 ? (
                filtered.map((item, i) => (
                  <div key={i} style={{
                    padding: 10,
                    cursor: "pointer",
                    borderBottom: "1px solid #eee"
                  }}>
                    {item}
                  </div>
                ))
              ) : (
                <div style={{ padding: 10 }}>Aucun résultat</div>
              )}
            </div>
          )}
        </div>

        <button style={{
          padding: "10px 20px",
          background: "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: 6
        }}>
          Panier
        </button>
      </header>

      {/* HERO IMAGE */}
      <section style={{ position: "relative", height: 420 }}>
        <Image
          src="/hero.jpg"
          alt="ASLIYA Shop"
          fill
          style={{ objectFit: "cover" }}
        />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.5)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          textAlign: "center"
        }}>
          <h1 style={{ fontSize: 44 }}>Bienvenue sur ASLIYA Shop</h1>
          <p>Votre marketplace moderne et sécurisée</p>
          <button style={{
            marginTop: 15,
            padding: "12px 30px",
            background: "#f59e0b",
            border: "none",
            borderRadius: 6
          }}>
            Voir les offres
          </button>
        </div>
      </section>

      {/* PRODUITS */}
      <section style={{ padding: 40 }}>
        <h2>Produits populaires</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 20,
          marginTop: 20
        }}>
          {productsList.map((name, i) => (
            <div key={i} style={{
              background: "#fff",
              padding: 15,
              borderRadius: 8,
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
            }}>
              <div style={{
                height: 150,
                background: "#eee",
                marginBottom: 10
              }} />
              <strong>{name}</strong>
              <p>Prix attractif</p>
              <button style={{
                width: "100%",
                padding: 8,
                background: "#111",
                color: "#fff",
                border: "none",
                borderRadius: 4
              }}>
                Ajouter au panier
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: 20,
        textAlign: "center",
        background: "#111",
        color: "#fff"
      }}>
        © 2026 ASLIYA Shop — Tous droits réservés
      </footer>

    </main>
  );
        }
