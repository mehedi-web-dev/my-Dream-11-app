import {  type Dispatch, type SetStateAction } from "react";
import type { PlayerType } from "../type";
import { toast } from "react-toastify";

interface PlayerCardsProps {
  player: PlayerType;
   coins:number,setCoins:Dispatch<SetStateAction<number>>;
    selectedPlayer:PlayerType[],
   setSelectedPlayer:Dispatch<SetStateAction<PlayerType[]>>
}

const PlayerCards = ({ player,coins,setCoins,selectedPlayer,setSelectedPlayer}: PlayerCardsProps) => {

  // const [isSelected,setIsSelected]=useState(false)
  const isSelected = selectedPlayer.some(
  (selected) => selected.playerName === player.playerName
);
  const hanldleSeleted=()=>{
    // setIsSelected(true);
    if(coins>=player.price){
      setCoins(coins-player.price)
      toast.success(`${player.playerName} purches Successfully`)
    }else{
      toast.error(`Insaficiant Balence`)
    }
    setSelectedPlayer([...selectedPlayer,player])
  }
  return (
  <div >
      <div className="card w-full bg-base-100 shadow-lg border z-0 border-gray-200 rounded-2xl overflow-hidden">
      
      {/* Player Image */}
      <figure className="px-5 pt-5">
        <img
          src={player.playerImage}
          alt={player.playerName}
          className="w-full h-56  rounded-xl"
        />
      </figure>

      <div className="card-body p-5">
        
        {/* Player Name */}
        <h2 className="card-title text-2xl font-bold">
          👤 {player.playerName}
        </h2>

        {/* Origin + Player Type */}
        <div className="flex justify-between items-center">
          <p className="text-gray-500">
            🚩 {player.origin}
          </p>

          <span className="badge badge-lg p-4">
            {player.playerType}
          </span>
        </div>

        <div className="divider my-1"></div>

        {/* Rating */}
        <div>
          <p className="font-semibold mb-2">Rating</p>

          <div className="rating">
            <input
              type="radio"
              name={`rating-${player.playerName}`}
              className="mask mask-star-2 bg-orange-400"
              checked
              readOnly
            />
            <input
              type="radio"
              name={`rating-${player.playerName}`}
              className="mask mask-star-2 bg-orange-400"
              checked
              readOnly
            />
            <input
              type="radio"
              name={`rating-${player.playerName}`}
              className="mask mask-star-2 bg-orange-400"
              checked
              readOnly
            />
            <input
              type="radio"
              name={`rating-${player.playerName}`}
              className="mask mask-star-2 bg-orange-400"
              checked
              readOnly
            />
          </div>
        </div>

        {/* Batting and Bowling */}
        <div className="flex justify-between gap-5 mt-2">
          
          <div>
            <p className="text-gray-500 font-medium">
              Batting Style
            </p>

            <h3 className="font-bold">
              {player.battingStyle}
            </h3>
          </div>

          <div className="text-right">
            <p className="text-gray-500 font-medium">
              Bowling Style
            </p>

            <h3 className="font-bold">
              {player.bowlingStyle}
            </h3>
          </div>

        </div>

        {/* Price + Button */}
        <div className="flex justify-between items-center mt-5">
          
          <div>
            <p className="text-gray-500">Price</p>

            <h3 className="text-xl font-bold text-green-700">
              ${player.price}
            </h3>
          </div>

          <button onClick={hanldleSeleted} disabled={isSelected} className={`btn ${isSelected===false?"bg-amber-500":"bg-green-800"} hover:bg-green-900 text-white border-none`}>
           {isSelected=== false?"Choose Player":'Selected'}
          </button>

        </div>

      </div>
    </div>
  </div>
  );
};

export default PlayerCards;