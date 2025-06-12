import React from 'react'
import {Button} from "@/structure/components/ui";
import {cn} from "@/lib/utils";
import {ArrowRight, ShoppingBasket} from "lucide-react";
import Link from "next/link";

interface Props {
  className?: string
}

export const BasketButton: React.FC<Props> = ({className}) => {
  return (
    <Link href="/">
      <Button
        className={cn("group relative", className)}
        variant="outline"
      >
        <b className="text-xs font-normal">0 ₽</b>
        <span className="h-full w-[1px] bg-primary mx-1" />
        <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
          <ShoppingBasket
            className="relative"
            strokeWidth={1}
          />
          <b className="text-xs font-normal">0</b>
        </div>
        <ArrowRight
          size={20}
          className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
        />
      </Button>
    </Link>
  )
}