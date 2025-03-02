import { Text } from '@lib/ui/text'
import { HStack } from '@lib/ui/css/stack'
import styled from 'styled-components'
import { getColor } from '@lib/ui/theme/getters'
import { centerContent } from '@lib/ui/css/centerContent'
import { Icon } from '../icon/Icon'

const IconWrapper = styled.div`
  color: ${getColor('contrast')};
  font-size: 22px;
  ${centerContent};
`

export const ProductLogo = () => {
  return (
    <HStack alignItems="center" gap={8}>
      <IconWrapper>
        <Icon />
      </IconWrapper>
      <Text size={16} color="contrast" weight="500">
        Radzion
        <Text as="span" color="contrast">
          Kit
        </Text>
      </Text>
    </HStack>
  )
}
