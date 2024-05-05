'use client'
import { useState } from 'react'
import { useDisclosure } from '@nextui-org/react'

import { postConfession } from '@/api/confessions'

const useAddConfessions = (callback: () => void) => {
  const [isLoading, setIsLoading] = useState(false)

  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()

  const onSubmit = async (data: any) => {
    try {
      await postConfession(data)

      if (callback) callback()
    } catch (err) {
      console.log(err)
    } finally {
      onClose()
      setIsLoading(false)
    }
  }

  return { isAddOpen: isOpen, isAdding: isLoading, onAdd: onSubmit, onOpenChange, onOpen }
}

export default useAddConfessions
