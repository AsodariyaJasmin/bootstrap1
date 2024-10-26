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
                        <input type="email" className='col-12' placeholder="Email" />
                    </div>
                </div>

                <div>
                    <label className='col-6 text-start'>Email</label>
                </div>
                <div>
                    <input type="email" className='col-6' placeholder="Email" />
                </div>
            </div>
        </div>
    )
}

export default Demo2