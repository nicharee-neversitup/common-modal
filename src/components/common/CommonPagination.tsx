import React, { HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { ConfigProvider, Pagination, PaginationProps } from 'antd'
import { PaginationLocale } from 'antd/es/pagination/Pagination'
import { ComponentToken } from 'antd/es/pagination/style'
import { AliasToken } from 'antd/es/theme/internal'

interface ICommonPaginationThemeConfig {
  globalToken: Partial<AliasToken>
  componentToken: Partial<ComponentToken>
}

interface ICommonPaginationProps {
  theme: Partial<ICommonPaginationThemeConfig>
  containerStyle: React.CSSProperties
  containerClassName: string
  locale: PaginationLocale
  defaultPage: number
  defaultRowPerPage: number
  size: PaginationProps['size']
  rowPerPage: number
  page: number
  total: number
  itemRender: PaginationProps['itemRender']
  rowPerPageOptions: number[]
  totalTemplate: PaginationProps['showTotal']
  rounded: boolean
  disabled: boolean
  simple: boolean
  responsive: boolean
  hideOnSinglePage: boolean
  showTitle: boolean
  showTotal: boolean
  showJumperPage: PaginationProps['showQuickJumper']
  showLessItems: boolean
  showSelectRowPerPage: boolean
  onChangePage: PaginationProps['onChange']
  onChangeRowPerPage: PaginationProps['onShowSizeChange']
  // extended PaginationData Interface antd
  className: string
  prefixCls: string
  selectPrefixCls: string
  totalBoundaryShowSizeChanger: number
  showPrevNextJumpers: boolean
  style: React.CSSProperties
  prevIcon: React.ComponentType | React.ReactNode
  nextIcon: React.ComponentType | React.ReactNode
  jumpPrevIcon: React.ComponentType | React.ReactNode
  jumpNextIcon: React.ComponentType | React.ReactNode
}

const totalTemplateDefault = (total: number, range: [number, number]) => `${range[0]} - ${range[1]} จาก ${total}`
const rowPerPageOptionsDefault = [10, 20, 50, 100]
const localeDefault: PaginationLocale = {
  // Options
  items_per_page: '/ หน้า',
  jump_to: 'ไปยัง',
  jump_to_confirm: 'ยืนยัน',
  page: '',

  // Pagination
  prev_page: 'หน้าก่อนหน้า',
  next_page: 'หน้าถัดไป',
  prev_5: 'ย้อนกลับ 5 หน้า',
  next_5: 'ถัดไป 5 หน้า',
  prev_3: 'ย้อนกลับ 3 หน้า',
  next_3: 'ถัดไป 3 หน้า',
  page_size: 'ขนาดหน้า',
}

const CommonPagination = (props: Partial<ICommonPaginationProps>) => {
  const {
    theme,
    containerStyle,
    containerClassName,
    className,
    locale,
    defaultPage,
    defaultRowPerPage,
    size,
    rowPerPage,
    page,
    total,
    itemRender,
    rowPerPageOptions,
    totalTemplate,
    rounded,
    disabled,
    simple,
    responsive,
    showTitle,
    showTotal,
    hideOnSinglePage,
    showJumperPage,
    showLessItems,
    showSelectRowPerPage = false,
    onChangePage,
    onChangeRowPerPage,
    ...prop
  } = props

  return (
    <ComponentWrapper style={containerStyle} className={`common-pagination w-full ${containerClassName}`}>
      <ConfigProvider
        theme={
          theme
            ? {
                token: theme.globalToken,
                components: {
                  Pagination: theme.componentToken,
                },
              }
            : undefined
        }>
        <Pagination
          className={`${className} ${rounded ? 'rounded-pagination' : ''}`}
          locale={locale || localeDefault}
          defaultCurrent={defaultPage}
          defaultPageSize={defaultRowPerPage}
          size={size}
          pageSize={rowPerPage}
          current={page}
          total={total}
          itemRender={itemRender}
          pageSizeOptions={rowPerPageOptions || rowPerPageOptionsDefault}
          disabled={disabled}
          simple={simple}
          responsive={responsive}
          showTitle={showTitle}
          showTotal={showTotal ? totalTemplate || totalTemplateDefault : undefined}
          hideOnSinglePage={hideOnSinglePage}
          showLessItems={showLessItems}
          showQuickJumper={showJumperPage}
          showSizeChanger={showSelectRowPerPage}
          onChange={onChangePage}
          onShowSizeChange={onChangeRowPerPage}
          {...prop}
        />
      </ConfigProvider>
    </ComponentWrapper>
  )
}

export default CommonPagination

const ComponentWrapper = styled.div`
  &.common-pagination {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & .rounded-pagination li {
    border-radius: 50%;

    & > button {
      border-radius: 50% !important;
    }
  }
`
