"use client";

import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const Breadcrumb: React.FC = () => {
  const pathName = usePathname();
  const paths = pathName?.split("/").filter((path) => path);

  return (
    <Breadcrumbs aria-label="breadcrumb navigation" className="py-8">
      <BreadcrumbItem>
        <Link href="/">Home</Link>
      </BreadcrumbItem>

      {paths?.map((path, index) => (
        <BreadcrumbItem key={index}>
          <Link href={`/${paths.slice(0, index + 1).join("/")}`} className="capitalize">{path}</Link>
        </BreadcrumbItem>
      ))}
    </Breadcrumbs>
  );
};