import { BrowserRouter , Route,Routes} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Userlisting from './components/Userlisting';
import Adduser from './components/Adduser';
import Updateuser from './components/Updateuser';
import View from './components/View';
import { Provider } from 'react-redux';
import Store from './redux/Store';
function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/user' element={<Userlisting/>}/>
        <Route path='/user/add' element={<Adduser/>}/>
        <Route path='/user/edit/:id' element={<Updateuser/>}/>
        <Route path='/user/view/:id' element={<View/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
