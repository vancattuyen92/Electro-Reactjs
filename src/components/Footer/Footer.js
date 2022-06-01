import './Footer.scss'
import '../../index.scss'
import { SendOutlined } from '@ant-design/icons';
import logo from './assets/electro-logo.png'
import { CustomerServiceOutlined } from '@ant-design/icons';
import { FacebookFilled,LinkedinFilled,InstagramFilled,YoutubeFilled,SkypeFilled, TwitterOutlined, WifiOutlined } from '@ant-design/icons';
export default function Footer() {
    return (
        <div>
            <div className="signup-bar">
                <div className="container j-between">
                    <div className='j-between group'>
                        <SendOutlined style={{ fontSize: '30px', paddingRight:'10px', paddingTop:'5px'}} className='icon'/> 
                        <div className='newsletter'>Sign up to Newsletter</div>
                    </div>
                    <div className='shopping'>...and receive <strong>$20 coupon for first shopping</strong></div>
                    <div className="signup-input j-between">
                        <input placeholder="Enter your email address"/>
                        <button>SignUp</button>
                    </div>
                </div>
            </div>

            <div className='footer container j-between'>
              <div className='footer-left'>
                <img src={logo} alt=''/>
                <div className='j-between'>
                  <CustomerServiceOutlined className='icon'/>
                  <div>
                    <h4>Got Question? Call us 24/7</h4>
                    <h2>(800) 8001-8588, (0600) 874 548</h2>
                  </div>
                </div>
                <div className='contact'>
                  <h5>Contact Info</h5>
                  <p className='address'>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                </div>
                <div>
                  <FacebookFilled className='social-icon'/>
                  <LinkedinFilled className='social-icon'/>
                  <InstagramFilled className='social-icon'/>
                  <YoutubeFilled className='social-icon'/>
                  <SkypeFilled className='social-icon'/>
                  <TwitterOutlined className='social-icon'/>
                  <WifiOutlined className='social-icon'/>
                </div>
                    
              </div>

                <div className='footer-right j-between'>
                  <div>
                    <h6>Find It Fast</h6>
                    <p></p>
                    <p>Laptops & Computers</p>
                    <p>Cameras & Photography</p>
                    <p>Smart Phones & Tablets</p>
                    <p>Video Games & Consoles</p>
                    <p>TV & Audio</p>
                    <p>Waterproof Headphones</p>    
                  </div>
                  <div className='middle'>
                    <p>About</p>
                    <p>Contact</p>
                    <p>Wishlist</p>
                    <p>Compare</p>
                    <p>FAQ</p>
                    <p>Store Directory</p>                    
                  </div>
                  <div>
                    <h6>Customer Care</h6>
                    <p>My Account</p>
                    <p>Track your Order</p>
                    <p>Customer Service</p>
                    <p>Returns/Exchange</p>
                     <p>FAQs</p>
                    <p>Product Support</p>
                  </div>
                </div>
            </div>
        </div>
    )
}