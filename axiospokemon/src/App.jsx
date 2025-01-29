import { useState } from "react";
import axios from "axios";

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const fetchPokemon = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=807");
      const pokemonWithImages = response.data.results.map((pokemon, index) => ({
        name: pokemon.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
      }));
      setPokemonList(pokemonWithImages);
    } catch (err) {
      setError("Failed to fetch Pokémon data.");
    }
    setLoading(false);
  };

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentPokemon = pokemonList.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(pokemonList.length / itemsPerPage);

  const changePage = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Pokémon List</h1>
      <button onClick={fetchPokemon} style={{ padding: "10px", fontSize: "16px", cursor: "pointer" }}>
        Load Pokémon
      </button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {pokemonList.length > 0 && (
        <>
          <table border="1" style={{ margin: "20px auto", borderCollapse: "collapse", width: "100%" }}>
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {currentPokemon.map((pokemon, index) => (
                <tr key={index + firstIndex}>
                  <td>{index + firstIndex + 1}</td>
                  <td>
                    <img src={pokemon.image} alt={pokemon.name} width="100" height="100" />
                  </td>
                  <td>{pokemon.name}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ marginTop: "20px" }}>
          <button 
              onClick={() => changePage(1)} 
              disabled={currentPage === 1} 
              style={{ padding: "10px", margin: "5px", cursor: "pointer" }}
            >
              {"<<"} First page
            </button>
            <button 
              onClick={() => changePage(currentPage - 1)} 
              disabled={currentPage === 1} 
              style={{ padding: "10px", margin: "5px", cursor: "pointer" }}
            >
              {"<"} Previous
            </button>
            <span> Page {currentPage} of {totalPages} </span>
            <button 
              onClick={() => changePage(currentPage + 1)} 
              disabled={currentPage === totalPages} 
              style={{ padding: "10px", margin: "5px", cursor: "pointer" }}
            >
              Next {">"}
            </button>

            <button 
              onClick={() => changePage(currentPage + totalPages - currentPage)} 
              disabled={currentPage === totalPages} 
              style={{ padding: "10px", margin: "5px", cursor: "pointer" }}
            >
              Last Page {">>"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
