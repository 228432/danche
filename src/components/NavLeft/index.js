import React, { Component } from 'react'
import {Menu} from 'antd'
import './index.css'
import menuConfig from '../../config/menuConfig'
const { SubMenu } = Menu;
export default class index extends Component {
  state={
    menuTreeNode:[]
  }
  componentDidMount(){
     let menuTreeNode= this.renderMenu(menuConfig)
     this.setState({
      menuTreeNode
     })
  }
  renderMenu=(data)=>{
      return data.map(item=>{
       if(item.children){
       return <SubMenu key={item.key} title={item.title}>
          {this.renderMenu(item.children)}
       </SubMenu>
       }
       return <Menu.Item key={item.key} title={item.title}>{item.title}</Menu.Item>
      })
  }
  render() {
    return (
      <div>
           <div className='logo'>  
            <img src='./logo192.png' alt=''/>
            <h1>mooc MS</h1>
           </div>
           <Menu theme='dark'>
            {this.state.menuTreeNode}
            </Menu>
      </div>
    )
  }
}
