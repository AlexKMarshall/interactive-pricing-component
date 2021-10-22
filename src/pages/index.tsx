import Head from 'next/head'
import type { NextPage } from 'next'
import { Slider } from 'src/components'
import { useState } from 'react'

const billingPlans = [
  { traffic: 10_000, price: 8 },
  { traffic: 50_000, price: 12 },
  { traffic: 100_000, price: 16 },
  { traffic: 500_000, price: 24 },
  { traffic: 1_000_000, price: 32 },
]
const discount = 0.25
type BillingFrequency = 'month' | 'year'
const priceFormatter = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

const Home: NextPage = () => {
  const middlePlanIndex = Math.floor(billingPlans.length / 2)
  const [selectedPlan, setSelectedPlan] = useState(
    billingPlans[middlePlanIndex]
  )
  const [billingFrequency, setSelectedBillingFrequency] =
    useState<BillingFrequency>('month')

  const priceMultiplier = billingFrequency === 'year' ? 1 - discount : 1
  const discountPercent = discount * 100
  const computedPrice = selectedPlan.price * priceMultiplier
  const formattedPrice = priceFormatter.format(computedPrice)

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
          <output htmlFor="plan-select">
            {selectedPlan.traffic} Pageviews
          </output>
          <label>
            Select Traffic Level
            <Slider
              id="plan-select"
              options={billingPlans}
              value={selectedPlan}
              onChange={(plan) => setSelectedPlan(plan)}
            />
          </label>
          <output htmlFor="plan-select billing-frequency">
            {formattedPrice} per month
          </output>
          <fieldset id="billing-frequency">
            <legend>Billing Frequency</legend>
            <label>
              Monthly Billing
              <input
                type="radio"
                name="billing-frequency"
                value="month"
                onChange={(e) =>
                  setSelectedBillingFrequency(
                    e.target.value as BillingFrequency
                  )
                }
                checked={billingFrequency === 'month'}
              />
            </label>
            <label>
              Yearly Billing -{discountPercent}%
              <input
                type="radio"
                name="billing-frequency"
                value="year"
                onChange={(e) =>
                  setSelectedBillingFrequency(
                    e.target.value as BillingFrequency
                  )
                }
                checked={billingFrequency === 'year'}
              />
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
