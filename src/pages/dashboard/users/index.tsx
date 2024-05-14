import { useContext, ReactElement } from 'react'
import { ThemeContext } from '@/providers/theme-context'
import { useRouter } from 'next/router'
import type { NextPageWithLayout } from '@/pages/_app'
import styled from '@emotion/styled'
import { CustomLayout } from '@/layouts'
import { CommonExampleNavigation } from '@/components/common'

const Index: NextPageWithLayout = () => {
  const router = useRouter()
  const theme = useContext(ThemeContext)
  return (
    <PageWrapper id="dashboard-users">
      <h2 className="text-center text-white">asPath: {router.asPath}</h2>
      <h3>Theme from context: {theme}</h3>
      <CommonExampleNavigation />
    </PageWrapper>
  )
}

Index.getLayout = (page: ReactElement) => {
  return <CustomLayout>{page}</CustomLayout>
}

export default Index

const PageWrapper = styled.div`
  &#dashboard-users {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #989898;
    margin: 40px;
    padding: 10px;
    min-height: 80vh;
  }
`
