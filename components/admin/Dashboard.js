import React, { useEffect } from 'react';
import ContentDashboardStyle from '../../styles/pages/admin/components/Content.module.scss'
import { SetIsAdmin, SetNavbarTheme } from '../../store/Actions/SharedActions';
import { useDispatch } from 'react-redux';

const Dashboard = () => {

  

    return (
        <div >
            <div>
                <h1>
                    welcome back
                </h1>
            </div>
            <div className='mt-5'>
                <h2 className='h5'>
                    <strong>
                        Dashboard
                    </strong>
                </h2>
                <div className='row'>
                    <div className='col-12 col-lg-3 main-card bg-white p-3'>
                        <strong className='me-1'>
                            12
                        </strong>
                        Givers
                    </div>
                    <div className='col-12 col-lg-3 main-card bg-white p-3 mx-3'>
                        <strong className='me-1'>
                            120
                        </strong>
                        Beneficiary
                    </div>
                    <div className='col-12 col-lg-4 main-card bg-white p-3'>
                        5 Alerts
                    </div>
                </div>
            </div>

            <div className='mt-5'>
                <h2 className='h5'>
                    <strong>
                        Givers
                    </strong>
                </h2>
                <div>
                    <h3 className='h6'>
                        <strong>
                            Givers à accepter
                        </strong>
                    </h3>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colSpan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <h3 className='h6'>
                        <strong>
                            Marchandises livrées
                        </strong>
                    </h3>
                </div>
            </div>

            <div className='mt-5'>
                <h2 className='h5'>
                    <strong>
                        Beneficiary
                    </strong>
                </h2>
                <div>
                    <h3 className='h6'>
                        <strong>
                            Beneficiary à accepter
                        </strong>
                    </h3>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colSpan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <h3 className='h6'>
                        <strong>
                            Actions à accepter
                        </strong>
                    </h3>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colSpan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}

export default Dashboard;
