# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.



***************************************** _____________________________________________________**********************************************************************



Netlify hosting URL    -->   https://joblis.netlify.app




Step 1 :  The project is directly navigate through the demo login page (only for demo , can traval any where on the project with out credential by navigating)


            username  :  "admin"
            password  :  "1234"

step 2: After login project navigate in to the jobs listing page with navigated by "/jobs"

        Fetching the data from jobs.json and displaying it by cards via responsive grid view  

        Styled filter buttons with hover effects and displayed job card with
            ▪ Title
            ▪ Company Name
            ▪ Category 
            ▪ Salary Range

        applied box shadow effect on hover and custom gradient background for job cards.

        Applied lazy loading 


step 3: Clicking each job card navigate to the job details page with url jobs/:id



Header  :  Header having demo project name , theme toggle button( which can toggle light mode and dark mode) , sign out button to navigate /login 

tailwind.config.ts  : added custom color , spacing settings , utility class , gradient background for job cards , A box shadow effect on hover and new spacing values.

 added middleware to check check if job ID exists before navigating and implemented lazy loading in job listing
