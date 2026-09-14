import {  type Dispatch, type SetStateAction } from "react";
import type { PlayerType } from "../type";
import { toast } from "react-toastify";
import { FaFlag } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";

interface PlayerCardsProps {
  player: PlayerType;
   coins:number,setCoins:Dispatch<SetStateAction<number>>;
    selectedPlayer:PlayerType[],
   setSelectedPlayer:Dispatch<SetStateAction<PlayerType[]>>
    count:number,setCount:Dispatch<SetStateAction<number>>
}

const PlayerCards = ({ player,count,setCount,coins,setCoins,selectedPlayer,setSelectedPlayer}: PlayerCardsProps) => {

  // const [isSelected,setIsSelected]=useState(false)
  const isSelected = selectedPlayer.some(
  (selected) => selected.playerName === player.playerName
);
  const hanldleSeleted=()=>{
    // setIsSelected(true);
    
    if(coins>=player.price){
      setCoins(coins-player.price)
      toast.success(`${player.playerName} purches Successfully`)
      setCount(count+1)
      setSelectedPlayer([...selectedPlayer,player])
    }else{
      toast.error(`Insaficiant Balence`)
    }
    
  }
  return (
  <div >
     <div className="card w-full bg-base-100 shadow-lg border border-gray-200 rounded-2xl overflow-hidden">

{/* Player Image */}

  <figure className="px-3 pt-3 sm:px-4 sm:pt-4 md:px-5 md:pt-5">
    <img
      src={player.playerImage}
      alt={player.playerName}
      className="w-full h-48 sm:h-52 md:h-56 lg:h-60 object-cover rounded-xl"
    />
  </figure>

  <div className="card-body p-4 sm:p-5">

{/* Player Name */}
<h2 className="card-title text-[20px] font-mono  font-semibold">
 <FaRegUserCircle /> {player.playerName}
</h2>

{/* Origin + Player Type */}
<div className="flex  gap-2 sm:flex-row sm:justify-between sm:items-center">
  <p className="text-gray-500 text-[16px] font-normal font-mono">
    <FaFlag /> {player.origin}
  </p>

  <span className="badge text-[14px] font-mono text-[#131313] badge-lg p-3 sm:p-4">
    {player.playerType}
  </span>
</div>

<div className="divider my-1"></div>

{/* Rating */}
<div>
  <p className="font-semibold font-mono mb-2">Rating</p>

  <div className="rating rating-sm sm:rating-md">
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
<div className="flex flex-col gap-4 mt-3 sm:flex-row sm:justify-between sm:gap-5">

  <div>
    <p className="text-gray-500 font-semibold font-mono text-[16px]">
      Batting Style
    </p>

    <h3 className="font-regular font-mono text-[14px]">
      {player.battingStyle}
    </h3>
  </div>

  <div className="sm:text-right">
    <p className="text-gray-500 font-semibold font-mono text-[16px]">
      Bowling Style
    </p>

    <h3 className="font-regular font-mono text-[14px]">
      {player.bowlingStyle}
    </h3>
  </div>

</div>

{/* Price + Button */}
<div className="flex flex-col gap-4 mt-5 sm:flex-row sm:justify-between sm:items-center">

  <div>
    <p className="text-gray-500 text-[15px] font-mono ">
      Price
    </p>

    <h3 className="text-lg sm:text-xl font-mono font-bold text-green-700">
      ${player.price}
    </h3>
  </div>

  <button
    onClick={hanldleSeleted}
    disabled={isSelected}
    className={`btn w-full rounded-none font-mono sm:w-auto ${
      isSelected === false
        ? "bg-amber-500"
        : "bg-green-800"
    } hover:bg-green-900 text-white border-none`}
  >
    {isSelected === false ? "Choose Player" : "Selected"}
  </button>

</div>


  </div>

</div>

  </div>
  );
};

export default PlayerCards;