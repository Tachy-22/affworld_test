# Anon - Anonymous Secrets Web Application

This is a [Next.js](https://nextjs.org/) project for a web application called Anon, designed for sharing anonymous secrets. Each user is allowed to post just one secret. The application is currently hosted on [https://anon-psi.vercel.app/](https://anon-psi.vercel.app/).

## Getting Started

To set up and run the project locally, follow these steps:

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your-username/your-repo.git
    ```

2. Navigate to the project directory:

    ```bash
    cd your-repo
    ```

3. Install the dependencies:

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

4. Create a `.env` file in the root of the project and add the following environment variables:

    ```env
    MAILER_EMAIL=your-gmail-email@gmail.com
    MAILER_EMAIL_PASS=your-gmail-password
    DATABASE_URL="your-mongodb-connection-string"
    GOOGLE_ID=your-google-client-id
    GOOGLE_SECRET=your-google-client-secret
    NEXTAUTH_SECRET="your-nextauth-secret"
    NEXTAUTH_URL="http://localhost:3000"
    ```

    If you are running the application locally, the variables should be added to the `.env` file. For deployment, add them to the environment variables on Vercel.

5. Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, refer to the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

For feedback and contributions, you can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/).

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
