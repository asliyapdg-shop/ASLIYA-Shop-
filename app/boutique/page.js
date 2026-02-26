export default function Boutique() {
  return (
    <main style={{ padding: 32, fontFamily: 'Arial, sans-serif' }}>
      <h1>Boutique</h1>
      <p>Découvrez nos produits.</p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 20,
        marginTop: 24
      }}>
        <div style={{ border: '1px solid #eee', padding: 16 }}>
          <h3>Produit 1</h3>
          <p>Prix : 10 €</p>
        </div>

        <div style={{ border: '1px solid #eee', padding: 16 }}>
          <h3>Produit 2</h3>
          <p>Prix : 20 €</p>
        </div>

        <div style={{ border: '1px solid #eee', padding: 16 }}>
          <h3>Produit 3</h3>
          <p>Prix : 30 €</p>
        </div>
      </div>
    </main>
  );
}
