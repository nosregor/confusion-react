import React, { Component } from "react";
import Menu from "./Menu";
// import DishDetail from "./DishDetail";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import { DISHES } from "../shared/dishes";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  // handleClick(dishId) {
  //   this.setState({ selectedDish: dishId });
  // }

  render() {
    // function component
    const HomePage = () => {
      return <Home />;
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Redirect to="/home" />
        </Switch>
        {/* <Menu
          dishes={this.state.dishes}
          onClick={dishId => this.handleClick(dishId)}
        /> */}
        {/* <DishDetail
          dish={
            this.state.dishes.filter(
              dish => dish.id === this.state.selectedDish
            )[0]
          } */}
        {/* /> */}
        <Footer />
      </div>
    );
  }
}

export default Main;
