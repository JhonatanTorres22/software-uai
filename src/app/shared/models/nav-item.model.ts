export interface NavItem {
  label: string;
  icon: string;
  route?: string;
  badge?: number | string;
  section?: string;
  items?: NavItem[];
}
