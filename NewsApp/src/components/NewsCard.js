import React from 'react';
import Indicator from '../components/Indicator';



function post (props) {
  return (
    <div className="card-deck">
      <div className="card">

        <img width="350" height="350" className="card-img-top" src={props.img} alt=""/>

        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text"> {props.description} </p>
        </div>

        <Indicator indicator={props.random_indicator} url={props.url} />

        <div className="card-footer">
          <small className="text-center text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  );

}


export default post;
