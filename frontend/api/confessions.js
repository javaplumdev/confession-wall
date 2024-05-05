import { http } from '../utils/https'

/**
 * GET request
 * @returns data
 */
export const getAllConfessions = async () => {
  return await http('GET', '/post')
}

/**
 * GET request
 * @param {*} id
 * @returns item data
 */
export const getConfessionById = async id => {
  return await http('GET', `/post/${id}`)
}

/**
 * POST request
 * @param {*} data
 * @returns
 */
export const postConfession = async data => {
  return await http('POST', '/post', data)
}
