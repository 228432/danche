import React, { Component } from 'react'
import { Row,Col } from 'antd'
import NavLeft from './components/NavLeft'
import Header from './components/Header'
import Footer from './components/Footer'
import './style/common.css'
export default class admin extends Component {
  render() {
    return (
      <div>
            <Row className='container'>   
                <Col span='3' className='nav-left'>
                <NavLeft/>
                </Col>

                <Col span='21' className='main'>
                <Header/>

                <Row className='content'>
                  content
                  {this.props.children}
                </Row>

                <Footer/>
                </Col>
            </Row>
      </div>
    )
  }
}
