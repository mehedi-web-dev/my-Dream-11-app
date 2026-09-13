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

```
{/* Player Name */}
<h2 className="card-title text-xl  font-bold">
  👤 {player.playerName}
</h2>

{/* Origin + Player Type */}
<div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
  <p className="text-gray-500 text-sm sm:text-base">
    🚩 {player.origin}
  </p>

  <span className="badge badge-lg p-3 sm:p-4">
    {player.playerType}
  </span>
</div>

<div className="divider my-1"></div>

{/* Rating */}
<div>
  <p className="font-semibold mb-2">Rating</p>

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
    <p className="text-gray-500 font-medium text-sm sm:text-base">
      Batting Style
    </p>

    <h3 className="font-bold text-sm sm:text-base">
      {player.battingStyle}
    </h3>
  </div>

  <div className="sm:text-right">
    <p className="text-gray-500 font-medium text-sm sm:text-base">
      Bowling Style
    </p>

    <h3 className="font-bold text-sm sm:text-base">
      {player.bowlingStyle}
    </h3>
  </div>

</div>

{/* Price + Button */}
<div className="flex flex-col gap-4 mt-5 sm:flex-row sm:justify-between sm:items-center">

  <div>
    <p className="text-gray-500 text-sm sm:text-base">
      Price
    </p>

    <h3 className="text-lg sm:text-xl font-bold text-green-700">
      ${player.price}
    </h3>
  </div>

  <button
    onClick={hanldleSeleted}
    disabled={isSelected}
    className={`btn w-full sm:w-auto ${
      isSelected === false
        ? "bg-amber-500"
        : "bg-green-800"
    } hover:bg-green-900 text-white border-none`}
  >
    {isSelected === false ? "Choose Player" : "Selected"}
  </button>

</div>
```

  </div>

</div>

  </div>
  );
};

export default PlayerCards;