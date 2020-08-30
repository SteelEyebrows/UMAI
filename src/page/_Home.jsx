import * as React from 'react';
import {MainTemplate,Navigation,Footer} from 'components';
import {HomeContainer} from 'containers';
        
const Home = ({history}) =>(
    <MainTemplate header={<Navigation />}>
        <HomeContainer history={history}/>
    </MainTemplate>
);

export default Home;