import React, { useState,useEffect } from 'react'

function FlodDecorator(WrappedComponent){
    function FlodDecorator(props) {
     const [flod,setFlod]=useState(true)
        useEffect(()=>{
            window.addEventListener('click',()=>{
                setFlod(true)
            })
            return function () {
                window.removeEventListener('click')
            }
        },[])

        function unfold(){
            setFlod(false)
        }

       return (
          <WrappedComponent
              { ...props}
              flod={flod}
              unfold={unfold}
          />
       )

   }
  return FlodDecorator
}
export default FlodDecorator
