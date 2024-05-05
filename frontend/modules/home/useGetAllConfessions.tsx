'use client'
import { useEffect, useState } from 'react'
import { getAllConfessions } from '@/api/confessions'

const useGetAllConfessions = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    setIsLoading(true)

    try {
      const { data } = await getAllConfessions()

      setData(data)
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  return { data, isLoading, reload: getData }
}

export default useGetAllConfessions
