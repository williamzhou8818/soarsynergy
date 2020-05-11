import React from 'react'

const Footer = (props) => (
    <footer id="footer">
          
        <div className="inner" style={{display:"flex", justifyContent:"space-between", flexWrap:"wrap"}}>
            <ul className="icons">
                {/* <li><a href="#" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li> */}
                <li><a href="https://www.facebook.com/soarsynergy/" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                {/* <li><a href="#" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li> */}
                {/* <li><a href="#" className="icon alt fa-github"><span className="label">GitHub</span></a></li> */}
                <li><a href="https://www.linkedin.com/company/soar-synergy/" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
            </ul>
            {/* <ul className="icons">
                <li>Blog</li>
                <li><a href="#">Partners</a></li>
            </ul> */}
            <ul className="copyright">
                <li>&copy; SOAR Synergy</li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Support Call (0481 392 640)</a></li>
            </ul>
        </div>
    </footer>
)

export default Footer
