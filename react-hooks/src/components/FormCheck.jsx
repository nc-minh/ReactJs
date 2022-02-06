import { useState } from 'react'

function FormCheck() {
    const courses = [
        {
            id: 0,
            name: 'HTML, CSS'
        },
        {
            id: 1,
            name: 'JavaScript'
        },
        {
            id: 2,
            name: 'ReactJS'
        }
    ]
    const [checked, setChecked] = useState()
    console.log(checked)
    const handleSubmit = () => {

    }
  return (
    <div>
        {
            courses.map(course => (
                <div key={course.id}>
                    <input 
                        type="radio"
                        checked={checked === course.id}
                        onChange={() => setChecked(course.id)}
                    />
                    {course.name}
                </div>
            ))
        }
        <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default FormCheck;
