import type { PropsWithChildren } from 'react'
import styled from '@emotion/styled'

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <LayoutWrapper className="auth-layout">
      <h1 className="text-center text-white">AuthLayout.tsx</h1>
      <main>{children}</main>
    </LayoutWrapper>
  )
}

export default AuthLayout

const LayoutWrapper = styled.div`
  &.auth-layout {
    background-color: #505050;
    margin: 40px;
    padding: 10px;
    height: 80vh;
  }
`
