import { Component } from '@angular/core';
import { NavController, NavParams, reorderArray,ViewController } from 'ionic-angular';
import { MapPage } from '../map/map';
@Component({
  selector: 'page-THW',
  templateUrl: 'THW.html'
})
export class THWPage { 
public firstParam;
public secondParam;
 SzenarioNameliste=[];
 groceries: Array<{title: string, index: string}>;
  selectedItem: any;
  icons: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private view : ViewController) {
   


  }

  modelclose()
{
   this.view.dismiss();
}


SelectItem(image)
{
  const data=image;
  this.view.dismiss(data);
}
}
