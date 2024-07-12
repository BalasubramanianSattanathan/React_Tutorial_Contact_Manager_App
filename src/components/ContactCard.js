import React from "react";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, name, email, phNumber } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
        <div>{phNumber}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.delClickHander(id)}
      ></i>
      <i
        className="edit alternate outline icon"
        style={{ color: "green", marginTop: "7px", marginRight: "7px" }}
        onClick={() => props.editClickHander(id)}
      ></i>
    </div>
  );
};

export default ContactCard;
