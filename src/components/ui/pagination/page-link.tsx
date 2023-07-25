import { HTMLProps } from 'react'

import { clsx } from 'clsx'

import s from './pagination.module.scss'

export type Props = HTMLProps<HTMLAnchorElement> & { active?: boolean }

export default function PageLink({ className, active, disabled, children, ...otherProps }: Props) {
  const classNames = {
    page: clsx(s.page_link),
  }

  if (disabled) {
    return <a className={classNames.page}>{children}</a>
  }

  return (
    <a className={classNames.page} {...otherProps}>
      {children}
    </a>
  )
}
