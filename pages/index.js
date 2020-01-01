import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Row, Col, List, Icon, BackTop } from 'antd'
import axios from 'axios'
import Header from '../components/Header'
import Author from '../components/Author'
import Footer from '../components/Footer'
import '../public/style/pages/index.css'
import servicePath from '../config/aplUrl'


const Home = (list) => {

  const [mylist, setMylist] = useState(list.data)
  return (
    <>
      <Head>
        <title>hunt</title>
        <link rel="icon" href="/html.png" />
        <link href="https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={22} sm={22} md={22} lg={14} xl={14} xxl={12} style={{ border: 'none'}}>
          <List
            className="nes-container with-title"
            header={<h6 className="hunt-home-list-header">new log</h6>}
            itemLayout="vertical"
            split="false"
            dataSource={mylist}
            renderItem={item => (
              <List.Item className="hunt-home-list-item">
                <div className="nes-container is-dark">
                  <div className="hunt-home-list-title"><Link href={{pathname: '/detailed', query:{id:item.id}}}><a>{ item.title }</a></Link></div>
                  <div className="hunt-home-list-icon">
                    <span><Icon type="calendar"/>{ ' ' + new Date(item.addTime * 1000).toLocaleDateString().replace(/\//g, "-") }</span>
                    <span><Icon type="folder"/>{ ' ' + item.typeName}</span>
                    <span><Icon type="fire"/> {' ' + item.view_count}</span>
                  </div>
                  <div className="hunt-home-list-context">{ item.introduce }</div>
                </div>
              </List.Item>
            )}
          />
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={0} lg={0} xl={8} xxl={6} style={{ border: 'none'}}>
          <Author />
        </Col>
      </Row>
      <Footer />
      <BackTop>
        <button type="button" className="nes-btn is-error comm-scroll-btn active"><span>&lt;</span></button>
      </BackTop>
      <a href="https://github.com/nostalgic-css/NES.css" target="_blank" rel="noopener" className="github-link active">
        <i className="nes-octocat animate"></i>
        <p className="nes-balloon from-left">Fork me<br/>on GitHub</p>
      </a>
    </>
  )
}

Home.getInitialProps = async ()=>{
  const promise = new Promise((resolve)=>{
    axios(servicePath.getArticleList).then(
      (res)=>{
        console.log('远程获取数据结果:',res.data.data)
        resolve(res.data)
      }
    )
  })

  return await promise
}

export default Home

