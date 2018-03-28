import React from 'react';
import PageTemplate from '../../templates/pageTemplate';
import style from './HomePage.css';
import HeaderContainer from '../../../containers/headerContainer/HeaderContainer';

const HomePage = () => {
    return (
        <PageTemplate header={<HeaderContainer/>}>
            <div className="child">
                hello react!
            </div>
        </PageTemplate>
    );
}

export default HomePage;