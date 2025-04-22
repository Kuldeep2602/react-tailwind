import { Link } from 'react-router-dom'

function Sidebar(){
    return (
        <>
        <Link to='/dashboard'></Link>
        <div >
                    <div class="max-w-xs  rounded overflow-hidden shadow-lg h-screen bg-white">
            <div class="px-6 py-4">
                <div class=" text-xl mb-2">buzz.cc</div>
               
            </div>
            <div class="px-6 pt-3 pb-2 display flex flex-col gap-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Home</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Billing</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">User management</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">About Us</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Setting</span>
            
            </div>
            </div>

        </div>
        </>
    )
}

export default Sidebar;