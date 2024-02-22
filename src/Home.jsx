import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
    const [productsData, setProductsData] = useState({ products: [] });
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("https://dummyjson.com/products");
            setProductsData(response.data);
        };

        fetchData();
    }, []);

    const handleAddToCart = (product) => {
        setCart([...cart, product]);
    };

    const { products } = productsData;



    return (
        <div>
            <div className="flex justify-end gap-[60px]">

                <div className="ml-[30px] mt-[30px]">Products Added To Cart: {cart.length}</div>
                <div className="mt-[30px] mr-[20px]">Total Amount: ${cart.reduce((total, product) => total + product.price, 0)}</div>
            </div>

            <ul className="mb-8 bg-red-500">
                {products.map((product) => (
                    <li className="mb-[50px] ml-[20px]" key={product.id}>

                        <h1 className="text-[30px] mb-[10px] font-bold">{product.title.toUpperCase()}</h1>
                        <img src={product.thumbnail} className="rounded-xl" alt="" />
                        <h1 className=" text-[25px] mt-[10px] font-semibold">{product.description}</h1>
                        <h2 className="text-[25px] mt-[10px] font-semibold"> Price: ${product.price} </h2>
                        <button className="transition ease-in-out delay-150 p-[15px] w-[25vh] mb-[20px] mt-[20px] text-[20px] font-semibold bg-red-100 border-2 rounded-lg hover:bg-red-500" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default Home;
