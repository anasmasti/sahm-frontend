import React, { useEffect } from 'react';
import Dashboard from '../../../components/admin/Dashboard';
import SideMenu from '../../../components/admin/SideMenu';
import dashboardStyle from '../../../styles/pages/admin/Dashboard.module.scss'
import ContentDashboardStyle from '../../../styles/pages/admin/components/Content.module.scss'
import { useDispatch } from 'react-redux';
import { SetNavbarTheme } from '../../../store/Actions/SharedActions';

const AdminDashboard = () => {

    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(SetNavbarTheme(true))
    }, [])

    return (
        <div className={[dashboardStyle.section, ''].join(' ')}>
            <div className='row'>
                <div className='col-12 col-lg-2  '>
                    <SideMenu />
                </div>
                <div className={['col-12 col-lg-10', ContentDashboardStyle.section].join(' ')}>
                    <Dashboard />
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
