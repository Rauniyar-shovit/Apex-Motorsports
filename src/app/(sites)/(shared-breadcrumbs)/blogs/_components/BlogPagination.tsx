"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useMemo, useCallback } from "react";
import { usePathname, useSearchParams } from "next/navigation";

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  /** If provided, forces the base path (else uses current pathname) */
}

const BlogPagination = ({ currentPage, totalPages }: BlogPaginationProps) => {

  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Helper to build href while preserving existing params
  const hrefForPage = useCallback(
    (pageNumber: number) => {
      const params = new URLSearchParams(searchParams?.toString() ?? "");
      params.set("page", String(pageNumber));

      const queryString = params.toString();
      return queryString ? `${pathname}?${queryString}` : pathname;
    },
    [searchParams, pathname]
  );

  const windowSize = 2;
  const start = Math.max(1, currentPage - windowSize);
  const end = Math.min(totalPages, currentPage + windowSize);
  const pages = useMemo(
    () => Array.from({ length: end - start + 1 }, (_, i) => start + i),
    [start, end]
  );

  const isLast = currentPage >= totalPages;
  const isFirst = currentPage <= 1;

  return (
    <Pagination className="justify-start font-barlow">
      <PaginationContent className="flex-wrap">
        <PaginationItem
          className={
            isFirst ? "pointer-events-none opacity-50 hover:bg-transparent" : ""
          }
        >
          <PaginationPrevious
            href={isFirst ? undefined : hrefForPage(currentPage - 1)}
            aria-disabled={isFirst}
            onClick={isFirst ? (e) => e.preventDefault() : undefined}
          />
        </PaginationItem>

        {/* First page shortcut */}
        {start > 1 && (
          <>
            <PaginationItem>
              <PaginationLink href={hrefForPage(1)}>1</PaginationLink>
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
              href={hrefForPage(p)}
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
              <PaginationLink href={hrefForPage(totalPages)}>
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}

        <PaginationItem
          className={
            isLast ? "pointer-events-none opacity-50 !hover:bg-white" : ""
          }
        >
          <PaginationNext
            href={isLast ? undefined : hrefForPage(currentPage + 1)}
            aria-disabled={isLast}
            onClick={isLast ? (e) => e.preventDefault() : undefined}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default BlogPagination;
