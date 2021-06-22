import React from 'react'

const Enrolment = () => {
    return (
        <div>
            <h1>Enrolment form</h1>
            <div>
                <h2>Select course:</h2>
                <form action="">
                    <ul className="register-selector">
                        <div>
                            <input id="student-option" type="radio" name="register-op" value="student" />
                            <label className="register-option student-op" htmlFor="student-option"></label>
                        </div>
                        <div>
                            <input id="teacher-option" type="radio" name="register-op" value="teacher" />
                            <label className="register-option teacher-op" htmlFor="teacher-option"></label>
                        </div>
                    </ul>
                    <label htmlFor="fullName">Your Full Name*</label><input type="text" name="fullName" required />
                    <label htmlFor="email">Email Address*</label><input type="email" name="email" required />
                    <label htmlFor="password">Password*</label><input type="password" name="password" required />
                    <label htmlFor="childFullName">Child's name*</label><input type="text" name="childFullName" required />
                    <label htmlFor="childBirthDate">Child's birthdate*</label><input type="password" name="childBirthDate" required />
                    <label htmlFor="childSchool">Child's school*</label><input type="text" name="childSchool" required />
                    <div>
                        <label htmlFor="codeExperience">Does your child have coding experience?</label>
                        <input type="radio" name="codeExperience" required />
                    </div>
                    <div>
                        <label htmlFor="scratchExperience">Has your child used Scratch before?</label>
                        <input type="radio" name="scratchExperience" required />
                    </div>

                    <button type="submit" className="submit-button register-button">Proceed</button>  
                </form>
            </div>
        </div>
    )
}

export default Enrolment
