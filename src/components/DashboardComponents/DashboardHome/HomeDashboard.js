import React from 'react';
import useAuth from '../../../hooks/useAuth';

const HomeDashboard = () => {

    const { user } = useAuth();

    return (
        <div className='text-center w-50 m-auto'>
            <img style={{width: "100%", marginTop: "100px"}} src="https://www.bathtub2boardroom.com/wp-content/uploads/2017/04/Dashboard-R-Logo-header.png" alt="" />
        </div>
    );
};

export default HomeDashboard;