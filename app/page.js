export default function Home() {
  return (
    <main style={{ fontFamily: 'Arial, sans-serif' }}>
      <header style={{ padding: 16, borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between' }}>
        <strong>ASLIYA Shop</strong>
        <nav style={{ display: 'flex', gap: 12 }}>
          <a href="#">Accueil</a>
          <a href="#">Boutique</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <section style={{ padding: 32, background: '#f5f5f5' }}>
        <h1>Bienvenue sur ASLIYA Shop</h1>
        <p>Tout ce que vous cherchez, au meilleur prix.</p>
        <button style={{ padding: '10px 16px' }}>
          Découvrir la boutique
        </button>
      </section>

      <section style={{ padding: 32 }}>
        <h2>Catégories populaires</h2>
        <ul>
          <li>Électronique</li>
          <li>Mode</li>
          <li>Maison</li>
          <li>Beauté</li>
        </ul>
      </section>

      <footer style={{ padding: 16, borderTop: '1px solid #eee' }}>
        © 2026 ASLIYA Shop
      </footer>
    </main>
  );
}
