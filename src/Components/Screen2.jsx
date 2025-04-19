import { Link } from 'react-router-dom'
function Screen2(){
    return (
    <>
        <Link to="/screen2"></Link>
        
        <div className="h-screen flex flex-col items-center justify-center bg-sky-950">
            <div className='pb-6 text-white'>buzz.cc</div>
            <div className=' pt-4 pb-2 text-white text-xl pb-4 '>Let`s get started</div>
            <input  type="text" placeholder="  Email id" className='rounded-md wd-full bg-sky-100 pt-1 bg-opacity-20 text-gray-200 py-2 ' ></input> <br/>
            <button className='bg-sky-200 hover:bg-sky-500 rounded-md wd-full py-1 px-14'>Continue</button>
        </div>

    </>
    )
}
export default Screen2;