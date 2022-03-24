import { Component } from '@angular/core';
import { StatusBarInfo } from '@capacitor/status-bar';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Produtos', url: '/produtos', icon: 'fast-food' },
    { title: 'Categorias', url: '/categorias', icon: 'list' },
    { title: 'Carrinho', url: '/carrinho', icon: 'cart' },
  ];
  constructor(
    private platform: Platform,
    //private splashScreen: SplashScreen,
    //private satatusBar: StatusBar
  ) {}
}
