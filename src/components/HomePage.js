import React from "react";
import { Image, Container, Row, Col, Button } from "react-bootstrap";
import logo from "../img/RecipeD20.svg";
import "../css/homePage.css";
import Api from "../ApiCalls.js";

export default class HomePage extends React.Component {
  state = {
    recipe: null,
  };

  getRandomRecipe = (e) => {
    Api.GetRandomRecipe().then((res) => {
      this.setState({
        recipe: res,
      });
    });
  };

  render() {
    return (
      <Container>
        <Col className="col-12 justify-content-center">
          <Row className="row justify-content-center">
            <h1>Recipe RNG</h1>
          </Row>
          <Row className="row justify-content-center">
            <Image src={logo} className="HomePage-logo" />
          </Row>
          <Row className="row justify-content-center">
            <Button onClick={() => this.getRandomRecipe()}>
              Give Me a Recipe!
            </Button>
          </Row>
        </Col>
        {this.state.recipe !== null && (
          <div>
            <h1>{this.state.recipe.meals[0].strMeal}</h1>
          </div>
        )}
      </Container>
    );
  }
}
