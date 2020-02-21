import React from 'react';
import { Media, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';

function RenderMenuItem({ dish, deleteFavorite }) {
  return (
    <Media tag="li">
      <Media left middle>
        <Media object src={baseUrl + dish.image} alt={dish.name} />
      </Media>
      <Media body className="ml-5">
        <Media heading>{dish.name}</Media>
        <p>{dish.description}</p>
        <Button outline color="danger" onClick={() => deleteFavorite(dish._id)}>
          <span className="fa fa-times"></span>
        </Button>
      </Media>
    </Media>
  );
}

const Favorites = props => {
  console.log('IM HERE');
  console.log(props.favorites);
  if (props.favorites.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.favorites.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.favorites.errMess}</h4>
        </div>
      </div>
    );
  } else if (!isEmpty(props.favorites.favorites)) {
    console.log('1. isFavoritesEmpty?', isEmpty(props.favorites.favorites));
    console.log('2. isDishesEmpty?', isEmpty(props.favorites.favorites.dishes));
    console.log('3. props.favorites', props.favorites);

    const favorites = props.favorites.favorites.dishes.map(dish => {
      return (
        <div key={dish._id} className="col-12 mt-5">
          <RenderMenuItem dish={dish} deleteFavorite={props.deleteFavorite} />
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>My Favorites</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>My Favorites</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <Media list>{favorites}</Media>
        </div>
      </div>
    );
  } else {
    console.log('1. isFavoritesEmpty?', isEmpty(props.favorites.favorites));
    console.log('2. Favorite:', props.favorites);

    return (
      <div className="container">
        <div className="row">
          <h4>You have no favorites</h4>
        </div>
      </div>
    );
  }
};

function isEmpty(value) {
  return (
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
  );
}

export default Favorites;
