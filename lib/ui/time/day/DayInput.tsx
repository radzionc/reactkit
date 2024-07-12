import { useMemo } from 'react'
import { InputProps } from '../../props'
import { ExpandableSelector } from '../../select/ExpandableSelector'
import { Day, fromDay, toDay } from '@lib/utils/time/Day'
import { monthNames } from '@lib/utils/time/Month'
import {
  dayInputParts,
  fromDayInputParts,
  toDayInputParts,
} from './DayInputParts'
import styled from 'styled-components'
import { getDayInputPartInterval } from './getDayInputPartInterval'
import { match } from '@lib/utils/match'
import { enforceRange } from '@lib/utils/enforceRange'
import { intervalRange } from '@lib/utils/interval/intervalRange'

type DayInputProps = InputProps<Day> & {
  min: Day
  max: Day
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 68px 120px 80px;
  gap: 8px;
`

export const DayInput = ({ value, onChange, min, max }: DayInputProps) => {
  const parts = useMemo(() => toDayInputParts(fromDay(value)), [value])

  return (
    <Container>
      {dayInputParts.map((part) => {
        const interval = getDayInputPartInterval({
          min,
          max,
          part,
          value: parts,
        })

        return (
          <ExpandableSelector
            key={part}
            value={parts[part]}
            onChange={(value) => {
              const newParts = { ...parts, [part]: value }

              const lowerParts = dayInputParts.slice(
                0,
                dayInputParts.indexOf(part),
              )
              lowerParts.toReversed().forEach((part) => {
                const { start, end } = getDayInputPartInterval({
                  min,
                  max,
                  part,
                  value: newParts,
                })
                newParts[part] = enforceRange(newParts[part], start, end)
              })

              const newValue = toDay(fromDayInputParts(newParts))

              onChange(newValue)
            }}
            options={intervalRange(interval)}
            renderOption={(option) =>
              match(part, {
                day: () => option.toString(),
                month: () => monthNames[option - 1],
                year: () => option.toString(),
              })
            }
            getOptionKey={(option) => option.toString()}
          />
        )
      })}
    </Container>
  )
}
