export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#111" }}>

      {/* HEADER */}
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        background: "#111",
        color: "#fff"
      }}>
        <h2>ASLIYA Shop</h2>
        <nav style={{ display: "flex", gap: 20 }}>
          <a style={{ color: "#fff", textDecoration: "none" }} href="#">Accueil</a>
          <a style={{ color: "#fff", textDecoration: "none" }} href="#">Produits</a>
          <a style={{ color: "#fff", textDecoration: "none" }} href="#">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section style={{
        padding: "100px 40px",
        textAlign: "center",
        background: "linear-gradient(135deg, #f5f5f5, #eaeaea)"
      }}>
        <h1 style={{ fontSize: 48, marginBottom: 20 }}>
          Achetez malin avec ASLIYA Shop
        </h1>
        <p style={{ fontSize: 20, marginBottom: 30 }}>
          Les meilleurs produits, au meilleur prix
        </p>
        <button style={{
          padding: "15px 35px",
          fontSize: 16,
          background: "#111",
          color: "#fff",
          border: "none",
          cursor: "pointer"
        }}>
          Découvrir les produits
        </button>
      </section>

      {/* AVANTAGES */}
      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: 30,
        padding: "60px 40px",
        background: "#fff"
      }}>
        <div>
          <h3>🚚 Livraison rapide</h3>
          <p>Recevez vos commandes rapidement</p>
        </div>
        <div>
          <h3>💳 Paiement sécurisé</h3>
          <p>Transactions 100% protégées</p>
        </div>
        <div>
          <h3>⭐ Qualité garantie</h3>
          <p>Produits testés et approuvés</p>
        </div>
      </section>

      {/* PRODUITS */}
      <section style={{ padding: "60px 40px", background: "#f9f9f9" }}>
        <h2 style={{ marginBottom: 30 }}>Produits populaires</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 25
        }}>
          {[
            { name: "T-shirt premium", price: "10€" },
            { name: "Sac tendance", price: "20€" },
            { name: "Chaussures stylées", price: "35€" },
            { name: "Montre moderne", price: "45€" }
          ].map((p, i) => (
            <div key={i} style={{
              background: "#fff",
              padding: 20,
              borderRadius: 6,
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              textAlign: "center"
            }}>
              <div style={{
                height: 140,
                background: "#eee",
                marginBottom: 15
              }} />
              <h3>{p.name}</h3>
              <p style={{ fontWeight: "bold" }}>{p.price}</p>
              <button style={{
                marginTop: 10,
                padding: "10px 20px",
                border: "none",
                background: "#111",
                color: "#fff",
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
        background: "#111",
        color: "#fff"
      }}>
        © 2026 ASLIYA Shop — Tous droits réservés
      </footer>

    </div>
  );
        }
