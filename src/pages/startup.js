import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'
import makting from '../assets/images/maketing.png'

const Startup = (props) => (
    <Layout>
        <Helmet>
            <title>Start up & Investments</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major" 
                            style={{
                                width: "100%",
                                fontSize: "2rem",
                                textAlign: "center",
                                fontFamily: " 'Averia Serif Libre', cursive"
                                
                            }}>
                        <h1>Start up & Investments</h1>
                    </header>
                    {/* <span className="image main"><img src={pic11} alt="" /></span> */}
                
                <section>
                        <p>{`Think you have an idea that could be a game changer? The Soar Synergy team can help bring that idea to life.`}</p>
                        <p>{`
                        We’re passionate about helping people, and their bright ideas reach their full potential. We have an experienced team with backgrounds in Business, IT, and Marketing, who provide hands-on mentoring and investment, to assist start-up founders, early-stage, and established businesses become successful and sustainable. Even if it includes helping you create a pitch deck and putting you in front of the right people for further funding and equity, we will be in it together.
                        `}</p>

                </section>
                <section>
                        <p>{`Let’s have a coffee and talk about our future together.`}</p>
                </section>
        

                   
                   
                   

                  
                    {/* <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.</p>
                    <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit tristique lorem ipsum dolor.</p> */}
                </div>
            </section>
        </div>

    </Layout>
)

export default Startup