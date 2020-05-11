import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Buniess = (props) => (
    <Layout>
        <Helmet>
            <title>Business Solutions</title>
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
                        <h1>Business Solutions</h1>
                    </header>
                    {/* <span className="image main"><img src={pic11} alt="" /></span> */}
                    <section>
                        <h3>Business Analysis/Consultancy:</h3>
                        <p>At Soar Synergy, we provide end-to-end consultancy services for our clients, all the way from business analysis through to the delivery of the project. We collaborate with you to analyse and understand the current business and requirements, then utilising our strong base of knowledge, we provide our clients with a simple yet useful approach to ensure that all requirements are addressed. </p>
                    </section>

                    <section>
                        <h3>Business Strategy:</h3>
                        <span>Our aim is to exceed Business Goals</span>
                        <p>At Soar Synergy, we provide end-to-end consultancy services for our clients, all the way from business analysis through to the delivery of the project. We collaborate with you to analyse and understand the current business and requirements, then utilising our strong base of knowledge, we provide our clients with a simple yet useful approach to ensure that all requirements are addressed. </p>
                    </section>
                    <section>
                        <p>{`1. Develop business plans and strategies to achieve business goals
                        All businesses are different, so we collaborate with you through a structured review of your existing business plan and strategy by using an analytical and data driven approach. 
                        From the analysis we work with you to create a well-laid out bespoke business strategy to align your vision and surpass your business goals.
                        `}</p>
                    </section>
                    <section>
                        <p>{`
                            2. Develop Go-To-Market strategy
                            When business ideas evolve to a product or service, a robust Go-To-Market strategy is key to a successful launch. We develop and support a SMART* Go-To-Market strategy that defines the blueprint which establishes timelines, outcomes and goals, thereby offering a realistic and attainable path to success.
                            *Specific, Measurable, Attainable, Relevant, Time-based
                            `}</p>
                    </section>
                    <section>
                        <p>{`3 Defining business vision, purpose and direction
                            A clear business vision is key to the growth and success of a business. We assist our clients in establishing a clear vision for their firm as it is an integral part of strategic management and acts as a motivating force. 
                            `}</p>
                    </section>
                        <section>{`
                            4. Enabling businesses via workshops and training
                                We realise that Workshops and Training programs provide a lot of benefits for individual employees and the businesses as a whole. These workshops yield high returns on investment since they help businesses maintain their competence and relevancy in a constantly changing environment. 
                                
                            - Improve market performance.
                            - Optimising strategy execution.
                            - Streamlining processes and operations
                            
                        `}</section>

                    <section>
                        <h3>Business Growth and Scale: </h3>
                        <p>In the era of constant change and disruption, having a well thought out business strategy is of absolute importance. We leverage our core competencies to provide effective business strategies to scale your organisation. 
                        Our services range from focusing on identifying your growth options and streams, building a fluid growth strategy, all the way to creating brand and marketing strategies and co-developing products and services to exceed your business goals.
                        </p>
                    </section>
                    <section>
                         <h3>Business Process Optimisation:  </h3>
                         <p>Businesses are required to optimise their operations as they continue to grow in size and complexity. We dive deep into analysing your business processes to understand each process requirement before re-engineering and streamlining processes to create efficiencies and optimisation.</p>

                    </section>
                   
                    
                    {/* <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.</p>
                    <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit tristique lorem ipsum dolor.</p> */}
                </div>
            </section>
        </div>

    </Layout>
)

export default Buniess