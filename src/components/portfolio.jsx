import React, { useState } from 'react'
import Education from '../components/education';
import Skills from '../components/skills';


function portfolio() {
    const [activeSection, setActiveSection] = useState('education');

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <section className='portfolio' id='portfolio'>
            <h2 className='cTitle'>PORTFOLIO</h2>
            <nav>
                <ul>
                    <li
                        className={activeSection === 'education' ? 'active' : ''}
                        onClick={() => handleSectionChange('education')}>
                        EDUCACIÓN
                    </li>
                    <li
                        className={activeSection === 'skills' ? 'active' : ''}
                        onClick={() => handleSectionChange('skills')}>
                        HABILIDADES
                    </li>
                </ul>
            </nav>
            <div>
                {activeSection === 'education' && <Education />}
                {activeSection === 'skills' && <Skills />}
            </div>
        </section>
    )
}

export default portfolio

