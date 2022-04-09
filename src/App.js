import React from 'react';
import './App.css';

const board = [
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1]
]

class App extends React.Component {

  state = {
    possibleCoordinates: []
  }

  chessKnight = (cell) => {
    var possibleCoordinates = [];
    var cellX = cell[0]; 
    var cellY = cell[1]; 

    var cellXpositions = [cellX + 2, cellX - 2, cellX + 1, cellX - 1].filter(function (cellPosition) {
      return (cellPosition >= 0 && cellPosition < 9);
    })

    var cellYpositions = [cellY + 2, cellY - 2, cellY + 1, cellY - 1].filter(function (cellPosition) {
      return (cellPosition >= 0 && cellPosition < 9);
    })

    for (var i = 0; i < cellXpositions.length; i++) {
      for (var j = 0; j < cellYpositions.length; j++) {
        if (Math.abs(cellX - cellXpositions[i]) + Math.abs(cellY - cellYpositions[j]) === 3) {
          console.log('This is a valid coordinate: ', [cellXpositions[i], cellYpositions[j]]);
          if (!possibleCoordinates.includes([cellXpositions[i], cellYpositions[j]])) {
            possibleCoordinates.push([cellXpositions[i], cellYpositions[j]]);
          }
        }
      }
    }
    console.log('Possible Coordinates:', possibleCoordinates);
    this.setState({ possibleCoordinates: possibleCoordinates });
    console.log('Possible Moves:', possibleCoordinates.length);
  }

  render() {
    return (
      <div>
        <div className="App">
          {
            board.map((item, index) => {
              return (
                <div className='row' >
                  {
                    item.map((item_1, index_1) => {
                      if (findinarray([index, index_1], this.state.possibleCoordinates)) {
                        return (
                          <div className='tile-selected' ></div>
                        )
                      }
                      else if (item_1 === 0) {
                        return (
                          <div onClick={() => { this.chessKnight([index, index_1]) }} className='tile' ></div>
                        )
                      }
                      else {
                        return (
                          <div onClick={() => { this.chessKnight([index, index_1]) }} className='tile' style={{ backgroundColor: "white" }} ></div>
                        )
                      }
                    })
                  }
                </div>
              )
            })
          }
        </div>
        <div>
          <b>Instructions : </b> Click on the board to see the valid moves of knight from the clicked position.
        </div>
      </div>
    );
  }
}

export default App;


function findinarray(cord, arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][0] === cord[0] && arr[i][1] === cord[1]) {
      return true;
    }
  }
  return false;
}
