import React, { ReactNode } from 'react'
import { Button } from '@nextui-org/react'
import { ButtonProps } from '@nextui-org/react'

type BaseButtonProps = {
  text?: string
  icon?: ReactNode
}

const BaseButton: React.FC<ButtonProps & BaseButtonProps> = props => {
  const { color, variant, isLoading, text, icon, ...rest } = props

  return (
    <Button color={color} variant={variant} isLoading={isLoading} startContent={icon && icon} {...rest}>
      {text}
    </Button>
  )
}

export default BaseButton
