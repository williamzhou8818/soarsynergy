import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'
import technology from '../assets/images/Technology.png'

const Technology = (props) => (
    <Layout>
        <Helmet>
            <title>Technology Solutions</title>
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
                        <h1>Technology Solutions</h1>
                    </header>
                    <section>
                        <h3>What do we mean by technological development?</h3>
                        <p>{`
                        The technological landscape is constantly evolving. Therefore, organisations are constantly looking for new ways to operate in this environment while facing complex business challenges. Here at Soar Synergy, we strive towards providing tailored IT solutions to our clients to enhance their strategic capabilities. Our IT professionals work across an extensive range of well-known systems, languages, frameworks and expert services to provide versatile, feature-rich solutions that can be incorporated seamlessly into an existing setup to minimise disruptions.

                        `}</p>
                    </section>
                    <section style={{textAlign:"center"}}>
                        <h3>Our Software Development Model
                        </h3>
                        <img src={technology} alt="" style={{width:"75%"}}/>
                    </section>
                   

                    <section>
                        <h3>Software Product Development</h3>
                        <span>Distinguish yourself and soar high above your competition!</span>
                        <p>{`
                        In today’s dynamic environment, innovative technology acts as a crucial factor in determining your business’ success. Our experts focus on providing you with the means necessary to gain a competitive edge in the industry. 
                        `}</p>

                        <p>  <strong>Web Application development</strong>  <br/>

                            Our goal is to provide you with custom web application and development services that you need by conducting thorough research to understand your objectives. We strive to provide you with impressive and innovative solutions to bring your ideas to life.<br/>

                             <strong>Mobile Application Development</strong>  <br/>

                            We make use of holistic strategies to design customised mobile applications to the next level. We help our clients grow by providing them with innovative solutions to put them ahead of the curve.
                            </p>

                       
                    </section>

                    <section>
                        <h3>Website and eCommerce Solutions</h3>
                        <p>{`
                            Websites are the face of your business online, therefore we provide solutions to majestically present you to your audience. We partner with you to realise their true potential by providing them with SMART, practical and comprehensive end-to-end eCommerce, Website design and development solutions to achieve your online goals.                         `}
                        </p>

                        <h3>Digital Workspace</h3>
                        <p>{`
                            A digital workplace is the natural evolution of the business workplace as it entails the business technology working environment. Employees’ expectations will shift as the workplace continues to evolve, and businesses not embracing the digital workplace will fall behind.
                            We design and develop digital workspaces to empower your business with technology so anyone can work anywhere while reducing or eliminating the traditional office.
                             `}
                        </p>

                        <h3>Automation</h3>
                        <p>{`

                            We realise it is essential for businesses to improve upon their existing practices through digitisation and automation. No one likes to constantly repeat work, so our aim is to reduce repetitive processes by assisting our clients in optimising their operations and processes. We create IT solutions and let technology work for you. Always work smarter, not harder.
                             `}
                        </p>


                        <h3>Integration</h3>
                        <p>{`
                            Any business, irrespective of its scale or industry of operations needs its systems to be well-integrated. We integrate different systems to provide a smooth transfer of data and connectivity (ie. API) as it is essential that the diverse components of a business are in sync to ensure efficiency.                             `}
                        </p>

                        <h3>Virtual Team</h3>
                        <p>{`
                            Our virtual team is your team working remotely. It is like having your own specialist internal resources but without the HR responsibilities.                                                     `}
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

export default Technology