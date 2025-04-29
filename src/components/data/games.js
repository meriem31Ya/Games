export const games = [
  {
    id: "1",
    name: "POUET-POUET-MEMORY",
    description:
      "Écoute, regarde, retiens… et reproduis la bonne séquence sans te tromper ",
    imageUrl: "steve.png",
    link: "https://pouet-pouet-memory.netlify.app/",
    category: "Stéve, Halime et George",
  },
  {
    id: "2",
    name: "Mem'Ori",
    description:
      " il faudra mémoriser celle-ci pendant 10 secondes, ensuite  il faudra cliquer sur les cases où se trouvaient les numéros.",
    imageUrl: "maxime.png",
    link: "https://imaginative-sorbet-425787.netlify.app/memori",
    category: "Maxime et Ihsan",
  },
  {
    id: "3",
    name: "Spider Shot",
    description:
      "Spider Shot est un jeu de précision où les joueurs doivent tirer sur des cibles mouvantes le plus rapidement possible. Le jeu met à l'épreuve vos réflexes et votre précision dans différents niveaux de difficulté.",

    imageUrl: "david.png",
    link: "https://spider-shot-d3e4e0.gitlab.io/.",
    category: "David",
  },
  {
    id: "4",
    name: "Les dents de l'amour ",
    description:
      "Ils s’aimaient… jusqu’à ce qu’elle transforme son ex en snack. Entrez dans l’univers sanglant des disputes conjugales immortelles. À coups de griffes, de sarcasmes et de pieux dans le cœur, qui survivra à ce ménage infernal ?.",
    imageUrl: "margo.png",
    link: "https://video-game-fdf9d6.gitlab.io/",
    category: "Margo et Arthur",
  },
  {
    id: "5",
    name: "GridFront",
    description:
      "GridFront est un jeu au tour par tour dans lequel vous contrôlez trois héros pour tenter de vaincre les forces du mal qui rôdent dans les terres. Faites attention à vos points de vie, car il n'y a aucun moyen de les récupérer, et les ennemis ripostent lorsqu'ils sont attaqués !",
    imageUrl: "antoine.png",
    link: "https://gridfront-fa2c4d.gitlab.io/",
    category: "Antoine et Alexandre",
  },
  {
    id: "6",
    name: "Space shooter",
    description: "Esquiver les astéroides et avoir le meilleur score.",
    imageUrl: "quentin.png",
    link: "https://space-shooter-brief-5-b2c493.gitlab.io/",
    category: "Ahmed et Quentin",
  },
  {
    id: "7",
    name: "Jan-Ken-HEX",
    description:
      "Jan-Ken-HEX est un jeu de stratégie pour deux joueurs, sur la base du pierre-feuille-ciseaux.",
    imageUrl: "guillaume.png",
    link: "https://jan-ken-hex.netlify.app/",
    category: "Guillame et Feras",
  },
];

export const getAllCategories = () => {
  const categories = games.map((game) => game.category);
  return ["All", ...Array.from(new Set(categories))];
};
