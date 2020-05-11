import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">What We Do</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/landing">Our Services & Solutions</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/who-are-we">Who Are We</Link></li>
                <li><a onClick={props.onToggleMenu} href="https://www.facebook.com/soarsynergy/">Blog</a></li>
                <li><Link onClick={props.onToggleMenu} to="/contact">Let's Connect</Link></li>

            </ul>
            {/* <ul className="actions vertical">
                <li><a href="#" className="button special fit">Get Started</a></li>
                <li><a href="#" className="button fit">Log In</a></li>
            </ul> */}
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
