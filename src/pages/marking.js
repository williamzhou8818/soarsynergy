import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'
import makting from '../assets/images/maketing.png'

const Marking = (props) => (
    <Layout>
        <Helmet>
            <title>Marketing Solutions</title>
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
                        <h1>Marketing Solutions</h1>
                    </header>
                    {/* <span className="image main"><img src={pic11} alt="" /></span> */}
                    <section>
                        <h3>Marketing Strategy:</h3>
                        <p>Do you have a marketing plan or strategy to bring your business vision to reality?</p>
                        <p>{`Our marketing strategies and solutions are not limited to a particular industry. we develop and implement integrated marketing campaigns across multiple channels working in tandem to realise your brand vision. `}</p>
                        <p>{`Working together with you, we develop a tailored marketing plan and strategy as we realise the importance of branding and marketing for your business’ growth. That is why we have adopted a strategic funnel-based approach to achieve goals and objectives at various stages of the marketing funnel. This will ensure that we meet the marketing objectives at each stage effectively and efficiently.`}</p>
                    </section>
                    <section style={{textAlign:"center"}}>
                        <img src={makting} alt="" width="75%"/>
                    </section>

                    <section>
                        <h3>DIGITAL MARKETING</h3>
                        <span>Businesses are going digital everyday to cope with the radically changing market. The digital revolution has opened new market possibilities for businesses.</span>
                    </section>
                    <section>
                        <h4>1. Email Marketing</h4>
                        <span>{`Communicate with your audience and customer with emails. Reach out to them conveniently with the help of email automations. We provide integrated email marketing solutions to help you communicate with your audiences.
                        `}</span>

                        <h4>2. Search Engine Optimisation (SEO)</h4>
                        <span>{`Search Engine Optimisation (SEO) is the practice of optimizing and structuring website content to be discovered easily by potential customers on a Search Engine Results Page(SERP) like Google. SEO has an immense role in the growth of any business’ digitally as people search for products and services online. Our wide array of on-page and off-page SEO services including technical SEO are uniquely designed to provide great results at minimal cost.`}</span>

                        <h4>3. Search Engine Marketing (SEM)</h4>
                        <span>{`Search Engine Marketing (SEM) is the process of buying paid ad space on search engines to show up at the top of the search results for certain intended keywords that are relevant for your business. Our team can help you plan, implement and maintain the SEM strategies to enhance your brand presence in this highly competitive space.
                                Our expertise in Adwords and pay-per-click (PPC) campaigns will enhance your brand’s digital footprint and increase the traffic to your website. 
                        `}</span>

                        <h4>4. Social Media Marketing</h4>
                        <span>{` 
                        Finding it challenging to establish your brand’s identity on social media platforms? 
                        Let us help you build your social media presence across platforms such as Instagram, Facebook, Twitter and LinkedIn to develop your online persona as an extension of your business. Let’s stand out among competitors.
                        
                        `}</span>

                        <h4>5. Lead Generation</h4>
                        <span>{` 
                        We realise that your businesses can’t survive or grow without substantial inflow of leads since they represent your prospective clients. That is why we focus on prioritising your business goals and use a variety of marketing services at various stages of the marketing funnel to help you attract, acquire, convert and retain leads.

                        `}</span>

                        <h4>6. Conversational Marketing (Chat bots)</h4>
                        <span>
                            {`
                            Customers today are constantly looking and opting for faster, more efficient and convenient communication methods even on-the-go. We can equip your website with instant and automated workflows to handle your customer enquiries even when you are not available so that you do not miss any interactions. 
                            `}
                        </span>


                    </section>

                    <section>
                        <h3>BRANDING</h3>
                        <h4>Logo Design</h4>
                        <p>Logo design is an essential creative element of a brand which facilitates brand recognition through the medium of visual and graphic messaging. We work with our clients to design logos that are not only timeless but also encapsulate what your brand is all about.</p>
                            
                         <h3>Print</h3>
                         <p>Increasing technological development has changed the marketing landscape. However, print media offers a brand experience that can’t be replicated by its digital counterparts. Our services focus on leveraging the benefits of print media to supplement your digital strategy and business growth.</p>
                    
                    </section>
                   
                   

                  
                    {/* <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.</p>
                    <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit tristique lorem ipsum dolor.</p> */}
                </div>
            </section>
        </div>

    </Layout>
)

export default Marking