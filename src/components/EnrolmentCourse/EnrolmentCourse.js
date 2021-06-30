import React from 'react'

const EnrolmentCourse = (props) => {

    return (
        <label className={props.currentCourseNo === props.value ? "course-option selected" : "course-option"}>
            <h2 className="course-title">{props.title}</h2>
            <div className="course-image"><img src={props.image} alt="" /></div>
            <p className="course-small">Start Date: 01 January 2022<br/>Time: 0:00AM<br/>Location: Auckland</p>
            <h2 className="course-price">${props.price}</h2>
            <p className="course-small">for Term 2 (9 Sessions)</p>
            <input type="radio" name="courseNo" value={props.value} checked={props.currentCourseNo === props.value} onChange={props.onChange} />
        </label>
    )
}

export default EnrolmentCourse
