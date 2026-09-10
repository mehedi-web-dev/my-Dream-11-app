import { use, useState, type Dispatch, type SetStateAction, } from "react";
import type { PlayerType } from "../type";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

export interface PlayersProps {
 playerPromise: Promise<PlayerType[]>
 coins:number,setCoins:Dispatch<SetStateAction<number>>;
}

const Players = ({playerPromise,coins,setCoins}: PlayersProps) => {
  const players=use(playerPromise)
  const [buttonType,setButtonType]=useState("available")
  const [selectedPlayer, setSelectedPlayer] = useState<PlayerType[]>([]);
  const handleButtonType=(type:"available"|"selected"):void=>{
            setButtonType(type)
  }
  
  return (
    <div className="md:container mx-auto md:py-16 px-5 py-10 ">
      <div className="flex justify-between items-center my-5 ">
        <h2 className="font-bold font-mono md:text-3xl text-[20px]">{buttonType==="available"?"Available Players":"Selected Players"}</h2>
        <div>
          <button onClick={()=>handleButtonType("available")} className={`btn  ${buttonType==="available"?"btn-warning":""}`}>Available</button>
          <button onClick={()=>handleButtonType("selected")} className={`btn  ${buttonType==="selected"?"btn-warning":""}`}>Selected</button>
        </div>
      </div>
     {buttonType==="available"? <AvailablePlayers players={players} coins={coins} setCoins={setCoins} selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer}>

     </AvailablePlayers>:<SelectedPlayers coins={coins} setCoins={setCoins} selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer}  ></SelectedPlayers>}
    
    </div>
  )
}

export default Players;
