pnpm build
cd dist

BUCKET=tf-radzion-email-storage
BUCKET_KEY=lambda.zip
FUNCTION_NAME=tf-radzion-email

zip -r ./$BUCKET_KEY *

aws s3 cp $BUCKET_KEY s3://$BUCKET/$BUCKET_KEY
aws lambda update-function-code --function-name $FUNCTION_NAME --s3-bucket $BUCKET --s3-key $BUCKET_KEY

cd ..