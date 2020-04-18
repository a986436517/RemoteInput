import React  from 'react'


function FlodAble(props){
    const {flod,children}=props
    return (
        <div
            style={{
                transform:flod?'translate3d(0, 0, 0) scaleY(0)':'translate3d(0, 0, 0) scaleY(1)',
            }}
            className={'flodAbleArea'}
        >
            {children}
        </div>
    )
}
export default FlodAble
