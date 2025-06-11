import React from 'react'
import {Input} from "@/structure/components/ui/input";
import {cn} from "@/lib/utils";

interface Props {
  className?: string
}

export const SearchInput: React.FC<Props> = ({className}) => {
  return (
    <div className={cn("relative w-220", className)}>
      <Input placeholder="Найти модель" />
    </div>
  )
}