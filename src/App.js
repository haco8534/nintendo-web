import './App.css';
import PickUp from './component/pickup/pickup';
import Topics from './component/topics/topics';
import GameList from './component/gamesoft/gameList';
import Device from './component/device/list';

function App() {
  return (
    <div className = "App">
      <Topics></Topics>
      <PickUp></PickUp>
      <GameList></GameList>
      <Device></Device>
    </div>
    )
}
export default App;
