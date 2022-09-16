function Home(){
    return(
        <>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" style={{height:"60vh"}}>
                    <img src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81uJIpEvwfL._SX3000_.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" style={{height:"60vh"}}>
                    <img src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61fM2VzU9RL._SX3000_.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" style={{height:"60vh"}}>
                    <img src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71W7F87q7BL._SX3000_.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" style={{height:"60vh"}}>
                    <img src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51U5LlrMYML._SX3000_.jpg" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon text-bg-primary" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon text-bg-primary" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Home;