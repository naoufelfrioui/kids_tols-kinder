import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-modalpage',
  templateUrl: 'modalpage.html',
})
export class ModalpagePage {

SzenarioName:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl :ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalpagePage');
  }
   dismiss() {
    this.viewCtrl.dismiss();
  }



addSzenario() {
  // this.SzenarioNameliste.push(this.SzenarioName);
  // this.Szenario.push(this.allMarkers);
  // this.allMarkers.splice(0,this.allMarkers.length);
  // this.Polyline.splice(0,this.Polyline.length);
  let data=this.SzenarioName;
  if(this.SzenarioName !=null){ 
    this.viewCtrl.dismiss(data);
  }
 
  console.log(this.SzenarioName);
}
}