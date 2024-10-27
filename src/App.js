import './App.css';
import List from './component/device/list';
import Schedule from './component/device/schedule';
import style from './styles/device/Schedule.module.css';

function App() {
  return (
    <div className="App">
      <div className={style.List}>
        <List></List>
        <Schedule></Schedule>
      </div>
    </div>
  );
}

export default App;
