import React from "react";
import styled from "styled-components";
import { Typography, Button } from 'antd';
import {Link} from 'react-router-dom'
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
const {Paragraph}  = Typography


const ProductAdminPage = () => {
    return (
        <>
            <Breadcrumb>
                <Typography.Title level={2} style={{ margin: 0 }}>
                    Điện thoại
                </Typography.Title>
                <Link to="/admin/product/add">
                    <Button type="dashed" shape="circle" icon={<PlusOutlined />} />
                </Link>
            </Breadcrumb>
        </>
    )
}

const Breadcrumb = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`

export default ProductAdminPage