import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import { Textarea } from '@nextui-org/react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@nextui-org/react'

import BaseButton from '@/components/buttons/BaseButton'

type Inputs = {
  content: string
}

type ConfessionsInputModalProps = {
  isOpen: boolean
  onOpenChange: () => void
  isAdding: boolean
  onAdd: any
}

const ConfessionsInputModal = (props: ConfessionsInputModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>()

  const { isOpen, onOpenChange, isAdding, onAdd } = props

  const onSubmit: SubmitHandler<Inputs> = data => onAdd(data)

  return (
    <Modal
      className="customTheme bg-zinc-800 text-white"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="center"
    >
      <ModalContent>
        {onClose => (
          <>
            <ModalHeader className="flex flex-col gap-1">Add a Confession</ModalHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
              <ModalBody>
                <Textarea
                  {...register('content', { required: true })}
                  type="textarea"
                  color="secondary"
                  label="Tell me, what's it about?"
                  placeholder="Just tell me.."
                />
                {errors.content && <span className="text-danger">This field is required</span>}
              </ModalBody>
              <ModalFooter>
                <BaseButton color="danger" variant="light" text="Close" onPress={onClose} />
                <BaseButton
                  type="submit"
                  text={isAdding ? 'Submitting' : 'Submit'}
                  color="primary"
                  isLoading={isAdding}
                  disabled={isAdding}
                />
              </ModalFooter>
            </form>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export default ConfessionsInputModal
