import React from 'react'
import './EnrolProgressTrack.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle  } from '@fortawesome/free-solid-svg-icons';
import { faCircle as farFaCircle } from '@fortawesome/free-regular-svg-icons';

const EnrolProgressTrack = () => {
    return (
            <ul className="insurance-progress">
                <div className="progress-track"><div className="progress-track-overlay" style={{width: '50%'}}></div></div>
                
                <li className="active">
                    <FontAwesomeIcon className="insurance-circle complete" icon={faCircle} />
                </li>
                <li>               
                    <FontAwesomeIcon className="insurance-circle complete" icon={farFaCircle} />
                </li>
                <li>
                    <FontAwesomeIcon className="insurance-circle complete" icon={farFaCircle} />
                </li>
            </ul>
    )
}

export default EnrolProgressTrack
