import React from "react";
import { UserOutlined, SearchOutlined } from '@ant-design/icons';
import { AutoComplete, Input } from 'antd';
import styled from 'styled-components'


const options = [
    { value: 'Burns Bay Road' },
    { value: 'Downing Street' },
    { value: 'Wall Street' },
];

const InputSearch = () => {
    return (
        <AutoComplete
            dropdownClassName="certain-category-search-dropdown"
            dropdownMatchSelectWidth={500}
            options={options}
            filterOption={(inputValue, option) => {
                 return option!.value.toUpperCase().includes(inputValue.toUpperCase())
            }}
        >
            <Input size="large" placeholder="large size" prefix={<SearchOutlined />} />
        </AutoComplete>
    )
}

const AutoCompleteCustom = styled(AutoComplete)`
    width: 500px;
`

export default InputSearch;