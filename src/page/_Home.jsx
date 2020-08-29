import * as React from 'react';
import {MainTemplate} from 'components';
import Navigation from 'components/Common/Navigation';
import {HomeContainer} from 'containers';
        
const Home = ({history}) =>(
<MainTemplate header={<Navigation />}>
        <HomeContainer history={history}/>
    </MainTemplate>
);

export default Home;