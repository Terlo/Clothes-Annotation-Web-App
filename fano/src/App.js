
import './App.css';
import Navbar from './components/Navbar.js';
import {BrowserRouter, Route ,Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import SignIn from './components/SignIn';
import Register from './components/Register';
import  Test  from './components/Test';
import UploadFile from './components/AdminDashboard/UploadFile';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import Profile from './components/UserProfile';
import annotate from './components/annotate';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar />
      <Switch>
        <Route path='/signin' component ={SignIn} />
        <Route path='/register' component ={Register} />
        <Route path='/about' component ={About} />
        <Route path='/contact' component ={Contact} />
        <Route path='/dashboard' component ={AdminDashboard} />
        <Route path='/test' component ={Test} />
        <Route exact path='/' component ={Home} />
        <Route exact path='/uploadFile' component ={UploadFile} />
        <Route exact path='/adminDash' component ={AdminDashboard} />
        <Route exact path='/profile' component ={Profile} />
        <Route exact path='/annotate' component ={annotate} />
      </Switch>
      <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
