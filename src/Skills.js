import React from 'react';
import './Skills.css';

const Skills = () => {
    // Define your skills here
    const ProgrammingScripting = ["Python", "C", "C++", "Assembly Language", "HTML", "JAVA", "JavaScript", "SWIFT", "Shell Scripting", "Linux/Unix", "R", "Scala", "GO", "React.js", "D3.js"];
    //Programming & Scripting Languages
    const DatabaseS = [
        "PostgreSQL", "MySQL", "SQL", "MongoDB", "DynamoDB", "GraphQL", "Couchbase"
    ];
    const MachineL = [
        "PyTorch", "Tensorflow", "Conda", "NumPY", "scikit-learn", "Pandas", "OpenCV"
    ];
    const STT = [
        "MATLAB", "Tableau", "UiPath", "PowerBI", "Rally", "Git", "Docker", "Spark", "Oracle", "Dialogflow", "Web Access SCADA", "AWS", "Azure", "Splunk", 
        "GX Works3-PLC", "Keil uVision", "Internet of Things (IoT)", "Industrial Automation", "Software Development", "Machine Learning", "Artificial Intelligence", "Raspberry Pi", "Natural Language Processing (NLP)", "Robotic Process Automation (RPA)", "Jira", "Flask", "Junit", "Terraform", "Ansible", "Jenkins", "Kubernetes", "Snowflake", "Kafka"
    ];
    
    return (
        <section  className="py-2">
            <div className="container" id="skills">
                <h2>Skills</h2>
                <div className="skills d-flex" style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                <h4>Programming & Scripting Languages: </h4>
                {ProgrammingScripting.map((skill1, index) => (
                    <div key={index} className="skill">{skill1}</div>
                ))}
                </div>
                <div className="skills d-flex" style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                <h4>Database & Querying Languages: </h4>
                {DatabaseS.map((skill2, index) => (
                    <div key={index} className="skill">{skill2}</div>
                ))}
                </div>
                <div className="skills d-flex" style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                <h4>Machine Learning Framework: </h4>
                {MachineL.map((skill3, index) => (
                    <div key={index} className="skill">{skill3}</div>
                ))}
                </div>
                <div className="skills d-flex" style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                <h4>Sofware Tool & Technologies: </h4>
                {STT.map((skill4, index) => (
                    <div key={index} className="skill">{skill4}</div>
                ))}
                </div>
            </div>
        </section>
        
    );
}

export default Skills;
