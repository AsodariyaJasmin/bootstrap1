import React from 'react'

const Demo2 = () => {
    return (
        <div className='container'>
            <div className='row'>
            <div class="form-group col-lg-6">
                <label className='text-start'>Email</label>
                <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
            </div>
            <div class="form-group col-lg-6">
                <label className='text-left'>Password</label>
                <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
            </div>
            </div>
            <p class="text-end">Start aligned text on all viewport sizes.</p>
        </div>
    )
}

export default Demo2