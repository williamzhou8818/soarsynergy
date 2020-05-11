import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
// import logo from '../assets/images/SOAR_LOGO_WHITE.png'
import logo from '../assets/images/SoarLogoWhiteBold2.png';

const Header = (props) =>  {
    useEffect(() => {
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
            if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
                document.getElementById("header").style.background = "#242943";
            } else {
                document.getElementById("header").style.background = "rgba(0,0,0,0.5);";
            } 
    
        }
        //
    }, [])
    return (
        <header id="header" className="alt" style={{position:"fixed"}}>
            <Link to="/" className="logo">
                <img src={logo} width="109" style={{padding: "10px 5px"}} />
            </Link>
            <nav>
                <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Menu</a>
            </nav>
        </header>
    )
}


Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
