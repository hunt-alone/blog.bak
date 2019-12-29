import ReactMarkdown from 'react-markdown'
import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'
import Head from 'next/head'
import { Row, Col, Icon, Breadcrumb, Affix, BackTop } from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Footer from '../components/Footer'
import '../public/style/pages/Detailed.css'

const Detailed = () => {
  let markdown='# P01:课程介绍和环境搭建\n' +
    '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
    '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
     '**这是加粗的文字**\n\n' +
    '*这是倾斜的文字*`\n\n' +
    '***这是斜体加粗的文字***\n\n' +
    '~~这是加删除线的文字~~ \n\n'+
    '\`console.log(111)\` \n\n'+
    '# p02:来个Hello World 初始Vue3.0\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n'+
    '***\n\n\n' +
    '# p03:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n'+
    '# p04:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n'+
    '# p05:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n'+
    '# p06:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n'+
    '# p07:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n'+
    '``` var a=11; ```'+
    '# p08:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n'+
    '# p09:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n'+
    '# p10:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n'+
    '# p11:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n'+
    '``` var a=11; ```'

  return (
    <>
      <Head>
        <title>hunt</title>
        <link rel="icon" href="/html.png" />
        <link href="https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <div className="hunt-home-list-content">
        <Row className="comm-main" type="flex" justify="center">
          <Col className="comm-left" xs={22} sm={22} md={22} lg={14} xl={14} xxl={12} style={{ border: 'none'}}>
            <div className="hunt-bread-div">
              <Breadcrumb>
                <Breadcrumb.Item><a href="/">home</a></Breadcrumb.Item>
                <Breadcrumb.Item><a>learn</a></Breadcrumb.Item>
                <Breadcrumb.Item><a href="/life">life</a></Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <h6 className="hunt-detailed-title">
              React学习笔记
            </h6>
            <div className="hunt-list-icon hunt-center">
              <span><Icon type="calendar" /> 2019-05-12</span>
              <span><Icon type="folder" /> learn</span>
              <span><Icon type="fire" /> 123</span>
            </div>
            <div className="hunt-detailed-content">
              <ReactMarkdown source={markdown} escapeHtml={false} />
            </div>
          </Col>
          <Col className="comm-right" xs={0} sm={0} md={0} lg={0} xl={8} xxl={6} style={{ border: 'none'}}>
            <Author />
            <Affix offsetTop={84}>
              <div className="hunt-detaled-navbar">
                <h6 className="hunt-nav-title">文章目录</h6>
                <MarkNav className="hunt-artic-menu" source={markdown} headingTopOffset={0} ordered={false}/>
              </div>
            </Affix>
          </Col>
        </Row>
        <Footer />
      </div>
      <BackTop>
        <button type="button" className="nes-btn is-error comm-scroll-btn active"><span>&lt;</span></button>
      </BackTop>
    </>
  )
}

export default Detailed
