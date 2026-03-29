# VIDHYA VAARADHI - Learning Management System

This project is prepared for split deployment:

- Frontend: static HTML/CSS/JS from the repository root on Netlify
- Backend: Node.js + Express from [`backend/`](./backend/) on Railway

## Project Structure

- Frontend folder: repository root
- Backend folder: [`backend/`](./backend/)
- Admin frontend pages: [`admin/`](./admin/)
- Shared frontend scripts: [`js/`](./js/)
- Shared frontend assets: [`assets/`](./assets/)

## Backend Deployment

Deploy [`backend/`](./backend/) to Railway.

- Entry point: [`backend/src/server.js`](./backend/src/server.js)
- Start script: `npm start`
- Environment template: [`backend/.env.example`](./backend/.env.example)

Required backend environment variables:

- `PORT`
- `DB_HOST`
- `DB_PORT`
- `DB_USER`
- `DB_PASSWORD`
- `DB_NAME`
- `DB_SSL`
- `JWT_SECRET`
- `FRONTEND_URL`
- `ALLOWED_ORIGINS`

## Frontend Deployment

Deploy the repository root to Netlify.

- Netlify config: [`netlify.toml`](./netlify.toml)
- API base config: [`js/config.js`](./js/config.js)

Before production, replace the placeholder backend URL in [`js/config.js`](./js/config.js):

```js
var DEFAULT_API_BASE = "https://YOUR-RAILWAY-BACKEND.up.railway.app";
```

For local frontend-to-backend testing in the browser:

```js
localStorage.setItem("lms_api_base", "http://localhost:5000");
```

## API Notes

- Backend routes are mounted under `/api/*`
- Uploaded files are served from `/uploads/*`
- Frontend auth requests now resolve through the shared API config helper

## Local Development

- Frontend: serve the repository root with any static file server
- Backend: from [`backend/`](./backend/), run `npm install` and `npm run dev`
