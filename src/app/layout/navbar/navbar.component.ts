import { Component, HostListener, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { LayoutService } from '../../shared/models/layout.service';
import { AuthenticatedSignal } from '@/authenticated/domain/signals/authenticated.signal';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, InputTextModule, TooltipModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  readonly layoutService = inject(LayoutService);
  private readonly authenticatedSignal = inject(AuthenticatedSignal);
  private readonly router = inject(Router);

  readonly displayName = this.authenticatedSignal.displayName;
  readonly displayRole = this.authenticatedSignal.displayRole;
  readonly branding = this.authenticatedSignal.branding;
  readonly userMenuOpen = signal(false);
  readonly passwordPanelOpen = signal(false);
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

  @HostListener('document:click')
  onDocumentClick(): void {
    this.userMenuOpen.set(false);
    this.passwordPanelOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.userMenuOpen.set(false);
    this.passwordPanelOpen.set(false);
  }

  toggleUserMenu(event: Event): void {
    event.stopPropagation();
    this.passwordPanelOpen.set(false);
    this.userMenuOpen.update((open) => !open);
  }

  openPasswordPanel(event: Event): void {
    event.stopPropagation();
    this.userMenuOpen.set(false);
    this.passwordPanelOpen.set(true);
  }

  closePasswordPanel(): void {
    this.passwordPanelOpen.set(false);
  }

  goToAccess(): void {
    this.passwordPanelOpen.set(false);
    this.authenticatedSignal.clearAllState();
    void this.router.navigate(['/auth']);
  }

  logout(event: Event): void {
    event.stopPropagation();
    this.userMenuOpen.set(false);
    this.passwordPanelOpen.set(false);
    this.authenticatedSignal.clearAllState();
    void this.router.navigate(['/auth']);
  }
}
