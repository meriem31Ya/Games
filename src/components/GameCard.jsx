import React from "react";
import { ExternalLink } from "lucide-react";

const GameCard = ({ game }) => {
  return (
    <div className="group overflow-hidden rounded-lg shadow-md bg-white transition-all duration-300 hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <img
          src={game.imageUrl}
          alt={game.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <a
            href={game.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white m-3 px-3 py-1 bg-indigo-600 rounded-full flex items-center gap-1 text-sm hover:bg-indigo-700 transition-colors"
          >
            Jouer <ExternalLink size={14} />
          </a>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl game-title text-gray-800 mb-2">{game.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">
          {game.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
            {game.category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
