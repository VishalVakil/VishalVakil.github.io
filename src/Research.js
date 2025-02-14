import React from 'react';
import './Research.css';

function Research() {
  return (
    <section id="research" className="py-2">
          <div className="container" style={{ marginTop: '20px' }}>
              <h2>Research Papers and Patent</h2>
              <p style={{ textAlign: "justify" }}>
              <b>PATENT:</b> Published a Patent with Application No.: 202221000828, Title: <b>A MEDICATION INSPECTION AND PACKAGING DEVICE</b> at Mumbai, Intellectual Property India.<br />
              <p>The present invention provides an automated device for dispensing the medication for inspection and further packaging of said medication. The present invention further provides an accurate medication inspection and packaging device that works without any human intervention and thereby, substantially decreases the risk of contamination of medication, and reduces the discrepancies in dispensing medication as well. In addition, the present invention facilitates the real-time communication and simultaneous inspection and packaging of the medication to provide a cost-effective and user-friendly medication inspection and packaging device. I invented it with 17 other inventors. </p>
                  <b>PAPER:</b> Heart Arrhythmia detection through real-time ECG Acquisition by Machine Learning Techniques, presented in 12th International Conference on Soft Computing for Problem Solving 2023 and published in Lecture Notes in Networks and Systems, Springer.<br />
                  <b>Available at:</b> <a href="https://doi.org/10.1007/978-981-97-3292-0_35">https://doi.org/10.1007/978-981-97-3292-0_35</a> (First Author)
                  <br />
                  <b>PAPER:</b> Explainable predictions of different machine learning algorithms used to predict Early-Stage diabetes
                  <br /><b>Available at:</b> <a href="https://arxiv.org/abs/2111.09939">https://arxiv.org/abs/2111.09939</a> (First Author)
              </p>
      </div>
    </section>
  );
}

export default Research;
