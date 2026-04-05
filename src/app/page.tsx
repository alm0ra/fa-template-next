import Link from "next/link"
import {
  Sparkles,
  Zap,
  Shield,
  Code2,
  Rocket,
  Globe,
  Clock,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/theme-toggle"
import { getPlatformContext } from "@/lib/platform"

const features = [
  {
    icon: Sparkles,
    title: "هوش مصنوعی",
    description:
      "با کمک هوش مصنوعی پیشرفته، وبسایت حرفه‌ای خودت رو در چند دقیقه بساز. فقط بگو چی می‌خوای.",
  },
  {
    icon: Code2,
    title: "بدون کدنویسی",
    description:
      "نیازی به دانش فنی نیست. همه چیز بصری و ساده طراحی شده تا هرکسی بتونه ازش استفاده کنه.",
  },
  {
    icon: Zap,
    title: "سرعت بالا",
    description:
      "زیرساخت بهینه با عملکرد فوق‌العاده. سایتت در کسری از ثانیه لود میشه و تجربه کاربری عالی داره.",
  },
]

const stats = [
  { value: "۲۷,۰۰۰+", label: "پروژه", icon: Globe },
  { value: "۹۹.۹%", label: "آپتایم", icon: Shield },
  { value: "۳ ثانیه", label: "دیپلوی", icon: Clock },
  { value: "رایگان", label: "شروع کن", icon: Users },
]

export default function HomePage() {
  const context = getPlatformContext()

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="text-xl font-bold tracking-tight">
            نقطه
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button size="sm" asChild>
              <Link href="/api/health">شروع رایگان</Link>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <Badge variant="secondary" className="mb-4">
              <Rocket className="me-1.5 h-3.5 w-3.5" />
              نسل جدید وب‌سازی
            </Badge>
            <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              وبسایت حرفه‌ای خودت رو بساز
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
              با هوش مصنوعی نقطه، ایده‌ات رو به یک وبسایت کامل و حرفه‌ای تبدیل
              کن. بدون کدنویسی، بدون پیچیدگی. فقط بگو چی می‌خوای.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/api/health">
                  <Sparkles className="me-2 h-4 w-4" />
                  شروع ساخت
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/api/demo">نمونه‌ها</Link>
              </Button>
            </div>
          </div>
        </section>

        <Separator className="mx-auto max-w-5xl" />

        {/* Features */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-bold sm:text-3xl">
                چرا نقطه؟
              </h2>
              <p className="mt-2 text-muted-foreground">
                ابزارهایی که ساخت وبسایت رو ساده و لذت‌بخش می‌کنن
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <Card key={feature.title} className="text-start">
                    <CardHeader className="pb-3">
                      <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y bg-muted/40 py-12">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-4 sm:grid-cols-4 sm:px-6">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="text-center">
                  <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Platform Info */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code2 className="h-5 w-5" />
                  اطلاعات پلتفرم
                </CardTitle>
                <CardDescription>
                  مشخصات فنی محیط اجرا
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-lg border bg-muted/50 p-3">
                    <div className="text-xs text-muted-foreground">
                      Project ID
                    </div>
                    <div className="mt-1 font-mono text-sm break-all">
                      {context.projectId}
                    </div>
                  </div>
                  <div className="rounded-lg border bg-muted/50 p-3">
                    <div className="text-xs text-muted-foreground">
                      Version
                    </div>
                    <div className="mt-1 font-mono text-sm">
                      {context.version}
                    </div>
                  </div>
                  <div className="rounded-lg border bg-muted/50 p-3">
                    <div className="text-xs text-muted-foreground">
                      Runtime Lane
                    </div>
                    <div className="mt-1 font-mono text-sm">
                      {context.runtimeLane}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <p className="text-sm text-muted-foreground">
            ساخته شده با{" "}
            <span className="font-semibold text-foreground">نقطه</span>
          </p>
          <div className="mt-3 flex items-center justify-center gap-4">
            <Link
              href="/api/health"
              className="text-xs text-muted-foreground underline-offset-4 hover:underline"
            >
              سلامت سرویس
            </Link>
            <Link
              href="/api/demo"
              className="text-xs text-muted-foreground underline-offset-4 hover:underline"
            >
              API نمونه
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
