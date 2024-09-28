import React from 'react';

const HonorsAndActivities = () => {

    const honors = [
        {
            bold: "Gold Cup ",
            details: "in the 5th Mitsubishi Electric Cup 2020, India (National Level automation competition organized by Mitsubishi Electric India.)"
        },
        {
            bold: "Best Project Award ",
            details: "from Idea-Lab, Nirma University for developing a low-cost Vein Detector in IdeaLab 2020-21"
        },
        {
            bold: "Certifications: ",
            details: "Lean Six Sigma: Define and Measure Tools, Machine Learning, Neural Networks and Deep Learning, RPA Basics"
        },
        {
            bold: "Tutor of the Year Award and Recognition Award ",
            details: "for Significant Contributions to ASU America Reads by Arizona State University"
        },
    ];
    

    // State to track whether project info is displayed
    // const [projectInfoVisible, setProjectInfoVisible] = useState(false);
    // const [selectedProject, setSelectedProject] = useState(null);

     // Function to toggle project info visibility
    // const toggleProjectInfo = (index) => {
    //     if (selectedProject === index) {
    //     setProjectInfoVisible(!projectInfoVisible);
    //     } else {
    //     setProjectInfoVisible(true);
    //     }
    //     setSelectedProject(index);
    // };

    return (
        <section id="honors-and-activities" className="py-2">
            {/* <div className="container" style={{marginTop: '20px'}} id='Poster'>
            <h2>Poster Presentation</h2>
            <div className="row">
                {posters.map((project, index) => (
                <div key={index} className="col-md-6 mb-6">
                    <div className='skill'>
                        <h4>{project.title}</h4>
                        <h6>~{project.conference}~</h6>
                    </div>
                </div>
                ))}
            </div>
            </div> */}
            
            {/* <div className="container" style={{marginTop: '20px'}} id='Certification'>
            <h2>Certifications</h2>
                <div className="row">
                    {certificates.map((certificate, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className={`skill`} style={{minHeight: '520px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                                <div>
                                    <h4>{certificate.title}</h4>
                                    <ul>
                                        {certificate.details.map((points, index) => (<li style={{textAlign: 'left'}} key={index}>{points}</li>))}
                                    </ul>
                                </div>
                                <div style={{marginTop: 'auto', textAlign: 'center'}}>
                                    <a href={certificate.doc} target='_blank' download className="btn btn-secondary">{certificate.name}</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}


            <div className="container" style={{marginTop: '2px'}} id='Activity'>
                <h2>Honours, Awards and Certifications</h2>
                <div className="row-2">
                    {honors.map((activity, index) => (
                    <div key={index}>
                        <div className={`skill`} style={{minHeight: '100%'}}>
                            <p style={{textAlign: 'justify'}}><b>{activity.bold}</b>{activity.details}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HonorsAndActivities;