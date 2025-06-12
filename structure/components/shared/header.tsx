import {cn} from "@/lib/utils"
import React from "react"
import {
  Container,
  HeaderLinks,
  SearchInput,
  ButtonToggleTheme,
  LoginButton,
  BasketButton,
  TopBar
} from "./index"


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
                <LoginButton />
                <BasketButton />
              </div>
              <ButtonToggleTheme />
            </div>
          </header>
        </Container>
        <TopBar />
      </div>
    </>
  )
}


