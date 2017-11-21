import reactController from './controllers/react';
import es6Controller from './controllers/es6';
import nunjucksController from './controllers/nunjucks';
import pugController from './controllers/pug';
import mithrilController from './controllers/mithril';
import vueController from './controllers/vue';

export const AppRoutes: [Route] = [
    {
        path: '/react',
        method: 'get',
        action: reactController
    },
    {
        path: '/es6',
        method: 'get',
        action: es6Controller
    },
    {
        path: '/nunjucks',
        method: 'get',
        action: nunjucksController
    },
    {
        path: '/pug',
        method: 'get',
        action: pugController
    },
    {
        path: '/mithril',
        method: 'get',
        action: mithrilController
    },
    {
        path: '/vue',
        method: 'get',
        action: vueController
    }
]

interface Route {
    path: string;
    method: string;
    action: any;
}