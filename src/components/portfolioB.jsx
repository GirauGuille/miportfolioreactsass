import React, { useState } from 'react';
import Education from './education';
import Skills from './skills';

function portfolioB() {
    const [activeItem, setActiveItem] = useState('educacion');

    return (
        <div>
            <div className="menu">
                <div
                    className={`menu-item ${activeItem === 'educacion' ? 'active' : ''}`}
                    onClick={() => setActiveItem('educacion')}>
                    Educación
                </div>
                <div
                    className={`menu-item ${activeItem === 'habilidades' ? 'active' : ''}`}
                    onClick={() => setActiveItem('habilidades')}>
                    Habilidades
                </div>
            </div>
            <div className="content">
                {activeItem === 'educacion' && <Education />}
                {activeItem === 'habilidades' && <Skills />}
            </div>
        </div>
    )
}

export default portfolioB