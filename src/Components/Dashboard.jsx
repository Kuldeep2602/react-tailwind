
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

            
        


            
        </div>
    );
}

export default Dashboard;