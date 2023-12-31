"use client"

import { MoonIcon } from "@/components/svg/MoonIcon"
import { SunIcon } from "@/components/svg/SunIcon"
import { Switch } from "@nextui-org/switch"
import { useTheme } from "next-themes"
import { ReactNode, useEffect, useState } from "react"

type ThemeSwitcherProps = {
  defaultSelected?: boolean
  children?: ReactNode
}
export function ThemeSwitcher({
  defaultSelected = false,
  children,
}: ThemeSwitcherProps) {
  const [mounted, setMounted] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(defaultSelected)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const handleSwitch = () => {
    setIsDarkMode(!isDarkMode)
    setTheme(isDarkMode ? "light" : "dark")
  }

  return (
    <Switch
      onValueChange={handleSwitch}
      defaultSelected
      size="lg"
      color="primary"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
    >
      {children}
    </Switch>
  )
}
