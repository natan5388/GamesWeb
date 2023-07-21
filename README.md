# GamesWeb v0.1.1
Simple web project for a fictional games store to learn Front end, and api uses.
**Resources used:**
- Angular.
- Json-server.
- Bootstrap.

## Project Overview
The folders are stored and grouped on some folders like:
#### App
##### Folders:
- **Models**: For object models used in typescript functions.
- **Restrito**: For restricted page group and functions (CRUD interaction with ``db.json``)
- **Shared**: For elements used across all the pages or most of it.
- **Views**: Stores the main view pages of the project, homepage and login webpage.
##### Files:
- **Guard**: simulates a credential/access check system for restricted pages.
- **Login.service**: Dummy login/authentication service.
- **produto.service**: Interface that implements crud functions interface.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### json-server

Run `json-server --watch db.json` to watch your requisitions to json server db.
