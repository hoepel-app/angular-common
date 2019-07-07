import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatDialogModule, MatIconModule } from '@angular/material';
import { ConfirmDownloadDialogComponent } from './confirm-download-dialog/confirm-download-dialog.component';

@NgModule({
  declarations: [ConfirmDownloadDialogComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule],
  exports: [ConfirmDownloadDialogComponent]
})
export class ConfirmDownloadDialogModule {}
