import './App.css';
import PickUp from './component/pickup/pickup';
import Topics from './component/topics/topics';
import GameList from './component/gamesoft/gameList';

function App() {
  return (
    <div className = "App">
      <Topics></Topics>
      <PickUp></PickUp>
      <GameList></GameList>
    </div>
  );
}

export default App;
