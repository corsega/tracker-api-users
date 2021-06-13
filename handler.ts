import 'source-map-support/register';
import { AppSyncResolverEvent, AppSyncResolverHandler } from 'aws-lambda';
import GetUserListError from './src/GetUserListError';
import getUserList from './src/getUserList';

export const listUsers: AppSyncResolverHandler<any, any> = async (event: AppSyncResolverEvent<any>) => {
  try {
    return await getUserList({})
  } catch (error) {
    console.log(error)    
    throw new GetUserListError(`Error getting users.`)
  }
}
