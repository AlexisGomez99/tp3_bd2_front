import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { Marca } from 'src/app/models/marca';
import { Producto } from 'src/app/models/producto';
import { CategoriaService } from 'src/app/service/categoria.service';
import { MarcaService } from 'src/app/service/marca.service';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-info-prod',
  templateUrl: './info-prod.component.html',
  styleUrls: ['./info-prod.component.css']
})
export class InfoProdComponent implements OnInit {
  producto: Producto = new Producto(); // Inicializa el producto como un nuevo objeto.

  categorias: Categoria[] = [];
  marcas: Marca[] = [];
  productForm: FormGroup;
  categoria: Categoria;
  marca: Marca;

  constructor(
    private router: Router,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private productoService: ProductoService,
    private fb: FormBuilder,
    private categoriaService: CategoriaService,
    private marcaService: MarcaService,
  ) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      nombre: [undefined, [Validators.required, Validators.min(3) ]],
      precio: [undefined, [Validators.required, Validators.min(1)]],
      idMarca: [undefined, [Validators.required]],
      idCategoria: [undefined, [Validators.required]],
    });

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.productoService.findById("1").subscribe(res => {
        this.producto = res;
        this.productForm.get('nombre').setValue(this.producto.descripcion);
        this.productForm.get('precio').setValue(this.producto.precio);
        this.productForm.get('idMarca').setValue(this.producto.marca.id);
        this.productForm.get('idCategoria').setValue(this.producto.categoria.id);
        this.categoria = this.producto.categoria;
        this.marca = this.producto.marca;
      })

      this.categoriaService.getCategorias().subscribe(res => {
        console.log(res);
        this.categorias = res;
      })

      this.marcaService.getMarcas().subscribe(res => {
        this.marcas = res
      })


      

    });

  }
  changeCategoria(categoria: Categoria):void {
    this.categoria=categoria;
  }

  changeMarca(marca: Marca): void{
    this.marca=marca;
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  saveProduct():void{

    this.producto.categoria = this.categoria;
    this.producto.descripcion = this.productForm.get('nombre').value;
    this.producto.precio = this.productForm.get('precio').value;
    this.producto.marca = this.marca;

    this.productoService.update(this.producto).subscribe(
      (res: any) => { 
        this.openSnackBar('Se realizo el cambio',res);
        this.redirectToList();
        console.log(this.producto);
      },
        (error: any) => {
          // Manejar el error
        if (error.error && error.error.message) {
        // Si el servidor proporciona un mensaje de error, lo mostramos en el snackbar
        this.openSnackBar('Error al realizar la edicion', error.error.message);
       } else {
        // Si no hay un mensaje de error específico del servidor, mostramos un mensaje genérico
        this.openSnackBar('Error al realizar la edicion', 'Hubo un problema al procesar la edicion.');
        console.log(error);
        }
      });

  }

  redirectToList():void{
    this.router.navigate(['/productos/listar']).then();
  }


  

  
}
