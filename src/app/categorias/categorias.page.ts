import { ToastController } from '@ionic/angular';
import { Post } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  lista : any = [];
  url_site_img : string;
  limit : number = 10;
  start : number = 0;
  total_itens : number = 0;

  constructor( private router: Router, private provider:Post, public toast: ToastController) { }

  ngOnInit() {
  }

  logout(){
    //this.storage.clear();
    this.router.navigate(['/login']);
  }


  
  ionViewWillEnter(){
    this.lista = [];
    this.start = 0;   
    this.listarProdutos();
    this.url_site_img = this.provider.url_site_img_cat; 
  }




  listarProdutos(){
    return new Promise(resolve => {

    let dados = {
      requisicao : 'listar-cat',
      limit : this.limit,
      start : this.start      
      };

      this.provider.dadosApi(dados, 'apiProdutos.php').subscribe(data => {

        if(data['result'] == '0') {
          this.ionViewWillEnter();
        }else{
          this.lista = [];
          for(let item of data['result']){
            this.lista.push(item);
            this.total_itens = data['total'];
          }
        }
         
        resolve(true);
        
    });

  });
    
  }



  produtos(){
    this.router.navigate(['/produtos']);
  }


  verProdutos(id){
    this.router.navigate(['/produtos/' + id ]);
  }



loadData(event) {

  this.start += this.limit;

  setTimeout(() => {
    this.listarProdutos().then(()=>{ 
      event.target.complete();
     });
   
  }, 3000);
  
}


}
