import { Component, inject, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { UiIconButton } from "../ui-icon-button/ui-icon-button";

@Component({
  selector: 'app-ui-modal',
  imports: [UiIconButton],
  templateUrl: './ui-modal.html',
  styleUrl: './ui-modal.scss',
})
export class UiModal {

  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  private ref = inject(DynamicDialogRef);
  private config = inject(DynamicDialogConfig);

  title = '';
  component: any;
  componentRef: any;

  ngOnInit() {
    this.title = this.config.data?.title || '';
    this.component = this.config.data?.component;

    this.componentRef = this.container.createComponent(this.component);

    // pasar data al hijo
    if (this.config.data?.payload) {
      Object.assign(this.componentRef.instance, this.config.data.payload);
    }
  }

  close() {
    this.ref.close(null);
  }

  submit() {
    if (this.componentRef.instance.submit) {
      const result = this.componentRef.instance.submit();
      this.ref.close(result);
    } else {
      this.ref.close(true);
    }
  }
}
