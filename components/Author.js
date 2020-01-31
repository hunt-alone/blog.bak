import React, { useState, useEffect } from 'react'
import { Popover, Icon, Avatar, Divider } from 'antd'
import NesAsh from './Nes-ash'

import '../public/style/components/author.css'
const githubNum = (
  <div>
    <span>https://github.com/hunt0809</span>
  </div>
)
const qqNum = (
  <div>
    <span>289979638</span>
  </div>
)
const wechatNum = (
  <div>
    <span>hurley_ht</span>
  </div>
)
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
          <Popover content={ githubNum }>
            <Avatar size={36} icon={<Icon type="github" />} className="hunt-account"/>
          </Popover>
          <Popover content={ qqNum }>
            <Avatar size={36} icon={<Icon type="qq" />} className="hunt-account"/>
          </Popover>
          <Popover content={ wechatNum }>
            <Avatar size={36} icon={<Icon type="wechat" />} className="hunt-account"/>
          </Popover>
        </div>
      </div>
    </div>
  )
}

export default Author
