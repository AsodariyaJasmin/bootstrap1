// import React from 'react'

// const Demo1 = () => {
//   return (
//     <div className='container'>
//       {/* <div className='row'>
//         <div className='col-sm text-danger bg-primary' >1</div>
//         <div className='col-sm bg-success'>1</div>
//         <div className='col-sm' style={{ backgroundColor: 'black' }}>1</div>
//       </div>
//       <div class="row justify-content-md-center">
//         <div class="col col-lg-2 bg-dark">
//           1 of 3
//         </div>
//         <div class="col bg-success">
//           Variable width content
//         </div>
//         <div class="col col-lg-2 bg-danger">
//           3 of 3
//         </div>
//       </div> */}
//       <div class="row">
//         <div class="col-sm-4 bg-danger">
//           1 of 3
//         </div>
//         <div class="col-sm-8 bg-primary">
//           Variable width content
//         </div>
//         {/* <div class="col col-lg-2">
//           3 of 3
//         </div> */}
//       </div>
//         <button className='btn btn-primary'>Submit</button>
//         </div>
//       )
// }

//       export default Demo1

import React from 'react';

const Demo1 = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
};

export default Demo1;