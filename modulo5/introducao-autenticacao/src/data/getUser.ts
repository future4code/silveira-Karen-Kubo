import { connection, userTableName } from './BaseDatabase';
export async function getUser(id: string): Promise<any> {
    const result = await connection
      .select("*")
      .from(userTableName)
      .where({ id });

    return result[0];
  }
