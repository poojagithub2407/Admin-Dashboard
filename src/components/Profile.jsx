import React from "react";

const Profile = () => {
     return (
          <div className="mx-1 tranform -translate-x-12 py-4 border rounded shadow-lg w-64 max-w-xs bg-white">
          <div className="flex gap-2">
               <img
                    className="w-16 h-16 rounded mx-4"
                    src="https://themewagon.github.io/Ready-Bootstrap-Dashboard/assets/img/profile.jpg"
               />
               <div className="">
                    <h1 className="text-lg">Hizrian</h1>
                    <p className="text-xs text-gray-600">hello@themekita.com</p>
                    <button className="bg-red-500 text-white py-1 rounded-full text-xs px-2 mt-2">View Profile</button>
               </div>
          </div>
     
          {/* Full width top + bottom border */}
          <div className="border-t border-b border-gray-300 my-2 w-full">
               <p className="py-1 mx-4 cursor-pointer">My Profile</p>
               <p className="py-1 mx-4 cursor-pointer">My Balance</p>
               <p className="py-1 mx-4 cursor-pointer">Inbox</p>
          </div>
     
          <div className="border-b border-gray-300 w-full px-4 cursor-pointer py-2">
               <p>Account Setting</p>
          </div>
     
          <div className="py-2 px-4 cursor-pointer">
               <p>Logout</p>
          </div>
     </div>
     
     );
};

export default Profile;
