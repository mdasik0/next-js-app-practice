import Link from "next/link";
import React from "react";

const DashBoardLayout = ({ children }) => {
  return (
    <div>
      <section className="bg-yellow-500 flex flex-col gap-2 m-3 font-mono text-white w-fit p-2">
        <Link className="hover:text-black duration-500" href={"/dashboard/add-product"}>Add Product</Link>
        <Link className="hover:text-black duration-500" href={"/dashboard/manage-product"}>Manage Product</Link>
      </section>
      {children}
    </div>
  );
};

export default DashBoardLayout;
