import ListNavigation from "./components/ListNavigation";
import ShowPrice from "./components/ShowPrice";

const navItems = [
  { label: "Menu 1", url: "#" },
  { label: "Menu 2", url: "#" },
];

const contents = [
  {
    title: "Air Mineral",
    html: <p>Dari mata air pilihan.</p>,
    price: 1000,
  },
  {
    title: "Ciki/Snack",
    html: <b>Snack yang tidak mengenyangkan.</b>,
    price: 2000,
    discountPrice: 1500,
  },
];

// if (discountPrice) {
//   if (discountType === "percentage") {
//     if (discountValue >= 10) {
//       return <p><s>{price}</s>{discountValue * price}</p>
//     }
//     return <p>hello</p>
//   }
//   return null
// }

function App() {
  return (
    <body>
      <header className="bg-[#152A46] text-white px-[120px] py-[28px] text-[20px] flex justify-between">
        <h1 className="text-2xl text-red-500 font-bold">Header</h1>
        <nav>
          <ListNavigation items={navItems} />
        </nav>
      </header>
      <div className="px-[72px] py-[89px] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {contents.map((item) => (
          <section className="w-[352px]" key={item.title}>
            <div className="bg-[#152A46] rounded-t-[20px] flex flex-row ">
              <img
                src="/assets/image/person.png"
                className="w-[75px] h-[149.15px] ml-[28px]"
              />
              <div className="">
                <h2 className="ml-[17px] mt-[27px] text-[16px] font-semibold text-[#FFCD29]">
                  Intensive Bootcamp
                </h2>
                <p className="ml-[17px] mt-[9px] text-[20px] font-bold text-white"></p>
                <p className="text-[12px] font-normal"></p>
              </div>
            </div>
            {item.html}
            {/* <p>Harga: Rp {item.discountPrice ? (
            <s>{item.price}</s>
          ): item.price} {item.discountPrice && item.discountPrice}</p> */}
            <ShowPrice products={item} />
          </section>
        ))}
      </div>

      <footer className="bg-[#152A46] text-center text-white py-[20px]">
        <p>
          Edspert, copyright. Alamat boleh ditaruh disini apabila diinginkan.
        </p>
      </footer>
    </body>
  );
}

export default App;
