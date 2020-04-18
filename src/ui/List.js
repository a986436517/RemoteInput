import React from 'react'
function List(props){
    const {dataList,onItemClick}=props
    return (
          <ul
              className={'list'}
          >
            {
              dataList.map((d,i)=>
                  <Item key={i} text={d} onItemClick={onItemClick}/>
              )
            }
          </ul>
    )
}

function Item (props) {
    const {text,onItemClick}=props
    return (
       <li className={'list-item'} onClick={()=>{onItemClick(text)}}>{text}</li>
    )

}

export default List
