
import './App.css';
import Navbar from './components/Navbar.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import SignIn from './components/SignIn';
import Register from './components/Register';
import UploadFile from './components/AdminDashboard/UploadFile';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import annotate from './components/annotate';
import terms from './components/terms';
import PrivacyPolicy from './components/PrivacyPolicy';




function App() {
  return (
    [
      <header></header>,
    <main>
      <BrowserRouter>
        <div className="App">
        <Navbar />
        <Switch>
          <Route path='/signin' component={SignIn} />
          <Route path='/register' component={Register} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/dashboard' component={AdminDashboard} />
          <Route exact path='/' component={Home} />
          <Route exact path='/uploadFile' component={UploadFile} />
          <Route exact path='/adminDash' component={AdminDashboard} />
          <Route exact path='/annotate' component ={annotate} />
          <Route exact path='/terms' component ={terms} />
          <Route exact path='/policy' component ={PrivacyPolicy} />
          
        </Switch>
      </div>
      </BrowserRouter>
      </main >,
    <footer className="page-footer grey darken-4">
      <Footer />
    </footer>
    ]
  );
}

export default App;
