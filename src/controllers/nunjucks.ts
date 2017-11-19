import { Context } from "koa";
import { employees } from '../data/employees';
import * as Nunjucks from 'nunjucks';

const template = `
<div>
<table>
<tbody>
  <tr>
    <th>UUID</th>
    <th>Name</th>
    <th>Address</th>
    <th>Age</th>
  </tr>
    {% for employee in employees %}
        <tr>
        <td>{{ employee.uuid }}</td>
        <td>{{ employee.name }}</td>
        <td>{{ employee.address }}</td>
        <td>{{ employee.age }}</td>
        </tr>
    {% endfor %}
</tbody>
</table>
</div>
`;

const compiledTemplate = Nunjucks.compile(template);

export default async (context: Context) => {

    if(typeof context.request.query.nocompile == 'undefined'){
        context.body = Nunjucks.renderString(template,{employees: employees})
    } else {
        context.body = compiledTemplate.render({employees: employees})
    }
}