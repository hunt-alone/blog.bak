import axios from 'axios'
import 'markdown-navbar/dist/navbar.css'
import Head from 'next/head'
import { Row, Col, Icon, Breadcrumb, Affix, BackTop } from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Footer from '../components/Footer'
import '../public/style/pages/detailed.css'
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
        <title>内容|撖腾的博客</title>
        <link rel="shortcut icon" href="/favico/html.ico" />
        <link href="https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"></meta>
        <meta name="keywords" content="撖腾，博客，hunt，汉腾, 韩腾，react，nextjs，nes.css, antd, vue, threejs, coder"></meta>
        <meta name="description" content="XX千万程序员观看，XX网千万程序员观看，XX网千万程序员观看，博客，XX博客"></meta>
      </Head>
      <Header />
      <div className="hunt-home-list-content">
        <Row className="comm-main" type="flex" justify="center">
          <Col className="comm-left" xs={22} sm={22} md={22} lg={20} xl={14} xxl={14} style={{ border: 'none'}}>
            <div className="hunt-bread-div">
              <Breadcrumb>
                <Breadcrumb.Item><a href="/">HOME</a></Breadcrumb.Item>
                <Breadcrumb.Item><a href={'/list?id=' + props.typeId}>{ props.typeName }</a></Breadcrumb.Item>
                <Breadcrumb.Item><a>{ props.title}</a></Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <h6 className="hunt-detailed-title">
              { props.title }
            </h6>
            <div className="hunt-list-icon hunt-center">
  <span><Icon type="calendar" /> { props.addTime }</span>
              <span><Icon type="folder" /> { props.typeName }</span>
              <span><Icon type="fire" /> { props.view_count }</span>
            </div>
            <div className="hunt-detailed-content" dangerouslySetInnerHTML={{ __html: html}}></div>
          </Col>
          <Col className="comm-right" xs={0} sm={0} md={0} lg={0} xl={8} xxl={6} style={{ border: 'none'}}>
            <Author />
            <Affix offsetTop={84}>
              <div className="nes-container with-title">
                <h6 className="hunt-home-list-header">contents</h6>
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
