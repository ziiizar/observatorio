"use client";

import { ArrowLeft, ArrowRight } from "@/Icons/Table";
import clsx from "clsx";
import Link from "next/link";
import { cn, generatePagination } from "@/lib/utils";
import { usePathname, useSearchParams } from "next/navigation";

export default function Pagination({
  totalPages,
  className,
}: {
  totalPages: number;
  className?: string;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const pageParam = searchParams.get("page");
  const currentPage = pageParam
    ? Math.max(1, Math.floor(Number(pageParam)))
    : 1;

  const allPages = generatePagination(currentPage, totalPages);

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div
      className={cn(
        "py-2 flex w-full justify-center border-2  border-dusty-gray-300 rounded-b-xl",
        className
      )}
    >
      {/* NOTE: comment in this code when you get to this point in the course */}

      <div className="inline-flex">
        <PaginationArrow
          direction="left"
          href={createPageURL(currentPage - 1)}
          isDisabled={currentPage <= 1}
        />

        <div className="flex">
          {allPages.map((page, index) => {
            let position: "first" | "last" | "single" | "middle" | undefined;

            if (index === 0) position = "first";
            if (index === allPages.length - 1) position = "last";
            if (allPages.length === 1) position = "single";
            if (page === "...") position = "middle";

            return (
              <PaginationNumber
                key={page}
                href={createPageURL(page)}
                page={page}
                position={position}
                isActive={currentPage === page}
              />
            );
          })}
        </div>

        <PaginationArrow
          direction="right"
          href={createPageURL(currentPage + 1)}
          isDisabled={currentPage >= totalPages}
        />
      </div>
    </div>
  );
}

function PaginationNumber({
  page,
  href,
  isActive,
  position,
}: {
  page: number | string;
  href: string;
  position?: "first" | "last" | "middle" | "single";
  isActive: boolean;
}) {
  const className = clsx(
    "flex size-8 items-center justify-center text-xs border-2 transition-all duration-300 ease-in-out text-[clamp(0.75rem,2vw,1rem)] tabular-nums",
    {
      "rounded-l-md": position === "first" || position === "single",
      "rounded-r-md": position === "last" || position === "single",
      "z-10 bg-dusty-gray-500 border-dusty-gray-500  text-black": isActive,
      "hover:bg-dusty-gray-100 border-dusty-gray-500 ":
        !isActive && position !== "middle",
      "text-black/70 border-dusty-gray-300": position === "middle",
    }
  );

  return isActive || position === "middle" ? (
    <div className={className}>{page}</div>
  ) : (
    <Link href={href} className={className}>
      {page}
    </Link>
  );
}

function PaginationArrow({
  href,
  direction,
  isDisabled,
}: {
  href: string;
  direction: "left" | "right";
  isDisabled?: boolean;
}) {
  const className = clsx(
    "flex size-8 items-center justify-center rounded-md border-2 border-dusty-gray-500 transition-all duration-300 ease-in-out hover:scale-105",
    {
      "pointer-events-none text-dusty-gray-300": isDisabled,
      "hover:bg-dusty-gray-100": !isDisabled,
      "mr-2 md:mr-4": direction === "left",
      "ml-2 md:ml-4": direction === "right",
    }
  );

  const icon = direction === "left" ? <ArrowLeft /> : <ArrowRight />;

  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Link className={className} href={href}>
      {icon}
    </Link>
  );
}
