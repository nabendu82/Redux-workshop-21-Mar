import { Provider } from 'react-redux';
import './App.css';
import EggContainer from './components/EggContainer';
import HooksChickenContainer from './components/HooksChickenContainer';
import HooksEggContainer from './components/HooksEggContainer';
import ItemContainer from './components/ItemContainer';
import NewEggContainer from './components/NewEggContainer';
import UserContainer from './components/UserContainer';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ItemContainer egg />
        <ItemContainer />
        <EggContainer />
        <HooksEggContainer />
        <HooksChickenContainer />
        <NewEggContainer />
        <UserContainer />
      </Provider>
    </div>
  );
}

export default App;
