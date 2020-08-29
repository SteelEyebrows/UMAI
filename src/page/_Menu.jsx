import * as React from 'react';
import {MainTemplate} from 'components';
import Navigation from 'components/Common/Navigation';
import {MenuContainer} from 'containers';
        
const Menu = ({history}) =>(
    <MainTemplate header={<Navigation />}>
        <MenuContainer history={history}/>
    </MainTemplate>
);

export default Menu;