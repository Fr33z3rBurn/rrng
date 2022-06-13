import React from "react";
import { Image, Container, Row, Col, Button, Table } from "react-bootstrap";
import logo from "../img/RecipeD20.svg";
import "../css/homePage.css";
import Api from "../ApiCalls.js";

export default class HomePage extends React.Component {
  state = {
    recipe: null,
    ingredients: [],
  };

  getRandomRecipe = (e) => {
    Api.GetRandomRecipe().then((res) => {
      this.setupRecipe(res.meals[0]);
    });
  };

  setupRecipe = (meal) => {
    const ingredientsArray = [];
    for (let i = 1; i <= 20; i++) {
      if (meal["strIngredient" + i] !== "") {
        var ingredientSet = [
          {
            id: i,
            amount: meal["strMeasure" + i],
            ingredient: meal["strIngredient" + i],
          },
        ];
        ingredientsArray.push(ingredientSet);
      } else {
        // Stop if no more ingredients
        break;
      }
    }
    this.setState({ ingredients: ingredientsArray });
    this.setState({ recipe: meal });
  };

  render() {
    return (
      <Container>
        <Col className="col-12 justify-content-center">
          <Row className="row justify-content-center">
            <h1>Recipe RNG</h1>
          </Row>
          <Row className="row justify-content-center">
            {this.state.recipe === null && (
              <Image src={logo} className="HomePage-logo" />
            )}
          </Row>
          <Row className="row-6 justify-content-center">
            <Button onClick={() => this.getRandomRecipe()}>
              Give Me a Recipe!
            </Button>
          </Row>
        </Col>
        {this.state.recipe !== null && (
          <div>
            <h1>{this.state.recipe.strMeal}</h1>
            <h3>Category: {this.state.recipe.strCategory}</h3>
            <h3>Nationality: {this.state.recipe.strArea}</h3>
            <img
              src={this.state.recipe.strMealThumb}
              className="img-fluid shadow-4"
              alt="..."
            />
            <br></br>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Amount</th>
                  <th>Ingredient</th>
                </tr>
              </thead>
              <tbody>
                {this.state.ingredients.map((nested) =>
                  nested.map((element) => (
                    <tr key={element.id}>
                      <td>{element.amount}</td>
                      <td>{element.ingredient}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>

            <p>{this.state.recipe.strInstructions}</p>

            {this.state.recipe.strYoutube !== "" && (
              <iframe
                width="420"
                height="315"
                src={
                  "https://www.youtube.com/embed/" +
                  this.state.recipe.strYoutube.slice(-11)
                }
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="video"
              />
            )}
          </div>
        )}
      </Container>
    );
  }
}
