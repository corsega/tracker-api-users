import data from './data'

export interface IInputListUsers {
  // workspaceId: string
} 

export default async (input: IInputListUsers) => {
  // throw Error()
  return {
    data,
  }
}