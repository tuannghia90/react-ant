import React, { useState } from 'react';
import { FacebookOutlined,TwitterOutlined,LinkedinOutlined ,InstagramOutlined,ArrowUpOutlined} from '@ant-design/icons';
import { FloatButton } from 'antd';
import "../App.css"
function AppFooter() {

  return (
    
      <div id ='footer' className="footer">
       <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="http://google.com">Tech</a>
        </div>
        <div className='socials'>
        <ul>
            <li ><a href='https://facebook.com/'><FacebookOutlined /></a></li>
            <li ><a href='https://twitter.com/'><TwitterOutlined /></a></li>
            <li ><a href='https://www.linkedin.com/'><LinkedinOutlined /></a></li>
            <li ><a href='https://www.pinterest.com/'><i class="fab fa-pinterest-p"></i></a></li>
            <li ><a href='https://www.instagram.com/'><InstagramOutlined /></a></li>
        </ul>
        </div>
        <p>Copyright © 2020 Tech</p>
        <FloatButton.BackTop ></FloatButton.BackTop>
      </div>
     
  );
}

export default AppFooter;
