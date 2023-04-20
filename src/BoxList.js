import 'BoxList.css';
import Box from './Box';
import React, { useState } from "react";
import { v4 as uuid } from 'uuid';


function BoxList() {
  const [boxes, setBoxes] = useState([]);


  // Render boxes
    // Map thru boxes and create box component



  // Add box
    // use setBoxes to add box data from form to boxes array
    // uuid
  function addBox(box) {
    let newBox = {...box, id: uuid()};
    setBoxes(boxes => [...boxes, newBox]);
  }

  // Remove

  // Returns:
    // Box form
    // Map thru boxes to make box components

}