import { Context } from "koa";
import { employees } from '../data/employees';

export default async (context: Context) => {
    context.body = `<div>
    <table>
    <tbody>
      <tr>
        <th>UUID</th>
        <th>Name</th>
        <th>Address</th>
        <th>Age</th>
      </tr>
      ${ employees.map( (employee) => {
        return `<tr>
          <td>${ employee.uuid }</td>
          <td>${ employee.name }</td>
          <td>${ employee.address }</td>
          <td>${ employee.age }</td>
        </tr>`
        }).join('')}
    </tbody>
    </table>
    </div>
    `
}