import Home  from './pages/home/Home';
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import {BasicForm} from './pages/signup/BasicForm'
import { useAuthContext } from './hooks/useAuthContext';
import {BrowserRouter, Route, Switch,Redirect} from 'react-router-dom'
import Navbar from './components/Navbar';

function App() {
  const {user,authIsReady} = useAuthContext();
  return (
    <>
      {authIsReady && 
    
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            {user && <Home />}
            {!user && <Redirect to ="/login" />}
          </Route>
          <Route  path="/login">
          {user && <Redirect to ="/"/>}
          {!user && <Login />}
          
          </Route>
          <Route  path="/signup">
          {user && <Redirect to ="/"/>}
          {!user &&  <Signup />}
           
          </Route>
          <Route path ="/basicform">
              <BasicForm />
          </Route>
          
        </Switch>
      </BrowserRouter>
     
    </div>
      }</>
  );
}

export default App;
