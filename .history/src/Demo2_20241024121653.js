import React from 'react'

const Demo2 = () => {
    return (
        <div className='container'>
            <div className='row'>

                <div class="row col-6 mb-2">
                    <div>
                        <label className='col-12 text-start'>First Name</label>
                    </div>
                    <div>
                        <input type="text" className='col-12' />
                    </div>
                </div>
                <div class="row col-6 mb-2">
                    <div>
                        <label className='col-12 text-start'>Last Name</label>
                    </div>
                    <div>
                        <input type="text" className='col-12' />
                    </div>
                </div>

               
            </div>
            <div className='row'>
                <div className='col-12'>
                <div>
                        <label className='col-12 text-start'>Address</label>
                    </div>
                    <div>
                        <input type="text" className='col-10' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Demo2