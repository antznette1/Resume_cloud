import json
import boto3
from decimal import Decimal

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('tonette_resume')

def decimal_default(obj):
    if isinstance(obj, Decimal):
        return str(obj)
    raise TypeError

def lambda_handler(event, context):
    # Try to get the item from the DynamoDB table
    response = table.get_item(Key={'id': '1'})

    # Check if 'Item' key exists in the response
    if 'Item' in response:
        # Item exists, increment the 'views' attribute
        views = response['Item'].get('views', 0)
        views += 1
        response = table.put_item(Item={'id': '1', 'views': views})
    else:
        # Item does not exist, create a new item
        views = 1
        response = table.put_item(Item={'id': '1', 'views': views})

    print(views)

    return {
        'statusCode': 200,
        'body': json.dumps({'views': views}, default=decimal_default)
    }