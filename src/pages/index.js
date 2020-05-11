import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
// import pic02 from '../assets/images/pic02.jpg'
// import pic03 from '../assets/images/pic03.jpg'
// import pic04 from '../assets/images/pic04.jpg'
// import pic05 from '../assets/images/pic05.jpg'
// import pic06 from '../assets/images/pic06.jpg'

import { graphql } from 'gatsby'

class HomeIndex extends React.Component {

    constructor(props) {
        super(props);
        console.log(props.data)
    }

    render() {

        return (
            <Layout>
                <Helmet
                    title="SoarSynergy"
                    meta={[
                        { name: 'description', content: 'A Perfect Synergy of Business, IT & Marketing Solutons' },
                        { name: 'keywords', content: 'Business, IT, marketing' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        { this.props.data.allWordpressPage.nodes.map((page) => {
                                return (
                                    <article style={{backgroundImage: `url(${pic01})`}}>
                                        <header className="major">
                                            <h3>{page.title}</h3>
                                            <p>{page.acf.sub_title}</p>
                                        </header>
                                        <Link to={`/${page.slug}`} className="link primary"></Link>
                                    </article>
                                )
                          })

                        }
                        <article style={{backgroundImage: `url(${pic01})`}}>
                                        <header>
                                            <div  className="story">
                                               <figure className="story__shape">
                                                    <img src="http://ec2-54-79-66-151.ap-southeast-2.compute.amazonaws.com/wp-content/uploads/2019/11/client-4.png" 
                                                          alt="Inam Ullah"
                                                          className="story__img"/>
                                                    <figcaption class="story__caption"></figcaption>
                                               </figure>
                                               <div className="story__text">
                                                    <h4 class="heading-tertiary" style={{color: 'black'}} >Inam Ullah - Director of Engineering  </h4>
                                                     
                                                    <p style={{color:"gray"}}>
                                                        As Techarete’s Director of Engineering, I have worked within many partnerships and this is an exciting one that has opened doors to many other opportunities. Soar Synergy’s business and strategic vision has really impressed me. 
                                                    </p>
                                               </div>


                                            </div>
                                         
                                        </header>
                        </article>
                     
           
                        {/* <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>Consequat</h3>
                                <p>Ipsum dolor sit amet</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article> */}
                        {/* <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Etiam</h3>
                                <p>Feugiat amet tempus</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article> */}
                    </section>
                   
                </div>
                <section id="one" className="tiles">
                <div className="inner">
                    <div className="row">
                     <ul className="actions" >
                        <h1 style={{fontSize:"2.7rem"}}>Our Services & Solutions</h1>
                        <li><Link to="/our-services-and-solutions" className="button next scrolly" >Read More</Link></li>
                     </ul>
                    </div>
                    
                </div>
                        
                </section>
            </Layout>
        )
    }
}

export const data = graphql`
query fristQuery {
    allWordpressPage {
      nodes {
        title
        slug
        acf {
          sub_title
        }
      }
    }
  }
  
`

export default HomeIndex