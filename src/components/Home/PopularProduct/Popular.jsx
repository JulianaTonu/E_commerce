import POPULAR from "../../../assets/popular";
import Item from "./Item";
const Popular = () => {
    return (
        <div className="container text-center">
            <h3>Popular Products</h3>
            {POPULAR.length}
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mx-6 gap-3  items-center">
                {POPULAR.map((item) => (
                    <Item key={item.id} id={item.id} image={item.img} name={item.productName} oldPrice={item.oldPrice} newPrice={item.newPrice}
                    >
                    </Item>
                ))}
            </div>
        </div>
    );
};

export default Popular;