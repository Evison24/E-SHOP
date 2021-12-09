import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";

import Card from "react-bootstrap/Card";
import MEN from "./images/MEN.jpg";
import WOMEN from "./images/WOMEN.jpg";
import CHILDREN from "./images/CHILDREN.jpg";
import Footer from "./components/Footer";

import "./scss/custom.scss";

function App() {
  return (
    <div className="container">
      <NavBar />
      <a href="#">
        <Container className="categories-container">
          <Card className="bg-dark text-white">
            <Card.Img src={MEN} alt="Card image" />
          </Card>
        </Container>
      </a>
      <a href="#">
        <Container className="categories-container">
          <Card className="bg-dark text-white">
            <Card.Img src={WOMEN} alt="Card image" />
          </Card>
        </Container>
      </a>
      <a href="#">
        <Container className="categories-container">
          <Card className="bg-dark text-white">
            <Card.Img src={CHILDREN} alt="Card image" />
          </Card>
        </Container>
      </a>

      <Footer />
    </div>
  );
}

export default App;
