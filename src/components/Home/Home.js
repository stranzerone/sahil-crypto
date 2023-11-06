import Navbar from "./Navbar";
import Hero from "./Hero";
import Midsetcion from "./midsetcion";
import Wallet from "../Wallet/Wallet";
function Home() {

  const money = Wallet();
  console.log(money)
  return (
   <div>
  
   <Hero />
   <Midsetcion />
   <a href="/table">Link</a>

   </div>
 

  )
}

export default Home;
