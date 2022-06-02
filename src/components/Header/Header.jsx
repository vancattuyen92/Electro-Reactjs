import React from 'react';
import './Header.scss'
import '../../index.scss'
import logo from './electro-logo.png'
import { Select } from 'antd';
import { useSelector} from 'react-redux'
import { Popover} from 'antd';

import { EnvironmentOutlined, CarryOutOutlined, ShoppingOutlined, 
    UserOutlined, RetweetOutlined, HeartOutlined, 
    MenuOutlined, SearchOutlined} from '@ant-design/icons';

export default function Header() {
    // const totalAmount = useSelector((state) => state.totalAmount.currentVal)
    const totalProducts = useSelector((state) => state.totalProduct.currentProduct)
    console.log('new products cart', totalProducts)
    let totalVal = 0
    for (let i=0; i< totalProducts.length; i++) {
      totalVal = totalVal + parseInt(totalProducts[i].price) 
    }
    console.log('totalValllllllll',totalVal)
    const [visible, setVisible] = React.useState(false);

    const handleVisibleChange = (newVisible) => {
        setVisible(newVisible);
    };

    let url="";
    const { Option } = Select;
    const categories = [
        {name:'All Catgories'},
        {name:'Accessories'},
        {name:'Gadgets'}, 
        {name:'Camera & Phone'},
        {name:'Computer Components'},
        {name:'Home Entertainment'},
        {name:'Laptops & Computers'},
        {name:'Printers & Ink'},
        {name:'Smart Phones & Tablets'},
        {name:'TV & Audio'},
        {name:'Video Games & Consoles'},
        {name:'Bluetooth Speakers'},
        {name:'Home Theatre'}
    ]
    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    return (
        <div className=''>
            <div className="container header j-between">
                <p>Welcome to Worldwide Electronics Store</p>
                <div className="navbar-right">
                    <ul className="j-between">
                        <li>
                            <a href={url}><EnvironmentOutlined/> Store Locator</a>
                        </li>
                        <li>|</li>
                        <li>
                            <a href={url}><CarryOutOutlined/> Track Your Order</a>
                        </li>
                        <li>|</li>
                        <li>
                            <a href={url}><ShoppingOutlined/> Shop</a>
                        </li>
                        <li>|</li>
                        <li>
                            <a href={url}><UserOutlined/> My Account</a>
                        </li>
                    </ul>
                </div>
            </div>

            <hr/>

            <div className='container navbar j-between'>
                <a href={url}><img src={logo} alt=""/></a>
                <MenuOutlined className='icon-bar'/>
                <div className='three-bar'></div>
                <div className="search-bar j-between">
                    <input placeholder='Seach for Products'/>
                    <Select defaultValue="All Categories" style={{ width: 200}} onChange={handleChange} >
                        {categories.map(category => 
                            <Option value={category.name}>{category.name}</Option>
                        )}
                    </Select>
                    <button className='searching'><SearchOutlined /></button>
                </div>
                <div className='icon-list j-between'>
                    <RetweetOutlined className='icon' />
                    <HeartOutlined className='icon' />
                    <UserOutlined className='icon' />
                </div>
                <Popover
                    content={
                        <div>
                            {totalProducts.map((product) => (
                                <div className='j-between cart-total'>
                                    <div className='img'><img src={product.image} alt=""/></div>
                                    <div className='cart-content'>
                                        <h4>{product.sub_name}</h4>
                                        <h3>${product.price}.00</h3>
                                    </div>
                                </div>
                            ))}
                            <h2 style={{color:'red'}}>Total: ${totalVal}.00</h2>
                        </div>
                    }
                    title="Cart"
                    trigger="click"
                    visible={visible}
                    onVisibleChange={handleVisibleChange}
                    >
                        <div className='cart j-between' style={{marginBottom:'-10px',color: '#fed700'}}>
                            <ShoppingOutlined style={{padding:"4px 5px 0 0"}}/>
                            <h5>${totalVal}.00</h5>
                        </div>
                    
                </Popover>
                    
            </div>
        </div>
    )
}