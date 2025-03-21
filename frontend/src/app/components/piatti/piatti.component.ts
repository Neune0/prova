import { Component } from '@angular/core';
import { PiattiService } from '../../services/piatti.service';
import { CommonModule } from '@angular/common';
import { Piatto } from '../../models/Piatto';

@Component({
  selector: 'app-piatti',
  imports: [CommonModule],
  templateUrl: './piatti.component.html',
  styleUrl: './piatti.component.css'
})
export class PiattiComponent {
  // devo farmi l'import del servizio e mappare
  piatti: Piatto[] = [];
  loading: boolean = false;
  error: string | null = null;
  constructor(private piattiService: PiattiService) { }

  ngOnInit(): void {
    this.caricaPiatti();
  }

  caricaPiatti(): void {
    this.loading = true;
    this.error = null;
    
    this.piattiService.getPiatti().subscribe({
      next: (data) => {
        this.piatti = data.map(item => new Piatto(
          item.id,
          item.nome,
          item.descrizione,
          item.prezzo,
          item.categoria
        ));
        this.loading = false;
      },
      error: (err) => {
        console.error('Errore durante il caricamento dei piatti:', err);
        this.error = 'Si è verificato un errore durante il caricamento dei piatti.';
        this.loading = false;
      }
    });
  }

  eliminaPiatto(id: number): void {
    
      this.piattiService.deletePiatto(id).subscribe({
        next: () => {
          this.piatti = this.piatti.filter(piatto => piatto.id !== id);
        }});
    }
}
