'use client'
import React from 'react'

import ConfessionsInput from './ConfessionsInput'
import ConfessionsPosts from './ConfessionsPosts'
import ConfessionsInputModal from './ConfessionsInputModal'

import useAddConfessions from './useAddConfessions'
import useGetAllConfessions from './useGetAllConfessions'

const Confessions = () => {
  const { data, isLoading, reload } = useGetAllConfessions()

  const { isAddOpen, isAdding, onOpenChange, onOpen, onAdd } = useAddConfessions(reload)

  return (
    <div className="text-white">
      <ConfessionsInput onOpen={onOpen} />
      <ConfessionsPosts data={data} isLoading={isLoading} />
      <ConfessionsInputModal isOpen={isAddOpen} onOpenChange={onOpenChange} onAdd={onAdd} isAdding={isAdding} />
    </div>
  )
}

export default Confessions
