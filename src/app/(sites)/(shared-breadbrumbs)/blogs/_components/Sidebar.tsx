import Categories from "./Categories";
import RecentPosts from "./RecentPosts";
import SearchBar from "./Search";

const Sidebar = () => {
  return (
    <section className=" w-full   lg:max-w-82  ">
      <div className=" lg:sticky lg:top-5 h-fit bg-sidebar-background px-8 md:px-6 py-8">
        <aside
          className=" grid grid-cols-1 gap-8
        md:grid-cols-2 lg:grid-cols-1
        lg:max-h-[calc(100vh-6rem)] lg:overflow-auto"
        >
          <SearchBar />
          <Categories />
          <RecentPosts />
        </aside>
      </div>
    </section>
  );
};

export default Sidebar;
