import { useState } from "react" 
import "../register.css"

export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [course, setCourse] = useState('Game Dev 101');
    const [courseLevel, setCourseLevel] = useState('Beginner');
    const [courseTime, setCourseTime] = useState('9AM - 12AM');

    return (
        <div className="create">
            <h2>Register for Course</h2>
            <form>
                <label>Your Name:</label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Course Selected:</label>
                <select value={course} onChange={(e) => setCourse(e.target.value)}>
                    <option value="Game Dev 101">Game Dev 101</option>
                    <option value="Game Dev Marketing">Game Dev Marketing</option>
                    <option value="Game Dev Art Intro">Game Dev Art Intro</option>
                    <option value="Game Dev Backend Intro">Game Dev Backend Intro</option>
                    <option value="Game Dev Art Foundation">Game Dev Art Foundation</option>
                    <option value="Marketing Appeal">Marketing Appeal</option>
                    <option value="Game Dev Unity Language">Game Dev Unity Language</option>
                    <option value="Game Dev 3D Art">Game Dev 3D Art</option>
                    <option value="Game Industry Overview">Game Industry Overview</option>
                </select>
                <label>Course Level:</label>
                <select value={courseLevel} onChange={(e) => setCourseLevel(e.target.value)}>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Expert">Expert</option>
                </select>
                <label>Course Time:</label>
                <select value={courseTime} onChange={(e) => setCourseTime(e.target.value)}>
                    <option value="9AM - 12AM">9AM - 12AM</option>
                    <option value="1PM - 3PM">1PM - 3PM</option>
                    <option value="3PM - 6PM">3PM - 6PM</option>
                </select>
                <label>Your Email:</label>
                <input
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Your Phone No:</label>
                <input
                    type="text"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <button> Add Course </button>
                <br></br>
                <br></br>
                <p>Your Name: { name }</p>
                <p>Your Email: { email }</p>
                <p>Your Phone No: { phone }</p>
                <br></br>
                <p>Selected Course Name: { course }</p>
                <p>Selected Course Level: { courseLevel }</p>
                <p>Selected Course Time: { courseTime }</p>
            </form>
        </div>
    )
}
