
import React from "react";

const PriceUp = async () => {
  // Fetching data
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products"
  );

  const data = await res.json();

  // Filter increased-price products
  const upProducts = data.filter(
    (elm) => elm.change.dir === "up"
  );

  // Sort descending and get top 6
  const upPct = [...upProducts]
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6)
    
  return (
    <section className="container mx-auto px-4 py-6">
      {/* Section heading */}
      <div className="mb-4 flex items-center gap-2">
        <span className="text-xl">📈</span>
        <h2 className="text-lg text-white font-bold text-gray-800 md:text-xl">
          দাম বেড়েছে
        </h2>
      </div>
      {/* Responsive cards */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {upPct.map((elm) => (
          <div
            key={elm.id}
            className="rounded-xl border border-red-100 bg-white p-3 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md sm:p-4"
          >
            {/* Product icon */}
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-2xl">
              {elm.image || elm.categoryIcon || "🛒"}
            </div>

            {/* Product name */}
            <h3 className="mb-2 min-h-10 text-sm font-semibold leading-5 text-gray-700">
              {elm.nameBn}
            </h3>

            {/* Today's price */}
            <p className="text-lg font-bold text-gray-900">
              {Number(elm.today).toLocaleString("bn-BD")}
              <span className="ml-1 text-xs font-normal text-gray-500">
                টাকা/{elm.unit === "kg" ? "কেজি" : elm.unit}
              </span>
            </p>

            {/* Price increase percentage */}
            <div className="mt-2 inline-flex items-center gap-1 rounded-md bg-red-50 px-2 py-1 text-xs font-semibold text-red-600">
              📈
              {Number(elm.change.pct).toLocaleString("bn-BD")}
              <span>%</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PriceUp;