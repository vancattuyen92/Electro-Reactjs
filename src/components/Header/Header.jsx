import React from 'react';
import './Header.scss'
import '../../index.scss'
import logo from './electro-logo.png'
import { Select } from 'antd';

import { EnvironmentOutlined, CarryOutOutlined, ShoppingOutlined, 
    UserOutlined, RetweetOutlined, HeartOutlined, 
    MenuOutlined, SearchOutlined} from '@ant-design/icons';
export default function Header() {
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
                <div className='cart j-between'>
                    <ShoppingOutlined />
                    <h6>$0.00</h6>
                </div>
            </div>
        </div>
    )
}