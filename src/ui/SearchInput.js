import React  from 'react'
import {Input} from 'antd'
const { Search } = Input
function SearchInput(props){
    const {value,onChange,placeholder,onSearch}=props
    return (
      <Search value={value}
             onChange={onChange}
             placeholder={placeholder}
             onSearch={onSearch}
      />
    )
}
export default SearchInput
