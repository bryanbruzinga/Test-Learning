import { useState } from "react";
import Dropdown from "./components/Dropdown/Dropdown";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState("");

  return (
    <div>
      {selectedPokemon && <div>Seu Pokemon: {selectedPokemon}</div>}
      <Dropdown
        title="Selecione o Pokemon inicial"
        options={["Bulbassauro", "Charmander", "Squirtle"]}
        onSelect={setSelectedPokemon}
      />
    </div>
  );
}

export default App;
