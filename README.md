# This is a lambda function to grab Storage Lens dashboard widget and send them via email.

## TO USE:
Zip all files in this directory and upload to lambda.
files to include in zip:
    - index.mjs
    - package.json
    - node_modules (this is a directory)

index.mjs needs to be at the root of the zip file. So, clicking on zip file, you should see index.mjs, package.json, and node_modules. If you see another directory, this will not work.

Next you will need to upload to lambda, on the screen with code selected,you will need to select upload zip file. Then select the zip file you created.

## IAM Roles
IAM Roles needed for this lambda function to work:
    - CloudWatch.GetDashboard
    - SES.SendEmail