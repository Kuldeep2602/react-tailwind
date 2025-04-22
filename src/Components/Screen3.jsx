
import { Link } from 'react-router-dom'
function Sreen3(){
    return (
        <>
        <Link to="/screen3"></Link>
            <div className="h-screen flex flex-col items-center justify-center bg-sky-950">
            <div className='pb-8 text-white'>buzz.cc</div>
            <div className='font-bold pt-4 pb-2 text-white text-xl'>Check your email for code</div>
            <div className='text-gray-500 text-sm pt-3 pb-4 text-center max-w-md'> Please enter the verification code sent to your email </div>
            <div className="flex justify-center gap-2">
                {[...Array(6)].map((_, index) => (
                    <input
                    key={index}
                    type="text"
                    maxLength={1}
                    className="w-10 h-10 rounded-lg bg-white/20 text-white text-center text-xl focus:outline-none focus:ring-2 focus:ring-sky-400"
                    />
                ))}
            </div><br/>
            <button className='bg-sky-300 bg-opacity-10 hover:bg-gray-700 rounded-md wd-full py-2 px-14 text-white'>Verify</button>
            <div className='text-gray-500 text-sm pt-3 pb-4 text-center max-w-md'>Can't fidn the email? Click <Link to="/screen2" className='underline text-blue-500'>here</Link> to resend</div>
            
            </div>
        </>
    )
}

export default Sreen3;