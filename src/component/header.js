
import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Anchor, Drawer, Button } from 'antd';
import "../App.css"

const { Link } = Anchor;

function AppHeader(){
    return(
    <div id ='header' className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="http://google.com">TECH</a>
        </div>
          <div className="mobileHidden">
            <Anchor >
              <Link href="#hero" title="Home" />
              <Link href="#about" title="About" />
              <Link href="#feature" title="Features" />
              <Link href="#works" title="How it works" />
              <Link href="#faq" title="FAQ" />
              <Link href="#pricing" title="Pricing" />
              <Link href="#contact" title="Contact" />
            </Anchor>
            </div>   
         </div>
        </div>
        
    )
}
export default AppHeader;
