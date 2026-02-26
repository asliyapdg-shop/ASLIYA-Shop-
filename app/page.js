<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ASLIYA Shop</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Poppins', sans-serif; }
    body { background: #fafafa; color: #222; }
    header { background: #111; color: #fff; padding: 20px 40px; display: flex; justify-content: space-between; align-items: center; }
    header h1 { font-size: 1.6rem; letter-spacing: 2px; }
    nav a { color: #fff; margin-left: 20px; text-decoration: none; font-weight: 300; }
    .hero { padding: 80px 40px; text-align: center; background: linear-gradient(135deg, #f5f5f5, #eaeaea); }
    .hero h2 { font-size: 2.5rem; margin-bottom: 20px; }
    .hero p { max-width: 600px; margin: 0 auto 30px; }
    .hero button { padding: 14px 32px; border: none; background: #111; color: #fff; cursor: pointer; font-size: 1rem; border-radius: 30px; }
    .products { padding: 60px 40px; }
    .products h3 { text-align: center; margin-bottom: 40px; font-size: 2rem; }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; }
    .card { background: #fff; border-radius: 16px; padding: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.08); }
    .card img { width: 100%; border-radius: 12px; margin-bottom: 15px; }
    .card h4 { margin-bottom: 10px; }
    .card span { font-weight: 600; }
    footer { background: #111; color: #fff; text-align: center; padding: 30px; margin-top: 60px; font-size: 0.9rem; }
  </style>
</head>
<body>

<header>
  <h1>ASLIYA</h1>
  <nav>
    <a href="#">Accueil</a>
    <a href="#">Boutique</a>
    <a href="#">Contact</a>
  </nav>
</header>

<section class="hero">
  <h2>Bienvenue chez ASLIYA Shop</h2>
  <p>Découvrez une sélection élégante et moderne pensée pour sublimer votre style au quotidien.</p>
  <button>Découvrir la boutique</button>
</section>

<section class="products">
  <h3>Produits populaires</h3>
  <div class="grid">
    <div class="card">
      <img src="https://via.placeholder.com/400x300" alt="Produit 1">
      <h4>Produit ASLIYA</h4>
      <span>39,99 €</span>
    </div>
    <div class="card">
      <img src="https://via.placeholder.com/400x300" alt="Produit 2">
      <h4>Produit ASLIYA</h4>
      <span>49,99 €</span>
    </div>
    <div class="card">
      <img src="https://via.placeholder.com/400x300" alt="Produit 3">
      <h4>Produit ASLIYA</h4>
      <span>59,99 €</span>
    </div>
  </div>
</section>

<footer>
  © 2026 ASLIYA Shop — Tous droits réservés
</footer>

</body>
</html>
