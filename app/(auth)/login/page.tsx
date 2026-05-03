import { LoginForm } from './login-form'
import LanguageSwitcher from "@/components/language-switcher"
import { ThemeToggle } from "@/components/theme-toggle"

export default function LoginPage() {
  return (
    <div className="flex h-screen w-full items-center justify-center px-4 bg-background relative">
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
      <LoginForm />
    </div>
  )
}