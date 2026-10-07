# Event Management System (v2 - dark theme)

React + JSON Server campus event landing page with dummy registration.

## Install
```bash
npm install
```

## Run
```bash
# Terminal 1 - JSON Server
npx json-server --watch db.json --port 3001

# Terminal 2 - React
npm run dev
```
Or both together: `npm run start:all`

App: http://localhost:5173 | API: http://localhost:3001/registrations

## Data flow
React form -> validation -> `fetch()` POST -> JSON Server (port 3001) -> appended to `registrations` in `db.json` -> React shows "Registration successful!".

Edit `src/data/events.js` to change categories and events.
