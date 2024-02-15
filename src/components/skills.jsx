import React, { useState, useEffect } from 'react';
import skillsData from '../data/skills.json';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import VisibilitySensor from "react-visibility-sensor";
import 'react-circular-progressbar/dist/styles.css';


function App() {

    return (
        <div>
            <div className='progress__box'>
{/*                 <button onClick={() => setFilter('todo')}>Mostrar Todo</button>
                <button onClick={() => setFilter('frontend')}>Filtrar por Frontend</button>
                <button onClick={() => setFilter('diseño')}>Filtrar por Diseño</button>
                <button onClick={() => setFilter('backend')}>Filtrar por Backend</button> */}

                {skillsData.map((item) => (
                    <div className="progress__circle">
                    <CircularProgressbarWithChildren strokeWidth={6} variant="determinate" value={item.percent} styles={buildStyles({ pathColor: "green", trailColor: "black", pathTransitionDuration: 0.5 })}>
                        <img src={`../src/img/tools/${item.icon}`} className='iconSills' alt="" />


                    </CircularProgressbarWithChildren>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;