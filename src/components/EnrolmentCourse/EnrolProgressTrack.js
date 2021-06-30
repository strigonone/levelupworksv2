import React from 'react'
import './EnrolProgressTrack.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle  } from '@fortawesome/free-solid-svg-icons';

const EnrolProgressTrack = () => {
    return (
            <ul className="insurance-progress">
                <div className="progress-track">
                    {/* <div className="progress-track-overlay" style={{width: '50%'}}></div> */}
                </div>
                <div className="circle-container">
                    <li className="active">
                        <FontAwesomeIcon className="insurance-circle complete" icon={faCircle} />
                    </li>
                    <li>               
                        <FontAwesomeIcon className="insurance-circle incomplete" icon={faCircle} />
                    </li>
                    <li>
                        <FontAwesomeIcon className="insurance-circle incomplete" icon={faCircle} />
                    </li>
                </div>
            </ul>
    )
}

export default EnrolProgressTrack
