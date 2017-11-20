import { Context } from "koa";
var m = require("mithril/hyperscript");
var render = require("mithril-node-render");
import { employees } from "../data/employees";

function employeesView(vnode) {
  var employees = vnode.attrs.employees
  return m('div', [
    m('table', [
      m('tbody', [
        m('tr', [
          m('th', 'UUID'),
          m('th', 'Name'),
          m('th', 'Address'),
          m('th', 'Age')
        ]),
        employees.map(employee => m('tr', {
          key: employee.uuid
        }, [
          m('td', employee.uuid),
          m('td', employee.name),
          m('td', employee.address),
          m('td', employee.age)
        ]))
      ])
    ])
  ])
}

export default async (context: Context) => {
  context.body = await render({ view: employeesView }, { employees });
};
