import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Typography, Button, Table, Switch, message } from 'antd';
import { Link } from 'react-router-dom'
import { SearchOutlined, PlusOutlined, EditOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { getAll, updateProduct } from "../../../api/product";
import useProduct from "../../../hooks/useProduct";
import {mutate} from 'swr'
import {currency} from '../../../ultilities'


const { Paragraph } = Typography

interface DataType {
    name: string;
    saleOffPrice: number;
    feature: string;
    description: string;
}

const columns = ({ handleDelelePrduct }): ColumnsType<DataType> => [
    {
        title: 'Tên sản phẩm',
        dataIndex: 'name',
        key: 'name',
        width: '30%',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Đặc điểm',
        dataIndex: 'feature',
        key: 'feature',
        width: '30%',
    },
    {
        title: 'Giá khuyến mãi',
        dataIndex: 'saleOffPrice',
        key: 'saleOffPrice',
        width: '20%',
        render: (_) => currency(_)
    },
    {
        title: "Ẩn/hiện",
        dataIndex: 'isDelete',
        key: 'isDelete',
        width: '10%',
        render: (_, record) => <Switch checked={_} onChange={(isDelete) => handleDelelePrduct(isDelete, record)} />
    },
    {
        title: "Thao tác",
        key: 'action',
        width: '10%',
        render: (_, record) => <EditOutlined style={{ fontSize: '20px', color: '#08c' }} />
    }
];



const ProductAdminPage = () => {
    const [dataTable, setDataTable] = useState([])
    // const [isLoading, setIsLoading] = useState(false)

    const fetchData = async () => {
        const res = await getAll()
        setDataTable(res.data)
    }

    // fetchData()
    useEffect(() => {

    }, [])

    const { data, isLoading, isError } = useProduct()

    const handleDelelePrduct = async (isDelete: boolean, record: any) => {
        const { id } = record
        record.isDelete = isDelete
        const res = await updateProduct(id, record)
        mutate('/products')
        message.success("Cập nhật thành công")
    }

    console.log("-------reRender---------")

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
            <Table loading={isLoading} columns={columns({ handleDelelePrduct })} dataSource={data?.data} rowKey="id" />
        </>
    )
}

const Breadcrumb = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`

export default ProductAdminPage