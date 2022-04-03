import './App.scss';
import { Card } from './components/Card/Card';
import { Text } from './components/Text/Text'
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Text/>
      <Card/>
    </div>
  );
}

export default App;
