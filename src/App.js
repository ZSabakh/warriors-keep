import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header.jsx";
import Home from "./containers/home/Home.jsx";
import Resources from "./containers/resources/Resources";
import Contact from "./containers/contact/Contact";
import Projects from "./containers/projects/Projects";
import Project from "./containers/project/Project";
import ScrollToTop from "./utility/ScrollToTop";
import ScrollToTopButton from "./utility/ScrollToTopButton";
import About from "./containers/about/About";
import Faq from "./containers/faq/Faq";

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTopButton />
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/resources" component={Resources} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/projects" component={Projects} exact />
        <Route path="/projects/:id" component={Project} exact />
        <Route path="/about" component={About} exact />
        <Route path="/about/faq" component={Faq} exact />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
