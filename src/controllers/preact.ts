/** @jsx h */
import { Context } from "koa";
import { h } from "preact";
import render from "preact-render-to-string";
import { employees } from "../data/employees";

const renderEmployee = (employee) => (
  <tr key={employee.uuid}>
    <td>{employee.uuid}</td>
    <td>{employee.name}</td>
    <td>{employee.address}</td>
    <td>{employee.age}</td>
  </tr>
);

const Employees = ({ employees }) => (
  <div>
    <table>
      <tbody>
        <tr>
          <th>UUID</th>
          <th>Name</th>
          <th>Address</th>
          <th>Age</th>
        </tr>
        {employees.map(renderEmployee)}
      </tbody>
    </table>
  </div>
);

export default async (context: Context) => {
  context.body = render(<Employees employees={employees} />);
};
