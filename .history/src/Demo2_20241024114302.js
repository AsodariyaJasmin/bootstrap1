import React from 'react'

const Demo2 = () => {
    return (
        <div className='container'>
            <div className='row mb-3'>
                <div>

                <label htmlFor="inputEmail4" className="col-sm-2 col-form-label">Email</label>
                </div>
                <div className="col-sm-10">
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                </div>
            </div>
            <div className='row mb-3'>
                <label htmlFor="inputPassword4" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                </div>
            </div>
        </div>
    )
}

export default Demo2
