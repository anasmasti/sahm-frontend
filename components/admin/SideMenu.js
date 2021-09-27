import React from 'react';
import SideMenuStyle from '../../styles/pages/admin/components/SideMenu.module.scss'
import { AiOutlineMenu } from 'react-icons/ai'

const SideMenu = () => {
    return (
        <div className={[SideMenuStyle.section, 'main-card'].join(' ')}>
            <nav className={[SideMenuStyle.nav]}>
                <div className="custom-menu">
                    <button type="button" id="sidebarCollapse" className="btn main-btn border-0">
                        <span className="sr-only"><AiOutlineMenu /></span>
                    </button>
                </div>
                <div className="p-3 mt-3">
                    <h3>
                        <strong>
                            Admin panel
                        </strong>
                    </h3>
                    <ul className="list-unstyled components mt-2" >
                        <li>
                            <a>Dashboard</a>
                        </li>
                        <li>
                            <a>Givers</a>
                        </li>
                        <li>
                            <a>Beneficiaries</a>
                        </li>
                        <li>
                            <a>Alerts</a>
                        </li>
                        <li>
                            <a>Messages</a>
                        </li>
                    </ul>
                </div >
            </nav >
        </div >
    );
}

export default SideMenu;
