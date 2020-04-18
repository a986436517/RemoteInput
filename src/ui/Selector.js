import React from 'react'
import {Spin} from 'antd'
import FlodAble from "./FlodAble";
function Selector(props){
    let {value,onChange,placeholder, dataList,onItemClick,loading,width,flod,onSearch}=props
    return (
      <div style={{width}}>
        {
              props.children.map((Component,i)=>{
              if(Component.type.name==='SearchInput'){
                return React.cloneElement(Component,{
                      value,
                      onChange,
                      placeholder,
                      onSearch,
                      key:'SearchInput'
                    })
              }
              if(Component.type.name==='List'){
                return <div className="ListWrap" key={'ListWrap'}>
                      <FlodAble flod={flod} >
                       <Spin spinning={loading} >
                        {
                            (function () {
                                if(dataList.length===0){
                                    return  loading?'拼命加载中。。。。。':'没有数据'
                                }else{
                                    return  React.cloneElement(Component,{
                                        loading,
                                        dataList,
                                        onItemClick,
                                        key:'List'
                                    })
                                }
                            })()
                        }
                      </Spin>
                    </FlodAble>
                   </div>
              }
          }
          )
        }
      </div>
    )
}
export default Selector
