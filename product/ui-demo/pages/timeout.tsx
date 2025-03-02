import { Checkbox } from '@lib/ui/inputs/Checkbox/Checkbox'
import { useState } from 'react'
import { VStack } from '@lib/ui/css/stack'
import { Text } from '@lib/ui/text'
import { InfoIcon } from '@lib/ui/icons/InfoIcon'
import { TimeoutMessage } from '@lib/ui/base/TimeoutMessage'
import { makeDemoPage } from '../layout/makeDemoPage'
import { DemoPage } from '../components/DemoPage'

export default makeDemoPage(() => {
  const [one, setOne] = useState(false)
  const [another, setAnother] = useState(false)

  return (
    <DemoPage title="Timeout Message" youtubeVideoId="tUbas1Ni2yo">
      <VStack gap={20}>
        <Checkbox
          label="First timeout message trigger"
          value={one}
          onChange={setOne}
        />
        <Checkbox
          label="Second timeout message trigger"
          value={another}
          onChange={setAnother}
        />
        <TimeoutMessage
          deps={[one, another]}
          timeout={5000}
          render={() => (
            <Text color="supporting" size={14} height="l">
              <Text
                centerHorizontally
                as="span"
                style={{ marginRight: 8, verticalAlign: 'middle' }}
              >
                <InfoIcon />
              </Text>
              It could take up to 10 minutes for your changes to be reflected
            </Text>
          )}
        />
      </VStack>
    </DemoPage>
  )
})
