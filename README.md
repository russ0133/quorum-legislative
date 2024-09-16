# quorum-legislative

Steps to run:

Clone the repository

- git clone git@github.com:russ0133/quorum-legislative.git
- cd quorum-legislative

Start the Node server

- cd server
- npm i ../shared
- npm run dev

Start the React client

- cd ..
- cd client
- npm i ../shared
- npm run dev

Access the server at http://localhost:5173/

# Questions

1. Discuss your strategy and decisions implementing the application. Please, considertime
   complexity, effort cost, technologies used and any other variable that you understand
   important on your development process.

I decided to go with a mini-monorepo architecture composed of three applications: 1 Vite React-TS ("Client") app for displaying and fetching the data from the backend the UI, 1 Node.js / Express server ("Server") to fetch and parse data from the CSV and serve it as-is from the CSV. That data is later transformed in the frontend to fit the schema used by the table - while the data transformation could also be done in the server, I believe it's better to delegate that to the client since we don't want to overload the server with unnecessary calculations for scalability. And at last, a simple library ("Shared") for sharing types between the Server and the Client.

The backend is quite simple, it simply exposes a few REST endpoints using ExpressJS. The endpoints are simple but extensible under REST conventions - GET /bill/{id} would require a simple refactor/add a sibling of the parseCSV util function to GET by ID. Not much to see here, parseCSV with Papaparse is doing the heavy lifting and ensuring typing between server calls. I considered at first using SQLite instead of CSV since that would make it way easier to fetch with static typing but decided it's beyond the scope of the project. As mentioned, no transformation is made here and data is provided as is from the "database".

The frontend is a bit more complex, it's using Vite with a proxy to /api/ endpoint to redirect to the port :4000 where the Express server is running. There's a main Container component (TabsContainer) which uses abstracted data fetching hooks (use{XXXX}Data) to fetch all the data necessary for the Bills and Legislators table, usually I'd consider implementing a server state management here, but also thought it's beyond the scope of this project. The data is then drilled to the "view table" components which is then transformed by the (use{XXXX}Table) to fit the necessary columns and rows model and inject columns like 'yays' and 'nays' etc.

2. How would you change your solution to account forfuture columns that might be
   requested, such as “Bill Voted On Date” or“Co-Sponsors”?

All the data in the tables are easily extensible since the columns are inferred from a typescript type (usually would be inferred by a SQL schema, e.g Prisma output types) and thus can be extended simply by editing the "Database" and the types "{XXXXX}TablesColumnsOverrides" and "{XXXX}" (e.g Type LegislatorTablesColumnsOverrides @ /client/src/global/tableHeaderOverrides.ts and Type Legislator @ shared/types.ts ).

3. How would you change your solution if instead ofreceiving CSVs of data, you were given a
   list of legislators or bills that you should generate a CSV for?

If I understand this question correctly, it is a matter of adding an endpoint and using papaparse to unparse the table JSON back into a CSV file.

4.  How long did you spend working on the assignment?

3-4 hours.
