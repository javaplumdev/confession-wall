import React from 'react'
import { Card } from '@nextui-org/react'
import { FaRegUser } from 'react-icons/fa6'
import { IoCloudOutline } from 'react-icons/io5'

import BaseButton from '@/components/buttons/BaseButton'

type ConfessionsInput = {
  onOpen: () => void
}

const ConfessionsInput = (props: ConfessionsInput) => {
  const { onOpen } = props

  return (
    <div>
      <div className="text-center py-12">
        <h3 className="text-6xl md:text-7xl font-medium">OpenHeart Plaza</h3>
        <p className="pt-3">Let It Out, Feel Relief</p>
      </div>

      <Card className="p-8 bg-zinc-800">
        <div className="flex justify-between items-center">
          <FaRegUser size="1em" className="mr-3 text-white" />
          <BaseButton
            text="Tell me about your thoughts"
            color="primary"
            startContent={<IoCloudOutline size="1em" />}
            fullWidth
            onPress={onOpen}
          />
        </div>
      </Card>
    </div>
  )
}

export default ConfessionsInput
