// Load the AWS SDK for Node.js
import { DynamoDB } from 'aws-sdk';
import { DatabaseConfig, databaseConfig } from '../config/database.config';

const params = {
  AttributeDefinitions: [
    { AttributeName: 'USER_NAME', AttributeType: 'S' },
    { AttributeName: 'MESSAGE', AttributeType: 'S' }
  ],
  KeySchema: [
    { AttributeName: 'USER_NAME', KeyType: 'HASH' },  // Partition key
    { AttributeName: 'MESSAGE', KeyType: 'RANGE' }  // Sort key
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1
  },
  TableName : 'SUGGESTION_LIST',
};
export class Suggestion {
  private database: DynamoDB;
  private suggestionTable: DynamoDB.DocumentClient;

  constructor() {
    this.database = DatabaseConfig.getDynamoDb();
    this.suggestionTable = new DynamoDB.DocumentClient(databaseConfig);
    this.createTable();
  }

  public async save(user: string, message: string) {
    const input = {
      MESSAGE: message,
      USER_NAME: user
    };
    const param = {
      Item:  input,
      TableName: 'SUGGESTION_LIST'
    };
    return new Promise((resolve) => {
      this.suggestionTable.put(param, async (err, data) => {
        if (err) {
          console.log(`users::save::error - ${JSON.stringify(err, null, 2)} `);
          resolve();
        } else {
          console.log('users::save::success');
          resolve();
        }
      });
    });
  }

  private async createTable(): Promise<any> {
    if (! await this.tableExist('SUGGESTION_LIST')) {
      return new Promise((resolve) => {
        this.database.createTable(params, (err, data) => {
          if (err) {
            console.error('Unable to create table. Error JSON:', JSON.stringify(err, null, 2));
          } else {
            console.log('Created table. Table description JSON:', JSON.stringify(data, null, 2));
          }
          resolve();
        });
      });
    }
  }

  private async tableExist(tableName: string): Promise<boolean> {
    const param = {
      TableName: tableName
    };
    return new Promise((resolve) => {
      this.database.describeTable(param, (err, data) => {
        console.log(data);
        resolve(!err);
      });
    });
  }

}
