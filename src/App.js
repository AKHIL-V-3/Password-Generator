
import './App.css';

function App() {
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
                <h3 className='py-3 px-32 text-black bg-white font-bold text-xl text-center rounded-md' >Password</h3>
              </div>


              <form action="">

               <div className='space-y-10'>


               <div className='flex mt-6 space-x-3'>
                  <label htmlFor="" className='font-semibold text-lg'>Number of characters</label>

                  <div className='text-black flex items-center'>
                    <input type="range" min={1} max={50} value={10} />
                    <input type="number" min={1} max={50} value={10} className='px-2 text-center' />
                  </div>


                </div>


                <div className='font-semibold text-lg space-x-11 items-center flex'>
                   <label htmlFor="">Include Uppercase</label>
                   <input type="checkbox" className='w-5 h-5' />
                </div>

                <div className='font-semibold text-lg space-x-14 items-center flex'>
                   <label htmlFor="">Include  Numbers</label>
                   <input type="checkbox" className='w-5 h-5' />
                </div>

                <div className='font-semibold text-lg space-x-16 items-center flex'>
                   <label htmlFor="">Include Symbols</label>
                   <input type="checkbox" className='w-5 h-5' />
                </div>


                 <div className='w-full flex justify-center'>
                    <button className='w-96 h-12 bg-blue-950 rounded-md font-bold text-xl'>Generate Password</button>
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
