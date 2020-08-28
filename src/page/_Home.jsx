import * as React from 'react';
import {MainTemplate} from 'components';
import {HomeContainer,MenuContainer} from 'containers';
        
const Home = ({history}) =>(
    <MainTemplate>
        <HomeContainer history={history}/>
    </MainTemplate>
);

export default Home;