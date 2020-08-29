import * as React from 'react';
import {MainTemplate} from 'components';
import Navigation from 'components/Common/Navigation';
import {BrandContainer} from 'containers';
        
const Brand = ({history}) =>(
    <MainTemplate header={<Navigation />}>
        <BrandContainer history={history}/>
    </MainTemplate>
);

export default Brand;