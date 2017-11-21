import { Context } from "koa";
import { employees } from '../data/employees';

const Vue = require('vue')

const renderer = require('vue-server-renderer').createRenderer();

const app = new Vue({
  data: {
    employees: employees
  },
  template: `
  <div>
  <table>
  <tbody>
    <tr>
      <th>UUID</th>
      <th>Name</th>
      <th>Address</th>
      <th>Age</th>
    </tr>
          <tr v-for="employee in employees">
          <td>{{ employee.uuid }}</td>
          <td>{{ employee.name }}</td>
          <td>{{ employee.address }}</td>
          <td>{{ employee.age }}</td>
          </tr>
  </tbody>
  </table>
  </div>
  `
});

export default async (context: Context) => {

    // if(typeof context.request.query.nocompile == 'undefined'){
      renderer.renderToString(app, (err, html) => {
        if (err) throw err
        context.body = html
      })
    // } else {
    //   context.set('content-type','text/html');        
    //   context.body = renderer.renderToStream(app)
    // }
}