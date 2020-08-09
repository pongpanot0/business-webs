import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <Link to="/">หน้าหลัก</Link>
                <Link to="About/">เกี่ยวกับ</Link>
                <Link to="Product/">สินค้า</Link>
                <Link to="Contact/">ติดต่อเรา</Link>
                <Link to="Profile/">ข้อมูลส่วนตัว</Link>
            </div>
        )
    }
}
