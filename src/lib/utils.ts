import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const AnnouncementTypes = [
  "Company Mergers",
  "Disposals and divestitures",
  "Business Restructuring",
  "Expansion Plans",
  "Financial Troubles",
  "Management Changes",
  "Capital Structure Changes",
  "Contract Awards",
  "Legal Disputes",
  "Payment Defaults",
  "Credit Rating Changes",
  "Product Launches",
  "Operational Disruptions",
  "Accounting Changes",
  "Investments/Divestments",
  "Dividend Policy Changes",
  "Labor Issues",
  "Investor Conferences",
  "Earnings Reports",
  "Delisting Actions",
  "IPO Launches",
  "Name Changes",
  "Offer for Sale",
  "US FDA Inspections",
  "Earnings Calls",
  "Other Situations",
];
