import React from 'react';
import { useEffect } from "react";
import '../../src/Strength.css'; // Create a new CSS file for the second table

const data1 = [
  // You can populate this array with your data for the second table
  // Example:
  ['1', 'ITC Infotech', 'Associate IT Consultant', 'CS/ECE/IE', '4.5', '3'],
  ['2', 'APT Software', 'Junior Software Engineer', 'CS/ECE', '3.6', '4'],
  ['3', 'Sutherland Global', 'Associate', 'BTech All branches', '3.5', '7'],
  ['4', 'CAPACE SOFTWARE PVT LTD', 'Software Developer', 'CS', '5.5', '2'],
  ['5', 'TechVariable', 'Software Developer', 'BTech/MTech (All branches)', '4.2', '0'],
  ['6', 'Flash Electronics India Pvt Ltd', 'Apprentice Trainee ', 'ECE', '2', '9'],
  ['7', 'Re Sustainability Limited', 'Graduate Engineer Trainee', 'Civil/IE', '3.25', '1'],
  ['8', 'Drishti IAS', 'Business Development Associate', 'BTech All branches', '3.36', '9'],
  ['9', 'AMUL', 'Graduate Engineer Trainee', 'FET', '6.5', '2'],
  ['10', 'Siemens Energy', 'Design Engineer', 'IE', '4.56', '2'],
  ['11', 'Ditto Insurance', 'Insurance Advisor', 'BTech All branches', '5', '1'],
  ['12', 'Gyanohm Learning', 'Subject Matter Expert', 'BTech All branches', '2.16', '2'],
  ['13', 'SemiFront Technologies', 'Design/Verification Engineer', 'ECE', '5.5', '2'],
  ['14', 'BYJUs', 'Business Development Associate', 'BTech All branches', '7', '2'],
  ['15', 'Vintrus', 'Academic Counselor', 'BTech All branches', '4', '22'],
  ['16', 'Academor', 'Academic Counselor', 'BTech All branches', '4', '10'],
  ['17', 'Ultra Tech Cement', 'Technical Trainee', 'Diploma Civil Engg.', '3', '4'],
  ['18', 'Edu Station', 'Business Development Associate', 'BTech All branches', '4', '16'],
  ['19', 'Teachnook', 'Academic Counselor', 'BTech All branches', '4.5', '6'],
  ['20', 'Intellipat', 'Business Development Associate', 'BTech All branches', '7.25', '1'],
  ['21', 'Kodnest Technologies Pvt Ltd', 'Trainee', 'BTech All branches', 'N/A', '3'],
  
  // Add data for the remaining rows
];

const data2 = [
    ['1', 'Capgemini', 'Senior Analyst', 'CS/IT/ECE/IE', '7.5', '1'],
    ['2', 'Capgemini', 'Data Analyst', 'CS/IT/ECE/IE', '4', '3'],
    ['3', 'Wipro', 'Project Engineer', 'CS/IT/ECE/IE/CE', '4.5', '2'],
    ['4', 'Cognizant (CTS)', 'Programmer Analyst Trainee', 'CS/IT/ECE/IE', '4', '12'],
    ['5', 'Infosys', 'Systems Engineer', 'All Branches', '3.6', '8'],
    ['6', 'BYJU’S – The Learning App', 'Business Development Executive', 'All Branches', '10', '2'],
    ['7', 'BYJU’S – The Learning App', 'Academic Specialist', 'All Branches', '6', '2'],
    ['9', 'Indradhanush Gas Grid Limited', 'Graduate Engineer Trainee', 'ECE', '8', '1'],
    ['10', 'Intellect', 'Software Lead', 'CS/IT/ECE/IE', '5', '1'],
    ['11', 'Kunduz', 'Associate IT Consultant', 'CS/ECE/IE', '5', '1'],
    ['12', 'Open Silicon', 'Intern', 'ECE', '3', '1'],
    ['13', 'Techouts Solutions India Pvt Ltd.', 'Trainee Software Engineer', 'CSE/IT', '3.5', '2'],
    ['14', 'SRD Nutrients', 'Phone Banking Officer', 'FET', '1.8', '1'],
    ['15', 'ICICI Bank', 'Associate IT Consultant', 'FET', '3', '1'],
    ['16', 'DK Associates Pvt. Ltd.', 'Project Engineer', 'Civil', '5.07', '1'],
    ['17', 'Anupam Nirman Pvt. Ltd.', 'Site Engineer', 'Civil', '2.4', '1'],
    ['18', 'PHED', 'JE', 'Civil', '4.2', '4'],
    ['19', 'Pentagon Space Pvt Ltd', 'Full Stack Developer', 'CS/IT/ECE/IE', 'N/A', '2'],
    ['20', 'QSpiders', 'Software Testing / Software Developer', 'All Branches', 'N/A', '14'],
];

const data3 = [
  ['1', 'Capgemini', 'Analyst', 'CS/IT/ECE/IE', '4', '4'],
  ['2', 'Cognizant (CTS)', 'CIS ET-Engineer Trainee', 'CS/IT/ECE/IE', '4', '3'],
  ['3', 'Infosys', 'Systems Engineer', 'All Branches', '3.6', '1'],
  ['4', 'Valuefy Solutions Pvt. Ltd. ', 'Software Development Engineer', 'CSE/IT', '7.75', '1'],
  ['5', 'Open Silicon', 'VLSI Design Engineer', 'ECE/IE', '11.5', '1'],
  ['6', 'Joulepoint Private limited', 'Instrumentation Engineer', 'ECE/IE', '11', '1'],
  ['7', 'Minimac Systems Pvt. Ltd.', 'Trainee', 'MCD', '1.2', '1'],
  ['8', 'TTC INFRA INDIA', 'Project Engineer Trainee', 'Civil Engineering', '2.4', '2'],
  ['9', 'JUBILANT FOODWORKS LIMITED ', 'Graduate Engineer Trainee', 'Civil Engineering', '3.14', '1'],
  ['10', 'BoldTek India pvt ltd', 'Software Development Engineer', 'CS/IT/ECE/IE', '3', '1'],
  ['11', 'Renovision Automation Services pvt Ltd', 'Project Engineer Trainee', 'ECE/IE', '1.5', '1'],
  ['12', 'Silverdrop Foods and Beverages Pvt.Ltd', 'Graduate Engineer Trainee', 'FET', '1.2', '1'],
  ['13', 'Lords Food & Beverages', 'Graduate Engineer Trainee', 'FET', '1.2', '1'],
  ['14', 'Annapurna Group', 'Analyst', 'CS/IT/ECE/IE', '4', '4'],
  ['15', 'NRL ', 'Apprenticeship', 'IE', '2.8', '1'],
  ['16', 'Master India Brewing Company', 'Graduate Engineer Trainee', 'FET', '1.8', '1'],
  ['17', 'Neon Mobicom & Telesystems Pvt Ltd', 'Hardware Engineer', 'ECE/IE', '2.16', '1'],
]; 

const Table2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="table-container">
      <h1 className='special'>Placement Statics</h1>
      <br></br>
      <h1 className='special'>Placement Record 2023</h1>
      <table>
        <thead>
          <tr>
            <th>Sl. No.</th>
            <th>Company Name</th>
            <th>Post</th>
            <th>Branch</th>
            <th>CTC (LPA)</th>
            <th>No. of students selected</th>
          </tr>
        </thead>
        <tbody>
          {data1.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <br></br>
      <h1 className='special'>Placement Record 2022</h1>
      <table>
        <thead>
          <tr>
            <th>Sl. No.</th>
            <th>Company Name</th>
            <th>Post</th>
            <th>Branch</th>
            <th>CTC (LPA)</th>
            <th>No. of students selected</th>
          </tr>
        </thead>
        <tbody>
          {data2.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <br></br>
      <h1 className='special'>Placement Record 2021</h1>
      <table>
        <thead>
          <tr>
            <th>Sl. No.</th>
            <th>Company Name</th>
            <th>Post</th>
            <th>Branch</th>
            <th>CTC (LPA)</th>
            <th>No. of students selected</th>
          </tr>
        </thead>
        <tbody>
          {data3.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table2;