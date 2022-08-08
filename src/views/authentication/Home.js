import "./home.css"
import React from "react";

const Home = () => {

    const handleClick = () => {
        console.log()
    }

    return (
        <div className="welcomeContainer">
            <div className="upPage">
                <div className="upPage-title">

                </div>
                <div className="upPage-text">
                    <h1>Welcome to Quinessential School <br />Student Database System</h1>
                </div>

            </div>
            <div className="downPage">
                <button style={{width: '15%', height: '10%', color: 'black'}} className="button" onClick={handleClick}> Add A New Student</button>
                <button style={{width: '15%', height: '10%', color: 'black'}} className="button" onClick={handleClick}>Update A Student</button>
                <button style={{width: '15%', height: '10%', color: 'black'}} className="button" onClick={handleClick}>Find A Student</button>
                <button style={{width: '15%', height: '10%', color: 'black'}} className="button" onClick={handleClick}>Get All Student</button>
                <button style={{width: '15%', height: '10%', color: 'black'}} className="button" onClick={handleClick}>Delete A Student</button>




            </div>

        </div>

    )
}
export default Home