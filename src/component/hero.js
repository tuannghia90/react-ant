
import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Anchor, Drawer, Button } from 'antd';
import "../App.css"
import { Carousel } from 'antd';

const { Link } = Anchor;
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

function AppHero(){
    
const items = [
    {
      key: '1',
      title: 'Web and mobile payment built for developers',
      content: 'Our innovative web and mobile payment solutions make transactions fast, secure, and effortless for both you and your customers. Say goodbye to the hassle of traditional payment methods and embrace the future of seamless payments.',
    },
    {
      key: '2',
      title: 'Work better together. Schedule meetings',
      content: "Collaborate and achieve your goals as a team. Join forces, share ideas and leverage each others strengths to reach new heights together. Let's work together and create a brighter future for us all.",
    },
    {
      key: '3',
      title: 'The best app to increase your productivity',
      content: 'Boost your productivity and streamline your workday with our cutting-edge app. Stay organized, prioritize tasks, and never miss a deadline. Get more done in less time and achieve your goals faster than ever before.',
    },
  ]
    return(
        <div id ='hero' className='heroBlock'>
            <Carousel autoplay>
            {items.map(item => {
          return (
            <div key={item.key} >
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div className="btnHolder">
                  <Button type="primary" size="large">Learn More</Button>
                  <Button size="large"><i className="fas fa-desktop"></i> Watch a Demo</Button>
                </div>
              </div>
            </div>  
          );
        })}
             </Carousel>
        </div>
    )
}
export default AppHero;
