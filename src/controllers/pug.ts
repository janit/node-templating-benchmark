import { Context } from "koa";
import { employees } from '../data/employees';
import * as Pug from 'pug';

const fn = Pug.compile(`
div
  table
    tbody
      tr
        th UUID
        th Name
        th Address
        th Age
      each employee in employees
        tr
          td= employee.uuid
          td= employee.name
          td= employee.address
          td= employee.age
`);

export default async (context: Context) => {
    context.body = fn({employees: employees});
}