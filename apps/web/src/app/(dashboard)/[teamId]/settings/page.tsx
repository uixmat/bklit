import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PageHeader } from "@/components/page-header";

export default function SettingsPage() {
  return (
    <div className="space-y-6 prose dark:prose-invert max-w-none">
      <PageHeader title="Team settings" description="Manage your settings." />
      <Card className="card">
        <CardHeader>
          <CardTitle>A settings card</CardTitle>
          <CardDescription>A description of the settings card</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">Hello World</CardContent>
      </Card>
    </div>
  );
}
