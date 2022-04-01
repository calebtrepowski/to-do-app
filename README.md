# to-do-app

To-do Full Stack SPA challenge as part of a job interview.

See the [live demo](https://trepowski-todo.netlify.app/)

Technologies used:
OS: Debian v9.5
Engine: NodeJS v16.14.2
FrontEnd: React v17.0.2
API: NestJS v8.0.0
ORM: typeorm v0.2.45
DB: PostgreSQL v14.2.2

Features:

- Create Folders to group TODOs together
- Create TODOs
- Delete a specfic todo
- Edit a TODO text
- Delete a folder (and its content)
- Responsive design

Run `install.sh` as 'sudo'. This script will check if nodejs and postgres installation needed, and will install both front and backend dependencies and build them. Target host of backend will be prompted to build frontend, and postgres credentials will be prompted to build backend.

To serve the api: `npm run start:prod` in api directory.
To serve the frontend `npm install -g serve`, then `serve -s build` in front directory

Currently the api is hosted on Heroku with an ElephantSQL db attached.
