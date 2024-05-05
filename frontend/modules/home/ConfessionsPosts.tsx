import React from 'react'

import { Card } from '@nextui-org/react'
import { Spinner } from '@nextui-org/react'

type ConfessionsPosts = {
  isLoading: boolean
  data: any
}

const ConfessionsPosts = (props: any) => {
  const { data, isLoading } = props

  return (
    <div className="my-12">
      {isLoading && <Spinner color="primary" />}

      {!isLoading &&
        (data || []).map((item: any, index: number) => {
          const { content } = item

          return (
            <Card key={index} className="bg-zinc-800 my-3 py-8 px-8 text-white">
              {content}
            </Card>
          )
        })}
    </div>
  )
}

export default ConfessionsPosts
