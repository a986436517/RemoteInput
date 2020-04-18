import React, { useState } from 'react'

function AsnycDataDecorator(WrappedComponent){
    function AsnycDataDecorator (props) {
        const [dataList,setDataList]=useState([])
        const [loading,setLoading]=useState(false)


     function getData(value){
         setLoading(true)
          props.unfold()
         new Promise((resolve,reject)=>{
             props.fetchData(value,resolve,reject)
         }).then((value)=>{setDataList(value);setLoading(false)})
             .catch(((reason)=>{setLoading(false);setDataList([reason])}))
     }

     function clearData() {
         setDataList([])
     }
       return (
          <WrappedComponent
              { ...props}
              loading={loading}
              dataList={dataList}
              getData={getData}
              clearData={clearData}
          />
       )
   }
  return AsnycDataDecorator
}
export default AsnycDataDecorator
