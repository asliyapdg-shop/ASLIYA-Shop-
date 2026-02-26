export const metadata = {
  title: "ASLIYA Shop",
  description: "Boutique en ligne ASLIYA Shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
