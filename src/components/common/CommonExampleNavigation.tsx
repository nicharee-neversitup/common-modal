import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from '@emotion/styled'

const CommonExampleNavigation = () => {
  const router = useRouter()

  return (
    <ComponentWrapper className="common-exampleN-navigation">
      <ul className="space-y-5">
        {router.asPath !== '/' && (
          <li>
            <Link href="/">Click to example DefaultLayout.tsx</Link>
          </li>
        )}
        {router.asPath !== '/dashboard' && (
          <li>
            <Link href="/dashboard">Click to example AuthLayout.tsx</Link>
          </li>
        )}
        {router.asPath !== '/dashboard/users' && (
          <li>
            <Link href="/dashboard/users">
              Click to example CustomLayout.tsx
            </Link>
          </li>
        )}
      </ul>
    </ComponentWrapper>
  )
}

export default CommonExampleNavigation

const ComponentWrapper = styled.div`
  &.common-exampleN-navigation {
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 1.5rem;
  }
`
