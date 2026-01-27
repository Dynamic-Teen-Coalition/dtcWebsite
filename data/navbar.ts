export interface NavbarNavLinkItem {
  href: string;
  label: string;
  active?: boolean;
  description?: string;
}

export interface NavbarNavDropdownItem {
  label: string;
  items: NavbarNavLinkItem[];
  active?: boolean;
}

export type NavbarNavItem = NavbarNavLinkItem | NavbarNavDropdownItem;

export const isNavbarDropdownItem = (item: NavbarNavItem): item is NavbarNavDropdownItem =>
  (item as NavbarNavDropdownItem).items !== undefined;

export const markNavbarItemActive = (pathname: string, item: NavbarNavItem): NavbarNavItem => {
  if (isNavbarDropdownItem(item)) {
    const items = item.items.map((child) => ({
      ...child,
      active: child.active ?? pathname === child.href,
    }));
    const active = item.active ?? items.some((x) => x.active);
    return { ...item, items, active };
  }

  return { ...item, active: item.active ?? pathname === item.href };
};

export const flattenNavbarItems = (items: NavbarNavItem[]): NavbarNavLinkItem[] =>
  items.flatMap((item) => (isNavbarDropdownItem(item) ? item.items : [item]));

/**
 * Default DTC navbar structure (desktop dropdowns + mobile flattened).
 * `active` is computed from the current pathname.
 */
export const getDtcNavbarItems = (pathname: string): NavbarNavItem[] =>
  [
    { href: '/', label: 'Home' },
    {
      label: 'Programs',
      items: [
        { href: '/dgn', label: 'DGN Program', description: 'Digital Governance Network' },
        { href: '/certificates', label: 'Certificates', description: 'DTC Friends 26 Certificate' },
      ],
    },
    {
      label: 'Our Works',
      items: [
        { href: '/lifelong', label: 'Lifelong Model', description: '' },
        { href: '/uss', label: 'USS', description: 'Upstream Safety System' },

      ],
    },
    {
      label: 'About',
      items: [
        { href: '/leadership', label: 'Leadership', description: 'Meet the team' },
        { href: '/reports', label: 'Media', description: 'News, reports, and updates' },
      ],
    },
    { href: '/contact', label: 'Contact' },
  ].map((item) => markNavbarItemActive(pathname, item));

