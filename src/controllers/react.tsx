import { Context } from "koa";
import * as React from "react";
import * as ReactDOMServer from "react-dom/server";
import { employees } from '../data/employees';

export default async (context: Context) => {

  const Employees = ({ employees }) => ( <div>
    <table>
    <tbody>
      <tr>
        <th>UUID</th>
        <th>Name</th>
        <th>Address</th>
        <th>Age</th>
      </tr>
      { employees.map( (employee) => ( <tr key={employee.uuid}>
          <td>{ employee.uuid }</td>
          <td>{ employee.name }</td>
          <td>{ employee.address }</td>
          <td>{ employee.age }</td>
        </tr>
      ))}
    </tbody>
    </table>
    </div>);

  context.body = ReactDOMServer.renderToStaticMarkup(<Employees employees={...employees} />);
}
