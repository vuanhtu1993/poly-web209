import { UserOutlined } from '@ant-design/icons';
import { AutoComplete as AutoCompleteAnt, Input } from 'antd';
import React from 'react';


  
  const options = [
    { value: "Iphone" },
    { value: "Oppo" },
    { value: "Samsung" },
    { value: "Xiaomi" },
  ];
  
  const AutoComplete: React.FC = () => (
    <AutoCompleteAnt
      dropdownClassName="certain-category-search-dropdown"
      dropdownMatchSelectWidth={500}
      style={{ width: 500 }}
      options={options}
    >
      <Input size="large" placeholder="input here 321312" />
    </AutoCompleteAnt>
  );

export default AutoComplete