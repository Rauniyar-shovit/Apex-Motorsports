import React from "react";
import SearchBar from "./Search";

const Sidebar = () => {
  return (
    <section className=" w-full bg-sidebar-background lg:max-w-82 bg-g px-8 py-8">
      <SearchBar />
    </section>
  );
};

export default Sidebar;
