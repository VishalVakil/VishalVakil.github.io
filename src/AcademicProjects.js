
import React from 'react';

const AcademicProjects = () => {
  
  const tableData = [
    ['Heart Arrhythmia Detection Through Real-Time ECG Acquisition by Machine Learning Techniques', 'A heart disease detection system using CNN achieved 99.96% accuracy in binary classification and 97.08% in multi-class classification on real-time healthcare data.', 'https://link.springer.com/chapter/10.1007/978-981-97-3292-0_35'],
    ['Explainable predictions of different machine learning algorithms used to predict Early Stage diabetes', 'Implemented a diabetes prediction model using various machine learning algorithms, with Random Forest achieving 99% accuracy, and SHAP used for feature attribution on a dataset from Sylhet Hospital.', 'https://arxiv.org/abs/2111.09939'],
    ['AugVein - Augmented Reality-based Vein Detector', 'Developed a cost-effective Vein Detector which can save the medics time while operating the venipuncture. This idea was approved by Idea-Lab of Nirma University which provided the funding for the project.', 'https://technology.nirmauni.ac.in/idea_labs/augvein-vein-detection-through-augmented-reality/'],
    ['Tab-Ins-Pack', 'A tablet inspection machine which inspects the medicines on the basis of the cracks and defects through image processing and classifies them accordingly, also packs the desired perfect medicines according to the prescription and delivers it through an autonomous drone. My work in this project was to make a chatbot, website and an autonomous drone. I also worked on WebAccess SCADA.', 'https://github.com/VishalVakil/Tabot'],
    ['Ingenious Garbage Mate','A waste segregation machine which sorts different categories of wastes after collecting them through an autonomous car. Using IoT I made a device which reads the data from the Dustbin and sends it to the server automatically. I used Arduino, ESP8266 WiFi module, Ultrasound Sensor and a GSM Module for this project.','https://github.com/VishalVakil/Smart-Dustbin'],
    ['Comprehensive Healthcare Management Platform', 'Developed a secure healthcare web app with Django, featuring appointment scheduling, bill settlement, insurance issuance, staff coordination, ML-driven login, encrypted passwords, and a blockchain-integrated payment gateway','https://github.com/VishalVakil/Comprehensive-Healthcare-Management-Platform']
];

  return (
    <div className="container" id='academic-projects'>
      <div className="row">
                <div className="col">
                    <h2 className="ml-3">Projects</h2>
                </div>
                </div>
      <div className="row"></div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Project Name</th>
            <th scope="col">Description</th>
            <th scope='col'>Link</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>
                  {cellIndex === 1 ? (
                    <p style={{ textAlign: 'justify' }}>{cell}</p>
                  ) : cellIndex === 2 ? (
                    <a href={cell} target="_blank" rel="noopener noreferrer">
                      Link
                    </a>
                  ) : (<p>{cell}</p>)
                  }
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AcademicProjects;