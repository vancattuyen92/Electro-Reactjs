import './Dep.scss'
import '../../../index.scss'

import camera from './assets/cameras-resized.png'
import laptop from './assets/laptop.png'
import desktop from './assets/desktop.png'
import camera360 from './assets/360-camers.png'

import { RightCircleOutlined,RightOutlined, RightCircleFilled } from '@ant-design/icons';

export default function Departments() {
    return (
      <div className='promo'>
        <div className='container j-between'>
              <div className='promo-box j-between'>
                  <div className='img'><img src={camera} alt=''/></div>                 
                  <div className='promo-text'>
                    <p>CATCH BIG <strong>DEALS</strong> ON THE CAMERAS</p>
                    <h5 className='shopnow'> <a href="/" data-replace="Shop now"><span>Shop now</span></a> <RightCircleFilled className='circle' style={{fontSize:'20px'}}/></h5>
                 </div>
              </div>
              
              <div className='promo-box j-between'>
                  <div className='img'><img src={laptop} alt=''/></div>
                  <div className='promo-text'>
                    <p>TABLETS, SMARTPHONES <strong>AND MORE</strong></p>
                    <h5 className='shopnow'> <a href="/" data-replace="Shop now"><span>Shop now</span></a> <RightCircleFilled className='circle' style={{fontSize:'20px'}}/></h5>

                  </div>
              </div>
              <div className='promo-box j-between'>
                  <div className='img'><img src={desktop} alt=''/></div>              
                  <div className='promo-text'>
                    <p>SHOP THE <strong>HOTTEST</strong> PRODUCTS</p>
                    <h5 className='shopnow'> <a href="/" data-replace="Shop now"><span>Shop now</span></a> <RightCircleFilled className='circle' style={{fontSize:'20px'}}/></h5>
                  </div>
              </div>
              <div className='promo-box j-between'>
                  <div className='img'><img src={camera} alt=''/></div>              
                  <div className='promo-text'>
                    <p>SHOP THE <strong>HOTTEST</strong> PRODUCTS</p>
                    <h5 className='shopnow'> <a href="/" data-replace="Shop now"><span>Shop now</span></a> <RightCircleFilled className='circle' style={{fontSize:'20px'}}/></h5> 
                  </div>
              </div>
        </div>
      </div>

    )
}