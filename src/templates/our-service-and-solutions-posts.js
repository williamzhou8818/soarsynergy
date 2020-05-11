import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'
import { graphql } from 'gatsby'

const OurServiceAndSolutionsPosts = ({data}) => (

    <Layout>
        <Helmet>
            <title>Generic - Forty by HTML5 UP</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
               
            </section>
        </div>

    </Layout>
)

export default OurServiceAndSolutionsPosts

// export const data = graphql`
// query DetailQuery($slug: String!) {
//     wordpressPage(slug: {eq:$slug}) {
//       content
//       title
//       slug
//     }
//   }
  
// `