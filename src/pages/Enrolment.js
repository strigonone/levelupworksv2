import React, {useState} from 'react';
import './Enrolment.css';
import axios from 'axios';

import ProgressTrack from '../components/EnrolmentCourse/EnrolProgressTrack';
import LoginButton from "../components/LoginButton/LoginButton";
import EnrolmentCourse from "../components/EnrolmentCourse/EnrolmentCourse";

import Course1 from '../assets/img/EnrolCourse/Course1.png'
import Course2 from '../assets/img/EnrolCourse/Course2.png'
import LevelUpLogo from '../assets/img/EnrolCourse/logolong.jpg';

const Enrolment = () => {
    const [enrolData,setEnrol] = useState(
        {  
            courseNo: "1",
            fullName: "",
            email: "",
            password: "",
            childName: "",
            childBirthDate: "",
            childSchool: "",
            childCodingExp: "",
            childScratchExp: ""
        }
    )

    const handleEnrolChange = e => {
        const { name, value } = e.target;
        setEnrol(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    

    const submitEnrol = e => {
        e.preventDefault();
        axios.post('http://localhost:6969/api/enrol', enrolData)
        .then(res => console.log(res.data))
    }

    return (
        <div className="enrol-form-box">
            <img className="levelup-logo" src={LevelUpLogo} alt="Level Up Works Logo" />
            <ProgressTrack />
            <LoginButton />
            <h1>Enrolment form</h1>
            <div className="enrol-form-container"> 
                <div>
                    <form onSubmit={submitEnrol}>
                        <h2>Select course:</h2>
                        <div className="course-selector">
                            <EnrolmentCourse title="Course 1" image={Course1} price="199" value="1" currentCourseNo={enrolData.courseNo} onChange={handleEnrolChange}  />
                            <EnrolmentCourse title="Scratch Game Building" image={Course2}  price="360" value="2" currentCourseNo={enrolData.courseNo} onChange={handleEnrolChange} />
                            <EnrolmentCourse title="Course 3" price="299" value="3" image={Course1}  currentCourseNo={enrolData.courseNo} onChange={handleEnrolChange} />
                        </div>

                        <div className="enrol-field">
                            <div><label htmlFor="fullName">Your Full Name*</label><input type="text" name="fullName" onChange={handleEnrolChange} value={enrolData.fullName} required /></div>
                            <div><label htmlFor="email">Email Address*</label><input type="email" name="email" onChange={handleEnrolChange} value={enrolData.email} required /></div>
                            <div><label htmlFor="password">Password*</label><input type="password" name="password" onChange={handleEnrolChange} value={enrolData.password} required /></div>
                            <div><label htmlFor="childName">Child's name*</label><input type="text" name="childName" onChange={handleEnrolChange} value={enrolData.childFullName} required /></div>
                            <div><label htmlFor="childBirthDate">Child's birthdate*</label><input type="text" name="childBirthDate" onChange={handleEnrolChange} value={enrolData.childBirthDate} required /></div>
                            <div><label htmlFor="childSchool">Child's school*</label><input type="text" name="childSchool" onChange={handleEnrolChange} value={enrolData.childSchool} required /></div>
                            <div className="radio-selection-container">
                                <label htmlFor="childCodingExp">Does your child have coding experience?</label>
                                <div>
                                    <label>Yes<input type="radio" name="childCodingExp" onChange={handleEnrolChange} value={true} required /></label>
                                    <label>No<input type="radio" name="childCodingExp" onChange={handleEnrolChange} value={false} required /></label>
                                </div>
                            </div>
                            <div className="radio-selection-container">
                                <label htmlFor="childScratchExp">Has your child used Scratch before?</label>
                                <div>
                                    <label>Yes<input type="radio" name="childScratchExp" onChange={handleEnrolChange} value={true} required /></label>
                                    <label>No<input type="radio" name="childScratchExp" onChange={handleEnrolChange} value={false} required /></label>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="submit-button course-button">Proceed</button>  
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Enrolment
