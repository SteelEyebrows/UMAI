import * as React from 'react';
import {MainTemplate,Navigation,Footer} from 'components';
import {MenuContainer} from 'containers';
        
const Menu = ({history}) =>(
    <MainTemplate header={<Navigation />}>
        <MenuContainer history={history}/>
    </MainTemplate>
);

export default Menu;