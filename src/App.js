import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routing } from './Routing/Routing';
import { Provider } from 'react-redux';
import { store } from './Store/StoreCofigur';

function App() {
  return (
    <>
      <BrowserRouter>
      <Provider store={store}>
      <Routing/>
      </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
