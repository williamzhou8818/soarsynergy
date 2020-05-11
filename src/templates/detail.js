import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'
import { graphql } from 'gatsby'

const Detail = ({data}) => (

    <Layout>
        <Helmet>
            <title>Generic - Forty by HTML5 UP</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>{data.wordpressPage.title}</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <div dangerouslySetInnerHTML={{__html: data.wordpressPage.content}}/>
                </div>
            </section>
        </div>

    </Layout>
)

export default Detail

export const data = graphql`
query DetailQuery($slug: String!) {
    wordpressPage(slug: {eq:$slug}) {
      content
      title
      slug
    }
  }
  
`