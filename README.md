# Open Vision Demo App

This app is used to visualize annotations on images based in the open vision API.

## Steps to run

It is recommended to run this on a Unix based operating system.
This requires Node.js v14 installed.

- It is also recommended to enable cors on the backend.

- Install Node.js 14.x if not already present. Check installation version using:

```
node -v
```

- Clone the repo
- cd into the folder
- Run these npm commands

```
npm install
npm start
```

### Config

The server API url is taken from a config file at this location: `/config.ts`

It can be changed here if required.

```js
export const OpenVisionServer = `http://localhost:8000/api/v1/detection`
```
