import React from 'react'

const Demo2 = () => {
    return (
        <div className='container'>
            <div className='row'>

                <div class="row col-6 mb-2">
                    <div>
                        <label className='col-12 text-start'>Email</label>
                    </div>
                    <div>
                        <input type="email" className='col-12' />
                    </div>
                </div>
                <div class="row col-6 mb-2">
                    <div>
                        <label className='col-12 text-start'>password</label>
                    </div>
                    <div>
                        <input type="password" className='col-12' />
                    </div>
                </div>

               
            </div>
        </div>
    )
}

export default Demo2