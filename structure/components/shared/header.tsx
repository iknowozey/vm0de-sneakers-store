import {cn} from "@/lib/utils"
import Link from "next/link"
import React from "react"
import {Button} from "@/structure/components/ui/button";
import {ArrowRight, ShoppingBasket} from "lucide-react"
import {Container} from "@/structure/components/shared/container";
import {Input} from "@/structure/components/ui/input";
import {
  ButtonToggleTheme
} from "@/structure/components/shared/button-toggle-theme";
import {HeaderLinks} from "@/structure/components/shared/header-links";
import {SearchInput} from "@/structure/components/shared/search-input";


interface Props {
  className?: string
}


export const Header: React.FC<Props> = ({className}) => {
  return (
    <>
      <div className="sticky top-0 bg-background/80 z-10 backdrop-blur-xl">
        <Container>
          <header
            className={cn(
              "flex items-center justify-between py-3.5 px-10",
              className
            )}
          >
            <HeaderLinks />
            <SearchInput />
            <div className="flex items-center gap-10">
              <div className="flex gap-5">
                <Button
                  variant="outline"
                  className="font-normal"
                >
                  Войти
                </Button>
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
              </div>
              <ButtonToggleTheme />
            </div>
          </header>
        </Container>
      </div>
    </>
  )
}


