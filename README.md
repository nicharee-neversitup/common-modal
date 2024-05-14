# Project Name

## Project Description

This is web frontend prototype project of Neversitup.

## Requirement

- node v18.17.0 or more
- npm 9.6.7 or more

## Table of Content

- [Setup](#setup)
- [Start Project](#start-project)
- [Project Structure](#project-structure)
- [General Convention](#general-convention)
- [Components Convention](#components-convention)
- [Layout convention](#layout-convention)
- [Pages Convention](#pages-convention)
- [Style CSS Convention](#style-css-convention)
- [Commit Convention](#commit-convention)
- [Bonus](#bonus)

## Setup

1. git clone https://gitlab.com/standard-template/web/neversitup-web-structure-template.git
2. cd neversitup-web-structure-template
3. npm install

## Start Project

<strong>Default port 3000</strong>

```
1. npm run dev
2. go to http://localhost:3000 or http://127.0.0.1:3000
```

## Project Structure

```
└── .git
└── .vscode
    ├── settings.json
└── public
    ├── favicon.ico
    ├── next.svg
    ├── vercel.svg
└── src
    └── assets
        ├── index.ts
    └── components
        └── common
            ├── index.ts
            ├── CommonExampleNavigation.tsx
        └── feature-name
            ├── index.ts
            ├── FeatureNameComponentName.tsx
    └── constants
        ├── index.ts
    └── hooks
        ├── index.ts
        ├── useHookName.ts
    └── layouts
        ├── index.ts
        ├── ProviderLayout.tsx
        ├── AuthLayout.tsx
        ├── CustomLayout.tsx
        ├── DefaultLayout.tsx
    └── libs
        ├── index.ts
    └── middleware
        ├── index.ts
    └── pages
        ├── index.tsx
        └── feature-name
            ├── index.tsx
            └── sub-feature-name
                ├── index.tsx
                └── [id]
                    ├── index.tsx
        ├── _app.tsx
        ├── _document.tsx
    └── providers
        ├── index.ts
    └── styles
        ├── globals.css
    └── utils
        ├── index.ts
├── .eslintrc.json
├── .gitignore
├── next.env.d.ts
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── prettier.config.js
├── tailwind.config.js
├── tsconfig.json
```

## General Convention

Every time when you coding, please check whether your do it with the naming convention used in this repository.

1. Naming the `Variable`, `Props`, `State`, `Memo`.

   - In the form of `camelCase`.
   - As a `noun`.
   - If return Boolean should start with `is` (ex. isOpened).

2. Naming the `function`, `method`.

   - In the form of `camelCase`.
   - As a `verb`.
   - If return Boolean should start with `is` (ex. isOpened).
   - In the form of `Arrow function`.
   - Always determine the type of the variable.

3. Attribute of tag use `""` (Double Quote).
4. Value of string use `''` (Single Quote).
5. If you want to concat string, Use the template literals<code>``</code> (back-ticks).
6. Defining `type`
   - Use `interface` by default.
   - Naming the `interface` will be In the form of `PascalCase` and always ends with the word "type" (ex. CarType).
7. To sort "Attribute", sort `Event` at the end.
8. In this project, Naming the file and folder will be In the form of `kebab-case` except the `Component`, `Layout`, `Hook`
9. Naming the `Component`, `Layout` will be In the form of `camelCase`
10. Naming the `Hook`
    - Start with the word "use"
    - In the form of `camelCase`
    - Ex. useCustomHook.ts, useWindowSize.ts
11. Sorting properties

```
  1. import {} from ‘react’
  2. import {} from ‘utils’ / ‘lib’ / ‘service’ / another
  3. import {} from ‘@/components’
  4. props (interface {})
  5. type  (type = {})
  6. const
  7. useState
  8. useCallBack
  9. useMemo
  10. useCustomHook
  11. function
  12. useEffect
  13. template
  14. style css (style component)
```

## Components Convention

Before you create or update component, please check whether your do it with
the component convention used in this repository.

1 Component Creation.

- Create folder that named after feature name in the form of `kebab-case`. (ex. profile)
- In folder, Create file component that named after `folder name + the Component name` in the form of `PascalCase`.
  (ex. ProfileAvatar.tsx)
- Create index.js file for export every component.

<br>

2 Determination Type of props component.

- Use `interface` by default. (Unless `type` abilities are required.)
- `interface` name must be starts with `I` and followed by `Component` name with `PascalCase`. (ex. IComponentName)

<br>

3 Writing the `Component` will be in the form of `Function Component` and `Arrow Function`.

<br>

4 If the `Component` have `Props` more 1 `Props`, We must be destructuring `Props` in function.

## Layout convention

The structure of Layout in this project that adjust form <a href="https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts#per-page-layouts" target="_blank">document</a> of nextjs. by create a file `ProviderLayout.tsx` for to condition the switch layout.

Before you create or update layout, please check whether your do it with
the layout convention used in this repository.

1. Naming the `Layouts` .
   - In the form of `PascalCase`.
   - Always ends with the word "Layout".
   - Ex. AuthLayout.tsx, CustomLayout.tex
2. In folder Layouts, Create `index.js` file for export every Layouts.
3. An example of `ProviderLayout.tsx` file.

```
import { useMemo, PropsWithChildren } from "react"
import { useRouter } from "next/router"
import { AuthLayout, DefaultLayout } from "@/layouts"

const isPublicRouteList = ["/", "/about"]

const ProviderLayout = ({ children }: PropsWithChildren) => {
  const router = useRouter()

  // An example condition for switch Layout
  const isPublic = useMemo(() => {
    return isPublicRouteList.includes(router.asPath)
  }, [router.asPath])

  return (
    <>
      {isPublic ? (
        <DefaultLayout>
          <main>{children}</main>
        </DefaultLayout>
      ) : (
        <AuthLayout>
          <main>{children}</main>
        </AuthLayout>
      )}
    </>
  )
}

export default ProviderLayout
```

4. An example of `Layout` file.

```
import type { PropsWithChildren } from 'react'

const DefaultLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <h1 className="text-center p-5 bg-red-200 text-2xl">
        This is Default Layout
      </h1>
      <main>{children}</main>
    </>
  )
}

export default DefaultLayout
```

5. An example of `_app.tsx` file.

```
import { ReactElement, ReactNode } from "react"
import type { NextPage } from "next"
import type { AppProps } from "next/app"
import "../styles/globals.css"
import { ProviderLayout } from "@/layouts"
import { ThemeContext } from "@/providers/theme-context"

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout =
    Component.getLayout ||
    ((page) => {
      return <ProviderLayout>{page}</ProviderLayout>
    })

  return (
    <>
      <ThemeContext.Provider value={"dark"}>
        {getLayout(<Component {...pageProps} />)}
      </ThemeContext.Provider>
    </>
  )
}

export default MyApp

```

6. An example of a `Page file with a specific layout` applied.

Use `.getLayout` for inject specific layout

```
import { useContext, ReactElement } from "react"
import type { NextPageWithLayout } from "@/pages/_app"
import styled from "@emotion/styled"
import { ThemeContext } from "@/providers/theme-context"
import { CustomLayout } from "@/layouts"

const Index: NextPageWithLayout = () => {
  const theme = useContext(ThemeContext)
  return (
    <PageWrapper id="dashboard-users">
      <p>this is dashboard/users</p>
      <p>Theme from context: {theme}</p>
    </PageWrapper>
  )
}

Index.getLayout = (page: ReactElement) => {
  return <CustomLayout>{page}</CustomLayout>
}

export default Index
```

7.  An example of a `Page` file

```
import styled from "@emotion/styled"

const Index = () => {
  return (
    <PageWrapper id="index">
      <div>Index</div>
    </PageWrapper>
  )
}

export default Index

const PageWrapper = styled.div`
  &#index {
  }
`
```

## Pages Convention

Before you create or update pages, please check whether your do it with
the pages convention used in this repository.

1. Use `Pages router` (/pages) structure. https://nextjs.org/docs/pages/building-your-application/routing
2. Use folder name for define Path (not file).
3. Create folder name with `kebab-case `.
4. Every file page name `index.tsx`.
5. Dynamic Routes will use folder name to define query params (ex. `[id]`).

## Style CSS Convention

Before you create or update style css, please check whether your do it with
the style css convention used in this repository.

1. Writing CSS in the form of `Selectors` style.
2. Naming the `class` and `id` will be in the form of `kebab-case`.
3. <u>The first `Selector` of `Page` must be the `Class` that named after the `router.asPath()`.</u>
4. <u>The first `Selector` of `Component` must be the `Class` that named after the name of `Component`.</u>
5. Spacing 1 space before `{` (braces open)
6. Spacing 1 line between `Declaration` and `Selector`
7. If you use the `TailwindCSS` must be install `prettier-plugin-tailwindcss` (devDependencies) for auto sort class

## Commit Convention

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

- `feat / feature`: all changes that introduce completely new code or new features
- `fix`: changes that fix a bug (ideally you will additionally reference an
  issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for
  usage of a lib or cli usage)
- `build`: all changes regarding the build of the software, changes to
  dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing
  ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e.
  github actions, ci system)
- `chore`: all changes to the repository that do not fit into any of the above
  categories
- Ex. git commit -am “feat: create authentication feature”

If you are interested in the detailed specification you can visit
https://www.conventionalcommits.org/

## Bonus

<b> Naming convention </b>

| Name        | Example                       |
| ----------- | ----------------------------- |
| Camel Case  | camelCase, isOpened           |
| Pascal Case | PascalCase, ProfileTable      |
| Snake Case  | snake_case, user_id           |
| Kebab Case  | kebab-case, dashboard-profile |
| Upper Case  | UPPERCASE, GOOGLE             |
| Lower Case  | lowercase, google             |

<b>Required Extention for vscode</b>

- Styled Component
  - vscode-styled-components
- TailwindCSS
  - Tailwind CSS IntelliSense
