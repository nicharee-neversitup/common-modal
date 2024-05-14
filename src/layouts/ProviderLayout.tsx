import { useMemo, PropsWithChildren } from 'react'
import { useRouter } from 'next/router'
import { AuthLayout, DefaultLayout } from '@/layouts'
import styled from '@emotion/styled'

const isPublicRouteList = ['/', '/about']

const ProviderLayout = ({ children }: PropsWithChildren) => {
  const router = useRouter()

  // An example condition for switch Layout
  const isPublic = useMemo(() => {
    return isPublicRouteList.includes(router.asPath)
  }, [router.asPath])

  return (
    <LayoutWrapper className="provider-layout">
      <h1 className="text-center text-white">ProviderLayout.tsx</h1>
      {isPublic ? (
        <DefaultLayout>
          <main>{children}</main>
        </DefaultLayout>
      ) : (
        <AuthLayout>
          <main>{children}</main>
        </AuthLayout>
      )}
    </LayoutWrapper>
  )
}

export default ProviderLayout

const LayoutWrapper = styled.div`
  &.provider-layout {
    background-color: black;
    padding: 0.1px;
    min-height: 100vh;
  }
`
