import { ReactElement, useContext, useState } from 'react'
import { ThemeContext } from '@/providers/theme-context'
import type { NextPageWithLayout } from '@/pages/_app'
import styled from '@emotion/styled'
import { CommonPagination } from '@/components/common'
import { Select, type PaginationProps } from 'antd'

const ExamplePagination: NextPageWithLayout = () => {
  const theme = useContext(ThemeContext)
  const [current, setCurrent] = useState(1)

  const onChange: PaginationProps['onChange'] = (page) => {
    console.log(page)
    setCurrent(page)
  }
  return (
    <PageWrapper id="example-pagination" theme={theme} className="min-h-screen w-screen ">
      <CommonPagination
        page={current}
        total={500}
        onChangePage={onChange}
        showTotal
        showSelectRowPerPage
        totalBoundaryShowSizeChanger={3}
        // rounded
      />
    </PageWrapper>
  )
}

export default ExamplePagination

ExamplePagination.getLayout = (page: ReactElement) => {
  return <>{page}</>
}

const PageWrapper = styled.div`
  &#example-pagination {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => (theme == 'dark' ? '#000' : '#fff')};
  }
`
