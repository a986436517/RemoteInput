import React, { Component } from 'react'
import './App.css'
import { compose } from 'redux'
import 'antd/dist/antd.css'
import Selector from './ui/Selector'
import List from './ui/List'
import SearchInput from './ui/SearchInput'
import AsnycDataDecorator from "./decorator/AsnycDataDecorator";
import SearchInputDecorator from "./decorator/SearchInputDecorator";
import FlodDecorator from "./decorator/FlodDecorator";
import {Select} from 'antd'
const {Option}=Select


const  FinalComponent=compose(FlodDecorator,AsnycDataDecorator,SearchInputDecorator)(Selector)
function RemoteInput(props){
    return (
      <FinalComponent {...props}>
       <SearchInput/>
       <List/>
      </FinalComponent>
    )
}

function App (props) {
     const list=[
        '北平',
        '北京',
        '南京',
        '东京',
        '西安',
        '杭州',
        '广州',
        '佛山',
        '深圳',
        '珠海',
        '茂名',
        '云浮',
        '韶关',
        '梅州',
    ]
   let timeout=null
   function fetchData(value,resolve,reject){
          let dataList=[]

       clearTimeout(timeout)
          timeout=setTimeout(()=>{

                list.forEach((d)=>{
                if(value.length>0&&d.indexOf(value)!==-1){
                    dataList.push(d)
                }
            })
            resolve(dataList)
        },1000)
    }

    return (
        <div className={'wrap'}>
            <RemoteInput
                placeholder={'输入城市搜索'}
                onSearch={(value) => { console.log(`onSearch: ${value}`) }}
                fetchData={fetchData}
                width={'500px'}
            />
            <div>我是下面</div>
        </div>
    )

}

export default App
