import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderMenuItem({ dish, onClick }) {
  return (
    <Card>
      <Link to={`/menu/${dish.id}`}>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return (
      <div className="col-12 col-md-5 m-1" key={dish.id}>
        <RenderMenuItem dish={dish} onClick={props.onClick} />
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
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Menu</h3>
          <hr />
        </div>
      </div>
      <div className="row">{menu}</div>
    </div>
  );
};

export default Menu;

// import React, { Component } from "react";
// import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle  } from "reactstrap";
// import DishDetail from './DishDetailComponent';

// class Menu extends Component{

//     constructor(props){
//         super(props);

//         // stores iproperties of this component
//         this.state = {
//             selectedDish: null
//         };

//         console.log('Menu component constructed');

//     }

//     onDishSelect(dish){

//         this.setState({
//             selectedDish: dish
//         });

//     }

//     render(){
//         console.log('renders menu component');

//         const menu = this.props.dishes.map((dish) => {
//             return (
//                 <div key={ dish.id } className="col-12 col-md-5 m-1">
//                     <Card onClick={ () => this.onDishSelect( dish ) } >

//                         <CardImg width="100%" src={ dish.image } alt={ dish.name } />
//                         <CardImgOverlay>
//                             <CardTitle> { dish.name }</CardTitle>
//                         </CardImgOverlay>
//                     </Card>
//                 </div>
//             );
//         });

//         return(
//             <div className="container">
//                 <div className="row">
//                     { menu }
//                 </div>

//                 <DishDetail dish={this.state.selectedDish} />

//             </div>
//         );
//     }

//     componentDidMount(){
//         console.log('Menu component componentDidMounbt is invoked');

//     }
// }

// export default Menu;
