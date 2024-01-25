import Header from '../header/Header';
import PokemonList from '../pokemonList/PokemonList';
import SelectedPokemon from '../selectedPokemon/SelectedPokemon';
import './App.css';

sessionStorage.setItem('API', 'https://pokeapi.co/api/v2/pokemon/?limit=12');

function App() {
	return (
		<div className="App">
			<Header></Header>
			<main className='main'>
				<PokemonList></PokemonList>
			</main>
			<div id='selectPokemon'>
				<SelectedPokemon></SelectedPokemon>
			</div>
		</div>
	);
}

export default App;
