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
  const [count,setCount]=useState(0)
  const handleButtonType=(type:"available"|"selected"):void=>{
            setButtonType(type)
           
  }
  

  return (
    <div className="md:container md:mx-auto md:py-16 px-5 py-10 ">
      <div className="grid grid-cols-2 justify-between items-center my-5 ">
        <h2 className="font-bold font-mono md:text-3xl text-[18px]">{buttonType==="available"?"Available Players":"Selected Players"}</h2>
        <div className="flex justify-end" >
          <button onClick={()=>handleButtonType("available")} className={`btn  ${buttonType==="available"?"btn-warning rounded-none":"rounded-none"}`}>Available</button>
          <button onClick={()=>handleButtonType("selected")} className={`btn  ${buttonType==="selected"?"btn-warning rounded-none":"rounded-none"}`}>Selected({count})</button>
        </div>
      </div>
     {buttonType==="available"? <AvailablePlayers players={players} coins={coins} setCoins={setCoins} selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} count={count} setCount={setCount}> 

     </AvailablePlayers>:<SelectedPlayers count={count} setCount={setCount} coins={coins} setCoins={setCoins} selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer}  ></SelectedPlayers>}
    
    </div>
  )
}

export default Players;
