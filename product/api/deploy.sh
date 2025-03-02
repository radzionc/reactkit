pnpm build
cd dist

zip -r ./$BUCKET_KEY *

aws s3 cp $BUCKET_KEY s3://$BUCKET/$BUCKET_KEY
aws lambda update-function-code --function-name $FUNCTION_NAME --s3-bucket $BUCKET --s3-key $BUCKET_KEY

cd ..
