import * as React from 'react';
import {MainTemplate} from 'components';
import {BrandContainer} from 'containers';
        
const Brand = ({history}) =>(
    <MainTemplate>
        <BrandContainer history={history}/>
    </MainTemplate>
);

export default Brand;