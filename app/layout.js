export const metadata = {
  title: "ASLIYA Shop",
  description: "Plateforme e-commerce ASLIYA Shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
