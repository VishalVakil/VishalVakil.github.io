import React from 'react';
import './Skills.css';

const Skills = () => {
    // Define your skills here
    const skills = [
        "Python", "C", "JavaScript", "C++", "Bash", "SQL", "NoSQL", "MongoDB", "PostgreSQL", "Pytorch", "NumPy", "Matplotlib", "Scikit-Learn", "Pandas", "SciPy", "Convolutional Neural Network", "Embedded Systems", "Data Visualization", "Data Analysis",
        "Cloud Computing", "Internet of Things", "AWS", "Docker",  "Terraform", "Jenkins", "Spring Framework", "Restful API Development", "Linux OS" , "Scrum",
        "Node.Js", "React.JS", "D3.JS", "Git", "Junit", "Rally", "JIRA", "Sonar Lint", "Confluence", "Tableau", "Power BI"
    ];

    return (
        <section  className="py-2">
            <div className="container" id="skills" styles={{scrollMarginTop: '100px'}}>
                <h2>Skills</h2>
                <div className="skills d-flex" style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                {skills.map((skill, index) => (
                    <div key={index} className="skill">{skill}</div>
                ))}
                </div>
            </div>
        </section>
        
    );
}

export default Skills;
