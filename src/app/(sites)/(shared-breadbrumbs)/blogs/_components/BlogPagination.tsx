"use client";

import
  {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination";

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  basePath?: string; // default: "/blogs"
}

const BlogPagination = ({
  currentPage,
  totalPages,
  basePath = "/blogs",
}: BlogPaginationProps) => {
  const pageHref = (p: number) => `${basePath}?page=${p}`;

  const window = 2;
  const start = Math.max(1, currentPage - window);
  const end = Math.min(totalPages, currentPage + window);
  const pages = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  const isLast = currentPage >= totalPages;
  const isFirst = currentPage <= 1;

  return (
    <Pagination className="justify-start font-barlow  ">
      <PaginationContent className="flex-wrap">
        <PaginationItem
          className={
            isFirst ? "pointer-events-none opacity-50 hover:bg-transparent" : ""
          }
        >
          <PaginationPrevious
            href={isFirst ? undefined : pageHref(currentPage - 1)}
            aria-disabled={isFirst}
          />
        </PaginationItem>

        {/* First page shortcut */}
        {start > 1 && (
          <>
            <PaginationItem>
              <PaginationLink href={pageHref(1)}>1</PaginationLink>
            </PaginationItem>
            {start > 2 && <PaginationEllipsis />}
          </>
        )}

        {/* Windowed pages */}
        {pages.map((p) => (
          <PaginationItem
            key={p}
            className={p === currentPage ? "text-white bg-foreground" : ""}
          >
            <PaginationLink
              href={pageHref(p)}
              aria-current={p === currentPage ? "page" : undefined}
            >
              {p}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Last page shortcut */}
        {end < totalPages && (
          <>
            {end < totalPages - 1 && <PaginationEllipsis className="mx-2" />}
            <PaginationItem>
              <PaginationLink href={pageHref(totalPages)}>
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}

        <PaginationItem
          className={
            isLast ? "pointer-events-none  opacity-50 !hover:bg-white" : ""
          }
        >
          <PaginationNext
            href={isLast ? undefined : pageHref(currentPage + 1)}
            aria-disabled={isLast}
            onClick={isLast ? (e) => e.preventDefault() : undefined}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default BlogPagination;
