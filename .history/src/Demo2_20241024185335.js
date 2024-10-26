import React from 'react'

const Demo2 = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div class=" col-md-6 mb-2 ">
                    <div>
                        <label className='col-12 text-start'>First Name</label>
                    </div>
                    <div>
                        <input type="text" className='form-control' />
                    </div>
                </div>
                <div class="col-md-6 mb-2">
                    <div>
                        <label className='col-12 text-start'>Last Name</label>
                    </div>
                    <div>
                        <input type="text" className='form-control' />
                    </div>
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
            <div className='row border-bottom mb-3'>
                <div className=' col-md-4 mb-3'>

                    <div>
                        <label className='col-12 text-start'>Country</label>
                    </div>
                    <div >
                        <select className='col-12 form-select'>
                            <option>India</option>
                        </select>
                    </div>
                </div>
                <div className=' col-md-4 mb-3'>
                    <div>
                        <label className='col-12 text-start'>State</label>
                    </div>
                    <div >
                        <select className='col-12 form-select'>
                            <option>Gujarat</option>
                            <option>Himachal Pradesh</option>
                            <option>Kerala</option>
                        </select>
                    </div>
                </div>
                <div className=' col-md-4 mb-3'>
                    <div>
                        <label className='col-12 text-start'>Zip</label>
                    </div>
                    <div >
                        <input type='text' className='col-12 form-control'></input>
                    </div>
                </div>
            </div>
            <div className='row border-bottom mb-3'>
                <div className=' text-start'>
                    <input class="form-check-input" type="checkbox" />
                    <label>Save this information for next time</label>
                </div>
                <div className=' text-start mb-2'>
                    <input class="form-check-input " type="checkbox" />
                    <label>Shipping address is the same as my billing address</label>
                </div>
            </div>
            <div className='row mb-3'>
                <h2 className='text-start'>Payment</h2>
                <div className=' text-start'>
                    <input class="form-check-input" type="radio" name="customRadio" />
                    <label>Debit Card</label>
                </div>
                <div className=' text-start'>
                    <input class="form-check-input" type="radio" name="customRadio" />
                    <label>Credit Card</label>
                </div>
                <div className=' text-start'>
                    <input class="form-check-input" type="radio" name="customRadio" />
                    <label>Paypal</label>
                </div>
            </div>
            <div className='row'>

                <div class=" col-md-6 mb-2">
                    <div>
                        <label className='col-12 text-start'>Card Name</label>
                    </div>
                    <div>
                        <input type="text" className='form-control' />
                    </div>
                </div>
                <div class="col-md-6 mb-2">
                    <div>
                        <label className='col-12 text-start'>Card Number </label>
                    </div>
                    <div>
                        <input type="number" className='form-control' />
                    </div>
                </div>
            </div>

            <div className='row mb-3'>
                <div class="col-md-3 ">
                    <div>
                        <label className='col-12 text-start'>Cvv</label>
                    </div>
                    <div>
                        <input type="number" className='form-control' />
                    </div>
                </div>
                <div className='col-md-3'>

                    <div>
                        <label className='col-12 text-start'>Expiration</label>
                    </div>
                    <div>
                        <input type="number" className='form-control' />
                    </div>
                </div>
            </div>
            <div className='row border-top mb-3'>
                <button type='submit' className='btn btn-primary col-6 offset-3 mt-3'>Submit</button>
            </div>
        </div>
    )
}

export default Demo2