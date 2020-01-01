import axios from 'axios'
import 'markdown-navbar/dist/navbar.css'
import Head from 'next/head'
import { Row, Col, Icon, Breadcrumb, Affix, BackTop } from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Footer from '../components/Footer'
import '../public/style/pages/Detailed.css'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import Tocify from '../components/tocify.tsx'
import servicePath from '../config/aplUrl'


const Detailed =  (props) => {
  const tocify = new Tocify()
  const renderer = new marked.Renderer()
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    highlight: function(code) {
      return hljs.highlightAuto(code).value
    } 
  })

  renderer.heading = function(text, level, raw) {
    const anchor = tocify.add(text, level)
    return `<a id=${anchor} href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`
  }

  let html = marked(props.article_content)
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
            <div className="hunt-detailed-content" dangerouslySetInnerHTML={{ __html: html}}>
            </div>
          </Col>
          <Col className="comm-right" xs={0} sm={0} md={0} lg={0} xl={8} xxl={6} style={{ border: 'none'}}>
            <Author />
            <Affix offsetTop={84}>
              <div className="hunt-detaled-navbar">
                <h6 className="hunt-nav-title">文章目录</h6>
                { tocify && tocify.render()}
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

Detailed.getInitialProps = async(context)=>{

  console.log(context.query.id)
  let id =context.query.id
  const promise = new Promise((resolve)=>{

    axios(servicePath.getArticleById + id).then(
      (res)=>{
        console.log(res.data.data)
        resolve(res.data.data[0])
      }
    )
  })

  return await promise
}


export default Detailed
