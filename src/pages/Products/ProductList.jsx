import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import { ProductCard } from "../../components";
import { FilterBar } from "./components/FilterBar";
import { getProductList } from "../../services";
import { toast } from "react-toastify";
import { useFilter } from "../../context";

export const ProductList = () => {
  const { products, initialProductList } = useFilter();
  const [show, setShow] = useState(false); // ✅ Correct useState destructuring
  const search = useLocation().search;
  const searchTerm = new URLSearchParams(search).get("q");
  useTitle("Explore eBooks collections");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProductList(searchTerm); // ✅ Make sure this returns parsed JSON
        initialProductList(data);
      } catch (error) {
        toast.error(error.message, {
          closeButton: true,
          position: "bottom-center",
        });
      }
    }

    fetchProducts(); // ✅ Invoke the function
  }, [searchTerm]);

  return (
    <main>
      <section className="my-5">
        <div className="my-5 flex justify-between">
          <span className="text-2xl font-semibold dark:text-slate-100 mb-5">
            All eBoook ({products?.length || 0}) {/* ✅ Optional chaining to avoid crash */}
          </span>
          <span>
            <button
              onClick={() => setShow(!show)}
              id="dropDownMenuIconButton"
              data-dropdown-toggle="dropdownDots"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-gray-500 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:focus:ring-gray-600 dark:ring-offset-gray-800 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-800"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
              </svg>
            </button>
          </span>
        </div>
        <div className="flex flex-wrap justify-center lg:flex-row">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      {show && <FilterBar setShow={setShow} />}
    </main>
  );
};
