import { useContext } from 'react'
import { useRouter } from 'next/router'
import { ThemeContext } from '@/providers/theme-context'
import type { NextPageWithLayout } from '@/pages/_app'
import styled from '@emotion/styled'
import { CommonExampleNavigation } from '@/components/common'

const Page: NextPageWithLayout = () => {
  const router = useRouter()
  const theme = useContext(ThemeContext)
  return (
    <PageWrapper id="dashboard-users-id">
      <h2 className="text-center text-white">asPath: {router.asPath}</h2>
      <h3>Theme from context: {theme}</h3>
      <h3>{`router.query.id: ${router.query.id}`}</h3>
      <CommonExampleNavigation />
    </PageWrapper>
  )
}

export default Page

const PageWrapper = styled.div`
  &#dashboard-users-id {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #989898;
    margin: 40px;
    padding: 10px;
    min-height: 60vh;
  }
`
