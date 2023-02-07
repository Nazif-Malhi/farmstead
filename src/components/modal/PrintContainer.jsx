import React from "react";

const PrintContainer = React.forwardRef((props, ref) => {
    return (
      <div ref={ref}>
        <label>Crop Name: </label><label>{props.element[0]}</label><br/>
        <label>Created at </label><label>{props.element[1]}</label><br/>
        <label>Status: </label><label>{props.element[2]}</label><br/>
      </div>
    );
  });
export default PrintContainer;