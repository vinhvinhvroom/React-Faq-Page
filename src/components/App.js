import React, { useState } from 'react';
import QuestionTile from "./QuestionTile"

const App = (props) => {
  const data = props.data

  const[toggleId, setToggleId] = useState(null)

  const tile = data.map((tile) => {

    const setToggleIdClosure = () => {
      if (toggleId === tile.id){
        setToggleId(null)
      } else {
        setToggleId(tile.id)
      }
    }

    let selectState = false
    let button =
    <div className="questionBlock">
      <button className="buttonFalse" onClick={setToggleIdClosure} type="button" data-toggle="example-dropdown2">+</button>
      <span className="questionBox">{tile.question}</span>
    </div>

    if(toggleId === tile.id){
      selectState = true
      button =
            <div className="questionBlock">
              <button onClick={setToggleIdClosure} className="buttonTrue" type="button" data-toggle="example-dropdown2">-</button>
              <span className="questionBox">{tile.question}</span>
              <br />
              <div className="answerBox">{tile.answer}</div>
            </div>
    } else {
      selectState = false
    }

    return(
      <QuestionTile
        key={tile.id}
        question={tile.question}
        answer={tile.answer}
        button={button}
        selectState={selectState}
      />
    )
  })

  return(
    <div>
      <h1 className="text-center">We're Here to Help</h1>
      <div className="button-section">
      {tile}
      <br/>
      </div>
    </div>
  )
}

export default App;
