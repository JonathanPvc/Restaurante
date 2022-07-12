import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './componentes/NavBar/NavBar';
import Sidebar from './componentes/Sidebar';
import Category from './pages/Category';
import TypeOfLine from './pages/TypeOfLine';
import Home from './pages/Home';
import './App.scss';


const App = () => {

  return (


    <Router>
      <NavBar />
      <div className='flex'>
        <Sidebar />
        <div className='content'>

          <Routes> <Route path='/home' exact={true} component={Home} /></Routes>
          <Routes> <Route path='/category' exact={true} component={Category} /></Routes>
          <Routes> <Route path='/typeofline' exact={true} component={TypeOfLine} /></Routes>

        </div>

      </div>

    </Router>





  );
}

export default App;