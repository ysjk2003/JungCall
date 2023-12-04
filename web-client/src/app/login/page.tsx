import React from "react"

import { Button } from "@/component/Button/Button"
import { Input } from "@/component/Input/Input"

export default function Login() {
  return (
    <div>
      <Input placeholder={"ID"}></Input>
      <Input placeholder={"Password"}></Input>
      <Button>Login</Button>
    </div>
  )
}
