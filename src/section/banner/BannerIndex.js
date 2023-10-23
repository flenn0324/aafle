import React, { useState, useEffect } from 'react'
import { Logo} from "../../components/logo/Logo"
import LogoDrak2x from '../../images/logo-dark2x.png'
import LogoLight2x from '../../images/logo2x.png'
import logo from "../../images/logo.png"
import { UncontrolledCarousel, Container, Row } from "reactstrap"
import {Header, HeaderWrap, HeaderContent, HeaderMain} from "../../layout/header/Header"
import Menu from '../../layout/menu/Menu'
import MobileMenu from '../../layout/menu/MobileMenu'
import {BannerIndexData, TopBannerData} from './BannerData'
import {Link} from "../../components/button/Button"
import AddUser from '../../components/svg/AddUser'
import User from '../../components/svg/User'



const BannerIndex = (props) =>{
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

  const items = [
    {
      src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
      altText: 'Slide 1',
      caption: 'Slide 1',
      header: 'Slide 1 Header'
    },
    {
      src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
      altText: 'Slide 2',
      caption: 'Slide 2',
      header: 'Slide 2 Header'
    },
    {
      src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
      altText: 'Slide 3',
      caption: 'Slide 3',
      header: 'Slide 3 Header'
    }
  ];

  
    return(
        <Header className={props.className && props.className} id={props.id && props.id}>
            <HeaderMain  className={`py-0 header-main header-main-s1 is-transparent ${offset > 0 ? "has-fixed" : ""}`}>
            <Container fluid className='bg-blue'>
                    <HeaderWrap className='py-0'>
                        <div className="header-logo">
                            <Logo to=""
                            dark ={logo}
                            light ={logo}
                            />
                        </div>
                        <h5>
                            <a href='/landing/index' className='text-white fst-italic ms-3'>Agence d'Annonces & de Formalités Légales Européenne</a>
                        </h5>
                        
                        <div className="header-toggle" onClick={() => setToggle(!toggle)}>
                            <button className={`menu-toggler ${toggle === true ? "active" : ""}`} data-target="mainNav"> 
                                <em className="menu-on icon ni ni-menu"></em>
                                <em className="menu-off icon ni ni-cross"></em>
                            </button>
                        </div>
                        <nav className={`header-menu menu ${toggle === true ? "active" : ""} ${mobileView ? "mobile-menu" : ""}`}>
                            {!mobileView ? <Menu className=" ms-lg-auto text-center" data={TopBannerData} /> : <MobileMenu data={TopBannerData}/>}
                        </nav>
                        <Link to={`${process.env.PUBLIC_URL}/pages/auths/auth-register`} target="_blank" rel="noreferrer" className="btn text-blue bg-white mx-2">
                          <AddUser></AddUser>
                          S'inscrire
                        </Link> 
                        <Link to={`${process.env.PUBLIC_URL}/pages/auths/auth-login`} target="_blank" rel="noreferrer" className="btn text-blue bg-white me-2">
                          <User></User>
                          Connecter
                        </Link>  
                        {toggle && window.innerWidth < 992 && <div className="header-overlay" onClick={() => setToggle(!toggle)}></div>}
                    </HeaderWrap>
                </Container>

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
            </HeaderMain>

            
            <HeaderContent className="mt-5 mb-5">
                <Container fluid>
                    <Row className="mt-3 mb-5">
                        <UncontrolledCarousel  items={items} />
                    </Row>
                    <Row className='bg-blue text-white text-center py-4 fst-italic'>
                        <h2>LE SPÉCIALISTE AU SERVICE DES PROFESSIONNELS DES CHIFFRES ET DU DROIT DEPUIS 1985</h2>
                    </Row>
                </Container>
            </HeaderContent>

        </Header>
    )
}

export default BannerIndex
