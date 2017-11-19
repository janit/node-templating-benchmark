import { Context } from "koa";
import { employees } from '../data/employees';
import * as Nunjucks from 'nunjucks';

const compiledTemplate = Nunjucks.compile(`

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

`);

export default async (context: Context) => {
    context.body = compiledTemplate.render({employees: employees})
}