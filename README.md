# 🌿 Savoura — Le Goût Local Revisité

Site vitrine pour la gamme de produits **Savoura** : Chips de Patate Douce & Ignames Surgelées.

## Stack Technique

- **Frontend** : React 18, CSS Modules
- **Backend** : Node.js + Express (API REST)
- **Déploiement** : Vercel (gratuit)

---

## 📁 Structure du projet

```
savoura/
├── api/
│   └── server.js          # Backend Express (API REST)
├── public/
│   ├── index.html
│   └── images/
│       ├── logo.jpeg
│       ├── chips.jpeg
│       └── ignames.png
├── src/
│   ├── App.js
│   ├── index.js
│   ├── index.css
│   ├── components/
│   │   ├── Navbar.js / .css
│   │   └── Footer.js / .css
│   └── sections/
│       ├── Hero.js / .css
│       ├── Products.js / .css
│       └── About.js / .css
├── vercel.json
└── package.json
```

---

## 🚀 Lancer en local

### Prérequis
- Node.js 18+ installé ([nodejs.org](https://nodejs.org))
- npm installé (inclus avec Node.js)

### Installation

```bash
# 1. Cloner ou extraire le dossier du projet
cd savoura

# 2. Installer les dépendances
npm install

# 3. Lancer en développement (frontend + backend en parallèle)
npm run dev
```

Le site sera accessible sur **http://localhost:3000**  
L'API sera accessible sur **http://localhost:3001/api/products**

---

## ☁️ Déploiement sur Vercel (GRATUIT)

### Option A — Via l'interface Vercel (recommandé)

1. **Créer un compte gratuit** sur [vercel.com](https://vercel.com) (connexion avec GitHub possible)

2. **Pousser le projet sur GitHub** :
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Savoura website"
   # Créer un repo sur github.com, puis :
   git remote add origin https://github.com/VOTRE_USERNAME/savoura.git
   git push -u origin main
   ```

3. **Importer dans Vercel** :
   - Aller sur [vercel.com/new](https://vercel.com/new)
   - Cliquer **"Import Git Repository"**
   - Sélectionner votre repo `savoura`
   - Vercel détecte automatiquement React
   - **Build Command** : `npm run build`
   - **Output Directory** : `build`
   - Cliquer **"Deploy"**

4. ✅ Votre site sera en ligne sur une URL du type : `savoura.vercel.app`

---

### Option B — Via la CLI Vercel

```bash
# 1. Installer la CLI Vercel
npm install -g vercel

# 2. Se connecter
vercel login

# 3. Déployer depuis le dossier du projet
vercel

# Répondre aux questions :
# - Set up and deploy "savoura"? Y
# - Which scope? (votre compte)
# - Link to existing project? N
# - What's your project's name? savoura
# - In which directory is your code located? ./
# - Want to override settings? N

# 4. Pour déploiement en production :
vercel --prod
```

---

### Option C — Render (alternative à Vercel)

Si vous préférez [render.com](https://render.com) :

1. Créer un compte gratuit
2. **New → Static Site**
3. Connecter votre repo GitHub
4. **Build Command** : `npm run build`
5. **Publish Directory** : `build`
6. Deploy !

---

## 🔌 API Endpoints

| Méthode | URL | Description |
|---------|-----|-------------|
| GET | `/api/products` | Liste tous les produits |
| GET | `/api/products/:id` | Détail d'un produit |
| GET | `/api/about` | Informations À Propos |

---

## 🎨 Palette de couleurs

| Couleur | Hex | Usage |
|---------|-----|-------|
| Marron | `#3a2007` | Primaire, navbar, footer |
| Vert | `#4a7c2f` | Ignames, badges naturel |
| Orange | `#e8841a` | Accent, CTA, prix |
| Crème | `#f5efe6` | Fond principal |

---

## 📝 Contenu

- **Chips de Patate Douce** : 4 saveurs (Nature, Oignon, Piment, Épices) · 500–2500 FCFA
- **Ignames Surgelées** : 600g · 2500 FCFA
- Contact : savoura.tg@gmail.com · +228 90 00 00 00

---

*Projet Savoura — Groupe 13 · Innov+ · 2025*
