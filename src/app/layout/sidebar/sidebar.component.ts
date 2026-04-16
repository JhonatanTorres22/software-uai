import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLinkActive, RouterModule } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';
import { BadgeModule } from 'primeng/badge';
import { LayoutService } from '../../shared/models/layout.service';
import { NavItem } from '../../shared/models/nav-item.model';
import { ImageModule } from 'primeng/image';
import { AuthenticatedSignal } from '@/authenticated/domain/signals/authenticated.signal';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLinkActive, TooltipModule, BadgeModule, ImageModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  readonly layoutService = inject(LayoutService);
  private readonly authenticatedSignal = inject(AuthenticatedSignal);
  private readonly router = inject(Router);

  readonly displayName = this.authenticatedSignal.displayName;
  readonly displayRole = this.authenticatedSignal.displayRole;
  readonly branding = this.authenticatedSignal.branding;
  readonly expandedMenuKeys = signal<string[]>([]);
  readonly avatarInitials = computed(() => {
    const fullName = this.displayName()?.trim();

    if (!fullName) {
      return 'US';
    }

    return fullName
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part.charAt(0).toUpperCase())
      .join('');
  });

  readonly navItems = computed<NavItem[]>(() => {
    const items = this.authenticatedSignal.navItems();
    if (items.length > 0) {
      return items;
    }

    const baseRoute = `/${this.authenticatedSignal.selectedModuleRoute()}`;
    return [
      { label: 'Dashboard', icon: 'pi pi-home', route: `${baseRoute}` },
      { label: 'Cerrar sesión', icon: 'pi pi-sign-out', route: '/logout' },
    ];
  });

  onNavItemClick(item: NavItem, event: MouseEvent): void {
    if (this.hasChildren(item)) {
      event.preventDefault();
      this.toggleItem(item);
      return;
    }

    if (item.route !== '/logout') {
      this.handleLeafItemClick();
      return;
    }

    event.preventDefault();
    this.authenticatedSignal.clearAllState();
    void this.router.navigate(['/auth']);
  }

  handleLeafItemClick(): void {
    if (typeof window !== 'undefined' && window.innerWidth < 992) {
      this.layoutService.collapseSidebar();
    }
  }

  hasChildren(item: NavItem): boolean {
    return Array.isArray(item.items) && item.items.length > 0;
  }

  isExpanded(item: NavItem): boolean {
    return this.expandedMenuKeys().includes(this.getItemKey(item));
  }

  isLogoutItem(item: NavItem): boolean {
    return item.route === '/logout';
  }

  private toggleItem(item: NavItem): void {
    const itemKey = this.getItemKey(item);

    this.expandedMenuKeys.update((currentKeys) =>
      currentKeys.includes(itemKey)
        ? currentKeys.filter((key) => key !== itemKey)
        : [...currentKeys, itemKey]
    );
  }

  private getItemKey(item: NavItem): string {
    return item.route ?? item.label;
  }
}
