import React from "react";
import './App.css';
import { Table, Button, Form, Input, Modal, Select, Layout, Menu, Breadcrumb, Image, Carousel, Calendar, Typography, Checkbox, Tooltip, Comment, Avatar, List } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainPage from "../src/Páginas/MainPage"
import Commentario from '../src/components/Comments'
import Posts from "../src/Páginas/MainPage"




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
      <Title className>Posts</Title>
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
              <Link to="/CriarPost"><Button type="primary">Criar</Button></Link>
            </div>
            <div className="artigoStyle">
              <Link to="/CriarPost"><Button type="primary"></Button></Link>
            </div>
            <div className="sobreStyle">
              <Link><Button type="primary" ></Button></Link>
            </div>

          </ul>
        </nav>
        <Switch>
          <Route path="/MainPosts">
            <Criar/>
          </Route>
          <Route path="/MainPage">  
            <Criar /> 
          </Route>
        </Switch>
      </div>
    </Router>)
}

function MainPosts() {
  return (
    <Layout>
    <Content >
      <div>
      </div>
    </Content>
  </Layout>

  )
}

function Criar() {
  return (
    <>

    </>

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
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 10 }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        <MainPage/>
        <Posts/>

        </div>
        <br></br>
        <br></br>

      
      </Content>

    </Layout>
  )
}

function App() {
  return (

    <LayoutPage />


  );
}

export default App;