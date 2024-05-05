import React from 'react'
import { Input } from '@nextui-org/react'
import { InputProps } from '@nextui-org/react'

const BaseInput = (props: InputProps) => {
  const { label, placeholder, type, ...rest } = props

  return <Input type={type} label={label} placeholder={placeholder} {...rest} />
}

export default BaseInput
