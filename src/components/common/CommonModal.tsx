import React, { useMemo } from 'react'
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

interface ICommonModalProps extends ModalProps {
  theme: Partial<ICommonModalThemeConfig>
  locale: Partial<ILocaleTextConfig>
  prefixCls: string
}

const localeCustomTextDefault: ModalLocale = {
  okText: 'ตกลง',
  cancelText: 'ยกเลิก',
  justOkText: 'ตกลง',
}

const modalClassNameDefault: ModalProps['classNames'] = {
  footer: 'w-full flex items-center justify-center space-x-2',
}

const CommonModal = (props: Partial<ICommonModalProps>) => {
  const { theme, locale, prefixCls, classNames, ...prop } = props

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
      <Modal classNames={classNames || modalClassNameDefault} {...prop} />
    </ConfigProvider>
  )
}

export default CommonModal
