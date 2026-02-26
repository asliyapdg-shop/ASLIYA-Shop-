export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", color: "#111" }}>
      
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        borderBottom: "1px solid #ddd"
      }}>
        <h2>ASLIYA Shop</h2>
        <nav style={{ display: "flex", gap: 20 }}>
          <a href="#">Accueil</a>
          <a href="#">Produits</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <section style={{
        padding: "80px 40px",
        textAlign: "center",
        background: "#f5f5f5"
      }}>
        <h1>Bienvenue sur ASLIYA Shop</h1>
        <p>Votre boutique en ligne de confiance</p>
      </section>

      <section style={{ padding: "60px 40px" }}>
        <h2>Produits populaires</h2>
        <ul>
          <li>T-shirt – 10€</li>
          <li>Sac – 20€</li>
          <li>Chaussures – 35€</li>
        </ul>
      </section>

      <footer style={{ padding: 20, textAlign: "center" }}>
        © 2026 ASLIYA Shop
      </footer>

    </main>
  );
  }
