# Google Sheets Contact Form Setup Guide

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it "ThrustMIT Contact Form Submissions"
4. In the first row, add these headers:
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Email`
   - D1: `Message`

## Step 2: Set Up Google Apps Script

1. In your Google Sheet, click on **Extensions** > **Apps Script**
2. Delete any existing code in the script editor
3. Copy and paste the following code:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming JSON data
    var data = JSON.parse(e.postData.contents);
    
    // Prepare the row data
    var timestamp = new Date();
    var name = data.name || '';
    var email = data.email || '';
    var message = data.message || '';
    
    // Append the data to the sheet
    sheet.appendRow([timestamp, name, email, message]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'message': 'Data added successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'message': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function (optional - for testing in the script editor)
function testDoPost() {
  var testData = {
    postData: {
      contents: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        message: 'This is a test message',
        timestamp: new Date().toISOString()
      })
    }
  };
  
  var result = doPost(testData);
  Logger.log(result.getContent());
}
```

4. Click on the **disk icon** (💾) or press `Ctrl+S` / `Cmd+S` to save
5. Name the project "Contact Form Handler"

## Step 3: Deploy the Script as a Web App

1. Click on **Deploy** > **New deployment**
2. Click on **Select type** (gear icon ⚙️) > **Web app**
3. Fill in the details:
   - **Description**: Contact Form Submission Handler
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
4. Click **Deploy**
5. You may need to authorize the script:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** > **Go to [project name] (unsafe)**
   - Click **Allow**
6. **Copy the Web App URL** - it will look like:
   ```
   https://script.google.com/macros/s/AKfycby.../exec
   ```

## Step 4: Update Your React Code

1. Open `src/components/Contact.jsx`
2. Find this line (around line 34):
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
   ```
3. Replace `'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'` with your actual Web App URL from Step 3
4. Save the file

Example:
```javascript
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby.../exec';
```

## Step 5: Test Your Form

1. Run your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out the form with test data
4. Click "Send Message"
5. Check your Google Sheet - a new row should appear with the submission data

## Troubleshooting

### Form submission shows "Failed"
- Make sure the Web App URL is correct
- Verify the script is deployed as "Anyone" can access
- Check the Google Apps Script logs: Go to Apps Script > Executions

### No data appears in the sheet
- Open Apps Script and click **Executions** on the left sidebar
- Check for any error messages
- Make sure the column headers match exactly: Timestamp, Name, Email, Message

### Authorization issues
- Go back to Apps Script > Deploy > Manage deployments
- Click the pencil icon to edit
- Re-authorize if needed

## Optional: Email Notifications

If you want to receive email notifications when someone submits the form, add this to your Apps Script:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    var timestamp = new Date();
    var name = data.name || '';
    var email = data.email || '';
    var message = data.message || '';
    
    sheet.appendRow([timestamp, name, email, message]);
    
    // Send email notification
    var recipient = 'your-email@example.com'; // Change this to your email
    var subject = 'New Contact Form Submission - ThrustMIT';
    var body = 'New contact form submission:\n\n' +
               'Name: ' + name + '\n' +
               'Email: ' + email + '\n' +
               'Message: ' + message + '\n' +
               'Timestamp: ' + timestamp;
    
    MailApp.sendEmail(recipient, subject, body);
    
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'message': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

Replace `'your-email@example.com'` with the email address where you want to receive notifications (e.g., `info@thrustmit.in`).

## Security Notes

- The form data is sent using `no-cors` mode, which is standard for Google Apps Script
- All submissions are logged in your Google Sheet with timestamps
- Only you (the Google account owner) can access the sheet and script
- The script runs with your permissions, so keep your Google account secure

## Need Help?

If you encounter any issues, check:
1. Apps Script Executions log for errors
2. Browser console for any JavaScript errors
3. Make sure the Google Sheet is not deleted or renamed

