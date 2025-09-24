"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter } from "next/navigation";

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
}

const BlogPagination = ({ currentPage, totalPages }: BlogPaginationProps) => {
  const router = useRouter();

  const goToPage = (page: number) => {
    router.push(`/blogs?page=${page}`); // 👈 adapt this route
  };

  return (
    <Pagination className="justify-start font-barlow">
      <PaginationContent>
        {/* Previous */}
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={() => goToPage(Math.max(1, currentPage - 1))}
            aria-disabled={currentPage === 1}
          />
        </PaginationItem>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href="#"
              onClick={() => goToPage(page)}
              className={`text-lg ${
                page === currentPage ? "font-bold text-primary" : ""
              }`}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Next */}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
            aria-disabled={currentPage === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default BlogPagination;
