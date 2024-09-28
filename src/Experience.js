
import React from 'react';

const Experience = () => {
  
  const tableData = [
    ['Machine Learning Engineer', 'Naya Energy', 'August 2024 - Present'],
    ['Software Engineer Intern', 'Sona Data Systems', 'June 2023 - August 2023'],
    ['Software Engineer', 'General Electric Company (GE)', 'June 2021 - August 2022'],
    ['Software Engineer Intern', 'Krossmark Innovations', 'January 2021 - April 2021'],
    ['Software Engineer Co-Op', 'Unity Pharma', 'January 2019 - December 2020']
];

  return (
    <section id='experience'>
    <div className="container">
      <div className="row">
                <div className="col">
                    <h2 className="ml-3">Professional Experience</h2>
                </div>
      </div>
      <div className="row"></div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Company</th>
            <th scope='col'>Duration</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (

                <td key={cellIndex}>
                  {/* {cellIndex === 2 ? (
                    // <a href={cell} target="_blank" rel="noopener noreferrer">
                    //   Link
                    // </a>
                  ) : (<p>{cell}</p>) */}
                  <p>{cell}</p>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </section>
  );
};

export default Experience;