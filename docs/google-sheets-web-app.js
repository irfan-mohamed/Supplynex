const SHEET_NAME = "Early Access Leads";
const HEADERS = [
  "Timestamp",
  "Type",
  "Company",
  "Contact",
  "Designation",
  "Mobile",
  "Email",
  "Category",
  "Region",
  "Location Pin",
  "Challenge",
  "Discovery Method",
  "Early Access",
  "Follow-up",
];

function doPost(e) {
  const sheet = getOrCreateSheet_();
  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.timestamp,
    data.type,
    data.company,
    data.contact,
    data.designation,
    data.mobile,
    data.email,
    data.category,
    data.region,
    data.pin,
    data.challenge,
    data.discoveryMethod,
    data.earlyAccess,
    data.followUp,
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function getOrCreateSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
  const existingHeaders = sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0];
  const hasHeaders = existingHeaders.some(Boolean);

  if (!hasHeaders) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
  }

  return sheet;
}
