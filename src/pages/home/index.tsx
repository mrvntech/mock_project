import "./style.scss"

export default function Home() {
    return (
        <div className="page-content">
            <div className="top">
                <img src="/Category.svg" alt="" className="navigation" />
                <div className="banner">
                    <div className="big">
                        <img src="/Carousel.svg" alt="" className="big" />
                    </div>
                    <div className="small">
                        <img src="/Photos.svg" alt="" className="image" />
                        <img src="/Photos.svg" alt="" className="image" />
                        <img src="/Photos.svg" alt="" className="image" />
                    </div>
                </div>
            </div>
            <div className="ship">
                <img src="/Benefit.svg" alt="" />
                <img src="/Benefit.svg" alt="" />
                <img src="/Benefit.svg" alt="" />
                <img src="/Benefit.svg" alt="" />
            </div>
            <div className="bestsellers">
                <div className="top">
                    <div className="label">Bestsellers</div>
                    <button className="button">Show more ...</button>
                </div>
                <div className="content">
                    <img src="product-card.svg" />
                    <img src="product-card.svg" />
                    <img src="product-card.svg" />
                    <img src="product-card.svg" />
                </div>
            </div>
        </div>
    )
}