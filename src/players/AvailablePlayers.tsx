import type { Dispatch, SetStateAction } from "react";
import type { PlayerType } from "../type";
import PlayerCards from "./PlayerCards";
export interface AvailablePlayersProps {
  players: PlayerType[],
   coins:number,setCoins:Dispatch<SetStateAction<number>>;
   selectedPlayer:PlayerType[],
   setSelectedPlayer:Dispatch<SetStateAction<PlayerType[]>>
   count:number,setCount:Dispatch<SetStateAction<number>>
}

const AvailablePlayers = ({players,count,setCount,coins,setCoins,selectedPlayer,setSelectedPlayer}: AvailablePlayersProps) => {
      
  return (
  <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-2.5">
    {
   players.map((player,index)=><PlayerCards selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} key={index} player={player} coins={coins} setCoins={setCoins} count={count} setCount={setCount} ></PlayerCards>)
    }
  </div>
  )
}

export default AvailablePlayers;