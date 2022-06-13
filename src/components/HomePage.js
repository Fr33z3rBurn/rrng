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
      this.setState({
        recipe: res.meals[0],
      });
      //this.combineIngredients(this.state.recipe);
    });
  };

  combineIngredients = (meal) => {
    const ingredientsArray = [];
    for (let i = 1; i <= 20; i++) {
      if (this.state.recipe["strIngredient" + i]) {
        alert("here");
      } else {
        // Stop if no more ingredients
        break;
      }
    }
    this.setState(this.state.ingredients, ingredientsArray);
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
                {this.state.recipe.strIngredient1 !== "" && (
                  <tr>
                    <th>{this.state.recipe.strMeasure1}</th>
                    <th>{this.state.recipe.strIngredient1}</th>
                  </tr>
                )}
                {this.state.recipe.strIngredient2 !== "" && (
                  <tr>
                    <th>{this.state.recipe.strMeasure2}</th>
                    <th>{this.state.recipe.strIngredient2}</th>
                  </tr>
                )}
                {this.state.recipe.strIngredient3 !== "" && (
                  <tr>
                    <th>{this.state.recipe.strMeasure3}</th>
                    <th>{this.state.recipe.strIngredient3}</th>
                  </tr>
                )}
                {this.state.recipe.strIngredient4 !== "" && (
                  <tr>
                    <th>{this.state.recipe.strMeasure4}</th>
                    <th>{this.state.recipe.strIngredient4}</th>
                  </tr>
                )}
                {this.state.recipe.strIngredient5 !== "" && (
                  <tr>
                    <th>{this.state.recipe.strMeasure5}</th>
                    <th>{this.state.recipe.strIngredient5}</th>
                  </tr>
                )}
                {this.state.recipe.strIngredient6 !== "" && (
                  <tr>
                    <th>{this.state.recipe.strMeasure6}</th>
                    <th>{this.state.recipe.strIngredient6}</th>
                  </tr>
                )}
                {this.state.recipe.strIngredient7 !== "" && (
                  <tr>
                    <th>{this.state.recipe.strMeasure7}</th>
                    <th>{this.state.recipe.strIngredient7}</th>
                  </tr>
                )}
                {this.state.recipe.strIngredient8 !== "" && (
                  <tr>
                    <th>{this.state.recipe.strMeasure8}</th>
                    <th>{this.state.recipe.strIngredient8}</th>
                  </tr>
                )}
                {this.state.recipe.strIngredient9 !== "" && (
                  <tr>
                    <th>{this.state.recipe.strMeasure9}</th>
                    <th>{this.state.recipe.strIngredient9}</th>
                  </tr>
                )}
                {this.state.recipe.strIngredient10 !== "" && (
                  <tr>
                    <th>{this.state.recipe.strMeasure10}</th>
                    <th>{this.state.recipe.strIngredient10}</th>
                  </tr>
                )}
                {this.state.recipe.strIngredient11 !== "" && (
                  <tr>
                    <th>{this.state.recipe.strMeasure11}</th>
                    <th>{this.state.recipe.strIngredient11}</th>
                  </tr>
                )}
                {this.state.recipe.strIngredient12 !== "" && (
                  <tr>
                    <th>{this.state.recipe.strMeasure12}</th>
                    <th>{this.state.recipe.strIngredient12}</th>
                  </tr>
                )}
                {this.state.recipe.strIngredient13 !== "" && (
                  <tr>
                    <th>{this.state.recipe.strMeasure13}</th>
                    <th>{this.state.recipe.strIngredient13}</th>
                  </tr>
                )}
                {this.state.recipe.strIngredient14 !== "" && (
                  <tr>
                    <th>{this.state.recipe.strMeasure14}</th>
                    <th>{this.state.recipe.strIngredient14}</th>
                  </tr>
                )}
                {this.state.recipe.strIngredient15 !== "" && (
                  <tr>
                    <th>{this.state.recipe.strMeasure15}</th>
                    <th>{this.state.recipe.strIngredient15}</th>
                  </tr>
                )}
                {this.state.recipe.strIngredient16 !== "" && (
                  <tr>
                    <th>{this.state.recipe.strMeasure16}</th>
                    <th>{this.state.recipe.strIngredient16}</th>
                  </tr>
                )}
                {this.state.recipe.strIngredient17 !== "" && (
                  <tr>
                    <th>{this.state.recipe.strMeasure17}</th>
                    <th>{this.state.recipe.strIngredient17}</th>
                  </tr>
                )}
                {this.state.recipe.strIngredient18 !== "" && (
                  <tr>
                    <th>{this.state.recipe.strMeasure18}</th>
                    <th>{this.state.recipe.strIngredient18}</th>
                  </tr>
                )}
                {this.state.recipe.strIngredient19 !== "" && (
                  <tr>
                    <th>{this.state.recipe.strMeasure19}</th>
                    <th>{this.state.recipe.strIngredient19}</th>
                  </tr>
                )}
                {this.state.recipe.strIngredient20 !== "" && (
                  <tr>
                    <th>{this.state.recipe.strMeasure20}20</th>
                    <th>{this.state.recipe.strIngredient20}20</th>
                  </tr>
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
