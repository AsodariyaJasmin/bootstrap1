import React from 'react'

const Demo3 = () => {
    return (
        <div className='container'>
            {/* alert */}
            {/* <div class="alert alert-primary" >
                A simple primary alert—check it out!
                A simple primary alert with <a href="" class="alert-link">an example link</a>. Give it a click if you like.
            </div>
            <button type="button" class="btn btn-primary">
                Notifications <span class="badge text-bg-dark">4</span>
            </button>
            <div>

                <img src="https://gratisography.com/wp-content/uploads/2024/01/gratisography-covered-in-confetti-800x525.jpg" class="img-fluid" alt="..."></img>
            </div> */}
            <div class="input-group mb-3">
                <span class="input-group-text">@</span>
                <input type="text" class="form-control" placeholder="Username"  aria-describedby="basic-addon1"/>
            </div>

            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Recipient's username"  aria-describedby="basic-addon2"/>
                    <span class="input-group-text">@example.com</span>
            </div>

        </div>
    )
}

export default Demo3