import { ClientOnly } from '@lib/ui/base/ClientOnly'
import { DemoPage } from '../components/DemoPage'
import { TimeEditor } from '../components/TimeEditor/TimeEditor'
import { makeDemoPage } from '../layout/makeDemoPage'

export default makeDemoPage(() => {
  return (
    <DemoPage youtubeVideoId="Wns4IRaaryI" title="Time Editor">
      <ClientOnly>
        <TimeEditor />
      </ClientOnly>
    </DemoPage>
  )
})
