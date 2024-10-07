import './App.css';
import Character from './component/character.header';
import Support from './component/support.header';
import Cart from './component/cart.button';
import Serch from './component/serch.button';
import Login from './component/login.button';

function App() {
  return (
    <div className="App">
      <Character></Character>
      <Support></Support>
      <Cart></Cart>
      <Serch></Serch>
      <Login></Login>
    </div>
  );
}

export default App;
