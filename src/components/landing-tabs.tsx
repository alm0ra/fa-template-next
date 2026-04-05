import * as Tabs from "@radix-ui/react-tabs";

const tabData = {
  kits: [
    "Landing و صفحه‌های marketing با blockهای آماده و تمیز",
    "Dashboard و صفحه‌های account با پایه قابل توسعه",
    "Route handlerهای روشن برای lane مشترک و backend داینامیک",
  ],
  runtime: [
    "SQLite per project روی volume پایدار",
    "Shared runtime برای APIهای سبک و سریع",
    "قابل ارتقا به laneهای سنگین‌تر بدون به‌هم‌ریختن bootstrap",
  ],
  agent: [
    "surface حداقلی ولی خوش‌قیافه تا agent از صفر همه‌چیز را خراب نکند",
    "بدون shop/blog/payment پیش‌فرض که context را شلوغ کند",
    "پایه مناسب برای سایت شرکتی، فروشگاه، dashboard و فرم‌محور",
  ],
} as const;

export function LandingTabs() {
  return (
    <Tabs.Root className="tabs-shell" defaultValue="kits" dir="rtl">
      <Tabs.List className="tabs-list" aria-label="Platform sections">
        <Tabs.Trigger className="tabs-trigger" value="kits">
          UI Kits
        </Tabs.Trigger>
        <Tabs.Trigger className="tabs-trigger" value="runtime">
          Runtime
        </Tabs.Trigger>
        <Tabs.Trigger className="tabs-trigger" value="agent">
          Agent Rules
        </Tabs.Trigger>
      </Tabs.List>

      {Object.entries(tabData).map(([key, items]) => (
        <Tabs.Content className="tabs-content" value={key} key={key}>
          <ul className="bullet-list">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}
