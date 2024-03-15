import React from 'react'

const style={
    div: {
        backgroundColor: 'red',
        color: 'green'
    }
}

const Hello = () => {
  return (
    <div style={style.div}>Hello</div>
  )
}

export default Hello