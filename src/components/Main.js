import React, { Component } from "react";
import Menu from "./Menu";
import DishDetail from "./DishDetail";
import Header from "./Header";
import Footer from "./Footer";
import { DISHES } from "../shared/dishes";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null // tracks the dish ID
    };
  }

  handleClick(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    return (
      <div>
        <Header />
        <Menu
          dishes={this.state.dishes}
          onClick={dishId => this.handleClick(dishId)}
        />
        <DishDetail
          dish={
            this.state.dishes.filter(
              dish => dish.id === this.state.selectedDish
            )[0]
          }
        />
        <Footer />
      </div>
    );
  }
}

export default Main;
