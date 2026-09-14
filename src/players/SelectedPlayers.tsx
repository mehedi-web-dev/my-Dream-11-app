import type { Dispatch, SetStateAction } from "react";
import type { PlayerType } from "../type";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

export interface SelectedPlayersProps {
//  player: PlayerType[];
 selectedPlayer:PlayerType[],
 setSelectedPlayer:Dispatch<SetStateAction<PlayerType[]>>
  coins:number,setCoins:Dispatch<SetStateAction<number>>;
   count:number,setCount:Dispatch<SetStateAction<number>>
}

const SelectedPlayers = ({coins,count,setCount,setCoins, selectedPlayer,setSelectedPlayer}: SelectedPlayersProps) => {
  
const handleRemovePlayer=(player:PlayerType)=>{
  setCount(count-1)
 let removePlayer=selectedPlayer.filter(selectPlayer=>selectPlayer.playerName !==player.playerName)
 setSelectedPlayer(removePlayer)
 setCoins(coins+player.price)
 toast.success(`${player.playerName} remove successfully`)
 
}
if(selectedPlayer.length===0){
  return (
    <div className="flex justify-center items-center border p-8 border-gray-200">
      <h2 className="font-mono text-[16px] text-black">No selected player yet</h2>
    </div>
  )
}else{
  return(
<div>{   
  selectedPlayer.map((player) => (
    
    <div className="flex items-center justify-between border border-gray-300 rounded-2xl p-4 mb-4">

      <div className="flex items-center gap-4">

        <img
          className="w-16 h-16 rounded-xl"
          src={player.playerImage}
          alt=""
        />

        <div>
          <h2 className="text-xl font-bold">
            {player.playerName}
          </h2>

          <p className="text-gray-500">
            {player.playerType}
          </p>
        </div>

      </div>

      <button onClick={()=>handleRemovePlayer(player)} className="text-red-500 cursor-pointer">
       <MdDelete />
      </button>

    </div>
  ))
}
    </div>
  )
    
}
 
}
export default SelectedPlayers;