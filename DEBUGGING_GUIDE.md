# Debugging Google Sheets Form Integration

## Step 1: Test the Google Apps Script Directly

1. Open your Google Apps Script editor
2. **Replace the entire code** with the code from `google-apps-script.js`
3. Save it (Ctrl+S / Cmd+S)
4. Click on the function dropdown (should show `doPost` or `testDoPost`)
5. Select **`testDoPost`**
6. Click **Run** (▶️ button)
7. Check the **Execution log** at the bottom - you should see "Test result: ..."
8. Go to your Google Sheet - you should see a new row with test data

If Step 1 fails, the issue is with your Google Apps Script setup.

## Step 2: Check Script Deployment

1. In Apps Script, click **Deploy** > **Manage deployments**
2. Verify settings:
   - Type: **Web app**
   - Execute as: **Me** (your email)
   - Who has access: **Anyone**
3. If you made changes to the script, click **New deployment** again to get a new URL
4. **Important**: After changing the script, you MUST redeploy it
   - Click on the deployment
   - Click "New deployment" (not "Edit deployment")
   - Get the new URL

## Step 3: Check Browser Console

1. Open your website in the browser
2. Press F12 to open Developer Tools
3. Go to the **Console** tab
4. Fill out the contact form and submit
5. Look for:
   - `Submitting data: {name: ..., email: ..., message: ...}` - This means the form is sending data
   - `Response received: Response {...}` - This means the server responded
   - `Result: {...}` - This shows the actual response
   - Any errors in red

## Step 4: Check Apps Script Executions

1. In Google Apps Script, click on **Executions** (⏱️ icon on the left)
2. You should see a list of all executions
3. Click on any execution to see:
   - Status (Success/Failed)
   - Logs (what was received and processed)
   - Any error messages

## Common Issues and Solutions

### Issue 1: "Failed to submit form" error
**Solution**: 
- The Apps Script URL might be wrong
- The script might not be deployed as "Anyone" can access
- You need to redeploy after making changes

### Issue 2: Form submits but no data appears in sheet
**Solution**:
- Check the Executions log in Apps Script
- Make sure the sheet has headers: `Timestamp`, `Name`, `Email`, `Message` in row 1
- The script appends to the active sheet - make sure you're looking at the right sheet

### Issue 3: CORS errors in browser console
**Solution**:
- Use the updated Contact.jsx code (without `mode: 'no-cors'`)
- Make sure the Apps Script is deployed with "Anyone" can access

### Issue 4: Script authorization required
**Solution**:
1. Go to Apps Script
2. Click Run on `testDoPost` function
3. Click "Review Permissions"
4. Choose your Google account
5. Click "Advanced" > "Go to [project name] (unsafe)"
6. Click "Allow"

## Step 5: Test with a Simple Request

Open your browser console and run this directly:

```javascript
fetch('YOUR_SCRIPT_URL_HERE', {
  method: 'POST',
  body: new URLSearchParams({
    name: 'Console Test',
    email: 'console@test.com',
    message: 'Testing from browser console'
  })
})
.then(response => response.text())
.then(data => console.log('Success:', data))
.catch(error => console.error('Error:', error));
```

Replace `YOUR_SCRIPT_URL_HERE` with your actual Google Apps Script URL.

If this works, the issue is in your React code. If it doesn't work, the issue is with the Google Apps Script setup.

## Step 6: Check Sheet Permissions

1. Make sure the Google Sheet is not shared with "View only" access
2. The script runs as YOU, so you need edit access to the sheet
3. Don't rename or delete the sheet after setting up the script

## Need More Help?

Share the following information:
1. Screenshot of the Browser Console when submitting the form
2. Screenshot of the Apps Script Executions log
3. Screenshot of your Google Sheet (with headers visible)
4. Any error messages you see

