import { Component, OnInit } from '@angular/core';
import { AbonadosService, Abonado } from '../../services/abonados.service';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AbonadoFormComponent } from '../../components/abonado-form/abonado-form';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-abonados',
  imports: [CommonModule,
     MatTableModule,
  MatCardModule,
  MatDividerModule,
  MatIconModule,
  MatButtonModule,
  MatDialogModule,
  FormsModule,
  ReactiveFormsModule,
  MatFormField,
  MatInputModule,
  MatLabel
  ],
  templateUrl: './abonados.html',
  styleUrl: './abonados.scss',
  
})
export class AbonadosComponents implements OnInit {

  dataSource = new MatTableDataSource<Abonado>();


  displayedColumns: string[] = ['nombre', 'dni', 'tipo', 'fechaNacimiento', 'foto','acciones'];

  constructor(private abonadosService: AbonadosService,
      private dialog: MatDialog
  ) {}

  ngOnInit(): void {
     this.abonadosService.getAbonados().subscribe({
      next: (data) => {
        console.log('✅ Abonados recibidos:', data);
        this.dataSource.data = data;
      },
      error: (err) => {
        console.error('❌ Error al obtener los abonados:', err);
      }
    });

    this.dataSource.filterPredicate = (data: Abonado, filter: string) => {
      return (
        data.nombre?.toLowerCase().includes(filter) ||
        data.dni?.toLowerCase().includes(filter) ||
        data.tipo?.toLowerCase().includes(filter)
      );
    };


  }

  abrirDialogoNuevoAbonado(): void {
  const dialogRef = this.dialog.open(AbonadoFormComponent, {
    width: '400px'
  });

  dialogRef.afterClosed().subscribe((result) => {
    if (result) {
      this.abonadosService.crearAbonado(result).subscribe(() => {
        this.ngOnInit(); // recargar lista
      });
    }
  });
}

aplicarFiltro(event: Event): void {
  const filtro = (event.target as HTMLInputElement).value.trim().toLowerCase();
  this.dataSource.filter = filtro;
}


eliminarAbonado(id: string): void {
  if (confirm('¿Estás seguro de que deseas eliminar este abonado?')) {
    this.abonadosService.eliminarAbonado(id).subscribe(() => {
      this.ngOnInit(); // recarga la lista
    });
  }}

  editarAbonado(abonado: Abonado): void {
  const dialogRef = this.dialog.open(AbonadoFormComponent, {
    width: '400px',
    data: abonado
  });

  dialogRef.afterClosed().subscribe((result: Abonado) => {
  if (result) {
    if (result.id) {
      this.abonadosService.actualizarAbonado(result.id, result).subscribe(() => {
        this.ngOnInit();
      });
    } else {
      this.abonadosService.crearAbonado(result).subscribe(() => {
        this.ngOnInit();
      });
    }
  }
});

}


}
