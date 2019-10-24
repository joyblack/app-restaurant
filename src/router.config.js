import goods from './components/goods/goods';
import seller from './components/seller/seller';
import rating from './components/rating/rating';

export default{
    routes: [
        {
            path: '/seller',
            component: seller
        },
        {
            path: '/rating',
            component: rating
        },
        {
            path: '/goods',
            component: goods
        },
        {
            path: '*',
            redirect: '/goods'
        }

    ]

}