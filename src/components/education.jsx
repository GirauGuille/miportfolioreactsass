import React from 'react'
import college from '../data/education.json'


function education() {
    return (
        <div className='timeLine'>
                    <div className="education">
                        {college.map((item) => (
                            <div key={item.id} className='infoTimeline'>
                                <span className='date'>{item.year}</span>
                                <div className='line'>
                                    <span className='circle'></span>
                                </div>
                                <div className="content">
                                    <img className='imgTitle' src={`../src/img/${item.img}`} alt={item.title} />
                                    <div className="title">
                                        {item.title}
                                    </div>
                                    <div className="inst">
                                        {item.institucion}
                                    </div>
                                    <img className='imgTitle' src={`../src/img/school/${item.logoI}`} alt={item.title} />
                                </div>
                            </div>
                        ))}
                    </div>
            </div>
    )
}

export default education