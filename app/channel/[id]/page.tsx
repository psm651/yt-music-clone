import React from 'react'

const page = (props) => {
    console.log(props.params.id)
  return (
    <div>channel{props.params.id}</div>
  )
}

export default page