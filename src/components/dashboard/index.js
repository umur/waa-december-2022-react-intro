import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';

function Dashboard(props) {
    return (
        <div className='dashboard'>
            <h2>Welcome to my dashboard</h2>
            <div>
                goto
                <Link to="/categories" className='link-cat'>categories</Link>
            </div>
        </div>
    );
}

export default Dashboard;