import './Banner.scss';
import '../../../index.scss'

import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import watch from './assets/smartwatches-resized.png'
import sound from './assets/Sounddevice.png';

import { Menu } from 'antd';
import { BarsOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';


const BgElement = Element.BgElement;

const menu = (
  <Menu
    items={[
      { label: (<a href="/">Home Page</a>) },
      { label: (<a href="/">About</a>) },
      { label: (<a href="/">Contact</a>) },
      { label: (<a href="/">Compare</a>) },
      { label: (<a href="/">FAQ</a>) },
      { label: (<a href="/">Store Directory</a>) },
      { label: (<a href="/">My Account</a>) },
      { label: (<a href="/">Track your Order</a>) },
      { label: (<a href="/">Customer Service</a>) },
      { label: (<a href="/">Return/Exchange</a>) },
      { label: (<a href="/">Product Support</a>) }, 
    ]}
  />
);

export default function Banner() {
  const SubMenu = Menu.SubMenu;
  const lefts = ['All Computers & Accesories','Laptop, Desktops & Monitos', 'Printers & Ink', 'Networking & Internet Devices', 'Computer Accesories', 'Software']
  const rights = ['All Office & Stationery']

  function handleClick(e) {
    console.log('click', e);
  }

    return (
      <div class='banner-content'>
        <div className='navbar container'>
          <div className='all-departments'><BarsOutlined style={{paddingRight:'5px',fontSize:'16px'}}/> All Departments</div>
          <div>
            <ul className='menu j-between'>
              <li><Dropdown overlay={menu} className='dropdown'>
                    <a onClick={e => e.preventDefault()} href="/">
                      <Space>
                        All Pages
                        <DownOutlined />
                      </Space>
                    </a>
                  </Dropdown>
              </li>
              <li>Featured Brands</li>
              <li>Trending Styles</li>
              <li>Gift Cards</li>
            </ul>
          </div>
        </div>
        <div className='banner'>
          <div className='container1'> 
            <div className='Menu'>
              <Menu onClick={handleClick} style={{ width: 270 }} mode="vertical" className='banner-menu'>
                    <SubMenu className='menu-item item-top' key="1" title={<span><strong>Value of the Day</strong></span>}></SubMenu>
                    <SubMenu className='menu-item item-top' key="2" title={<span><strong>Top 100 Offers</strong></span>}></SubMenu>
                    <SubMenu className='menu-item item-top' key="3" title={<span><strong>New Arrivals</strong></span>}></SubMenu>
                    
                    <SubMenu className='menu-item' key="sub4" title={<span>Computer & Accessories</span>}>
                      <div className="item-list j-between">
                        <div>{lefts.map(left => <Menu.Item className='item-left' key={left}>{left}</Menu.Item>)}</div>
                        <div>{rights.map(right => <Menu.Item className='item-right' key={right}>{right}</Menu.Item>)}</div>            
                      </div>
                    </SubMenu>
                    <SubMenu className='menu-item' key="sub5" title={<span>Camera, Audio & Video</span>}>
                      <div className="item-list j-between">
                        <div>{lefts.map(left => <Menu.Item className='item-left' key={left}>{left}</Menu.Item>)}</div>
                        <div>{rights.map(right => <Menu.Item className='item-right' key={right}>{right}</Menu.Item>)}</div>            
                      </div>
                    </SubMenu>
                    <SubMenu className='menu-item' key="sub6" title={<span>Mobiles & Tablets</span>}>
                      <div className="item-list j-between">
                        <div>{lefts.map(left => <Menu.Item className='item-left' key={left}>{left}</Menu.Item>)}</div>
                        <div>{rights.map(right => <Menu.Item className='item-right' key={right}>{right}</Menu.Item>)}</div>            
                      </div>
                    </SubMenu>
                    <SubMenu className='menu-item' key="sub7" title={<span>Movies, Music & Video Games</span>}>
                      <div className="item-list j-between">
                        <div>{lefts.map(left => <Menu.Item className='item-left' key={left}>{left}</Menu.Item>)}</div>
                        <div>{rights.map(right => <Menu.Item className='item-right' key={right}>{right}</Menu.Item>)}</div>            
                      </div>
                    </SubMenu>
                    <SubMenu className='menu-item' key="sub8" title={<span>TV & Audio</span>}>
                      <div className="item-list j-between">
                        <div>{lefts.map(left => <Menu.Item className='item-left' key={left}>{left}</Menu.Item>)}</div>
                        <div>{rights.map(right => <Menu.Item className='item-right' key={right}>{right}</Menu.Item>)}</div>            
                      </div>
                    </SubMenu>
                    <SubMenu className='menu-item' key="sub9" title={<span>Watches & Eyewear</span>}>
                      <div className="item-list j-between">
                        <div>{lefts.map(left => <Menu.Item className='item-left' key={left}>{left}</Menu.Item>)}</div>
                        <div>{rights.map(right => <Menu.Item className='item-right' key={right}>{right}</Menu.Item>)}</div>            
                      </div>
                    </SubMenu>
                    <SubMenu className='menu-item' key="sub10" title={<span>Car, Motorbike & Industrial</span>}>
                      <div className="item-list j-between">
                        <div>{lefts.map(left => <Menu.Item className='item-left' key={left}>{left}</Menu.Item>)}</div>
                        <div>{rights.map(right => <Menu.Item className='item-right' key={right}>{right}</Menu.Item>)}</div>            
                      </div>
                    </SubMenu>
                    <SubMenu className='menu-item last-item' key="sub11" title={<span>Accessories</span>}>
                      <div className="item-list j-between">
                        <div>{lefts.map(left => <Menu.Item className='item-left' key={left}>{left}</Menu.Item>)}</div>
                        <div>{rights.map(right => <Menu.Item className='item-right' key={right}>{right}</Menu.Item>)}</div>            
                      </div>
                    </SubMenu>
              </Menu>
            </div>

            <div>
            <BannerAnim prefixCls="banner-user" className="banner-slider" autoPlay>
                <Element prefixCls="banner-user-elem" key="0">
                  <BgElement key="bg" className="bg"/>
                  <div className='group j-between'>
                    <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                        <h2>THE NEW<div>STANDARD</div></h2> 
                        <h5>UNDER FAVORABLE SMARTWATCHES</h5>
                        <h6>FROM</h6>
                        <div className='banner-price'><span className='money-unit'>$</span>749<span>99</span></div>
                        <button>Start Buying</button>
                    </TweenOne>
                    <TweenOne className="banner-user-text" animation={{ x: 100, opacity: 0, type: 'from', delay: 100 }}>
                        <img className='watch' src={watch} alt=""/>
                    </TweenOne>
                  </div>
                </Element>

                <Element prefixCls="banner-user-elem" key="1">
                  <BgElement key="bg" className="bg"/>
                  <div className='group j-between'>
                    <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}> 
                        <h4>SHOP TO GET WHAT YOU LOVE</h4>
                        <h3>TIMEPIECES THAT<br/>MAKE A STATEMENT<br/>UP TO <strong>40% OFF</strong></h3> 

                        <button>Start Buying</button>
                    </TweenOne>
                    <TweenOne className="banner-user-text" animation={{ x: 100, opacity: 0, type: 'from', delay: 100 }}>
                        <img className='sound' src={sound} alt=""/>
                    </TweenOne>
                  </div>
                </Element>
              </BannerAnim>
            </div>
          </div>
        </div>
      </div>
  );
}