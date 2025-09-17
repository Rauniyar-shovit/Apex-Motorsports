import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
const BlogPagination = () => {
  return (
    <Pagination className="justify-start font-barlow ">
      <PaginationContent>
        <PaginationItem className="">
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem className="">
          <PaginationLink href="#" className="text-lg ">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" className="text-lg">
            2
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default BlogPagination;
