import * as React from 'react';
import {MainTemplate,Navigation,Footer} from 'components';
import {BrandContainer} from 'containers';
        
const Brand = ({history}) =>(
    <MainTemplate header={<Navigation />}>
        <BrandContainer history={history}/>
    </MainTemplate>
);

export default Brand;