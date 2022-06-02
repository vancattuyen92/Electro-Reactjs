import React, {useState, useEffect} from 'react';
import 'antd/dist/antd.css';
import '../../../index.scss';
import './Featured.scss'
import consal from './consal-300x300.png'
import game from './consal-600x550.png'
import game1 from './gade1-100x100.png'
import game2 from './gadtet-100x100.png'
import game3 from './consal-100x100.png'
import savingImage from './assets/home-v5-banner.png'
import { Carousel } from 'antd';
import CountdownTimer from './CountdownTimer'
import { Col, Row } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

import { useDispatch } from 'react-redux'
import { setCart } from '../../../actions/cartActions'

const contentStyle = {
  paddingTop: '70px',
  height: 'auto',
  color: '#fff',
  lineHeight: 'auto',
};

const contentStyleBestDeal = {
  height: 'auto',
  color: '#fff',
  lineHeight: 'auto',
};

const HoverText = () => {
  return (
    <div>
      <hr/>
      <div className='j-between'>
        <p>Wishlist</p>
        <p>Compare</p>
      </div>    
    </div>
  );
};

const url = 'https://cms-resource-api.herokuapp.com/api/product';

export default function Featured() {
  const dispatch = useDispatch();
  const [isHovering, ] = useState(false)
  const [products, setProducts] = useState([])
  const [carts, setCarts] = useState([])
  const [cartTotal, setCartTotal] = useState(0)
  const fetchData = async() => {
    const data = await (await fetch(url)).json()
    setProducts(data.data)
  } 
  useEffect(() => {
    fetchData();
  },[])
  function addCart(product) {
    console.log('product',product)
    setCarts([...carts, product])
    console.log('carts',carts)
    let totalVal = 0
    for (let i=0; i< carts.length; i++) {
      totalVal = totalVal + parseInt(carts[i].price) 
    }
    setCartTotal(totalVal)
    console.log('totalVal',totalVal)
    dispatch(setCart(carts))
  }
  // useEffect(() => {
  //   total()
  // }, [carts])

  // const total = () => {
  //   let totalVal = 0
  //   for (let i=0; i< carts.length; i++) {
  //     totalVal = totalVal + parseInt(carts[i].price) 
  //   }
  //   setCartTotal(totalVal)
  // }
  let cartAmount = carts.length

  // console.log('cartTotal',cartTotal)
  // console.log('cartAmount',cartAmount)
  // let value = {cartTotal, cartAmount}

  const shuffle = arr => [...arr].sort(() => Math.random() - 2);
  const shuffleA = arr => [...arr].sort(() => Math.random() - 1);
  const productsSale = shuffle(products)
  const productsTop = shuffleA(products)

  const productsDeal = products.filter((price) => {
    return price.price > 500 && price.price < 600
  })
  const productsDeal1 = shuffle(productsDeal)

  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

    return (
      <div>
        <div className="featured container j-between">
          <div className='special-offer'>
            <div className='j-between'>
              <div className='name'>Special Offer</div>
              <div className='saving'>Save <div className='twenty'>$20.00</div></div>
            </div>
            <div className='img'><img src={consal} alt=''/></div>
            <h6>Game Console Controller + USB 3.0 Cable</h6>
            <h2 className='price'>$79.00<span className='price-discounted'>$99.00</span></h2>
            <p>Hurry Up! Offer ends in:</p>
            <CountdownTimer targetDate={dateTimeAfterThreeDays} />
          </div>
          <div>
            <Carousel effect="fade">
              <div>
                <h3 style={contentStyle}>
                  <Row gutter={[24, 24]} className='list'>
                    {products.map((product,index) => (
                      <Col className="gutter-row" span={6} key={index}>
                        <div className='product-card card-featured'>
                          <p className='sub-name'>{product?.name}</p>
                          <h6>{product?.sub_name}</h6>
                          <div className='product-img'><img src={product?.image} alt=''/></div>
                          <div className='j-between'>
                            <p className='product-price'>${product?.price}.00</p>
                            {/* <ShoppingCartOutlined className='addCart'/> */}
                          </div>
                          {isHovering && <HoverText />}
                        </div>
                      </Col>
                    ))}
                  </Row>
                </h3>
              </div>

              <div>
                <h3 style={contentStyle}>
                  <Row gutter={[25, 35]}>
                    {productsSale.map((product,index) => (
                      <Col className="gutter-row" span={6} key={index}>
                        <div className='product-card card-featured'>
                          <p className='sub-name'>{product?.name}</p>
                          <h6>{product?.sub_name}</h6>
                          <div><img src={product?.image} alt=''/></div>
                          <div className='j-between'>
                            <p className='product-price'>${product?.price}.00</p>
                            {/* <ShoppingCartOutlined className='addCart'/> */}
                          </div>
                          {isHovering && <HoverText />}
                        </div>
                      </Col>
                    ))}
                    {/* <div class="vl"></div> */}
                  </Row>
                </h3>
              </div>

              <div>
                <h3 style={contentStyle}>
                  <Row gutter={[25, 35]}>
                    {productsTop.map((product, index) => (
                        <Col className="gutter-row" span={6} key={index}>
                          <div className='product-card card-featured'>
                            <p className='sub-name'>{product?.name}</p>
                            <h6>{product?.sub_name}</h6>
                            <div className='product-img'><img src={product?.image} alt=''/></div>
                            <div className='j-between'>
                              <p className='product-price'>${product?.price}.00</p>
                              {/* <ShoppingCartOutlined className='addCart'/> */}
                            </div>
                            {isHovering && <HoverText />}
                          </div>
                        </Col>
                      ))}
                  </Row>
                </h3>
              </div>
            </Carousel>
          </div>
        </div>



        <div className='best-deal'>
          <div className='deal-name container'>
            <ul className='j-between'>
              <li>Best Deals<hr className='yellow-hr'/><span>.</span></li>
              <li>TV & Audio</li>
              <li>Cameras</li>
              <li>Audio</li>
              <li>Smartphones</li>
              <li>GPS & Nav</li>
              <li>Computers</li>
              <li>Portable Audio</li>
              <li>Accessories</li>
            </ul>
          </div>
          <div className='j-between container deal-products'>
            <div className='left part'>
              <h3 style={contentStyleBestDeal}>
                <Row gutter={[0, 0]}>
                          {productsDeal1.map((product) => (
                            <Col className="gutter-row" span={12}>
                              <div className='product-card card-deal' key={product.id}>
                                <p className='sub-name'>{product.name}</p>
                                <h6 style={{width:'80%'}}>{product.sub_name}</h6>
                                <div className='product-img'><img src={product.image} alt=''/></div>
                                <div className='j-between price'>
                                  <p className='product-price'>${product.price}.00</p>
                                  <ShoppingCartOutlined className='addCart' onClick={() => addCart(product)} type="submit" value="add"/>
                                </div>
                                {isHovering && <HoverText />}
                              </div>
                            </Col>
                          ))}              
                  </Row>
                </h3>
              </div>  

              <div className='game-console'>
                <div  className='product-card middle'>
                  <p className='sub-name'>Audio Speakers</p>
                  <h6>Wireless Audio System Multiroom 360</h6>
                  <div className='game-img'><img src={game} alt=''className='game-img'/></div>
                  <div className='mini-pics'>
                    <img src={game1} alt='' href='/' className='image'/>
                    <img src={game2} alt='' href='/' className='image'/>
                    <img src={game3} alt='' href='/' className='image'/>
                  </div>
                  <div className='j-between'>
                    <p className='product-price'>$79.00 <span> $99.00</span></p>
                    <button className='button-addCart'><ShoppingCartOutlined/> Add to Cart</button>
                  </div>
                  {isHovering && <HoverText />}
                </div>
            </div>

            <div className='right part'>
              <h3 style={contentStyleBestDeal}>
                      <Row gutter={[0, 0]}>
                        {productsDeal.map((product) => (
                          <Col className="gutter-row" span={12} key={product.id}>
                            <div className='product-card card-deal'>
                              <p className='sub-name'>{product.name}</p>
                              <h6 style={{width:'80%'}}>{product.sub_name}</h6>
                              <div className='product-img'><img src={product.image} alt=''/></div>
                              <div className='j-between'>
                                <p className='product-price'>${product.price}.00</p>
                                <ShoppingCartOutlined className='addCart' onClick={() => addCart(product)} type="submit" value="add"/>
                              </div>
                              {isHovering && <HoverText />}
                            </div>
                          </Col>
                        ))}              
                      </Row>
                  </h3>
            </div>
          </div>
        </div>

        <div className='savingImage'>
          <div className='container'><img src={savingImage} alt='' href='/'/></div>
        </div>        


        <div>
         
        </div>        
      </div>
    )
}