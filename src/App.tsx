import { Suspense, useState } from "react";
import Hero from "./component/Hero";
import Nav from "./component/Nav";
import Players from "./players/Players";

import type { PlayerType } from "./type";
import Footer from "./component/Footer";


const playerFetch=async():Promise<PlayerType[]>=>{
 const res=await fetch("/data.json")
 const data=await res.json()
 return data
}

function App() {
  const [playerPromise]=useState(()=>playerFetch())
  const[coins,setCoins]=useState(2500)
  return (
    <>
     <Nav coins={coins}></Nav>
     <Hero></Hero>
   <Suspense fallback="Loading............">
     <Players playerPromise={playerPromise} coins={coins} setCoins={setCoins} ></Players>
   </Suspense>
   <Footer></Footer>
    </>
  )
}

export default App
