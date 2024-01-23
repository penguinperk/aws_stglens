// Lambda function to send a CloudWatch Dashboard via email

import AWS from 'aws-sdk';

const ses = new AWS.SES();
const cloudwatch = new AWS.CloudWatch();

export const handler = async (event) => {
  try {
    // Fetch CloudWatch Dashboard Data
    // Note: CloudWatch getDashboard does not return the dashboard as an image or visual representation.
    // You need to process the data or use a different method to capture the dashboard visually.

    // Change to your dashboard name
    const dashboardName = "CHANGE_ME_DASHBOARD_NAME";
    const dashboardData = await cloudwatch
      .getDashboard({ DashboardName: dashboardName })
      .promise();

    //
    //
    //
    //TESTING >> REMOV EBEFORE PRODUCTION
    console.log("Dashboard data", JSON.stringify(dashboardData));
    //
    //

    // Process your dashboard data here
    // Set up SES parameters
    const params = {
      // Change to your verified sender
      Source:"CHANGEME@TEST.COM",
      Destination: {
        // This is where you specify your verified recipient
        // This is a comma-separated list of recipients
        ToAddresses: ["CHANGEME@TEST.COM"],
      },
      Message: {
        Subject: {
          // Email subject line
          Data: "Your CloudWatch Dashboard",
        },
        Body: {
          Text: {
            Data:
              "Here is your CloudWatch Dashboard data: " +
              JSON.stringify(dashboardData),
          },
        },
      },
    };

    // Send the email
    const emailResponse = await ses.sendEmail(params).promise();
    console.log("Email sent successfully", emailResponse);

    return emailResponse;
  } catch (error) {
    console.error("Error sending email", error);
    throw error;
  }
};