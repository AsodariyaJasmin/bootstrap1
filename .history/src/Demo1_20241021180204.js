import React from 'react'

const Demo1 = () => {
  return (
    <div className='container'>
     <div className='row'>
         <div className='col-sm-6 text-danger bg-primary' >1</div>
         <div className='col--sm4 bg-success'>1</div>
         <div className='col-2' style={{backgroundColor:'black'}}>1</div>
     </div>
     <button className='btn btn-primary'>Submit</button>
    </div>
  )
}

export default Demo1