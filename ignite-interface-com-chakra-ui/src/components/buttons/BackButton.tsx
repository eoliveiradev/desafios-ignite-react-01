'use client'

import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { CaretLeft } from 'phosphor-react'
import { useEffect, useState } from 'react'

export const BackButton = () => {
  const { back } = useRouter()

  return (
    <Button variant="ghost" onClick={back}>
      <CaretLeft size={26} color="#47585B" weight="bold" />
    </Button>
  )
}
