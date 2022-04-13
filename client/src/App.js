import Home  from './pages/home/Home';
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import {BasicForm} from './pages/signup/BasicForm'
import { useAuthContext } from './hooks/useAuthContext';
import {BrowserRouter, Route, Switch,Redirect} from 'react-router-dom'
import Navbar from './components/Navbar';
import Create from './pages/create/Create';

function App() {
  const {isPending,user,authIsReady} = useAuthContext();
  console.log("isPending",isPending);

  return (
    <>
      {authIsReady && 
    
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            {user  && <Home />}
            {/* {user  && !isPending && <Redirect to="/BasicForm" />} */}
            {!user && <Redirect to ="/login" />}
          </Route>
          <Route  path="/login">
          {user && isPending &&  <Redirect to ="/"/>}
          {user && !isPending && <Redirect to = "/basicform" />}
          {!user && <Login />}
          
          </Route>
          <Route  path="/signup">
          {user  && !isPending && <Redirect to ="/basicform"/>}
          {user  && isPending && <Redirect to ="/" />}
          {!user &&  <Signup />}
           
          </Route>
          <Route path ="/basicform">
          {!user && <Redirect to ="login" />}
          {(user && !isPending) && <BasicForm />}
          {user  && isPending &&  <Redirect to="/" />}
          
              
          </Route>
          <Route to="/create">
            <Create />
          </Route>
          
        </Switch>
      </BrowserRouter>
     
    </div>
      }</>
  );
}

export default App;
