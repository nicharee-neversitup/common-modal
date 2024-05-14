import type { PropsWithChildren } from 'react'
import styled from '@emotion/styled'

const DefaultLayout = ({ children }: PropsWithChildren) => {
  return (
    <LayoutWrapper className="default-layout">
      <h1 className="text-center text-white">DefaultLayout.tsx</h1>
      <main>{children}</main>
    </LayoutWrapper>
  )
}

export default DefaultLayout

const LayoutWrapper = styled.div`
  &.default-layout {
    background-color: #505050;
    margin: 40px;
    padding: 10px;
    height: 80vh;
  }
`
