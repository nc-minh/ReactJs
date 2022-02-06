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
    const [checked, setChecked] = useState([])
    console.log(checked)
    const handleSubmit = () => {
        console.log({
            data: checked
        })
    }

    const handleCheck = (id) => {
        setChecked(prev => {
            const isChecked = checked.includes(id)
            if(isChecked){
                return checked.filter(item => item !== id)
            }else{
                return [...prev, id]
            }
        })
    }
  return (
    <div>
        {
            courses.map(course => (
                <div key={course.id}>
                    <input 
                        type="checkbox"
                        checked={checked.includes(course.id)}
                        onChange={() => handleCheck(course.id)}
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
