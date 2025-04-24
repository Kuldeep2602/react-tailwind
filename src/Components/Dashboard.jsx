import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

function Dashboard() {
    return (
        <div className="h-screen flex flex-row">
            <Link to="/dashboard"></Link>
            <Sidebar />
            <div className="">
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                    <img
                        className="w-full"
                        src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHByb2Zlc3Npb25hbCUyMHByb2ZpbGV8ZW58MHx8fHwxNjgyMTYxNzYx&ixlib=rb-1.2.1&q=80&w=400"
                        alt="Professional Person"
                    />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p className="text-gray-700 text-base">
                            happy to share my thoughts and ideas with you. Let's collaborate and create something amazing together.
                            </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            #twitter
                        </span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            #youtube
                        </span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            #medium
                        </span>
                    </div>
                </div>
            </div>

        


    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-gray-500">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="inline"><rect x="3" y="4" width="14" height="13" rx="2" /><path d="M16 2v4M4 2v4" /><path d="M3 10h14" /></svg>
          </span>
          <span className="font-semibold">Monday, 14 October 2024</span>
        </div>
        <div className="flex items-center space-x-2">
          <button className="text-gray-400 hover:text-blue-600">&lt;</button>
          <button className="text-gray-400 hover:text-blue-600">&gt;</button>
        </div>
      </div>
      {/* Schedule List */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <span className="text-xs font-medium text-red-500 border-r border-gray-200 pr-2 w-20">11:30 AM</span>
          <span className="text-xs font-semibold text-red-500 bg-red-50 px-2 py-0.5 rounded mr-2">Live</span>
          <span className="font-medium">Post</span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-xs font-medium text-blue-500 border-r border-gray-200 pr-2 w-20">11:30 AM</span>
          <span className="text-xs font-semibold text-blue-500 bg-blue-50 px-2 py-0.5 rounded mr-2">Upcoming</span>
          <span className="font-medium">My first Post</span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-xs font-medium text-blue-500 border-r border-gray-200 pr-2 w-20">11:30 AM</span>
          <span className="text-xs font-semibold text-blue-500 bg-blue-50 px-2 py-0.5 rounded mr-2">Upcoming</span>
          <span className="font-medium">Important Post</span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-xs font-medium text-blue-500 border-r border-gray-200 pr-2 w-20">11:30 AM</span>
          <span className="text-xs font-semibold text-blue-500 bg-blue-50 px-2 py-0.5 rounded mr-2">Upcoming</span>
          <span className="font-medium">Post 1</span>
        </div>
      </div>
    </div>

            
        </div>
    );
}

export default Dashboard;