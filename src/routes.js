import Home from './components/Home.vue';
import EndDay from './components/EndDay.vue';
import Portfolio from './components/portfolio/Portfolio.vue';
import Stocks from './components/stocks/Stocks.vue';


export const routes = [
    { path: '/', component: Home },
    { path: '/portfolio', component: Portfolio, name: 'portfolio' },
    { path: '/stocks', component: Stocks, name: 'stocks' },
    { path: '/endday', component: EndDay },
];
