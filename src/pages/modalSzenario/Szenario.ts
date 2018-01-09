import { Component ,ViewChild,ElementRef } from '@angular/core';
import { NavController, NavParams, reorderArray,ViewController } from 'ionic-angular';
import { MapPage } from '../map/map';
import {Geolocation} from '@ionic-native/geolocation';
declare var google;

@Component({
  selector: 'page-Szenario',
  templateUrl: 'Szenario.html'
})
export class SzenarioPage { 

@ViewChild('map') mapElement: ElementRef;
  map: any;
public firstParam;
public secondParam;
 SzenarioNameliste=[];
 Szenario=[];
 groceries: Array<{title: string, index: string}>;
  selectedItem: any;
  icons: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private view : ViewController) {
 //  this.loadMap();
 //this.Suche();
/*this.SzenarioNameliste=navParams.get("firstPassed");
if(this.SzenarioNameliste.length!=0){
this.Szenario=navParams.get("secondPassed");
this.groceries = [];
   for (var i = 0; i < this.SzenarioNameliste.length; i++) {
 //  this.groceries.push(this.SzenarioNameliste[i] );
   this.groceries.push({
        title: this.SzenarioNameliste[i],
        index: i.toString()
      });
  }

}
 // this.selectedItem = navParams.get('item');
*/
  }
 modelclose()
{
   this.view.dismiss();
}
 

ionViewDidLoad(){
this.groceries=null;
  this.SzenarioNameliste= this.navParams.get('data');
  if(this.SzenarioNameliste.length!=null){
  this.groceries = [];
 for (var i = 0; i < this.SzenarioNameliste.length; i++) {
  // this.groceries.push(this.SzenarioNameliste[i] );
   this.groceries.push({
       title: this.SzenarioNameliste[i],
       index: i.toString()
     });
 }
 }
}
  /*    itemTapped( item) {
    // That's right, we're pushing to ourselves!
   // this.navCtrl.push(FeuerwehrPage, {
    //  item: item
  // });
    this.navCtrl.push(HomePage,{
    firstPassed:item.title,
    secondPassed:this.Szenario[item.title]
  })
  // this.firstParam=item.title;
  }

*/
 
SelectItem(item)
{
  const data=item.title;
  this.view.dismiss(data);
  console.log(data)
}
 

}
