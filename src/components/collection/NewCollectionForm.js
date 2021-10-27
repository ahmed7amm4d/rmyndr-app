import React from "react";

import "./NewCollectionForm.css";

const NewCollectionForm = (props) => {
  return (
    <form className="drawer-form" onSubmit={props.onAddCollection}>
      <input
        className="drawer-form-input"
        type="text"
        onChange={props.onInputChange}
      />
      <button className="drawer-form-button">Add</button>
    </form>
  );
};

export default NewCollectionForm;
