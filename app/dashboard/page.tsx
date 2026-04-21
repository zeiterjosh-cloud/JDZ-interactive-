import type { Metadata } from "next";
import { DashboardLayout } from "@/components/Dashboard";
import DashboardContent from "@/components/Dashboard";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Manage your NovaBuilder projects, templates, and earnings.",
};

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <DashboardContent />
    </DashboardLayout>
  );
}
