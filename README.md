# Fodium — plateforme de découverte et de gestion événementielle
🚀 **[Live Demo — Open Fodium](https://bejewelled-centaur-71ce5f.netlify.app/)**
Fodium est un prototype front-end responsive qui réunit deux expériences dans un même produit : **Fodium**, destiné aux participants, et **Fodium Pro**, destiné aux organisateurs. Le projet met en scène un parcours événementiel de bout en bout — découverte, choix, réservation de démonstration et billet — ainsi que des outils de gestion, de contrôle et d’analyse pour les organisateurs.

> **Statut :** prototype interactif alimenté par des données locales de démonstration. Aucun compte, paiement, billet valide ou service serveur n’est créé.

## Sommaire

- [Objectifs du projet](#objectifs-du-projet)
- [Expériences et fonctionnalités](#expériences-et-fonctionnalités)
- [Parcours de démonstration](#parcours-de-démonstration)
- [Technologies](#technologies)
- [Installation et lancement](#installation-et-lancement)
- [Commandes disponibles](#commandes-disponibles)
- [Organisation du code](#organisation-du-code)
- [Principes de conception](#principes-de-conception)
- [Données, vie privée et limites](#données-vie-privée-et-limites)
- [Améliorations réalisées](#améliorations-réalisées)
- [Pistes d’évolution](#pistes-dévolution)
- [Publication](#publication)
- [Dépannage](#dépannage)

## Objectifs du projet

Le défi consiste à concevoir une plateforme qui facilite la rencontre entre les participants, les événements et leurs organisateurs. L’interface conserve une identité commune — vert lime, vert profond et fonds clairs — tout en donnant à chaque espace une priorité différente : une découverte visuelle et conviviale côté public, une lecture claire et opérationnelle côté organisateur.

Le prototype privilégie des interactions montrables et compréhensibles plutôt qu’une accumulation d’écrans statiques. Les données d’exemple utilisent notamment le FCFA et des événements situés au Sénégal.

## Expériences et fonctionnalités

### Fodium — participant

- **Accueil immersif :** mise en avant d’événements, visuels éditoriaux, cartes en vedette et accès rapide à l’exploration.
- **Découverte :** recherche textuelle et filtres par ville, période, budget et tri ; sections de recommandations et d’événements populaires ou à venir.
- **Fodium AI Event Finder :** interprète certaines préférences écrites en langage naturel (ville, genre, budget et indication de week-end), rapproche la demande des événements de démonstration et explique brièvement les résultats. Le traitement est local et fondé sur des règles, sans modèle d’IA externe.
- **Carte de découverte :** représentation schématique d’événements fictifs par ville, avec lieux et prix indicatifs. Elle n’utilise ni GPS ni fournisseur cartographique.
- **Détail et réservation :** consultation d’un événement, choix entre billet seul et billet avec navette lorsqu’elle est proposée, sélection d’un point de départ et récapitulatif du montant.
- **Paiement de démonstration :** choix d’un moyen de paiement simulé et affichage d’une confirmation. Aucune transaction financière n’est effectuée.
- **Espace personnel :** favoris, billets confirmés dans le navigateur, historique, calendrier des sorties et export de calendrier au format `.ics`.
- **Billet numérique de démonstration :** informations de réservation, code graphique de type QR et animation de validation simulée. Le code visuel n’est pas un véritable QR scannable.
- **Join the Vibe :** partage d’un lien d’invitation pour proposer une sortie à des proches.

### Fodium Pro — organisateur

- **Accueil opérationnel :** activité récente, événement à venir, alertes et raccourcis vers les tâches courantes.
- **Dashboard analytique :** indicateurs, graphiques et insights de démonstration. Les contrôles de période et de catégorie actualisent les données affichées.
- **Création guidée :** formulaire en trois étapes, validation élémentaire des champs et aperçu mis à jour à partir des informations saisies. La création ajoute un événement à la session de démonstration.
- **Participants :** tableau avec recherche, filtre et export CSV des données fictives.
- **Contrôle d’accès :** formulaire de saisie et scénarios de billet valide, déjà utilisé ou inconnu. La caméra et un scanner matériel ne sont pas connectés.

### Fonctions partagées

- Interface adaptative pour ordinateur et mobile, avec navigation adaptée aux deux espaces.
- Mode clair et mode sombre.
- Choix de langue : français, anglais et wolof. La traduction est partielle et couvre les libellés prévus dans le prototype.
- Assistant conversationnel flottant à réponses guidées, sans service d’IA distant.
- Transitions et animations légères, avec prise en compte de la préférence système de réduction des animations.

## Parcours de démonstration

**Côté participant :** découvrir les événements → rechercher ou filtrer → ouvrir une fiche → choisir une formule → compléter le paiement simulé → consulter le billet et l’ajouter au calendrier.

**Côté organisateur :** ouvrir Fodium Pro → consulter l’activité → créer un événement de démonstration → rechercher ou exporter des participants → tester un scénario de contrôle → modifier les filtres analytiques.

Les raccourcis de navigation de l’interface permettent de passer d’un espace à l’autre. Les boutons ou modules indiqués comme « bientôt » servent de points d’entrée visuels et ne correspondent pas à des services opérationnels.

## Technologies

- **React 19** et **React DOM** pour monter l’application dans le navigateur.
- **Vite 6** pour le serveur de développement, la compilation et l’aperçu du build.
- **Tailwind CSS 4** avec son plugin Vite pour les utilitaires et tokens de base.
- **CSS** complémentaire pour l’identité visuelle, les composants, les adaptations responsive, le thème sombre et les animations.
- **JavaScript côté navigateur** pour l’état de démonstration, les filtres, les formulaires, les exports et les interactions.

Les événements et participants sont déclarés comme données de démonstration dans le code front-end. Le projet n’a pas de serveur API.

## Installation et lancement

### Prérequis

- Node.js **20.19 ou supérieur**, ou **22.12 ou supérieur**.
- npm, fourni avec Node.js.
- Une connexion Internet pour charger les photos distantes, Google Fonts et installer les dépendances si elles ne sont pas déjà présentes.

Dans le terminal intégré de VS Code, place-toi dans le dossier du projet :

```powershell
cd C:\foduimproject\outputs\fodium
```

Installe les dépendances puis démarre le serveur de développement :

```powershell
npm install
npm run dev
```

Vite affiche l’adresse locale à ouvrir. Elle est généralement **http://localhost:5173/**. Garde le terminal ouvert pendant que tu utilises l’application ; arrête le serveur avec `Ctrl+C`.

Si le dossier `node_modules` existe déjà et que l’installation est complète, tu peux directement lancer `npm run dev`.

## Commandes disponibles

| Commande | Utilité |
| --- | --- |
| `npm install` | Installe les dépendances déclarées dans `package.json`. |
| `npm run dev` | Lance le serveur Vite pour développer et consulter l’application. |
| `npm run build` | Compile le site optimisé dans le dossier `dist/`. |
| `npm run preview` | Sert localement le contenu compilé afin de le prévisualiser. À lancer après `npm run build`. |

## Organisation du code

```text
fodium/
├── index.html             # Document HTML, métadonnées et point de montage
├── src/
│   └── main.jsx           # Démarrage de React et chargement des feuilles de style
├── app.js                 # Données de démonstration, vues et interactions produit
├── tailwind.css           # Import Tailwind et tokens de base
├── style.css              # Styles de base de l’interface
├── enhancements.css       # Ajustements visuels complémentaires
├── experience.css         # Découverte, espace participant et Fodium Pro
├── motion.css             # Transitions et animations
├── vite.config.js         # Configuration du plugin Vite et de Tailwind
├── package.json           # Dépendances et scripts npm
└── dist/                  # Site compilé, généré par npm run build
```

L’interface utilise React comme point de montage. La logique historique des écrans et des interactions est centralisée dans `app.js` ; `src/main.jsx` convertit le rendu HTML généré en éléments React. Les styles sont séparés par rôle pour faciliter le repérage des règles visuelles. Pour une évolution de produit à long terme, une prochaine étape technique serait de découper progressivement les écrans en composants React dédiés et de séparer les données de démonstration de la logique d’interface.

## Principes de conception

- **Une marque, deux usages :** palette, typographies et ton communs ; densité et navigation adaptées au public ou à l’organisateur.
- **Découverte d’abord :** les visuels, la recherche et les filtres aident à trouver rapidement une sortie pertinente.
- **Prix compréhensible :** la formule et le total restent visibles pendant le choix du billet et de la navette.
- **Retour immédiat :** les filtres, favoris, formulaires, sélecteurs analytiques et actions de démonstration actualisent l’interface sans rechargement de page.
- **Responsive :** les mises en page et navigations s’adaptent aux écrans étroits ; les tableaux peuvent défiler horizontalement lorsque nécessaire.
- **Mouvement mesuré :** les animations accompagnent les transitions et les retours visuels, sans être au centre de chaque interaction.
- **Identité maîtrisée :** le vert lime et le vert foncé restent les couleurs principales. Un accent corail limité souligne quelques détails de l’expérience publique.

## Données, vie privée et limites

Ce projet est un prototype visuel et fonctionnel côté navigateur, pas une plateforme de vente prête à être mise en production.

- Pas de backend, d’authentification réelle, de base de données ou de synchronisation entre appareils.
- Pas de paiement réel, de connexion à Wave ou Orange Money, ni de traitement de données bancaires.
- Les achats, favoris, préférences de thème et de langue peuvent être conservés dans le stockage local du navigateur. Ils ne sont pas envoyés à un serveur et peuvent être supprimés en effaçant les données du site.
- Les données d’événement créées dans le formulaire et les résultats des simulations restent dans l’état de la page ; elles ne sont pas publiées ni partagées avec un organisateur.
- Les billets et codes QR sont fictifs ; ils ne peuvent pas servir à entrer à un événement réel.
- L’assistant et Event Finder utilisent des réponses et règles prédéfinies ; aucune conversation n’est envoyée à un fournisseur d’IA.
- Les images viennent d’Unsplash et les polices de Google Fonts. Leur chargement dépend d’Internet et des services tiers correspondants.
- Les modules de transport, les actions Pro signalées comme à venir, ainsi que la gestion avancée des dépenses, partenaires, stands, restauration, facturation et rapports ne sont pas intégrés.

## Améliorations réalisées

Par rapport à une maquette de billetterie classique, le prototype a été enrichi sur plusieurs axes :

1. **Identité et présentation :** accueil plus immersif, hiérarchie typographique affinée, cartes événement illustrées, responsive et accent corail utilisé avec retenue.
2. **Découverte :** recherche Event Finder, filtres combinables, recommandations et carte schématique des événements.
3. **Réservation :** formule billet/navette, choix du départ, récapitulatif et confirmation de paiement simulée.
4. **Expérience après achat :** espace participant avec favoris, historique, calendrier, billet graphique et invitation à partager.
5. **Organisation :** création guidée avec aperçu, gestion et export des participants, simulation de contrôle d’accès.
6. **Pilotage :** statistiques interactives par période et catégorie, et insights issus des données de démonstration.
7. **Confort :** thèmes clair/sombre, choix de langue, chatbot guidé, animations discrètes et préférences conservées localement.

## Pistes d’évolution

Pour transformer le prototype en produit exploitable, les améliorations suivantes seraient pertinentes :

- Concevoir une API sécurisée, une base de données et une authentification avec rôles participant / organisateur.
- Construire un vrai modèle de réservation avec disponibilité, confirmation serveur, annulation et journal d’activité.
- Intégrer un prestataire de paiement dans un environnement conforme, avec webhooks et gestion des erreurs de transaction.
- Émettre des billets signés avec QR réellement vérifiable, contrôle anti-doublon et fonctionnement hors ligne pour les équipes d’accueil.
- Connecter cartes, géolocalisation facultative, calendrier et notifications avec consentement explicite.
- Remplacer les simulations de l’assistant par un service approprié, tout en contrôlant les données transmises et en gardant les résultats ancrés dans le catalogue d’événements.
- Compléter les traductions et faire relire le wolof par des locuteurs compétents.
- Découper `app.js` en composants et modules de domaine, puis ajouter des tests unitaires et de parcours, des contrôles d’accessibilité et une validation multi-navigateurs.
- Optimiser et héberger les médias, ajouter des états de chargement/erreur et suivre les performances avant publication.

## Publication

Pour produire le site statique :

```bash
npm run build
```

Le contenu prêt à publier se trouve dans `dist/`. Le dossier généré peut être déployé sur un hébergeur statique compatible avec Vite. Si l’application est publiée sous un chemin autre que la racine du domaine, il faut configurer le chemin de base Vite avant la compilation. Toute plateforme d’hébergement utilisée comme application monopage doit aussi rediriger les chemins inconnus vers `index.html`.

Pour vérifier localement le résultat compilé :

```bash
npm run preview
```

## Dépannage

### `Cannot find module ... node_modules\vite\bin\vite.js`

Vite n’est pas installé dans ce dossier, ou l’installation des dépendances est incomplète. Dans le dossier contenant `package.json`, lance :

```powershell
npm install
npm run dev
```

### Le navigateur indique que le site est inaccessible

- Vérifie que le terminal affiche que Vite est prêt et que le processus tourne encore.
- Ouvre l’adresse exacte annoncée dans le terminal, généralement `http://localhost:5173/`.
- Si Vite choisit un autre port parce que 5173 est déjà utilisé, ouvre le port qu’il affiche.
- Ne saisis pas `http://[::]:8000/` : cette adresse IPv6 n’est pas l’adresse habituelle de Vite.

### Les changements n’apparaissent pas

Vérifie que VS Code a ouvert le bon dossier, sauvegarde le fichier, puis recharge la page. Le serveur Vite actualise normalement les changements enregistrés ; en cas de doute, arrête-le avec `Ctrl+C` et relance `npm run dev`.

---

Projet de challenge front-end Fodium / Fodium Pro. Les noms, événements, participants, chiffres et confirmations affichés sont des données fictives créées pour la démonstration.
