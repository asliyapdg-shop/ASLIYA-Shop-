export default function AdminLayout({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "Arial" }}>
      
      {/* MENU */}
      <aside style={{
        width: 220,
        background: "#111",
        color: "#fff",
        padding: 20
      }}>
        <h2>ASLIYA Admin</h2>
        <nav style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 10 }}>
          <a href="/admin" style={{ color: "#fff" }}>Dashboard</a>
          <a href="/admin/produits" style={{ color: "#fff" }}>Produits</a>
          <a href="/admin/commandes" style={{ color: "#fff" }}>Commandes</a>
          <a href="/admin/clients" style={{ color: "#fff" }}>Clients</a>
        </nav>
      </aside>

      {/* CONTENU */}
      <main style={{ flex: 1, padding: 24, background: "#f5f5f5" }}>
        {children}
      </main>
    </div>
  );
}m
