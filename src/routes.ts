import reactController from './controllers/react';
import es6Controller from './controllers/es6';
import nunjucksController from './controllers/nunjucks';

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
    }
]

interface Route {
    path: string;
    method: string;
    action: any;
}