import React from 'react'
import '../public/style/components/header.css'
import { Row, Col, Menu, Icon, Typography } from 'antd'

const Header = () => {
  return (
    <div className="hunt-header">
      <Row type="flex" justify="center">
        <Col xs={22} sm={22} md={22} lg={14} xl={14} xxl={12}>
          <i className="nes-icon medium is-maddle"></i>
          <span className="hunt-header-title nes-text is-error">HUNT`S BLOG</span>
          <br/>
          <Typography.Text ellipsis="true" strong="true" className="hunt-header-sign">You don't worry about meeting your friend, who doesn't know you.</Typography.Text>
        </Col>
        <Col xs={0} sm={0} md={0} lg={0} xl={8} xxl={6} style={{ paddingRight: '8px'}}>
          <a href="/detailed" className="hunt-header-a nes-badge is-icon">
            <span className="is-dark">m</span>
            <span className="is-success">LIFE</span>
          </a>
          <a href="/list" className="hunt-header-a nes-badge is-icon">
            <span className="is-warning">t</span>
            <span className="is-primary">LEARN</span>
          </a>
          <a href="/" className="hunt-header-a nes-badge is-icon">
            <span className="is-dark">h</span>
            <span className="is-warning">HOME</span>
          </a>
        </Col>
      </Row>
    </div>
  )
}

export default Header
