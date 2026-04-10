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
  ArrowLeft,
  Star,
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
      {/* Header — glass blur */}
      <header className="sticky top-0 z-50 glass-strong">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
              <Star className="h-4 w-4 text-primary-foreground" />
            </div>
            نقطه
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button size="sm" className="gradient-primary text-primary-foreground shadow-glow" asChild>
              <Link href="/api/health">شروع رایگان</Link>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero — gradient bg + floating blobs */}
        <section className="relative overflow-hidden gradient-hero section-spacing">
          {/* Decorative blobs */}
          <div className="blob-primary -top-32 -end-32 h-96 w-96 opacity-40" />
          <div className="blob-secondary top-1/2 -start-20 h-72 w-72 opacity-30" />

          <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
            <Badge
              variant="secondary"
              className="mb-6 animate-fade-in glass px-4 py-1.5 text-sm"
            >
              <Rocket className="me-2 h-4 w-4 text-primary animate-pulse-soft" />
              نسل جدید وب‌سازی
            </Badge>

            <h1 className="animate-fade-in-up text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              وبسایت حرفه‌ای خودت رو{" "}
              <span className="gradient-text">بساز</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl animate-fade-in-up stagger-2 text-base leading-relaxed text-muted-foreground sm:text-lg">
              با هوش مصنوعی نقطه، ایده‌ات رو به یک وبسایت کامل و حرفه‌ای تبدیل
              کن. بدون کدنویسی، بدون پیچیدگی. فقط بگو چی می‌خوای.
            </p>

            <div className="mt-10 flex animate-fade-in-up stagger-3 flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" className="gradient-primary text-primary-foreground shadow-glow hover:shadow-glow-lg transition-shadow" asChild>
                <Link href="/api/health">
                  <Sparkles className="me-2 h-5 w-5" />
                  شروع ساخت
                  <ArrowLeft className="ms-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="hover-lift" asChild>
                <Link href="/api/demo">نمونه‌ها</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features — hover-lift cards with icon-box */}
        <section className="section-spacing">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="mb-12 text-center">
              <h2 className="animate-fade-in text-2xl font-bold sm:text-3xl md:text-4xl">
                چرا نقطه؟
              </h2>
              <p className="mt-3 animate-fade-in stagger-1 text-muted-foreground sm:text-lg">
                ابزارهایی که ساخت وبسایت رو ساده و لذت‌بخش می‌کنن
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
              {features.map((feature, i) => {
                const Icon = feature.icon
                return (
                  <Card
                    key={feature.title}
                    className={`group text-start hover-lift shadow-depth animate-fade-in-up stagger-${i + 1} border-transparent gradient-primary-soft`}
                  >
                    <CardHeader className="pb-3">
                      <div className="icon-box mb-3 h-12 w-12 group-hover:scale-110 transition-transform">
                        <Icon className="h-6 w-6 text-primary" />
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

        {/* Divider */}
        <div className="divider-gradient mx-auto max-w-5xl" />

        {/* Stats — gradient strip */}
        <section className="relative overflow-hidden section-spacing-sm">
          <div className="gradient-radial absolute inset-0" />
          <div className="relative mx-auto grid max-w-5xl grid-cols-2 gap-8 px-4 sm:grid-cols-4 sm:px-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.label}
                  className={`animate-fade-in-up stagger-${i + 1} text-center`}
                >
                  <div className="icon-box mx-auto mb-3 h-12 w-12">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-3xl font-extrabold tracking-tight">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Divider */}
        <div className="divider-gradient mx-auto max-w-5xl" />

        {/* Platform Info — glass card */}
        <section className="section-spacing">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <Card className="glass shadow-depth-md animate-fade-in overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="icon-box h-9 w-9">
                    <Code2 className="h-4 w-4 text-primary" />
                  </div>
                  اطلاعات پلتفرم
                </CardTitle>
                <CardDescription>
                  مشخصات فنی محیط اجرا
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    { label: "Project ID", value: context.projectId, mono: true },
                    { label: "Version", value: context.version },
                    { label: "Runtime Lane", value: context.runtimeLane },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl gradient-primary-soft p-4 transition-colors hover:bg-primary/[0.06]"
                    >
                      <div className="text-xs font-medium text-muted-foreground">
                        {item.label}
                      </div>
                      <div className={`mt-1.5 text-sm font-semibold ${item.mono ? "font-mono break-all" : ""}`}>
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-10">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <p className="text-sm text-muted-foreground">
            ساخته شده با{" "}
            <span className="font-bold gradient-text">نقطه</span>
          </p>
          <div className="mt-4 flex items-center justify-center gap-6">
            <Link
              href="/api/health"
              className="text-xs text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              سلامت سرویس
            </Link>
            <Link
              href="/api/demo"
              className="text-xs text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              API نمونه
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
