import './App.css';
import Software from './component/device/softwareList';
import Smartphone from './component/device/smartphonList';
import Schedule from './component/device/ReleaseSchedule';
import Sale from './component/device/softwareSale';

function App() {
  return (
    <div className = "App">
      <Software></Software>
      <Smartphone></Smartphone>
      <Schedule></Schedule>
      <Sale></Sale>
    </div>
  );
}

export default App;
