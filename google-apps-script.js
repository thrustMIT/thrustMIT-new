// UPDATED Google Apps Script Code
// Copy this code to your Google Apps Script editor

function doGet(e) {
  // Handle GET requests with parameters (from form submission)
  try {
    Logger.log('=== Received GET request ===');
    Logger.log('Parameters: ' + JSON.stringify(e.parameter));
    
    if (e && e.parameter && (e.parameter.name || e.parameter.email)) {
      // Get the active spreadsheet
      var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
      
      var timestamp = new Date();
      var name = e.parameter.name || '';
      var email = e.parameter.email || '';
      var message = e.parameter.message || '';
      
      Logger.log('Appending data: [' + timestamp + ', ' + name + ', ' + email + ', ' + message + ']');
      
      // Append the data to the sheet
      sheet.appendRow([timestamp, name, email, message]);
      
      Logger.log('✓ Data saved successfully. Last row: ' + sheet.getLastRow());
      
      return ContentService
        .createTextOutput(JSON.stringify({ 
          'result': 'success', 
          'message': 'Data added successfully',
          'row': sheet.getLastRow()
        }))
        .setMimeType(ContentService.MimeType.JSON);
    } else {
      return ContentService.createTextOutput(JSON.stringify({ 
        'result': 'error', 
        'message': 'No data provided' 
      })).setMimeType(ContentService.MimeType.JSON);
    }
  } catch (error) {
    Logger.log('✗ GET Error: ' + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({ 
        'result': 'error', 
        'message': error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(e) {
  try {
    Logger.log('=== Received POST request ===');
    Logger.log('Event object: ' + JSON.stringify(e));
    
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Initialize variables
    var name = '';
    var email = '';
    var message = '';
    var timestamp = new Date();
    
    // Method 1: Check for URL parameters (e.parameter)
    if (e && e.parameter && Object.keys(e.parameter).length > 0) {
      Logger.log('Method 1: Using e.parameter');
      name = e.parameter.name || '';
      email = e.parameter.email || '';
      message = e.parameter.message || '';
    }
    // Method 2: Check for POST body data (e.postData)
    else if (e && e.postData && e.postData.contents) {
      Logger.log('Method 2: Using e.postData.contents');
      Logger.log('Content type: ' + e.postData.type);
      Logger.log('Contents: ' + e.postData.contents);
      
      var contents = e.postData.contents;
      
      // Try parsing as JSON
      if (e.postData.type === 'application/json') {
        try {
          var data = JSON.parse(contents);
          name = data.name || '';
          email = data.email || '';
          message = data.message || '';
          Logger.log('Parsed as JSON successfully');
        } catch (jsonError) {
          Logger.log('JSON parse error: ' + jsonError);
        }
      }
      // Try parsing as URL-encoded form data
      else {
        try {
          var params = contents.split('&');
          for (var i = 0; i < params.length; i++) {
            var pair = params[i].split('=');
            var key = decodeURIComponent(pair[0]);
            var value = decodeURIComponent(pair[1] || '').replace(/\+/g, ' ');
            if (key === 'name') name = value;
            if (key === 'email') email = value;
            if (key === 'message') message = value;
          }
          Logger.log('Parsed as form data successfully');
        } catch (formError) {
          Logger.log('Form data parse error: ' + formError);
        }
      }
    }
    // Method 3: Check for query parameters (e.parameters)
    else if (e && e.parameters) {
      Logger.log('Method 3: Using e.parameters');
      name = e.parameters.name ? e.parameters.name[0] : '';
      email = e.parameters.email ? e.parameters.email[0] : '';
      message = e.parameters.message ? e.parameters.message[0] : '';
    }
    else {
      Logger.log('No valid data format detected');
    }
    
    Logger.log('Extracted data - Name: "' + name + '", Email: "' + email + '", Message: "' + message + '"');
    
    // Only append if we have at least a name or email
    if (name || email) {
      sheet.appendRow([timestamp, name, email, message]);
      Logger.log('✓ Row appended successfully. Last row: ' + sheet.getLastRow());
      
      // Return success response
      return ContentService
        .createTextOutput(JSON.stringify({ 
          'result': 'success', 
          'message': 'Data added successfully',
          'row': sheet.getLastRow()
        }))
        .setMimeType(ContentService.MimeType.JSON);
    } else {
      Logger.log('✗ No valid data received - name and email are both empty');
      throw new Error('No valid data received - please provide at least name or email');
    }
      
  } catch (error) {
    Logger.log('✗ Error: ' + error.toString());
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        'result': 'error', 
        'message': error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// SIMPLE TEST - Just add data directly to the sheet
function simpleTest() {
  Logger.log('=== Running Simple Direct Test ===');
  
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var timestamp = new Date();
    var name = 'Simple Test User';
    var email = 'simpletest@example.com';
    var message = 'This is a simple direct test';
    
    sheet.appendRow([timestamp, name, email, message]);
    
    Logger.log('✓ SUCCESS! Row added at: ' + sheet.getLastRow());
    Logger.log('Check your Google Sheet now!');
    
    return 'Success! Check row ' + sheet.getLastRow();
  } catch (error) {
    Logger.log('✗ Error: ' + error.toString());
    return 'Error: ' + error.toString();
  }
}

// Test the doPost function
function testDoPost() {
  Logger.log('=== Starting manual test ===');
  
  var testData = {
    parameter: {
      name: 'Test User',
      email: 'test@example.com',
      message: 'This is a test message from the test function'
    }
  };
  
  var result = doPost(testData);
  Logger.log('Test result: ' + result.getContent());
  
  return result.getContent();
}

// Test the doGet function (this is what your website will use)
function testDoGet() {
  Logger.log('=== Testing GET request ===');
  
  var testData = {
    parameter: {
      name: 'GET Test User',
      email: 'gettest@example.com',
      message: 'Testing GET method'
    }
  };
  
  var result = doGet(testData);
  Logger.log('Test result: ' + result.getContent());
  
  return result.getContent();
}

