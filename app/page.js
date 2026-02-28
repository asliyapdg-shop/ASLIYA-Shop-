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
        borderBottom: "1px solid #ddd",
        background: "#fff"
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

      {/* HERO AVEC IMAGE */}
      <section style={{
        position: "relative",
        width: "100%",
        height: "420px"
      }}>
        <Image
          src="/hero.jpg"
          alt="Shopping ASLIYA"
          fill
          style={{ objectFit: "cover" }}
        />

        <div style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.45)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center"
        }}>
          <h1 style={{ fontSize: 48, marginBottom: 12 }}>
            Bienvenue sur ASLIYA Shop
          </h1>
          <p style={{ fontSize: 20, marginBottom: 24 }}>
            Des milliers de produits au meilleur prix
          </p>
          <button style={{
            padding: "14px 36px",
            background: "#ff9900",
            border: "none",
            borderRadius: 8,
            fontSize: 16,
            cursor: "pointer"
          }}>
            Découvrir les offres
          </button>
        </div>
      </section>

      {/* PRODUITS */}
      <section style={{ padding: 40 }}>
        <h2>Produits populaires</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
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
                height: 160,
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
