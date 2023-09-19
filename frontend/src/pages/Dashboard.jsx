import React from 'react'
import Menu from "../components/Sidebar";
import DashHeader from '../components/DashHeader';
function Dashboard() {
    return (
        <div className=''>
          <Menu />
           <DashHeader/> 
        </div>
    )
}
export default Dashboard;