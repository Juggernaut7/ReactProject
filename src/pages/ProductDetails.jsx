import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { Ratings } from '../components'
import { useCart } from '../context'
import { getProduct } from '../services'
import { useTitle } from '../hooks/useTitle'
import { IoAdd, IoRemove, IoTrash } from 'react-icons/io5'




const ProductDetails = () => {

    const { cartList, addToCart, removeFromCart } = useCart()
    const [inCart, setInCart] = useState(false)
    const [product, setProduct] = useState({});
    const { id } = useParams();
    useTitle(product.name)


    useEffect(() => {
        async function fetchProducts() {
            try {
                const data = await getProduct(id);
                setProduct(data);
            } catch (error) {
                toast.error(error.message, { closeButton: true, position: "button-center" });
            }
        }

        fetchProducts()
    }, [id])


    useEffect(() => {
        const productInCart = cartList.find(item => item.id === product.id)

        if (productInCart) {
            setInCart(true)
        } else {
            setInCart(false)
        }
    }, [cartList, product.id])

    return (
        <main>
            <section>
                <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">{product.name}</h1>

                <p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200">{product.overview}</p>


                <div className="flex flex-wrap justify-around">
                    <div className="mx-w-xl my-3">
                        <img src={product.poster} className="rounded" alt={product.name} />
                    </div>

                    <div className="max-w-xl my-3">
                        <p className="text-3x1 font-bold text-gray-900 dark:text-slate-200">

                            <span className="mr-1">$</span>
                            <span>{product.price}</span>
                        </p>

                        <p className="my-3">
                            <span>
                                <Ratings rating={product.rating} />
                            </span>
                        </p>

                        <p className="my-4 select-none">
                            {product.best_seller &&
                                <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">
                                    BEST SELLER
                                </span>
                            }

                            {
                                product.in_stock &&
                                <span className="font-semibold text-emerald-600 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                                    INSTOCK
                                </span>
                            }

                            {
                                !product.in_stock &&
                                <span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                                    OUT OF STOCK
                                </span>
                            }


                            <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                                {product.size}
                            </span>
                        </p>

                        <p className="my-3">
                            {
                                !inCart &&
                                <button
                                    onClick={() => addToCart(product)}
                                    className={`bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg mr-2 mb-2 ${product.in_stock ? '' : 'cursor-not-allowed'}`}
                                    disabled={product.in_stock ? '' : 'disabled'}
                                >
                                    Add to cart
                                    <i className="ml-1">
                                        <IoAdd />
                                    </i>

                                </button>
                            }
                            {
                                inCart &&
                                <button
                                    onClick={() => removeFromCart(product)}
                                    className={`bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-lg mr-2 mb-2 ${product.in_stock ? '' : 'cursor-not-allowed'}`}
                                    disabled={product.in_stock ? '' : 'disabled'}
                                >
                                    Remove from cart
                                    <i className="ml-1">
                                        <IoTrash />
                                    </i>

                                </button>
                            }


                        </p>

                    </div>

                </div>
            </section>
        </main>
    )
}

export default ProductDetails