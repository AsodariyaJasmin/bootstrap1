import React from 'react'

const Demo2 = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div class="row">
                    <div>

                    <label className='col-6'>Email</label>
                    </div>
                    <div>

                    <input type="email" className='col-6' placeholder="Email" />
                    </div>
                </div>
                <div class="row">
                    <label className='text-left'>Password</label>
                    <input type="password"  placeholder="Password" />
                </div>
            </div>
        </div>
    )
}

export default Demo2