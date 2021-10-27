import React from "react";

import CollectionItem from "./CollectionItem";
import "./CollectionList.css";

const CollectionList = (props) => {
  return (
    <ul className="collection-list">
      {props.collections.map((collection) => (
        <CollectionItem key={collection.id} name={collection.name} />
      ))}
    </ul>
  );
};

export default CollectionList;
