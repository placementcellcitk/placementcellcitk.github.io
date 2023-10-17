import React from 'react';
import { useEffect } from "react";
import '../../src/Strength.css'; // Create a CSS file for styling

const data1 = [
  ['CSE', '100'],
  ['ECE', '65'],
  ['IE', '65'],
  ['FET', '65'],
  ['CIVIL', '65'],
  ['MCD', '30'],
];

const data2 = [
    ['CSE', '18'],
    ['WRHE', '18'],
    ['GET', '18'],
    ['MCD', '15'],
    ['FET', '18'],
];

const data3 = [
    ['CSE', '30'],
    ['ECE', '30'],
    ['AMT', '30'],
    ['CIVIL', '30'],
    ['CI', '30'],
    ['FPT', '30'],
];

const Table = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="table-container">
        <h1 className='special'>Department Wise UG Strength</h1>
      <table>
        <thead>
          <tr>
            <th>Department</th>
            <th>Strength</th>
          </tr>
        </thead>
        <tbody>
          {data1.map((row, index) => (
            <tr key={index}>
              <td>{row[0]}</td>
              <td>{row[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br></br>
      <h1 className='special'>Department Wise PG Strength</h1>
      <table>
        <thead>
          <tr>
            <th>Department</th>
            <th>Strength</th>
          </tr>
        </thead>
        <tbody>
          {data2.map((row, index) => (
            <tr key={index}>
              <td>{row[0]}</td>
              <td>{row[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br></br>
      <h1 className='special'>Department Wise Diploma Strength</h1>
      <table>
        <thead>
          <tr>
            <th>Department</th>
            <th>Strength</th>
          </tr>
        </thead>
        <tbody>
          {data3.map((row, index) => (
            <tr key={index}>
              <td>{row[0]}</td>
              <td>{row[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;