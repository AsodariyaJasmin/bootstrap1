import React from 'react'

const Demo1 = () => {
  return (
    <div className='container-fluid'>
      {/* <div className='row'>
        <div className='col-sm text-danger bg-primary' >1</div>
        <div className='col-sm bg-success'>1</div>
        <div className='col-sm' style={{ backgroundColor: 'black' }}>1</div>
      </div> */}
      {/* <div class="row justify-content-md-center">
        <div class="col col-lg-2 bg-dark">
          1 of 3
        </div>
        <div class="col bg-success">
          Variable width content
        </div>
        <div class="col col-lg-2 bg-danger">
          3 of 3
        </div>
      </div> */}
      {/* <div class="row">
        <div class=" col-md-6 col-lg-12 bg-danger" >
          1 of 3
        </div>
        <div class="col-md-6 col-lg-12 bg-primary">
          Variable width content
        </div> 
         <div class=" col-md-6 col-lg-12 bg-dark">
          3 of 3
        </div>
        <div class="col-md-6 col-lg-12 bg-primary">
          Variable width content
        </div> 
      </div> */}
      {/* <div className='row'>
        <div className='col-4 offset-md-2  bg-success' >AAA</div>
        <div className='col-4 offset-md-2  bg-danger' >BBB</div>
      </div> */}
      <div className='row'>
        <div className='col-4  order-sm-last bg-success' >AAA</div>
        <div className='col-4   bg-danger' >BBB</div>
        <div className='col-4 order-sm-first bg-primary' >CCC</div>
      </div>
        <button className='btn btn-primary'>Submit</button>
        </div>
      )
}

      export default Demo1