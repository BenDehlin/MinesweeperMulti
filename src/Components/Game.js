import React, { useEffect, useState } from "react"
import axios from "axios"

const Game = props => {
  const { initialBoard, setInitialBoard } = useState({})
  useEffect(() => {
    //get initial board state from server
    axios
      .get("/api/board")
      .then(results => {
        setInitialBoard(results.data)
      })
      .catch(err => console.log(err))
  }, [])
  return <div>Display Header Here Display Board Here</div>
}

export default Game
