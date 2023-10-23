import React, { useState, useEffect } from 'react'
import { Logo} from "../../components/logo/Logo"
import {  Container } from "reactstrap"
import {HeaderWrap} from "../../layout/header/Header"
import Menu from '../../layout/menu/Menu'
import MobileMenu from '../../layout/menu/MobileMenu'
import {BannerIndexData} from '../banner/BannerData'
import LogoDrak2x from '../../images/logo-dark2x.png'
import LogoLight2x from '../../images/logo2x.png'




const TopHeader = (props) =>{
    const [toggle, setToggle] = useState(false);
    const [offset, setOffset] = useState(0);
    const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
    window.scrollTo(0,0);
    viewChange();
    window.addEventListener("resize", viewChange);
    return () => {
        window.removeEventListener('resize', viewChange);
    };
  }, []);

  // function to change the design view under 1200 px
  const viewChange = () => {
    if (window.innerWidth < 992) {
      setMobileView(true);
    } else {
      setMobileView(false);
    }
  };

    return(
    <Container fluid className='header-container sticky-top bg-white border-bottom border-4 border-blue'>
                    <Container className='header-container '>
                    <HeaderWrap className='py-0'>
                        <div className="header-logo">
                            <Logo to=""
                            dark ={LogoDrak2x}
                            light ={LogoLight2x}
                            />
                        </div>
                        <div className="header-toggle" onClick={() => setToggle(!toggle)}>
                            <button className={`menu-toggler ${toggle === true ? "active" : ""}`} data-target="mainNav"> 
                                <em className="menu-on icon ni ni-menu"></em>
                                <em className="menu-off icon ni ni-cross"></em>
                            </button>
                        </div>
                        <nav className={`header-menu menu ${toggle === true ? "active" : ""} ${mobileView ? "mobile-menu" : ""}`}>
                            {!mobileView ? <Menu className="ms-lg-auto text-center" data={BannerIndexData} /> : <MobileMenu data={BannerIndexData}/>}
                        </nav>
                        {toggle && window.innerWidth < 992 && <div className="header-overlay" onClick={() => setToggle(!toggle)}></div>}
                    </HeaderWrap>
                </Container>
                </Container>

    )
}

export default TopHeader