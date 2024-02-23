import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import FormControl from "@mui/material/FormControl/FormControl";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import Select from "@mui/material/Select/Select";
import MenuItem from "@mui/material/MenuItem/MenuItem";

export default function ProductsPage() {
  return (
    <div className="relative min-h-full">
      <Header />
      <main className="flex flex-col m-auto pb-[280px] pt-[90px] px-[20px] max-w-[1400px]">
        <h2 className="m-auto w-fit text-[25px] uppercase font-semibold mb-[50px] sl:text-[35px]">
          Каталог
        </h2>

        <div className="mb-[30px] flex gap-[10px] w-full justify-between">
          <div className="flex gap-[5px] w-full">
            <input
              type="text"
              placeholder="Поиск по товарам"
              className="border-[#565656] max-w-[830px] w-full py-[12px] px-[15px] border-[1px] rounded-tl-[100px] rounded-bl-[100px] rounded-tr-[30px] rounded-br-[30px]"
            />
            <button className="py-[12px] px-[15px] border-[1px] border-black bg-black text-white rounded-tr-[100px] rounded-br-[100px] rounded-tl-[30px] rounded-bl-[30px]">
              Найти
            </button>
          </div>
          <div className="flex">
            <FormControl>
              <InputLabel id="demo-simple-select-label">Сортировка</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="default-select"
                // value={age}
                label="Сортировка"
                // onChange={handleChange}
              >
                <MenuItem value={10}>По популярности</MenuItem>
                <MenuItem value={20}>По возрастанию цены</MenuItem>
                <MenuItem value={30}>По убыванию цены</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <ProductCard
            id={1}
            photos={[{ image: "#" }]}
            price={1500}
            title="#"
          />
          <ProductCard
            id={1}
            photos={[{ image: "#" }]}
            price={1500}
            title="#"
          />
          <ProductCard
            id={1}
            photos={[{ image: "#" }]}
            price={1500}
            title="#"
          />
          <ProductCard
            id={1}
            photos={[{ image: "#" }]}
            price={1500}
            title="#"
          />
          <ProductCard
            id={1}
            photos={[{ image: "#" }]}
            price={1500}
            title="#"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
