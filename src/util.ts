import { Id } from './App'

export const isValidId = ({ grade, clazz, no }: Id) =>
  clazz === -1 || grade === -1 || no === -1
