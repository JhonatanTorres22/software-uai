import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LayoutService {
  sidebarCollapsed = signal(typeof window !== 'undefined' ? window.innerWidth < 992 : false);

  toggleSidebar(): void {
    this.sidebarCollapsed.update((value) => !value);
  }

  collapseSidebar(): void {
    this.sidebarCollapsed.set(true);
  }

  expandSidebar(): void {
    this.sidebarCollapsed.set(false);
  }
}
