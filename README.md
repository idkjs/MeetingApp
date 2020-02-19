[![Netlify Status](https://api.netlify.com/api/v1/badges/6506728b-3258-4a16-849d-04efaa7c93da/deploy-status)](https://app.netlify.com/sites/meetingapp/deploys)

## Calendly

## Host Link
[meeting-app](https://meetingapp.netlify.com/)

## Features
* Users can login/Signup
* Users can view all meetings
* Users can book a slot
* Users can create a slot
* Users can view all slots created by other users
* Users can view slots created by the user

## Technology Stack Used
* React a javascript library for building user interfaces
* React Hooks
* ReactStrap: css framework
* JSON Server: For getting a full fake REST API


## Setup

* Clone the repo

```sh
> $ git clone https://github.com/Annmary12/MeetingApp.git
```

* Install dependencies by running

```sh
> $ npm install
```

## Running the app

To get the app up and running (and really see if it worked), run:

```sh
> $ npm start
> $ npm run server
```

# Note
Please install json server to get your serve up
```sh
> npm install -g json-server
```


## Error Output

```sh
Compiled with warnings.

./src/components/Auth/index.js
  Line 34:23:  Expected '===' and instead saw '=='  eqeqeq

./src/pages/Booking/index.js
  Line 3:8:  'Modal' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be of type string. Received type undefined
    at validateString (internal/validators.js:118:11)
    at Object.join (path.js:1039:7)
    at noopServiceWorkerMiddleware (/Users/prisc_000/Downloads/MeetingApp/node_modules/.pnpm/registry.npmjs.org/react-dev-utils/10.2.0/node_modules/react-dev-utils/noopServiceWorkerMiddleware.js:14:26)
    at Layer.handle [as handle_request] (/Users/prisc_000/Downloads/MeetingApp/node_modules/.pnpm/registry.npmjs.org/express/4.17.1/node_modules/express/lib/router/layer.js:95:5)
    at trim_prefix (/Users/prisc_000/Downloads/MeetingApp/node_modules/.pnpm/registry.npmjs.org/express/4.17.1/node_modules/express/lib/router/index.js:317:13)
    at /Users/prisc_000/Downloads/MeetingApp/node_modules/.pnpm/registry.npmjs.org/express/4.17.1/node_modules/express/lib/router/index.js:284:7
    at Function.process_params (/Users/prisc_000/Downloads/MeetingApp/node_modules/.pnpm/registry.npmjs.org/express/4.17.1/node_modules/express/lib/router/index.js:335:12)
    at next (/Users/prisc_000/Downloads/MeetingApp/node_modules/.pnpm/registry.npmjs.org/express/4.17.1/node_modules/express/lib/router/index.js:275:10)
    at launchEditorMiddleware (/Users/prisc_000/Downloads/MeetingApp/node_modules/.pnpm/registry.npmjs.org/react-dev-utils/10.2.0/node_modules/react-dev-utils/errorOverlayMiddleware.js:20:7)
    at Layer.handle [as handle_request] (/Users/prisc_000/Downloads/MeetingApp/node_modules/.pnpm/registry.npmjs.org/express/4.17.1/node_modules/express/lib/router/layer.js:95:5)
    at trim_prefix (/Users/prisc_000/Downloads/MeetingApp/node_modules/.pnpm/registry.npmjs.org/express/4.17.1/node_modules/express/lib/router/index.js:317:13)
    at /Users/prisc_000/Downloads/MeetingApp/node_modules/.pnpm/registry.npmjs.org/express/4.17.1/node_modules/express/lib/router/index.js:284:7
    at Function.process_params (/Users/prisc_000/Downloads/MeetingApp/node_modules/.pnpm/registry.npmjs.org/express/4.17.1/node_modules/express/lib/router/index.js:335:12)
    at next (/Users/prisc_000/Downloads/MeetingApp/node_modules/.pnpm/registry.npmjs.org/express/4.17.1/node_modules/express/lib/router/index.js:275:10)
    at handleWebpackInternalMiddleware (/Users/prisc_000/Downloads/MeetingApp/node_modules/.pnpm/registry.npmjs.org/react-dev-utils/10.2.0/node_modules/react-dev-utils/evalSourceMapMiddleware.js:42:7)
    at Layer.handle [as handle_request] (/Users/prisc_000/Downloads/MeetingApp/node_modules/.pnpm/registry.npmjs.org/express/4.17.1/node_modules/express/lib/router/layer.js:95:5)
```