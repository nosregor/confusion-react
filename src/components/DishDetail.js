import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderDish({ dish }) {
  return (
    <div className="col-12 col-md-5 m-1">
      <Card key={dish.id}>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function RenderComments({ comments }) {
  return (
    <div className="col-12 col-md-5 m-1">
      <h4>Comments</h4>
      {comments.map(comment => {
        return (
          <div key={comment.id}>
            <p>{comment.comment}</p>
            <p>{`-- ${comment.author} , ${new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit"
            }).format(new Date(Date.parse(comment.date)))}`}</p>
          </div>
        );
      })}
    </div>
  );
}

const DishDetail = props => {
  if (props.dish === null || props.dish === undefined) {
    return <div />;
  }

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.dish.name}</h3>
          <hr />
        </div>
      </div>

      <div className="row">
        <RenderDish dish={props.dish} />
        <RenderComments comments={props.comments} />
      </div>
    </div>
  );
};

export default DishDetail;
