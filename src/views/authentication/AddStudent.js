import React, { useState } from   'react';
import "./addStudent.css"

const AddStudent = () => {

    const [fieldError, setFieldError] = useState(
        {
            name: {message: "", error:false},
            email: {message: "", error:false},
            address: {message: "", error:false}
        }
    )

    const handleChange = (e) => {
        setUserInput({ ...userInput, [e.target.name]: e.target.value})
        checkIfFieldIsEmpty(e)
    }
    const handleClick = () =>{
        console.log(userInput)
    }
    
    return (
        <div className="addStudent-component">
            <div className="centre-top">

            </div>
            <div className='twoSided-container'>
                <div className="leftSide">

                </div>
                <div className="rightSide">
                    <h3>ADD A NEW STUDENT</h3>

                    <div className="button-Container">
                        <Input text="text" handleChange={handleChange} icon={emailIcon} label="name" fieldError={fieldError}/>
                        <Input text="text" handleChange={handleChange} icon={emailIcon} label="email" fieldError={fieldError} />
                        <Input text="text" handleChange={handleChange} icon={passwordIcon} label="address" fieldError={fieldError} />

                    </div>


                </div>

            </div>

        </div>
    )
}

export default AddStudent;