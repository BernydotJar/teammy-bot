import { DynamoDB } from 'aws-sdk';
import { get } from 'config';

export const databaseConfig: DynamoDB.Types.ClientConfiguration =  {
  accessKeyId: get('aws.dynamoDB.accessKeyId'),
  apiVersion: get('aws.dynamoDB.apiVersion'),
  region: get('aws.dynamoDB.region'),
  secretAccessKey: get('aws.dynamoDB.secretAccessKey')
};

export class DatabaseConfig {
  public static getDynamoDb(): DynamoDB {
    if (this.dynamoDB) {
      return this.dynamoDB;
    }
    this.dynamoDB = new DynamoDB(databaseConfig);
  }

  private static dynamoDB: DynamoDB;
}
