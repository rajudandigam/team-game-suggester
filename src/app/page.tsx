"use client";

import { useState } from "react";
import { getGameSuggestion } from "../app/lib/openai";

export default function Home() {
  const [players, setPlayers] = useState(4);
  const [mode, setMode] = useState("in-person");
  const [time, setTime] = useState(30);
  const [location, setLocation] = useState("indoor");
  const [suggestion, setSuggestion] = useState("");

  const handleSuggest = async () => {
    const game = await getGameSuggestion(players, mode, time, location);
    setSuggestion(game);
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold">Team Game Suggester</h1>
      <div className="my-4">
        <label>Number of Players:</label>
        <input
          type="number"
          value={players}
          onChange={(e) => setPlayers(+e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <div className="my-4">
        <label>Game Type:</label>
        <select
          value={mode}
          onChange={(e) => setMode(e.target.value)}
          className="border p-2 w-full"
        >
          <option value="in-person">In-Person</option>
          <option value="virtual">Virtual</option>
        </select>
      </div>
      <div className="my-4">
        <label>Time (in minutes):</label>
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(+e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <div className="my-4">
        <label>Location:</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <button onClick={handleSuggest} className="bg-blue-500 text-white p-2 rounded">
        Get Suggestion
      </button>
      {suggestion && <p className="mt-4 p-2 border">Suggested Game: {suggestion}</p>}
    </div>
  );
}