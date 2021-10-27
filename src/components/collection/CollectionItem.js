import React from "react";
import { NavLink } from "react-router-dom";

import "./CollectionItem.css";
import { TiThLarge } from "react-icons/ti";

const CollectionItem = (props) => {
  return (
    <li className="collection-item">
      <NavLink
        activeClassName="collection-item-active"
        className="collection-item-link"
        to={`/${props.name}`}
      >
        <TiThLarge className="collection-item-link-svg" />
        <span className="collection-item-link-text">{props.name}</span>
      </NavLink>
    </li>
  );
};

export default CollectionItem;
