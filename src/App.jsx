import React, {useState, useEffect} from 'react'
import './index.css'; // Import your styles
import Boxes from './Components/Boxes';



function App() {

  const [boxesVal, setBoxesVal] = useState([
    {
        val:"",
        haveRborder:"yes",
        haveBborder:"yes",
        id:"",
    },
    {
        val:"",
        haveRborder:"yes",
        haveBborder:"yes",
        id:1,
    },
    {
        val:"",
        haveBborder:"yes",
        id:2
    },
    {
        val:"",
        haveRborder:"yes",
        haveBborder:"yes",
        id:3
    },
    {
        val:"",
        haveRborder:"yes",
        haveBborder:"yes",
        id:4,
    },
    {
        val:"",
        haveBborder:"yes",
        id:5
    },
    {
        val:"",
        haveRborder:"yes",
        id:6
    },
    {
        val:"",
        haveRborder:"yes",
        id:7
    },
    {
        val:"",
        id:8
    },
])    
const [showHideBannner, setshowHideBannner] = useState(false)
const [sign, setSign] = useState('X')
const [turnFor, setTurnFor] = useState('Turn For')
const [gameWinner, setGameWinner] = useState('')
const [nobody, setNobody] = useState('Player')
const [isWin, setIsWin] = useState(false)

// CHANGE USER SIGN EVERYTIME 
const changeUsersSign =()=>{
if(sign === "X"){
setSign("0")
}
else{
setSign("X")
}
}

// CHECK WIN 
const checkWinner =()=>{
    if(boxesVal[0].val === boxesVal[1].val && boxesVal[2].val ===boxesVal[0].val ||
        boxesVal[3].val === boxesVal[4].val && boxesVal[5].val ===boxesVal[3].val ||
        boxesVal[6].val === boxesVal[7].val && boxesVal[8].val ===boxesVal[6].val 
    ){
    setTurnFor()
    }
    
}

// when click on play again, banner will be hiden and game score will restart 
const playAgain =()=>{
  // Empty all previuous value 
  let updatedBoxesVal = [...boxesVal];
  for(let i=0; i<boxesVal.length; i++){
    updatedBoxesVal[i].val = ""; 
  }
   setBoxesVal(updatedBoxesVal);  //reset previous value of box when game start again 
  setshowHideBannner(false) //hide banner when game start agian
  setTurnFor("Turn For")  //show "turn for" when game start again
   setNobody("Player")
}



const updateBoxValue = (target) => {
// if(target.target.innerText === ""){
changeUsersSign()


let updatedBoxesVal = [...boxesVal];
   updatedBoxesVal[target.target.id].val = sign; 
   setBoxesVal(updatedBoxesVal);
          // checkWinner()
          if(boxesVal[0].val === boxesVal[1].val && boxesVal[2].val ===boxesVal[0].val && 
            boxesVal[0].val !="" && boxesVal[1].val !="" && boxesVal[2].val !="" ||

            boxesVal[3].val === boxesVal[4].val && boxesVal[5].val ===boxesVal[3].val &&
            boxesVal[3].val !="" && boxesVal[4].val !="" && boxesVal[5].val !="" ||

            boxesVal[6].val === boxesVal[7].val && boxesVal[8].val ===boxesVal[6].val &&
            boxesVal[6].val !="" && boxesVal[7].val !="" && boxesVal[8].val !=""
        ){
       setTimeout(() => {
        setshowHideBannner(true)   //show banner when game won 
       }, 1000);
       setTurnFor("Looser is ")   //remove "turn for" heading from up
       setGameWinner("Lost the Game")  // "won the game on banner"
       setIsWin(true)
        }
// }
    

  };

  useEffect(() => {
    // Check if all val properties have a value
    const allValuesFilled = boxesVal.every(box => box.val.trim() !== "");
  
    if (allValuesFilled) {
      setshowHideBannner(true)
      setNobody("Match Drew, Try Again to Win")
    }
  }, [boxesVal]);
  


  return (
    <>
      <div className="mainContainer bg-gray-500 w-full h-full">
<div className="mainCHild">
        <Boxes boxesVal={boxesVal} updateBoxValue={updateBoxValue}></Boxes>

        <div className="name">
         <h2>Zero Katto</h2>
        </div>
        <div className="turn">
     {
      isWin != true &&    <h2> {turnFor+ " " +sign}</h2> 
     }
        </div>
</div>

{/* SHOW AFTER WIN  */}
{
  showHideBannner === true && 
  <div className="showNotice w-full">
<div class="w-[70vw] rounded-md border">
  <img
    src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    alt="Laptop"
    class="h-[200px] w-full rounded-t-md object-cover"
  />
  <div class="p-4 bg-[#272727]">
{
  isWin === true ?     <h1 class="items-center text-lg font-semibold w-full block text-center text-[white]">
     {nobody+ " " +sign+ " " + gameWinner}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-4 w-4"
      >
        <line x1="7" y1="17" x2="17" y2="7"></line>
        <polyline points="7 7 17 7 17 17"></polyline>
      </svg>
    </h1> :    <h1 class="items-center text-lg font-semibold w-full block text-center text-[#ff8787]">
     {nobody}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-4 w-4"
      >
        <line x1="7" y1="17" x2="17" y2="7"></line>
        <polyline points="7 7 17 7 17 17"></polyline>
      </svg>
    </h1>
}
    <p class="mt-3 text-sm text-gray-600">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat ab voluptatem esse? Delectus, facere quasi. Voluptatem magni officiis expedita sequi.
    </p>
    <div class="mt-4">
      <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
        #Simple
      </span>
      <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
        #Way
      </span>
      <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
        #ZeroKatto
      </span>
    </div>
    <button onClick={playAgain}
      type="button"
      class="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      Play Again
    </button>
  </div>
</div>

</div> 
}
      </div>
      
    </>
  )
}

export default App