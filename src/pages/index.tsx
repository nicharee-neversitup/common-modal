import { useContext } from 'react'
import { useRouter } from 'next/router'
import { ThemeContext } from '@/providers/theme-context'
import styled from '@emotion/styled'
import { CommonExampleNavigation } from '@/components/common'

const Index = () => {
  const router = useRouter()
  const theme = useContext(ThemeContext)
  return (
    <PageWrapper id="index">
      <h2 className="text-center text-white">asPath: {router.asPath}</h2>
      <h3>Theme from context: {theme}</h3>
      <CommonExampleNavigation />
    </PageWrapper>
  )
}

export default Index

const PageWrapper = styled.div`
  &#index {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #989898;
    margin: 40px;
    padding: 10px;
    min-height: 60vh;
  }
`
