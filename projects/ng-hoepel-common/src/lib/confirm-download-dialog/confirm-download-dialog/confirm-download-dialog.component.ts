import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'hoepel-confirm-download-dialog',
  templateUrl: './confirm-download-dialog.component.html',
  styleUrls: ['./confirm-download-dialog.component.scss']
})
export class ConfirmDownloadDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDownloadDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { downloadUrl: string }
  ) {}

  ngOnInit() {}
}
