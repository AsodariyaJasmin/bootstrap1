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
            {/* <div class="input-group mb-3">
                <span class="input-group-text">@</span>
                <input type="text" class="form-control" placeholder="Username"  />
                <input type="text" class="form-control" placeholder="Recipient's username"  />
                <span class="input-group-text">@example.com</span>
            </div> */}

            {/* buttons */}
            {/* <div>
                <button class="btn btn-primary" type="button">Button</button>
                <button class="btn btn-danger active" type="button">Button</button>
                <button type="button" class="btn btn-outline-success">Success</button>
                <button type="button" class="btn btn-primary btn-sm">Small button</button>
                <button type="button" class="btn btn-primary btn-lg">Large button</button>
            </div> */}

            {/* card */}
            {/* <div class="card text-start" style={{width: "30%"}}>
                <img src="https://gratisography.com/wp-content/uploads/2024/01/gratisography-covered-in-confetti-800x525.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a class="btn btn-primary">Go somewhere</a>
                    </div>
            </div> */}

            {/* items */}
            {/* <div class="card" style={{width: "40%"}}>
                <ul class="list-group list-group-flush">
                    <li class="list-group list-group-flush">An item</li>
                    <li class="list-group list-group-flush">A second item</li>
                    <li class="list-group list-group-flush">A third item</li>
                </ul>
            </div> */}
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://gratisography.com/wp-content/uploads/2024/01/gratisography-covered-in-confetti-800x525.jpg" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" class="d-block w-100" alt="..."/>
                    </div>
                    
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Demo3