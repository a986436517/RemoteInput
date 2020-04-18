import React, { useState } from 'react'

function SearchInputDecorator(WrappedComponent){
    function SearchInputDecorator(props){

     const [value,setValue]=useState('')
     function onChange(e){
        let value=e.target.value
         setValue(value)
         props.getData(value)
     }
     function onItemClick(value){
         setValue(value)
         props.clearData&&props.clearData()
     }

       return (
          <WrappedComponent
              { ...props}
              onChange={onChange}
              onItemClick={onItemClick}
              value={value}
          />
       )
   }
  return SearchInputDecorator
}
export default SearchInputDecorator
