import React from 'react'
import {Button} from "@/structure/components/ui";
import {cn} from "@/lib/utils";

interface Props {
  className?: string
}

export const LoginButton: React.FC<Props> = ({className}) => {
  return (
    <Button
      variant="outline"
      className={cn("font-normal", className)}
    >
      Войти
    </Button>
  )
}