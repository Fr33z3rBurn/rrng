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
          <br></br>
          <Row className="row justify-content-center">
            {this.state.recipe === null && (
              <Image src={logo} className="HomePage-logo" />
            )}
          </Row>
          <Row className="row justify-content-center">
            {this.state.recipe === null && (
              <Button onClick={() => this.getRandomRecipe()}>
                Give Me A Recipe!
              </Button>
            )}
          </Row>
        </Col>
        {this.state.recipe !== null && (
          <div>
            <Row>
              <Col className="col-5">
                <img
                  src={this.state.recipe.strMealThumb}
                  className="img-fluid shadow-4"
                  alt="..."
                />
                <p>
                  <strong>Category:</strong> {this.state.recipe.strCategory}
                </p>
                <p>
                  <strong>Nationality:</strong> {this.state.recipe.strArea}
                </p>
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
              </Col>
              <Col className="col-7">
                <h1>{this.state.recipe.strMeal}</h1>
                <p>{this.state.recipe.strInstructions}</p>
                {this.state.recipe.strYoutube !== "" && (
                  <div
                    className="video"
                    style={{
                      position: "relative",
                      paddingBottom: "56.25%" /* 16:9 */,
                      paddingTop: 25,
                      height: 0,
                    }}
                  >
                    <iframe
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                      }}
                      src={
                        "https://www.youtube.com/embed/" +
                        this.state.recipe.strYoutube.slice(-11)
                      }
                      frameBorder="0"
                    />
                  </div>
                )}
                <br></br>
                <Button onClick={() => this.getRandomRecipe()}>
                  Give Me A Recipe!
                </Button>
              </Col>
            </Row>
          </div>
        )}
      </Container>
    );
  }
}
