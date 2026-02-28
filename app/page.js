        import Image from "next/image";

export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>

      {/* HEADER */}
      <header style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 32px",
        borderBottom: "1px solid #ddd"
      }}>
        <Image src="/logo.png" alt="ASLIYA Shop" width={140} height={60} />
        <input
          placeholder="Rechercher un produit..."
          style={{
            width: "40%",
            padding: 10,
            borderRadius: 6,
            border: "1px solid #ccc"
          }}
        />
        <button style={{
          padding: "10px 20px",
          background: "#ff9900",
          border: "none",
          borderRadius: 6,
          cursor: "pointer"
        }}>
          Panier
        </button>
      </header>

      {/* BANNIÈRE */}
      <section style={{
        padding: 60,
        background: "#f5f5f5",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: 42 }}>Bienvenue sur ASLIYA Shop</h1>
        <p>Des milliers de produits au meilleur prix</p>
        <button style={{
          marginTop: 20,
          padding: "14px 30px",
          background: "#ff9900",
          border: "none",
          borderRadius: 6,
          fontSize: 16
        }}>
          Voir les offres
        </button>
      </section>

      {/* PRODUITS */}
      <section style={{ padding: 40 }}>
        <h2>Produits populaires</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: 20,
          marginTop: 20
        }}>
          {[
            { name: "Casque Bluetooth", price: "25€" },
            { name: "Montre connectée", price: "45€" },
            { name: "Sac à main", price: "30€" },
            { name: "Chaussures sport", price: "50€" }
          ].map((p, i) => (
            <div key={i} style={{
              border: "1px solid #ddd",
              padding: 16,
              borderRadius: 8
            }}>
              <div style={{
                height: 150,
                background: "#eee",
                marginBottom: 10
              }} />
              <strong>{p.name}</strong>
              <p>{p.price}</p>
              <button style={{
                width: "100%",
                padding: 10,
                background: "#111",
                color: "#fff",
                border: "none",
                borderRadius: 6
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
        © 2026 ASLIYA Shop
      </footer>

    </div>
  );
        }
