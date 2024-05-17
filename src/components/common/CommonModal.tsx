import React, { HTMLAttributes, useMemo } from 'react'
import { ConfigProvider, Modal } from 'antd'
import { ModalLocale, ModalProps } from 'antd/es/modal'
import { ComponentToken } from 'antd/es/modal/style'
import { AliasToken } from 'antd/es/theme/internal'
import { Locale } from 'antd/es/locale'

interface ICommonModalThemeConfig {
  globalToken: Partial<AliasToken>
  componentToken: Partial<ComponentToken>
}

interface ILocaleTextConfig {
  locale: string
  customText: Partial<ModalLocale>
}

interface IClassNameModal {
  mask: HTMLAttributes<HTMLDivElement>['className']
  header: HTMLAttributes<HTMLDivElement>['className']
  body: HTMLAttributes<HTMLDivElement>['className']
  footer: HTMLAttributes<HTMLDivElement>['className']
}

interface ICommonModalProps extends ModalProps {
  theme: Partial<ICommonModalThemeConfig>
  locale: Partial<ILocaleTextConfig>
  classNames: Partial<IClassNameModal>
  prefixCls: string
}

const localeCustomTextDefault: ModalLocale = {
  okText: 'ตกลง',
  cancelText: 'ยกเลิก',
  justOkText: 'ตกลง',
}

const CommonModal = (props: Partial<ICommonModalProps>) => {
  const { theme, locale, prefixCls, ...prop } = props

  const localeConfigProvider: Locale = useMemo(() => {
    if (locale) {
      const modalLocalConfig: ModalLocale = { ...localeCustomTextDefault, ...(locale?.customText || {}) }
      return {
        locale: locale?.locale || 'th_TH',
        Modal: modalLocalConfig,
      }
    }
    return {
      locale: 'th_TH',
      Modal: localeCustomTextDefault,
    }
  }, [locale])

  return (
    <ConfigProvider
      theme={
        theme
          ? {
              token: theme?.globalToken,
              components: {
                Modal: theme?.componentToken,
              },
            }
          : undefined
      }
      locale={localeConfigProvider}
      prefixCls={prefixCls}>
      <Modal {...prop} />
    </ConfigProvider>
  )
}

export default CommonModal
