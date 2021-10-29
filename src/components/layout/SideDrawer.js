import React, { useState } from "react";

import "./SideDrawer.css";
import { CSSTransition } from "react-transition-group";
import CollectionList from "../collection/CollectionList";
import NewCollectionForm from "../collection/NewCollectionForm";

const dummyCollections = [
  {
    id: "c1",
    name: "school",
  },
  {
    id: "c2",
    name: "work",
  },
  {
    id: "c3",
    name: "personal",
  },
];

const SideDrawer = (props) => {
  const [isFormShown, setIsFormShown] = useState(false);
  const [inputText, setInputText] = useState("");
  const [collections, setCollections] = useState(dummyCollections);

  const toggleFormHandler = () => {
    setIsFormShown((prevState) => !prevState);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    const newCollection = { id: Math.random(), name: inputText };
    setCollections([...collections, newCollection]);
    setIsFormShown(false);
  };

  const inputChangeHandler = (event) => {
    setInputText(event.target.value);
  };

  return (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer">
        <div className="collection-add">
          <button className="collection-add-btn" onClick={toggleFormHandler}>
            +
          </button>
          <span className="collection-add-label">Add Collection</span>
          {isFormShown && (
            <NewCollectionForm
              onAddCollection={submitFormHandler}
              onInputChange={inputChangeHandler}
            />
          )}
        </div>
        <div className="collections">
          <h3>Collections</h3>
          <nav>
            <CollectionList collections={collections} />
          </nav>
        </div>
      </aside>
    </CSSTransition>
  );
};

export default SideDrawer;
