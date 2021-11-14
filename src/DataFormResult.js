import React from "react";

export default function DataFormResult(props) {
  return (
    <div>
        <h2>E-mail: {props.email}</h2>
        <h2>Full Name: {props.name}</h2>
        <h2>
            Address: {props.address} {props.address2}
        </h2>
        <h2>City: {props.city}</h2>
        <h2>Province: {props.province}</h2>
        <h2>Postal Code: {props.postalCode}</h2>
    </div>
  );
}