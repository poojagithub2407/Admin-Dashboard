import React from 'react';

const Table = () => {
     const users = [
          { id: 1, first: "John", last: "Doe", handle: "@jdoe" },
          { id: 2, first: "Jane", last: "Smith", handle: "@jsmith" },
          { id:3,first:'Larry the Bird	', handle:'@twitter'}
     ];
     return (
          <div className='w-[45%] border h-auto'>
               <div className='px-2 pb-2'>
                    <h1 className='font-medium text-md pt-2'>Table</h1>
                    <p className='text-xs text-gray-400'>Users Table</p>
               </div>

               <div className='border-b my-1 border-gray-200'></div>

               <div className='mx-2 my-4 overflow-x-auto'>
                    <table className='min-w-full border border-[#59d05d] '>
                         <thead className='bg-[#59d05d] text-white'>
                              <tr>
                                   <th className='text-left px-2 py-1 '>#</th>
                                   <th className='text-left px-2 py-1 '>First</th>
                                   <th className='text-left px-2 py-1 '>Last</th>
                                   <th className='text-left px-2 py-1 '>Handle</th>
                              </tr>
                         </thead>
                         <tbody>
                              {users.map((user) => (
                                   <tr key={user.id} className='odd:bg-gray-100'>
                                        <td className='px-2 py-2  '>{user.id}</td>
                                        <td className='px-2 py-2'>{user.first}</td>
                                        <td className='px-2 py-2  '>{user.last}</td>
                                        <td className='px-2 py-2  '>{user.handle}</td>
                                   </tr>
                              ))}
                         </tbody>
                    </table>
               </div>
          </div>
     );
};

export default Table;
