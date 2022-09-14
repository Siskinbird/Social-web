import React from "react";

function Main() {
    return (
        <main className='content'>
            <div className="head-img"></div>
            <div className="author__body">
                <img className="author__body-avatar" alt="Avatar" />
                <div className="author__body-description">
                    <h2>Dmitry Chizhov</h2>
                    <p>Date of burn: 12.10.1986</p>
                    <p>City: Moscow</p>
                    <p>Education: Crunch univercity</p>
                    <p>Web Site: <a href="https://dmich.ru">dmich.ru</a></p>
                </div>
            </div>
        </main>
    )
}

export default Main;