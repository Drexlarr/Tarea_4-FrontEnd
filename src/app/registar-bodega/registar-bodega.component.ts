import { Component, OnInit } from '@angular/core';
import { BodegaService } from '../bodega.service';
import { Router } from '@angular/router';
import { Bodega } from '../model/bodega';
import { Categoria } from '../model/categoria';
import { Observable } from 'rxjs';
import { CategoriaService } from '../categoria.service';


@Component({
  selector: 'app-registar-bodega',
  templateUrl: './registar-bodega.component.html',
  styleUrls: ['./registar-bodega.component.css']
})
export class RegistarBodegaComponent implements OnInit {

  bodega = new Bodega()
  cat: Observable<Categoria[]>

  constructor(private bodegaService:BodegaService,private categoriaservicio: CategoriaService, private router:Router) { }

  ngOnInit(): void {
    this.getCategoria();
  }

  save(){
    this.bodegaService.registrarBodega(this.bodega).subscribe(
      data => this.router.navigate(["/inicio"])
    );
  }

  getCategoria(){
    this.categoriaservicio.obtenerCategoria().subscribe(
      data => this.cat = data
    );
  }

}
