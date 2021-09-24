import React, { useEffect } from 'react';
import AdminLoginStyle from '../../../styles/pages/admin/components/Login.module.scss'
import { useDispatch } from 'react-redux';
import { SetNavbarTheme } from '../../../store/Actions/SharedActions';

const AdminLogin = () => {

    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(SetNavbarTheme(true))
    }, [])

    return (
        <div className={[AdminLoginStyle.section, "d-flex justify-content-center align-items-center"].join(' ')}>
            <form action="#" className={"d-flex align-items-center flex-column"}>
                <h2 className={""}>Admin panel</h2>
                <p className={""}>
                    Fill up the form.
                </p>
                <div className={['main-input'].join(" ")}>
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Email" />
                </div>
                <div className={['main-input'].join(" ")}>
                    <i className="fas fa-lock"></i>
                    <input type="text" placeholder="Password" />
                </div>
                <button
                    type="submit"
                    className={["seconde-btn", "p-2 text-light mt-3"].join(" ")}
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default AdminLogin;
