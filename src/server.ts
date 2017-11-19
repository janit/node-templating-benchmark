import * as Koa from 'koa';
import * as Router from 'koa-router';
import { AppRoutes } from './routes';

const app = new Koa();
const router = new Router();

AppRoutes.forEach(route => {
    router[route.method](route.path,route.action)
});

app.use(router.routes());

app.listen(3000);
console.log('listening on 3000');
