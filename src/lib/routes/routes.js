import {Home,Brand,Menu} from 'page';


export const routes =[
    {
        path:'/',
        page:Home,
        exact:true
    },
    {
        path:'/brand',
        page:Brand,
        exact:true
    },
    {
        path:'/menu',
        page:Menu,
        exact:true
    },
]