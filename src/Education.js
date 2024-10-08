import React from 'react';
import ASU from './image/ASU.jpg';
import NU from './image/NU.png';
import './Education.css';

function Education() {
    const degrees = [
        {
            degreeName: "Master of Science in Computer Science",
            universityName: "Arizona State University",
            gpa: "3.83 / 4.0",
            startDate: "August 2022",
            endDate: "May 2024",
            //transcript : 'https://drive.google.com/file/d/1-RNBadwd3hPXi1Fw_P2gX4yTYSjHG0Cz/view?usp=sharing',
            image: ASU
        },
        {
            degreeName: "Bachelor of Technology in Instrumentation and Control Engineering with Minor Specialization in Computer Engineering",
            universityName: "Nirma University",
            gpa: "7.80 / 10",
            startDate: "August 2017",
            endDate: "May 2021",
            //transcript: 'https://drive.google.com/file/d/1mM-HGfy83UvKlFPVkT_UAdGKrRi4doi1/view?usp=sharing',
            image: NU
        }
    ];

    return (
        <section id="education">
            <div className="container" style={{marginTop:'25px'}}>
                <div className="row">
                <div className="col">
                    <h2 className="ml-3">Education</h2>
                </div>
                </div>
                <div className="row">
                {degrees.map((degree, index) => (
                    
                        <div className="col-md-6 mb-4">
                            <div className="mb-4"
                                style={{ backgroundImage: `url(${degree.image})`, 
                                backgroundPosition: 'center', 
                                backgroundSize: 'cover', 
                                display: 'flex', 
                                flexDirection: 'column', 
                                justifyContent: 'flex-end', 
                                height: '300px', 
                                // width: '650px' 
                                }}
                            >
                            <div className="content" style={{ color: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                <h4 style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>{degree.degreeName}</h4>
                                <h5 style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>{degree.universityName}</h5>
                                <h5 style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>GPA: {degree.gpa} </h5>
                                <h6 style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>{degree.startDate} - {degree.endDate}</h6>
                                {/* <a href={degree.transcript} target='_blank' download className="btn btn-secondary">Transcript</a> */}
                            </div>
                            </div>
                        </div>
                    
                ))}
                </div>
            </div>
        </section>

    );
}

export default Education;
