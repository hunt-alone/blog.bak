import React, { useState, useEffect } from 'react'
import '../public/style/components/header.css'
import { Row, Col, Menu, Icon, Typography, Result } from 'antd'
import Router from 'next/router'
import axios from 'axios'
import serveicePath from '../config/aplUrl'

const Header = () => {
  const [navArray, setNavArray] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(serveicePath.getTypeInfo).then((res) => {
        console.log(res)
        return res.data.data
        
      })
      setNavArray(result)
    }
    fetchData()
  }, [])

  const handleClick = (e) => {
    if(e === '0') {
      Router.push('/index')
    } else {
      Router.push('/list?id=' + e )
    }
  }
  return (
    <div className="hunt-header">
      <Row type="flex" justify="center">
        <Col xs={22} sm={22} md={22} lg={20} xl={12} xxl={12}>
          <i className="nes-icon medium is-maddle"></i>
          <span className="hunt-header-title nes-text is-error">HUNT`S BLOG</span>
          <br/>
          <Typography.Text ellipsis="true" strong="true" className="hunt-header-sign">You don't worry about meeting your friend, who doesn't know you.</Typography.Text>
        </Col>
        <Col xs={0} sm={0} md={0} lg={0} xl={10} xxl={8} style={{ paddingRight: '8px'}}>
          {
            navArray.map(item => {
              return (
                <a onClick={()=> {handleClick(item.orderNum)}} key={item.Id} className="hunt-header-a nes-badge is-icon">
                  <span className={item.icon_style}>{item.icon_content}</span>
                  <span className={item.style}>{item.typeName}</span>
                </a>
              )
            })
          }
          <a onClick={()=> {handleClick('0')}} className="hunt-header-a nes-badge is-icon">
            <span className="is-dark">h</span>
            <span className="is-warning">HOME</span>
          </a>
        </Col>
      </Row>
    </div>
  )
}
export default Header
