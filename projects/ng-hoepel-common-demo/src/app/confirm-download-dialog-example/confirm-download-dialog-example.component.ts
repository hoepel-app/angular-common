import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-confirm-download-dialog-example',
  templateUrl: './confirm-download-dialog-example.component.html',
  styleUrls: ['./confirm-download-dialog-example.component.css']
})
export class ConfirmDownloadDialogExampleComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDownloadDialogExampleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { downloadUrl: string }
  ) {}

  ngOnInit() {}
}
