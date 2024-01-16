
import './App.css';
import React,{useState} from 'react'

function App() {

  const [characterAmount,setCharacterAmount] = useState(10)
  const [characterRange,setCharacterRange] = useState(10)

  const [includeNumber,setIncludeNumber] = useState(false)
  const [includeSymbol,setIncludeSymbol] = useState(false)
  const [includeUppercase,setIncludeUppercase] = useState(false)
  const [shwopass,setShowpass] = useState('password')

  const syncCharacterAmount = (e) => {
    const value = e.target.value;
    setCharacterAmount(value);
    setCharacterRange(value);
  };

  const handleSubmit = (e)=>{
       e.preventDefault()
       const password = generatePassword(characterAmount,includeUppercase,includeNumber,includeSymbol)
       setShowpass(password)
  }

  const UPPERCASE_CHARCODES = arrayFromlowToHigh(65,90)
  const LOWERCASE_CHARCODES = arrayFromlowToHigh(97,122)
  const NUMBER_CHARCODES = arrayFromlowToHigh(48,57)
  const SYMBOL_CHARCODES = arrayFromlowToHigh(33,47).concat(
    arrayFromlowToHigh(58,64)
  ).concat(
    arrayFromlowToHigh(91,96)
  ).concat(
    arrayFromlowToHigh(123,126)
  )


  function generatePassword(characterAmount,includeUppercase,includeNumbers,includeSymbols){

        let charCodes = LOWERCASE_CHARCODES

        if(includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHARCODES)
        if(includeNumbers) charCodes = charCodes.concat(NUMBER_CHARCODES)
        if(includeSymbols) charCodes = charCodes.concat(SYMBOL_CHARCODES)

        const passwordCharacters = []

        for(let i=0;i<characterAmount;i++){
          const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
          passwordCharacters.push(String.fromCharCode(characterCode))               
        }
        return passwordCharacters.join('')
  }


  function arrayFromlowToHigh(low,high){
      const array = [] 
      for(let i = low;i<=high;i++){ 
        array.push(i)    
      }
      return array
  }





  return (

    <div>
      <div className='w-full h-screen bg-blue-400'>

        <div className='flex w-full h-full justify-center items-center font-serif'>
          <div className='w-auto h-auto pb-12 pt-10 bg-slate-500 text-white'>

            <div className='py-2 px-20'>

              <div className='flex justify-center p-3'>
                <h1 className='font-bold text-4xl mb-6'>Password Generator</h1>
              </div>

              <div className='flex justify-center p-3'>
                <h3 className='py-3 px-32 text-black bg-white font-bold text-xl text-center rounded-md' >{shwopass}</h3>
              </div>


              <form action="" onSubmit={(e)=> handleSubmit(e)}>

               <div className='space-y-10'>


               <div className='flex mt-6 space-x-3'>
                  <label htmlFor="" className='font-semibold text-lg'>Number of characters</label>

                  <div className='text-black flex items-center'>
                    <input onChange={syncCharacterAmount} value={characterRange} type="range" min={1} max={50}  />
                    <input onChange={syncCharacterAmount} value={characterAmount} type="number" min={1} max={50}  className='px-2 text-center' />
                    
                  </div>


                </div>


                <div className='font-semibold text-lg space-x-11 items-center flex'>
                   <label htmlFor="">Include Uppercase</label>
                   <input onChange={(e)=>setIncludeUppercase(!includeUppercase)} type="checkbox" className='w-5 h-5' />
                </div>

                <div className='font-semibold text-lg space-x-14 items-center flex'>
                   <label htmlFor="">Include  Numbers</label>
                   <input onChange={(e)=>setIncludeNumber(!includeNumber)} type="checkbox" className='w-5 h-5' />
                </div>

                <div className='font-semibold text-lg space-x-16 items-center flex'>
                   <label htmlFor="">Include Symbols</label>
                   <input onChange={(e)=>setIncludeSymbol(!includeSymbol)} type="checkbox" className='w-5 h-5' />
                </div>


                 <div className='w-full flex justify-center'>
                    <button type='submit' className='w-96 h-12 bg-blue-950 rounded-md font-bold text-xl'>Generate Password</button>
                 </div>


               </div>


              </form>


            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
