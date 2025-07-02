import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-abonado-form',
  templateUrl: './abonado-form.html',
  styleUrls: ['./abonado-form.scss'],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class AbonadoFormComponent {
  form: FormGroup;
abonadoId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AbonadoFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.abonadoId = data?.id || null;
    this.form = this.fb.group({
      nombre: [data?.nombre || '', Validators.required],
      dni: [data?.dni || '', Validators.required],
      tipo: [data?.tipo || ''],
      fechaNacimiento: [data?.fechaNacimiento || ''],
      direccion: [data?.direccion || ''],
      fotoUrl: [data?.fotoUrl || '']
    });
  }

  submit() {
 if (this.form.valid) {
    const abonado = this.form.value;
    if (this.abonadoId) {
      abonado.id = this.abonadoId; // 👈 incluye el id si es edición
    }
    this.dialogRef.close(abonado);
  }
  }

  cancelar() {
    this.dialogRef.close();
  }
}
