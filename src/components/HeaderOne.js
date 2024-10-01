import { useRootContext } from "@/context/context";
import headerData from "@/data/header";
import useScroll from "@/hooks/useScroll";
import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";
import NavItem from "./NavItem";

const {
  title,
  logo1,
  title2,
  navItems,
  phone,
  socials,
} = headerData;

const HeaderOne = ({
  headerStyle = "header-style-one",
  onePage = false,
  topBar = false,
  autoContainer = false,
  links = true,
  rightMenu = false,
}) => {
  const { scrollTop } = useScroll(120);
  const { toggleMenu } = useRootContext();
  const newNavItems = navItems;
  let Logo = logo1

  return (
    <header
      className={`main-header${scrollTop ? " fixed-header" : ""
        } ${headerStyle}`}
    >
      {topBar && (
        <div className="topbar-four">
          <div className="auto-container">
            <p>{title2}</p>
            <div className="right-content">
              <div className="phone">
                <span className="icon flaticon-call"></span>
                <a href={`tel:${phone.split(" ")?.join("")}`}>{phone}</a>
              </div>
              <ul className="list-unstyled social-links">
                {socials.map(({ id, icon, href }) => (
                  <li key={id}>
                    <a href={href}>
                      <span className={icon}></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
      <div className="header-upper">
        <div className={autoContainer ? "inner-container clearfix" : ""}>
          <div
            className={
              autoContainer ? "auto-container" : "inner-container clearfix"
            }
          >
            <div className="logo-box">
              <div className="logo">
                <Link href="/">
                  <a title={title}>
                    <Image
                      id="thm-logo"
                      src={Logo}
                      alt={title}
                      title={title}
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="nav-outer clearfix">
              <div onClick={toggleMenu} className="mobile-nav-toggler">
                <span className="icon flaticon-menu-2"></span>
                <span className="txt">Menu</span>
              </div>

              <nav className="main-menu navbar-expand-md navbar-light">
                <div
                  className={
                    autoContainer
                      ? ""
                      : "collapse navbar-collapse show clearfix"
                  }
                  id={autoContainer ? "" : "navbarSupportedContent"}
                >
                  <ul className="navigation clearfix">
                    {newNavItems.map((navItem) => (
                      <NavItem
                        navItem={navItem}
                        key={navItem.id}
                        onePage={onePage}
                      />
                    ))}
                  </ul>
                </div>
              </nav>
            </div>

            {links && (
              <div className="other-links clearfix">
                <div className="link-box">
                  <div className="call-us">
                    <a
                      className="link"
                      href={`tel:${phone.split(" ")?.join("")}`}
                    >
                      <span className="icon"></span>
                      <span className="sub-text">Appelez-moi</span>
                      <span className="number">{phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            )}
            {rightMenu && (
              <div className="right-menu">
                <div onClick={toggleMenu} className="mobile-nav-toggler">
                  <span className="bar"></span>
                  <span className="bar"></span>
                  <span className="bar"></span>
                  <span className="txt">Menu</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderOne;
