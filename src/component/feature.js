
import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Anchor, Drawer, Button } from 'antd';
import "../App.css"
import { Carousel } from 'antd';
import { Col, Row, Slider } from 'antd';
import { Card } from 'antd';
import modernDesignImage from '../images/modern-design.jpg';
import cleanDesignImage from '../images/clean-design.jpg'
import greatSupportImage from '../images/great-support.jpg'
import easyCustomiseImage from '../images/easy-customise.jpg'
import unlimitedFeaturesImage from '../images/unlimited-features.jpg'
import advancedOptionImage from '../images/advanced-option.jpg'
const { Meta } = Card;


function AppFeature(){


    return(
        <div id ='feature' className='featureBlock' >
             <div className='titleHolder'>
                <h2>Key Features and Benefits</h2>
            </div>
           <div className='container-feature'>
           <Row gutter={[0, 20]}>
            <Col span={8} > 
            <Card
                hoverable
                style={{ width: 320 }}
                cover={<img alt="Modern Design" src={modernDesignImage} />}>
                 <Meta title="Modern Design" />
            </Card>
            </Col>
            <Col span={8} > 
            <Card
                hoverable
                style={{ width: 320 }}
                cover={<img alt="Clean and Elegant" src={cleanDesignImage} />}>
                 <Meta title="Clean and Elegant" />
            </Card>
            </Col>
            <Col span={8} > 
            <Card
                hoverable
                style={{ width: 320 }}
                cover={<img alt="Great Support" src={greatSupportImage} />}>
                 <Meta title="Great Support" />
            </Card>
            </Col>
            <Col span={8} > 
            <Card
                hoverable
                style={{ width: 320 }}
                cover={<img alt="Easy to customise" src={easyCustomiseImage} />}>
                 <Meta title="Easy to customise" />
            </Card>
            </Col>
            <Col span={8} > 
            <Card
                hoverable
                style={{ width: 320 }}
                cover={<img alt="Unlimited Features" src={unlimitedFeaturesImage} />}>
                 <Meta title="Unlimited Features" />
            </Card>
            </Col>
            <Col span={8} > 
            <Card
                hoverable
                style={{ width: 320 }}
                cover={<img alt="Advanced Options" src={advancedOptionImage} />}>
                 <Meta title="Advanced Options" />
            </Card>
            </Col>
          </Row>
           </div>
        </div>   
    )
}
export default AppFeature;
