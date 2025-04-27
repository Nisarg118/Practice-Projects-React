import { useEffect } from "react";
import { useState } from "react";

export default function AutoCompleteSearch() {
  const [searchParam, setSearchParam] = useState("");
  const [products, setProducts] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache] = useState({});

  async function fetchData() {
    if (cache[searchParam]) {
      setProducts(cache[searchParam]);
      return;
    }
    console.log("API call", searchParam);
    const data = await fetch(
      "https://dummyjson.com/products/search?q=" + searchParam
    );
    const result = await data.json();
    setProducts(result?.products);
    setCache((prev) => ({ ...prev, [searchParam]: result?.products }));
  }

  useEffect(() => {
    let timer;
    if (searchParam !== "") {
      timer = setTimeout(fetchData, 300);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [searchParam]);

  return (
    <div className="flex min-h-screen bg-amber-200 items-center p-10 flex-col">
      <h1 className="text-3xl font-bold">Autocomplete Search Bar</h1>
      <div>
        <input
          type="text"
          className="border mt-10 w-[500px] p-2"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          onFocus={(e) => setShowResults(true)}
          onBlur={(e) => setTimeout(() => setShowResults(false), 100)}
        />
      </div>
      <div
        className={`bg-white flex flex-col p-2 text-lg w-[500px] max-h-[400px] overflow-y-scroll ${
          !showResults ? "hidden" : null
        }`}
      >
        {products.map((product, index) => (
          <span
            className="hover:bg-gray-200 cursor-pointer"
            key={index}
            onClick={(e) => {
              setSearchParam(product.title);
              setShowResults(false);
            }}
          >
            {product.title}
          </span>
        ))}
      </div>
    </div>
  );
}
