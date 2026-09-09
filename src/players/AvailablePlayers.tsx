import type { Dispatch, SetStateAction } from "react";
import type { PlayerType } from "../type";
import PlayerCards from "./PlayerCards";
export interface AvailablePlayersProps {
  players: PlayerType[],
   coins:number,setCoins:Dispatch<SetStateAction<Number>>;
}

const AvailablePlayers = ({players,coins,setCoins}: AvailablePlayersProps) => {
      
  return (
  <div className="grid md:grid-cols-4 grid-cols-1 gap-2.5">
    {
   players.map((player,index)=><PlayerCards key={index} player={player} coins={coins} setCoins={setCoins}></PlayerCards>)
    }
  </div>
  )
}

export default AvailablePlayers;