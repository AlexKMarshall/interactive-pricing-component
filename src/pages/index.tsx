import Head from 'next/head'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Social Media Dashboard</title>
        <meta
          name="description"
          content="FrontendMentor design challenge implemented in NextJs"
        />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <main>
        <h1>Simple, traffic based pricing</h1>
        <p>Sign up for our 30-day trial.</p>
        <p>No credit card required.</p>
        <form>
          <output htmlFor="plan-select">100k Pageviews</output>
          <label>
            Select Traffic Level
            <input type="range" id="plan-select" min={1} max={5} />
          </label>
          <output htmlFor="plan-select">$16.00 / month</output>
          <fieldset id="billing-frequency">
            <legend>Billing Frequency</legend>
            <label>
              Monthly Billing
              <input type="radio" name="billing-frequency" value="monthly" />
            </label>
            <label>
              Yearly Billing -25%
              <input type="radio" name="billing-frequency" value="yearly" />
            </label>
          </fieldset>
          <ul>
            <li>Unlimited websites</li>
            <li>100% data ownership</li>
            <li>Email reports</li>
          </ul>
          <button type="submit">Start my trial</button>
        </form>
      </main>
    </>
  )
}

export default Home
