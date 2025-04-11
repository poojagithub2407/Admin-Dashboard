import React from 'react'
import Slider from '../components/Dashboard/Slider'
import Task from '../components/Dashboard/Task'
import WorldMap from '../components/Dashboard/WorldMap'
import Balance from '../components/Dashboard/Balance'
import Charts from '../components/Dashboard/Charts'
import TableTaskContainer from '../components/Dashboard/TableTaskContainer'

const Dashboard = () => {
     return (
          <div className="ml-[15rem] mt-20 p-4">
               <h1 className='text-xl mx-6 font-semibold'>Dashboard</h1>
               <Slider />
               <div className='flex gap-3 items-start'>
                    <Task/>
                    <WorldMap/>
               </div>
               <Balance/>
               <Charts/>
               <TableTaskContainer/>
          </div>
     )
}

export default Dashboard