import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

export default function DebounceApiCall() {
  const [searchParam, setSearchParam] = useState("");
  const debounceParamValue = useDebounce(searchParam, 2000);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      setLoading(true);
      setError(null);
      const data = await fetch(
        `https://dummyjson.com/products/search?q=${debounceParamValue}`
      );
      const result = await data.json();

      console.log(result);
      setProducts(result.products);
    } catch (error) {
      console.log("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (debounceParamValue.trim() !== "") {
      fetchData();
    } else {
      setProducts([]);
    }
  }, [debounceParamValue]);
  return (
    <div className="min-h-screen flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold mb-10">Debounce API Call</h1>
      <div>
        <input
          type="text"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          className="px-3 py-2 w-[300px] border"
          placeholder="Enter input"
        />
        {error && <p className="mt-5 text-red-500">{error}</p>}
        {loading && <p className="mt-5 text-blue-500">...Loading</p>}
        {products && (
          <ul className="mt-5 w-[300px]">
            {products.map((pro) => (
              <li key={pro.id} className="border-b py-2">
                {pro.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
