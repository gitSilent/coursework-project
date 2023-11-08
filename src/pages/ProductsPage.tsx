import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

export default function ProductsPage() {
  return (
    <div className="relative min-h-full">
      <Header />
      <main className="flex flex-col m-auto pb-[280px] pt-[90px] px-[20px] max-w-[1400px]">
        <h2 className="m-auto w-fit text-[25px] uppercase font-semibold mb-[50px] sl:text-[35px]">
          Каталог
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <ProductCard id={1} photos={[{image:"#"}]} price={1500} title="#"/>
          <ProductCard id={1} photos={[{image:"#"}]} price={1500} title="#"/>
          <ProductCard id={1} photos={[{image:"#"}]} price={1500} title="#"/>
          <ProductCard id={1} photos={[{image:"#"}]} price={1500} title="#"/>
          <ProductCard id={1} photos={[{image:"#"}]} price={1500} title="#"/>
        
        </div>
      </main>
      <Footer />
    </div>
  );
}
