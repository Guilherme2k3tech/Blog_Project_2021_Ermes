import React from "react";
import './App.css';
import { Table, Button, Form, Input, Modal, Select, Layout, Menu, Breadcrumb, Image, Carousel, Calendar, Typography, Checkbox, Tooltip, Comment, Avatar, List } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



const { Header, Content, Footer } = Layout;
const { Title } = Typography;


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

function TitlePage() {
  return (
    <>
      <Title style={{ left: 0 }} >Home</Title>
    </>
  )
}

const RouterApp = () => { 
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <div className="homeStyle">
              <Link to="/Home"><Button type="primary">Home</Button></Link>
            </div>
            <div className="artigoStyle">
              <Link to="/Artigos"><Button type="primary">Artigos</Button></Link>
            </div>
            <div className="sobreStyle">
              <Link to="/Login"><Button type="link"></Button></Link>
            </div>

          </ul>
        </nav>
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Artigos">  
            <Users /> 
          </Route> 
     
        </Switch>
      </div>
    </Router>)
}

function Home() {
  return (
    <Layout>
      <Content className="site-layout-content" style={{ padding: '0 50px' }}>
        <div className="site-layout-background">
          <div className="Home">
            <TitlePage style={{ left: 0 }} />
            <p>Home</p>
          </div>
        </div>
      </Content>
    </Layout>

  )
}

function Users() {
  return (
    <Layout>
    <Content className="site-layout-content" style={{ padding: '0 50px' }}>
      <div className="site-layout-background">
        <div className="Home">
        </div>
      </div>
    </Content>
  </Layout>

  )
}

const LayoutPage = () => {
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <RouterApp />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        </Menu>
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>


        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Spott ©2021</Footer>
    </Layout>
  )
}


function App() {
  return (

    <LayoutPage />


  );
}

export default App;