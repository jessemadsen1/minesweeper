import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


    type CatProps = {
      breed: string,
      country: string,
      orign: string,
      coat: string,
      pattern: string,
    };

const CatCard = ({ breed, country, orign, coat, pattern }: CatProps) => {


  return (
    <p style={{ paddingTop: "1rem" }}>
      <div className="d-flex justify-content-center ">
        <p>
          <Card style={{ width: "18rem" }}>
            <div className="card text-center">
              <div className="card-header">{breed}</div>
              <div>country: {country}</div>
              <div>orign: {orign}</div>
              <div>coat: {coat}</div>
              <div>pattern: {pattern}</div>
            </div>
          </Card>
        </p>
      </div>
    </p>
  );
};

export default CatCard;