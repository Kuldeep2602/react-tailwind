import { Link } from 'react-router-dom'
function Screen1(){
    return (
    <>
    <Link to="/screen1"></Link>
        <div className="h-screen flex flex-col items-center justify-center bg-sky-950">
            <div className='pb-8 text-white'>buzz.cc</div>
            <div className='font-bold pt-4 pb-2 text-white text-xl'>Verify your age</div>
            <div className='text-gray-500 text-sm pt-3 pb-4 text-center max-w-md'> Please confirm your age</div>
            <input type="text" className='rounded-md wd-full bg-sky-100 pt-1 bg-opacity-20 text-gray-200 py-2' ></input> <br/>
            <button className='bg-sky-200 hover:bg-sky-500 rounded-md wd-full py-1 px-14'>Continue</button>
        </div>
    </>
    )
}
export default Screen1;