import React, {useState} from 'react';
import './Enrolment.css';
import axios from 'axios';

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
    // console.log(enrolData);

    return (
        <div className="enrol-form-box">
            <div className="enrol-form-container">
            <h1>Enrolment form</h1>
                <div>     
                    <form onSubmit={submitEnrol}>
                        <h2>Select course:</h2>
                        <div className="course-selector">
                            <label className="course-option">
                                <h2>Course 1</h2>
                                <p className="course-desc">Lorem ipsum dolor sit amet</p>
                                <div className="course-image-placeholder"></div>
                                <p className="course-small">Start Date: 01 January 2022<br/>Time: 0:00AM<br/>Location: Auckland</p>
                                <h2 className="course-price">$XXX</h2>
                                <p className="course-small">for Term 2 (9 Sessions)</p>
                                <input type="radio" name="courseNo" value="1" checked={enrolData.courseNo === "1"} onChange={handleEnrolChange} />
                            </label>
                            <label className="course-option">
                                <h2>Course 2</h2>
                                <p className="course-desc">Lorem ipsum dolor sit amet</p>
                                <div className="course-image-placeholder"></div>
                                <p className="course-small">Start Date: 01 January 2022<br/>Time: 0:00AM<br/>Location: Auckland</p>
                                <h2 className="course-price">$XXX</h2>
                                <p className="course-small">for Term 2 (9 Sessions)</p>
                                <input type="radio" name="courseNo" value="2" checked={enrolData.courseNo === "2"}  onChange={handleEnrolChange} />
                            </label>
                            <label className="course-option">
                                <h2>Course 3</h2>
                                <p className="course-desc">Lorem ipsum dolor sit amet</p>
                                <div className="course-image-placeholder"></div>
                                <p className="course-small">Start Date: 01 January 2022<br/>Time: 0:00AM<br/>Location: Auckland</p>
                                <h2 className="course-price">$XXX</h2>
                                <p className="course-small">for Term 2 (9 Sessions)</p>
                                <input type="radio" name="courseNo" value="3" checked={enrolData.courseNo === "3"}  onChange={handleEnrolChange} />
                            </label>
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
