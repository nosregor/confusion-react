import Contact from "./Contact";
import React, { Component } from "react";
import Menu from "./Menu";
// import DishDetail from "./DishDetail";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }

  // handleClick(dishId) {
  //   this.setState({ selectedDish: dishId });
  // }

  render() {
    // function component
    const HomePage = () => {
      return (
        <Home
          dish={this.state.dishes.filter(dish => dish.featured)[0]}
          promotion={this.state.promotions.filter(promo => promo.featured)[0]}
          leader={this.state.leaders.filter(leader => leader.featured)[0]}
        />
      );
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
          <Route exact path="/contactus" component={Contact} />} />
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
