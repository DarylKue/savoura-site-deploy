const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Products data
const products = [
  {
    id: 1,
    name: "Chips de Patate Douce",
    category: "chips",
    variants: [
      {
        flavor: "Nature",
        color: "#5a8f3c",
        description: "Des chips croustillantes à base de patate douce locale, simplement assaisonnées pour révéler le vrai goût de la nature.",
        ingredients: "Patate douce, huile végétale, sel."
      },
      {
        flavor: "Oignon",
        color: "#7b4f9e",
        description: "La douceur de la patate douce relevée par la saveur unique et aromatique de l'oignon.",
        ingredients: "Patate douce, huile végétale, oignon en poudre, sel, épices naturelles."
      },
      {
        flavor: "Piment",
        color: "#c0392b",
        description: "Pour les amateurs de sensations fortes ! Des chips épicées qui éveillent les papilles.",
        ingredients: "Patate douce, huile végétale, piment, sel, épices naturelles."
      },
      {
        flavor: "Épices",
        color: "#e67e22",
        description: "Un mélange d'épices africaines — gingembre, ail, poivre, paprika — pour une explosion de saveurs authentiques.",
        ingredients: "Patate douce, huile végétale, gingembre, ail, paprika, poivre noir, sel."
      }
    ],
    weight: "90g",
    prices: {
      petit: 500,
      moyen: 1200,
      grand: 2500
    },
    badges: ["100% Local", "Sans Conservateurs", "Sans Additifs"],
    tagline: "100% Local – Naturel – Savoureux"
  },
  {
    id: 2,
    name: "Ignames Surgelées",
    category: "ignames",
    description: "Savoura sélectionne pour vous les meilleures ignames locales et les transforme avec soin pour vous offrir un produit naturel, pratique et savoureux.",
    tagline: "Le goût du vrai, la praticité en plus !",
    weight: "600g",
    price: 2500,
    badges: ["Sans Additifs", "Produit Naturel", "Produit Local"],
    preparation: [
      { method: "À Bouillir", time: "12–15 min", icon: "🫕" },
      { method: "À Cuire", time: "10–12 min", icon: "🍳" },
      { method: "À Frire", time: "8–10 min", icon: "🥘" }
    ],
    advantages: [
      "Gain de temps : prêtes à cuire",
      "Longue conservation (chaîne du froid)",
      "Zéro gaspillage alimentaire",
      "Format standard compatible avec toutes cuisines"
    ],
    conservation: "À conserver au congélateur à -18°C"
  }
];

// API Routes
app.get('/api/products', (req, res) => {
  res.json({ success: true, data: products });
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ success: false, message: 'Produit introuvable' });
  res.json({ success: true, data: product });
});

app.get('/api/about', (req, res) => {
  res.json({
    success: true,
    data: {
      mission: "Valoriser la production locale au Togo à travers des produits alimentaires modernes, naturels et compétitifs.",
      vision: "Transformer la perception du consommateur vis-à-vis du local, démontrer que « consommer africain » peut rimer avec modernité, qualité et gourmandise.",
      story: "Au Togo, la patate douce et l'igname, cultivées localement, sont sous-exploitées et peu transformées. Savoura est née de la volonté de combler ce vide : proposer des produits locaux transformés, attractifs, pratiques et accessibles, capables de rivaliser avec les produits importés.",
      values: [
        { title: "Réponse Économique", desc: "Soutenir les agriculteurs togolais en créant des débouchés valorisants pour leur production." },
        { title: "Alternative Sanitaire", desc: "Des produits sans conservateurs ni additifs, 100% naturels." },
        { title: "Souveraineté Alimentaire", desc: "Prouver que consommer africain peut rimer avec modernité et qualité." }
      ],
      contact: {
        phone: "+228 90 00 00 00",
        email: "savoura.tg@gmail.com",
        social: "@savoura_igname"
      }
    }
  });
});

// Serve React build in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`🚀 Savoura API running on http://localhost:${PORT}`);
});

module.exports = app;
