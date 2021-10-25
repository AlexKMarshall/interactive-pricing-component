import {
  MediaQueryContent,
  RadioOption,
  RadioToggle,
  ScreenReaderOnly,
  Slider,
  screenReaderOnly as screenReaderOnlyClass,
} from 'src/components'
import {
  controlsSection,
  ctaButton,
  ctaSection,
  discountBadge,
  featureList,
  form,
  h1,
  header,
  main,
  pageViews,
  price,
  priceAmount,
  slider,
  toggle,
} from './pricing.css'
import { useEffect, useRef, useState } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'

import { mergeClassNames } from 'src/merge-class-names'

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
}).format
const numberSuffixer = (unit: number, suffix: string) => (num: number) =>
  `${Math.floor(num / unit)}${suffix}`
const numberFormmater = (value: number) => {
  if (value >= 1_000_000) {
    return numberSuffixer(1_000_000, 'm')(value)
  }
  if (value >= 1000) {
    return numberSuffixer(1000, 'k')(value)
  }
  return value.toString()
}

export function Pricing(): JSX.Element {
  const middlePlanIndex = Math.floor(billingPlans.length / 2)
  const [selectedPlan, setSelectedPlan] = useState(
    billingPlans[middlePlanIndex]
  )
  const [billingFrequency, setSelectedBillingFrequency] =
    useState<BillingFrequency>('month')

  const priceMultiplier = billingFrequency === 'year' ? 1 - discount : 1
  const discountPercent = discount * 100
  const computedPrice = selectedPlan.price * priceMultiplier
  const formattedPrice = priceFormatter(computedPrice)
  const traffic = selectedPlan.traffic
  const formattedTraffic = numberFormmater(traffic)

  return (
    <>
      <main className={main}>
        <header className={header}>
          <h1 className={h1}>Simple, traffic based pricing</h1>
          <p>Sign up for our 30-day trial.</p>
          <p>No credit card required.</p>
        </header>
        <form className={form}>
          <div className={controlsSection}>
            <output htmlFor="plan-select" className={pageViews}>
              <AnimatedNumber
                value={traffic}
                transformFunction={numberFormmater}
              />{' '}
              Pageviews
            </output>
            <Slider
              id="plan-select"
              options={billingPlans}
              value={selectedPlan}
              onChange={(plan) => setSelectedPlan(plan)}
              label={<ScreenReaderOnly>Select Traffic Level</ScreenReaderOnly>}
              className={slider}
            />
            <output htmlFor="plan-select billing-frequency" className={price}>
              <span className={priceAmount}>
                <AnimatedNumber
                  value={computedPrice}
                  transformFunction={priceFormatter}
                />
              </span>
              <span>/ month</span>
            </output>
            <RadioToggle
              label="Billing Frequency"
              name="billing-frequency"
              onChange={(value) =>
                setSelectedBillingFrequency(value as BillingFrequency)
              }
              className={toggle}
            >
              <RadioOption value="month" checked={billingFrequency === 'month'}>
                Monthly Billing
              </RadioOption>
              <RadioOption value="year" checked={billingFrequency === 'year'}>
                Yearly Billing{' '}
                <MediaQueryContent
                  mobile={
                    <span className={discountBadge}>-{discountPercent}%</span>
                  }
                  desktop={
                    <span className={discountBadge}>
                      {discountPercent}% discount
                    </span>
                  }
                />
              </RadioOption>
            </RadioToggle>
          </div>
          <div className={ctaSection}>
            <ul className={featureList} role="list">
              <li>Unlimited websites</li>
              <li>100% data ownership</li>
              <li>Email reports</li>
            </ul>
            <button type="submit" className={ctaButton}>
              Start my trial
            </button>
          </div>
        </form>
      </main>
    </>
  )
}

type UseSpringInnerTextProps = {
  value: number
  initial?: number
  transformFunction?: (value: number) => string
}
function useSpringInnerText({
  value,
  initial = 0,
  transformFunction = (value: number) => Number.prototype.toString(value),
}: UseSpringInnerTextProps) {
  const elRef = useRef<HTMLSpanElement | null>(null)

  const springValue = useSpring(initial)

  useEffect(() => {
    springValue.set(value)
  }, [springValue, value])

  useEffect(() => {
    return springValue.onChange((val) => {
      if (elRef.current) {
        const formattedVal = transformFunction(val)
        elRef.current.innerText = formattedVal
      }
    })
  }, [springValue, transformFunction])

  return elRef
}

type AnimatedNumberProps = {
  value: number
  initial?: number
  transformFunction?: (value: number) => string
  className?: string
}
function AnimatedNumber({
  value,
  initial = 0,
  transformFunction = (value: number) => Number.prototype.toString(value),
  className,
}: AnimatedNumberProps) {
  const elRef = useSpringInnerText({ value, initial, transformFunction })

  const formattedAccessibleValue = transformFunction(value)

  return (
    <>
      <span ref={elRef} className={mergeClassNames(className)} aria-hidden />
      <span className={screenReaderOnlyClass}>{formattedAccessibleValue}</span>
    </>
  )
}
