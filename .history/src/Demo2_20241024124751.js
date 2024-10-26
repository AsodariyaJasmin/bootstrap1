import React from 'react'

const Demo2 = () => {
    return (
        <div className='container'>
            <div className='row'>

                <div class=" col-6 mb-2">
                    <div>
                        <label className='col-12 text-start'>First Name</label>
                    </div>
                    <div>
                        <input type="text" className='form-control' />
                    </div>
                </div>
                <div class="col-6 mb-2">
                    <div>
                        <label className='col-12 text-start'>Last Name</label>
                    </div>
                    <div>
                        <input type="text" className='form-control' />
                    </div>
                </div>


                <div className='row'>
                    <div className='col-12 mb-3'>
                        <div>
                            <label className='col-12 text-start'>UserName</label>
                        </div>
                        <div className="input-group">
                            <span className="input-group-text">@</span>
                            <input type="text" className="form-control" placeholder="UserName" />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 mb-3'>
                        <div>
                            <label className='col-12 text-start'>Email(Optional)</label>
                        </div>
                        <div>
                            <input type="email" className='form-control' />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 mb-3'>
                        <div>
                            <label className='col-12 text-start'>Address</label>
                        </div>
                        <div>
                            <input type="text" className='form-control' />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 mb-3'>
                        <div>
                            <label className='col-12 text-start'>Address2(Optional)</label>
                        </div>
                        <div>
                            <input type="text" className='form-control' />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-4'>

                    <div>
                        <label className='text-start'>Country</label>
                    </div>
                    <div className='col-6'>
                        <select>
                            <option>India</option>
                            <option>England</option>
                        </select>
                    </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Demo2