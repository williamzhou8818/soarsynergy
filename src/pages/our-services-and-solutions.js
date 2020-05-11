import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const ServiceAndSolutions = (props) => (
    <Layout>
        <Helmet>
            <title>Our Services & Solutions</title>
            <meta name="description" content="Our Services & Solutions" />
        </Helmet>

        <BannerLanding  BannerLandTitle="Our Services & Solutions" BannerLandSubTitle="A sophisticated team of clever clogs that are on your side. As partners, here are the solutions we can bring to the table"/>

        <div id="main">
            {/* <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Our Services & Solutions</h2>
                    </header>
                    <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna.</p>
                </div>
            </section> */}
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic08} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3 >Business</h3>
                            </header>
                            <p>Deep diving into the concept, structure and end to end strategy for your business. Reengineering to streamline business processes, improve life span and effectiveness of operations.</p>
                            <ul className="actions">
                                <li><Link to="/buniess" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic09} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Technology</h3>
                            </header>
                            <p>We deliver beautiful and functional online solutions that integrate seamlessly into your existing setup – feature-rich and adaptable.</p>
                            <ul className="actions">
                                <li><Link to="/technology" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic10} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Marketing</h3>
                            </header>
                            <p>Our marketing experts develop strategies that resonate and connect your audience to your brand’s story. Social, SEO, Paid Placement, Chatbots. Ask us how we can activate your brand in the real world.</p>
                            <ul className="actions">
                                <li><Link to="/marking" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic10} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Startup & Investment</h3>
                            </header>
                            <p>We offer support by way of technology, strategy and investment, meaning you can rest easy knowing we’ll be there for the long run.</p>
                            <ul className="actions">
                                <li><Link to="/startup" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default ServiceAndSolutions