# Picker2

This project is a first project to learn Google Apps Script (GAS), it is based on the "picker" example in the Google documentation and some data provide regarding tardy students and a school's roster. There are a number of modifications made along the way to make the script more useable.

* Source Repository
GAS allow a system for saving "deployments" that will allow a recovery or move to a previous snapshot.  There is no other source code system. 
* Local Development
GAS code runs on Google cloud system and includes a nice online development environment, however "clasp" can be used to develop or at least edit locally with familiar editors and tools. The cloned project code can also be added to a Github repository form feature full code management, issue tracking and associated Wikis. Prior to uploading to Github the code was refactored to remove the API_KEY from the code and using Project Properties, and HTML templates.
* Code Refactoring
GAS '.gs' files occupy the same space and are run in Google's cloud much like node.js (server side JavaScript) with some important differences. (no import or export) Functions can be managed in multiple files to manage the project better. I am using "Utility" for some general reusable code.