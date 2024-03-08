/**
 * Add Global variables
 */
const scriptProperties = PropertiesService.getScriptProperties();
const DEVELOPER_KEY = scriptProperties.getProperty('API_KEY');

function debugGlobalVar() {
  console.log(DEVELOPER_KEY);
}

/**
 * Creates a custom menu in Google Sheets when the spreadsheet opens.
 */

function onOpen() {
  try {
    SpreadsheetApp.getUi().createMenu('Picker')
      .addItem('Start', 'showPicker')
      .addToUi();
  } catch (e) {
    // TODO (Developer) - Handle exception
    console.log('Failed with error: %s', e.error);
  }
}

/**
 * Displays an HTML-service dialog in Google Sheets that contains client-side
 * JavaScript code for the Google Picker API.
 */

function showPicker() {
  try {
    const html = HtmlService.createTemplateFromFile('dialog.html').evaluate()
      .setWidth(600)
      .setHeight(425)
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
    SpreadsheetApp.getUi().showModalDialog(html, 'Select a file');
  } catch (e) {
    // TODO (Developer) - Handle exception
    console.log('Failed with error: %s', e.error);
  }
}

function getFileId(fileId) {
  console.log(fileId);
  try {
    data = ingestFile(fileId);
  } catch (e) {
    console.log('Failed with error: %s', e.error);
  }
  console.log(data);
}

/**
 * Gets the user's OAuth 2.0 access token so that it can be passed to Picker.
 * This technique keeps Picker from needing to show its own authorization
 * dialog, but is only possible if the OAuth scope that Picker needs is
 * available in Apps Script. In this case, the function includes an unused call
 * to a DriveApp method to ensure that Apps Script requests access to all files
 * in the user's Drive.
 *
 * @return {string} The user's OAuth 2.0 access token.
 */
function getOAuthToken() {
  try {
    DriveApp.getRootFolder();
    return ScriptApp.getOAuthToken();
  } catch (e) {
    // TODO (Developer) - Handle exception
    console.log('Failed with error: %s', e.error);
  }
}

function getFileData() {
  var fileId = '1qvhRTAoGk4gN98fmAk0nMCq6eC-5vlHK'
  try {
    data = ingestFile(fileId);
  } catch (e) {
    console.log('Failed with error: %s', e.error);
  }
  console.log(data);
}
