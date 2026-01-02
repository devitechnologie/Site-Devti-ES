"use client"

import { cn } from "@/utils/cn";
import { LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { Link } from "react-scroll"

type ClientSafeLinkProps = {
  href: LinkField;
  className?: string;
  children: React.ReactNode;
}
const ClientSafeLink = ({ href, className, children }: ClientSafeLinkProps) => {
  return (
    <div>
      {
        (href as any)?.url?.includes("#") ? (
          <Link
            to={(href as any)?.url?.replace("#", "")}
            smooth={true}
            duration={500}
            offset={-50}
            className={cn("cursor-pointer", className)}
          >
            {children}
          </Link>
        ) : (
          <PrismicNextLink
            field={href}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
          >
            {children}
          </PrismicNextLink>
        )
      }
    </div>
  )
}

export default ClientSafeLink