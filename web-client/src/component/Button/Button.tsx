import cn from "classnames"
import React from "react"

import styles from "./Button.module.scss"

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, children, ...restProps } = props
  return (
    <button className={cn(styles.button, props.className)} {...restProps}>
      {props.children}
    </button>
  )
}
