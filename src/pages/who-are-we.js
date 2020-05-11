import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const WhoAreWe = (props) => (
    <Layout>
        <Helmet>
            <title>WHO ARE WE</title>
            <meta name="description" content="Who are we" />
        </Helmet>

        {/* <BannerLanding  BannerLandTitle="Our Services & Solutions" BannerLandSubTitle="A sophisticated team of clever clogs that are on your side. As partners, here are the solutions we can bring to the table"/> */}

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
                        <h1>Who Are We </h1>
                    </header>
                    {/* <span className="image main"><img src={pic11} alt="" /></span> */}
                    <section>
                        <h3>Agencies in Melbourne? There's plenty. Thing is - We're NOT a traditional agency. </h3>
                        <p>At Soar Synergy, we provide end-to-end consultancy services for our clients, all the way from business analysis through to the delivery of the project. We collaborate with you to analyse and understand the current business and requirements, then utilising our strong base of knowledge, we provide our clients with a simple yet useful approach to ensure that all requirements are addressed. </p>
                    </section>

                    <section>
                        <p>{`
                        As a Business Solutions Partner, we are a non-agency and  we work a little differently to most. Our ethos maintains that we are investors of people. We develop relationships and invest in individuals. Our boutique team delivers custom solutions that have one thing in mind – Your Success. We are incredibly motivated to ensure that your OVERALL business goals are met – that you have expert business resources on hand throughout your business journey. 

                        `}</p>
                        <p>{`
                        Our strategists are here to problem solve with you, supporting your business with  Marketing, Technology and Business development  solutions, whilst working to scale your business to the next level.

                        `}</p>
                    </section>

                    <section>
                        <h4>Our Vision:</h4>
                        <p>
                            {`
                            To enhance small businesses to grow into mid-size and for mid-size to move to the next level by providing business, marketing and technical expertise and services

                            `}
                        </p>
                        <h4>Our Mission</h4>
                        <p>
                            {`
                             Our mission is to transform your Business Goals to a working business strategy that implements Technology and Marketing to produce business outcomes to meet your goals. 

                            `}
                        </p>
                    </section>

               
                  

                   
                    
                    {/* <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.</p>
                    <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit tristique lorem ipsum dolor.</p> */}
                </div>
            </section>
        </div>
    </Layout>
)

export default WhoAreWe