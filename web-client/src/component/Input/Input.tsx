import React from "react"

import styles from "./Input.module.scss"

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={styles.input} {...props} />
}
