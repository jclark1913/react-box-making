import 'Box.css';

function Box({ boxData, removeBox }) {

  // Returns:
  // A single box w/ set color, w/h, and remove button

  return (
    <div className="Box">
      <div
        style={`width: ${boxData.width}; height: ${boxData.height}; color: ${boxData.color}`}
      >
      </div >
      <button className="remove-Box" onClick={removeBox}>Remove</button>
    </div>
  );

}

export default Box;