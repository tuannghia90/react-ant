
import { Button, Space } from 'antd';
import "./App.css"
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useState, useCallback } from 'react';
import AppHeader from './component/header.js';
import AppHome from './component/home.js';
import { Footer } from 'antd/es/layout/layout';
import AppFooter from './component/footer';
const { Header,Content} = Layout;
function App() {
  
  return (
    <Layout className="mainLayout">
      <Header >
        <AppHeader/>
      </Header>
      <Content>
       <AppHome/>  
      </Content>
      <Footer>
        <AppFooter/>
      </Footer>
    </Layout>
    
  );
}

export default App;
