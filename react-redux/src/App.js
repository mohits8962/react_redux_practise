import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import UserContainer from './components/UserContainer';
// import ItemContainer from './components/ItemContainer';
// import NewCakeContainer from './components/NewCakeContainer';
// import IceCreamContainer from './components/IceCreamContainer';
// import HooksIceCreamContainer from './components/HooksIceCreamContainer';
// import CakeContainer from './components/CakeContainer';
// import HooksCakeContainer from './components/HooksCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer /> */}
        {/* <HooksCakeContainer/> */}
        {/* <HooksIceCreamContainer/> */}
        {/* <IceCreamContainer/> */}
        {/* <NewCakeContainer/> */}
        {/* <ItemContainer cake/> */}
        {/* <ItemContainer iceCream/> */}
        <UserContainer/>
      </div>
    </Provider>
  );
}

export default App;
