import React, { useState, useEffect } from "react";
import { Logo } from "../../components/logo/Logo";
import { Button, Container, Spinner } from "reactstrap";
import { HeaderWrap } from "../../layout/header/Header";
import Menu from "../../layout/menu/Menu";
import MobileMenu from "../../layout/menu/MobileMenu";
import { BannerIndexData,BannerIndexDataNoToken } from "../banner/BannerData";
import LogoDrak2x from "../../images/logo-dark2x.png";
import LogoLight2x from "../../images/logo2x.png";
import { Link } from "../../components/button/Button";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useLogoutUserMutation } from "../../store";

const TopHeader = (props) => {
  const nom = localStorage.getItem("nom");
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("accessToken");
  const linkTo = role === 'admin' ? '/admin' : '/user';

  const [toggle, setToggle] = useState(false);
  const [offset, setOffset] = useState(0);
  const [mobileView, setMobileView] = useState(false);
  const [loading, setLoading] = useState(false);

  const [logout, results] = useLogoutUserMutation();

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
    window.scrollTo(0, 0);
    viewChange();
    window.addEventListener("resize", viewChange);
    return () => {
      window.removeEventListener("resize", viewChange);
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

  const handleLogout = async () => {
    setLoading(true);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("nom");
    localStorage.removeItem("role");
    await logout();
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggl = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container
      fluid
      className="header-container sticky-top bg-white border-bottom border-2"
    >
      <Container className="header-container ">
        <HeaderWrap className="py-0">
          <div className="header-logo">
            <Logo to="" dark={LogoDrak2x} light={LogoLight2x} />
          </div>
          <div className="header-toggle" onClick={() => setToggle(!toggle)}>
            <button
              className={`menu-toggler ${toggle === true ? "active" : ""}`}
              data-target="mainNav"
            >
              <em className="menu-on icon ni ni-menu"></em>
              <em className="menu-off icon ni ni-cross"></em>
            </button>
          </div>

          <nav
            className={`header-menu menu ${toggle === true ? "active" : ""} ${
              mobileView ? "mobile-menu" : ""
            }`}
          >
            {!mobileView ? (
              <Menu className="ms-lg-auto text-center" data={token ? BannerIndexData : BannerIndexDataNoToken} />
            ) : (
              <MobileMenu data={token ? BannerIndexData : BannerIndexDataNoToken} />
            )}
          </nav>

          {nom ? (
            <>
              <ButtonDropdown isOpen={isOpen} toggle={toggl} className="ms-3">
                <DropdownToggle caret>{nom}</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <Link
                      to={linkTo}
                      target="_blank"
                      rel="noreferrer"
                      className='text-dark'
                    >
                      Mon compte
                    </Link>
                  </DropdownItem>
                  <DropdownItem className="text-center">
                    <Button className="bg-danger" onClick={handleLogout}>
                    {loading ? (
                      <Spinner size="sm" color="primary" />
                    ) : (
                      "Deconnecter"
                    )}
                    </Button>
                  </DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </>
          ) : (
            <>
              <Link
                to={`${process.env.PUBLIC_URL}/pages/auths/auth-register`}
                target="_blank"
                rel="noreferrer"
                className="btn text-white bg-blue mx-2"
              >
                S'inscrire
              </Link>
              <Link
                to={`${process.env.PUBLIC_URL}/pages/auths/auth-login`}
                target="_blank"
                rel="noreferrer"
                className="btn text-white bg-blue me-2"
              >
                Connecter
              </Link>
            </>
          )}

          {toggle && window.innerWidth < 992 && (
            <div
              className="header-overlay"
              onClick={() => setToggle(!toggle)}
            ></div>
          )}
        </HeaderWrap>
      </Container>
    </Container>
  );
};

export default TopHeader;
