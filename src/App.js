import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header.jsx";
import Home from "./containers/home/Home.jsx";
import Resources from "./containers/resources/Resources";
import Contact from "./containers/contact/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/resources" component={Resources} exact />
        <Route path="/contact" component={Contact} exact />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
