import { Link } from 'react-router-dom'

function Sidebar(){
    return (
        <>
        <Link to='/dashboard'></Link>
        <div >
                    {/* <div class="max-w-xs  rounded overflow-hidden shadow-lg h-screen bg-white">
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
            </div> */}

<aside className="h-screen w-64 bg-white shadow flex flex-col justify-between">
      {/* Logo and User */}
      <div>
        <div className="flex items-center p-6">
          <button className="px-4 py-1 bg-blue-900 text-white rounded-full font-semibold text-sm">buzz.cc</button>
          {/* You can add a user avatar here later */}
        </div>
        {/* Navigation */}
        <nav className="mt-6">
          <ul>
            <li>
              <a href="#" className="flex items-center px-6 py-3 text-blue-900 bg-blue-100 rounded-lg font-semibold">
                <span className="mr-3">🏠</span> Home
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 rounded-lg mt-1">
                <span className="mr-3">👥</span> Feed
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 rounded-lg mt-1">
                <span className="mr-3">💳</span> Billing
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 rounded-lg mt-1">
                <span className="mr-3">🧑‍💼</span> User Management
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 rounded-lg mt-1">
                <span className="mr-3">⚙️</span> Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* Optional: Add anything at the bottom if needed */}
      <div className="p-6"></div>
    </aside>

        </div>
        </>
    )
}

export default Sidebar;