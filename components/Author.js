import React, { useState, useEffect } from 'react'
import { Icon, Avatar, Divider } from 'antd'
import NesAsh from './Nes-ash'

import '../public/style/components/author.css'

const Author = () => {
  const [nWidth, setNwidth] = useState(0)
  useEffect(()=> {
    let Timer = setTimeout(()=>{
      setNwidth(document.getElementsByClassName('comm-right')[0].offsetWidth)
    }, 1e3)
    return () => {
      clearTimeout(Timer)
    }
  }, [])
  return (
    <div className="nes-container">
      <h6 className="hunt-home-list-header">introduction</h6>
      <NesAsh width={ nWidth }/>
      <div className="hunt-author-div comm-box">
        <div className="hunt-author-introduction">
          <p>莫道前路无知己，天下谁人不识君</p>
          <Divider>Social Account</Divider>
          <Avatar size={36} icon={<Icon type="github" />} className="hunt-account"/>
          <Avatar size={36} icon={<Icon type="qq" />} className="hunt-account"/>
          <Avatar size={36} icon={<Icon type="wechat" />} className="hunt-account"/>
        </div>
      </div>
    </div>
  )
}

export default Author
