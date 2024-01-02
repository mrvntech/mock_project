import Modal from "../../component/modal"
import Benefit from "./components/benefits"
import Categories from "./components/categories"
import ProductCards from "./components/product-cards"
import "./style.scss"

export default function Home() {
    return (
        <div className="page-content">
            <div className="top">
                <Categories />
                <div className="banner">
                    <div className="big">
                        <img src="/Carousel.svg" alt="" className="big" />
                    </div>
                    <Modal openButton={<button>open</button>} content={<div>this is content
                        <input type="text" />
                    </div>} closeButton={<button>close</button>}>

                    </Modal>
                    <div className="small">
                        <img src="/Photos.svg" alt="" className="image" />
                        <img src="/Photos.svg" alt="" className="image" />
                        <img src="/Photos.svg" alt="" className="image" />
                    </div>
                </div>
            </div>
            <Benefit />
            <div className="bestsellers">
                <div className="top">
                    <div className="label">Bestsellers</div>
                    <button className="button">Show more ...</button>
                </div>
                <ProductCards />
            </div>
        </div>
    )
}