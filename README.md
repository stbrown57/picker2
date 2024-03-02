# Picker2

This project is a first project to learn Google Apps Script (GAS), it is based on the "picker" example in the Google documentation and some data provide regarding tardy students and a school's roster. There are a number of modifications made along the way to make the script more useable.

* **Source Repository** \
GAS allow a system for saving "deployments" that will allow a recovery or move to a previous snapshot.  There is no other source code system.
* **Local Development** \
GAS code runs on Google cloud system and includes a nice online development environment, however "clasp" can be used to develop or at least edit locally with familiar editors and tools. The cloned project code can also be added to a Github repository for feature full code management, issue tracking and associated Wikis. Prior to uploading to Github the code was refactored to remove the API_KEY from the code and using Project Properties, and HTML templates.
* **Code Refactoring** \
GAS ".**gs**" files occupy the same namespace within projects and are run in Google's cloud much like node.js (server side JavaScript) with some important differences (no import or export). Functions can be managed in multiple files to manage the project better. I am using "Utility" for some general reusable code.

The base application uses the "picker" service to list spreadsheets in a modal box within the spreadsheet, and that is about it. To further develop the application additional functionality will have to be added.

* **Return Google file object id**
* **Ingest content**
Both CSV files and Spreadsheets should be able to be read. For spreadsheets it will be something like this:
  1. Open spreadsheet by returned id
  1. Get values from the sheet. Possibly like (ss.getDataRange().getValues()) perhaps with some ss.getLastRow()
  1. Take first array and use as key, iterate through the remaining data for associated values
* **Work with data** \
For this initial project simple object methods may be used to get to the desired output, but as projects become more complex functions from external libraries will be required. It looks like it is possible to extract the function code from libraries that can be used in GAS. This may describe the [process](https://copyprogramming.com/howto/using-an-imported-module-inside-google-app-script). [Webpack](https://webpack.js.org/) may actually be designed to do just that. GAS now supports arrow functions and other features of a modern [ECMAScript via the V8 engine](https://developers.google.com/apps-script/guides/v8-runtime), so the conversation process using "babel" described on the web should not be needed. Don't really know what it is, but it could be [cool](https://rollupjs.org/)
