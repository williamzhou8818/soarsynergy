import React from 'react'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner"  style={{textAlign:"center"}}>
            <header className="major">
                <h1>A Perfect Synergy of <br/>
                    Business, IT & Marketing Solutions
                </h1>
            </header>
            <div className="content" style={{textAlign:"center"}}>
                <div style={{width:"64%"}}></div>
                <ul className="actions">
                    <li ><a href="#one" className="button next scrolly">Get Started</a></li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner
