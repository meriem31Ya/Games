import React, { useState, useEffect } from "react";
import GameCard from "./GameCard";
// import { games, getAllCategories } from "../data/games.js";
import { Search } from "lucide-react";
import { games } from "./data/games";

const GameGallery = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory] = useState("All");
  const [filteredGames, setFilteredGames] = useState(games);
  // const categories = getAllCategories();

  useEffect(() => {
    const filtered = games.filter((game) => {
      const matchesSearch = game.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesSearch;
    });

    setFilteredGames(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl game-title text-gray-800 mb-2">
          Game Collection
        </h1>
        <p className="text-gray-600">
          Découvrez les jeux réalisés par <b>The Bug Busters</b>.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search games..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 bg-white focus:ring-indigo-500 focus:border-transparent outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                selectedCategory === category
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div> */}
      </div>

      {filteredGames.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="bg-gray-100 p-4 rounded-full mb-4">
            <Search size={32} className="text-gray-400" />
          </div>
          <h3 className="text-xl game-title text-gray-800 mb-2">
            No games found
          </h3>
          <p className="text-gray-600 text-center">
            Try adjusting your search or category filters
          </p>
        </div>
      )}
    </div>
  );
};

export default GameGallery;
