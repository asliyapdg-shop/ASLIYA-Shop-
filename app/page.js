import Image from "next/image";

export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif" }}>

      {/* HEADER */}
      <header style={{
        display: "flex",
        alignItems: "center",
        padding: "15px 30px",
        borderBottom: "1px solid #ddd",
        background: "#fff"
      }}>
        <Image src="/logo.png" alt="ASLIYA Shop" width={130} height={60} />

        <input
          placeholder="Rechercher un produit"
          style={{
            marginLeft: 20,
            flex: 1,
            padding: 10,
            borderRadius: 6,
            border: "1px solid #ccc"
          }}
        />

        <button style={{
          marginLeft: 20,
          padding: "10px 20px",
          background: "#ff9900",
          border: "none",
          borderRadius: 6
        }}>
          Panier
        </button>
      </header>

      {/* IMAGE PRINCIPALE */}
      <section style={{ position: "relative", height: 400 }}>
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
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center"
        }}>
          <h1 style={{ fontSize: 42 }}>Bienvenue sur ASLIYA Shop</h1>
          <p style={{ fontSize: 18, margin: "10px 0" }}>
            Achetez tout, au meilleur prix
          </p>
          <button style={{
            marginTop: 15,
            padding: "12px 30px",
            background: "#ff9900",
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
          {[
            "Casque Bluetooth",
            "Montre connectée",
            "Sac élégant",
            "Chaussures sport"
          ].map((name, i) => (
            <div key={i} style={{
              border: "1px solid #ddd",
              padding: 15,
              borderRadius: 8
            }}>
              <div style={{
                height: 150,
                background: "#eee",
                marginBottom: 10
              }} />
              <strong>{name}</strong>
              <p>Prix avantageux</p>
              <button style={{
                width: "100%",
                padding: 8,
                background: "#000",
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
        © ASLIYA Shop 2026
      </footer>

    </main>
  );
                }
