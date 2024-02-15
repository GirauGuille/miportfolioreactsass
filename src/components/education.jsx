import React from 'react'
import college from '../data/education.json'


function education() {
    return (
        <div className='timeLine'>
            <div className="education">
                {college.map((item) => (
                    <div key={item.id} className='infoTimeline'>
                        <div className="time">
                            <div className='date'><b>{item.year}</b></div>
                            <div className='decoration'>
                                <div className="linea"></div>
                                <div className="dot"></div>
                            </div>
                        </div>
                        <div className="content">
                            <img className='imgTitle' src={`../src/img/title/${item.img}`} alt={item.title} />
                            <div className='infoCourse'>
                                <div className="title"><b>{item.title}</b></div>
                                <div className="school">{item.institucion}</div>
                            <div className="toolsCourse">
                                {item.tools.map((tools, index) => (
                                    <img key={index} className='toolImage' src={`../src/img/tools/${tools}`} alt={`Tool ${index + 1}`} />
                                ))}
                            </div>
                            </div>
                            <img className='imgSchool' src={`../src/img/school/${item.logoI}`} alt={item.title} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default education