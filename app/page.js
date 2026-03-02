import Image from "next/image";

export default function Home() {
  return (
    <main style={{ fontFamily: "Inter, Arial, sans-serif", background: "#f3f4f6" }}>

      {/* HEADER */}
      <header style={{
        display: "flex",
        alignItems: "center",
        gap: 24,
        padding: "16px 40px",
        background: "#ffffff",
        borderBottom: "1px solid #e5e7eb"
      }}>
        <Image src="/logo.png" alt="ASLIYA Shop" width={140} height={60} />

        <input
          placeholder="Rechercher sur ASLIYA Shop"
          style={{
            flex: 1,
            padding: 12,
            borderRadius: 999,
            border: "1px solid #d1d5db",
            fontSize: 14
          }}
        />

        <button style={{
          padding: "10px 22px",
          background: "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: 999,
          fontWeight: 500,
          cursor: "pointer"
        }}>
          Panier
        </button>
      </header>

      {/* HERO */}
      <section style={{ position: "relative", height: 460 }}>
        <Image
          src="/hero.jpg"
          alt="ASLIYA Shop"
          fill
          priority
          style={{ objectFit: "cover" }}
        />

        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(0,0,0,0.65), rgba(0,0,0,0.25))",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 60px",
          color: "#fff",
          maxWidth: 700
        }}>
          <h1 style={{ fontSize: 48, fontWeight: 800, lineHeight: 1.1 }}>
            Tout ce que vous cherchez,<br />au meilleur prix
          </h1>
          <p style={{ fontSize: 18, marginTop: 16, marginBottom: 28 }}>
            ASLIYA Shop est votre marketplace de confiance :
            qualité, prix et livraison rapide.
          </p>
          <div style={{ display: "flex", gap: 16 }}>
            <button style={{
              padding: "14px 36px",
              background: "#f59e0b",
              border: "none",
              borderRadius: 999,
              fontSize: 15,
              fontWeight: 600,
              cursor: "pointer"
            }}>
              Voir les offres
            </button>
            <button style={{
              padding: "14px 36px",
              background: "transparent",
              border: "2px solid #fff",
              borderRadius: 999,
              color: "#fff",
              fontSize: 15,
              cursor: "pointer"
            }}>
              Nouveautés
            </button>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: 20,
        padding: "40px 40px",
        background: "#ffffff"
      }}>
        {[
          "Paiement sécurisé",
          "Livraison rapide",
          "Produits vérifiés",
          "Support client 7j/7"
        ].map((t, i) => (
          <div key={i} style={{
            textAlign: "center",
            fontWeight: 500,
            color: "#111827"
          }}>
            ✔ {t}
          </div>
        ))}
      </section>

      {/* CATEGORIES */}
      <section style={{ padding: "60px 40px" }}>
        <h2 style={{ fontSize: 28, marginBottom: 24 }}>Catégories populaires</h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
          gap: 20
        }}>
          {["Électronique", "Mode", "Maison", "Beauté", "Sport", "High-Tech"].map((c, i) => (
            <div key={i} style={{
              background: "#ffffff",
              padding: 24,
              borderRadius: 16,
              textAlign: "center",
              fontWeight: 600,
              boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
              cursor: "pointer"
            }}>
              {c}
            </div>
          ))}
        </div>
      </section>

      {/* PRODUITS */}
      <section style={{ padding: "60px 40px", background: "#ffffff" }}>
        <h2 style={{ fontSize: 28, marginBottom: 32 }}>Produits populaires</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 28
        }}>
          {[
            { name: "Casque Bluetooth", price: "29€" },
            { name: "Montre connectée", price: "49€" },
            { name: "Sac élégant", price: "35€" },
            { name: "Chaussures sport", price: "55€" }
          ].map((p, i) => (
            <div key={i} style={{
              background: "#f9fafb",
              padding: 20,
              borderRadius: 16,
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)"
            }}>
              <div style={{
                height: 160,
                background: "#e5e7eb",
                borderRadius: 12,
                marginBottom: 14
              }} />
              <div style={{ fontWeight: 600 }}>{p.name}</div>
              <div style={{ margin: "6px 0", fontWeight: 700 }}>{p.price}</div>
              <button style={{
                width: "100%",
                padding: "10px 0",
                background: "#111827",
                color: "#fff",
                border: "none",
                borderRadius: 999,
                cursor: "pointer"
              }}>
                Ajouter au panier
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: 30,
        textAlign: "center",
        background: "#111827",
        color: "#ffffff"
      }}>
        © 2026 ASLIYA Shop — Marketplace de confiance
      </footer>

    </main>
  );
}
