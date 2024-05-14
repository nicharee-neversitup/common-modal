import type { PropsWithChildren } from 'react'
import styled from '@emotion/styled'

const CustomLayout = ({ children }: PropsWithChildren) => {
  return (
    <LayoutWrapper className="custom-layout">
      <h1 className="text-center text-white">CustomLayout.tsx</h1>
      <main>{children}</main>
    </LayoutWrapper>
  )
}

export default CustomLayout

const LayoutWrapper = styled.div`
  &.custom-layout {
    background-color: #505050;
    padding: 0.1px;
    height: 100vh;
  }
`
