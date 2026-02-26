export default function AdminDashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <p>Bienvenue dans l’espace admin ASLIYA Shop</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20, marginTop: 20 }}>
        <div style={{ background: "#fff", padding: 20 }}>Produits : 0</div>
        <div style={{ background: "#fff", padding: 20 }}>Commandes : 0</div>
        <div style={{ background: "#fff", padding: 20 }}>Clients : 0</div>
        <div style={{ background: "#fff", padding: 20 }}>Chiffre d’affaires : 0 €</div>
      </div>
    </>
  );
    }
