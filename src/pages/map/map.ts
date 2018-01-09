
import { Component, ViewChild, ElementRef } from '@angular/core'; // Added  ViewChild, ElementRef
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { NavController, AlertController, ModalController , Modal} from 'ionic-angular';
import { trigger, state, style, transition, animate } from '@angular/animations'
import {Geolocation} from "@ionic-native/geolocation";
import { ModalpagePage } from "../modalpage/modalpage";
import { FeuerwehrPage } from "../Feuerwehr/Feuerwehr";
import { PolizeiPage } from "../Polizei/Polizei";
import { THWPage } from "../THW/THW";
import { RettungsdienstPage } from "../Rettungsdienst/Rettungsdienst";
import { SzenarioPage } from "../modalSzenario/Szenario";

declare var google;
@Component({
    selector: 'page-map',
  templateUrl: 'map.html',
  animations: [
    trigger('myvisibility', [
      state('visible', style({
        opacity: 1
      })),
      state('invisible', style({
        opacity: 0
      })),
      transition('* => *', animate('.5s'))
    ])
  ],
  providers: [DragulaService]
})
export class MapPage {
  
  @ViewChild('map') mapElement: ElementRef; // Added
   Polyline=[];
 Polylineliste=[];
  map: any;
 allMarkers = [];
 Szenario =[];
 SzenarioName :any;
 SzenarioNameliste=[];
 Destination :any ;
 

  testRadioOpen: boolean;
  testRadioResult: any;
  visibleState = 'visible';
   image: any = "http://osagespringsvineyard.com/files/5413/5279/0441/google-map-pointer.png";
 visible= false;
  constructor(public navCtrl: NavController , private dragulaService: DragulaService,public alertCtrl:
   AlertController,public geolocation: Geolocation , private modalCtrl : ModalController, private modal: ModalController) {
     this.visible = false;
     const that=this;

setTimeout(function () {
  that.loadMap();
},2000)
  }

 
 loadMap(){
    this.geolocation.getCurrentPosition().then((position) => {
 
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
   let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
     draggable: true,
     //icon: this.image,
    position: this.map.getCenter()
  });
  
   this.allMarkers.push(marker);
  let content = "<h4>der aktuelle Zustand </h4>";           
  this.addInfoWindow(marker, content);
    }, (err) => {
      console.log(err);
    });
 
  }


addEvent()
{
  google.maps.event.clearListeners(this.map, 'click');
  google.maps.event.addListener(this.map, 'click', (event) => {
   
    this.addMarker(event.latLng, this.image);
       
  });
}

 addMarker(pos,img){
  let marker = new google.maps.Marker({
   map: this.map,
   animation: google.maps.Animation.DROP,
     draggable: true,
     icon: img,
    position: pos
  });
  
  this.allMarkers.push(marker);
  
}

addInfoWindow(marker, content){
  let infoWindow = new google.maps.InfoWindow({
    content: content
  });
  google.maps.event.addListener(marker, 'click', () => {
    infoWindow.open(this.map, marker);
  });
}

Feuerwehr()
{
 let myModel:Modal = this.modal.create(FeuerwehrPage);
 myModel.present();
 myModel.onDidDismiss((data)=>{
   this.image=data;
   this.addEvent();
 });
}
Polizei()
{
 let myModel:Modal = this.modal.create(PolizeiPage);
 myModel.present();
 myModel.onDidDismiss((data)=>{
   this.image=data;
   this.addEvent();
 });
}
THW()
{
   let myModel:Modal = this.modal.create(THWPage);
 myModel.present();
 myModel.onDidDismiss((data)=>{
   this.image=data;
   this.addEvent();
 });
}
Rettungsdienst()
{
     let myModel:Modal = this.modal.create(RettungsdienstPage);
 myModel.present();
 myModel.onDidDismiss((data)=>{
 this.image=data;
 this.addEvent();
 });

}


SzenarioModel()
{ 

 let myModel:Modal = this.modal.create(SzenarioPage,{data:this.SzenarioNameliste});
 myModel.present();
 myModel.onDidDismiss((data)=>{
  // this.image=data;
 console.log(data);
 this.SzenarioZeigen(data);
 
 });
}



undoLastMarker() {
    let marker = this.allMarkers.pop()
    if (marker) {
      marker.setMap(null);
    }
  }

   SzenarioSpeichern() {
  // this.SzenarioNameliste.push(this.SzenarioName);
  this.SzenarioName=null;
  var start = this.Szenario.length;
    this.Szenario[start]=[];
    this.Polylineliste[start]=[];
  for (var i = 0; i < this.Polyline.length; i++) {
        this.Polylineliste[start][i]=this.Polyline[i];
  }

  for (var i = 0; i < this.allMarkers.length; i++) {

        this.Szenario[start][i]=this.allMarkers[i];

  }
  this.allMarkers.splice(0,this.allMarkers.length);
   this.Polyline.splice(0,this.Polyline.length);
  this.loadMap();
  
  }

SzenarioZeigen(SzenarioName) {
  var i;
   let markerlist =[];
   let Poli=[];
  let index=this.SzenarioNameliste.indexOf(SzenarioName);
if(index!=-1){
Poli=this.Polylineliste[index];
 markerlist=this.Szenario[index];
 this.ZeigenPoly(Poli);
   let latLng = new google.maps.LatLng(markerlist[0].getPosition().lat() ,  this.allMarkers[0].getPosition().lng());
 
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
for (i =1; i < markerlist.length; i++) {
      let marker = new google.maps.Marker({
          position: markerlist[i].getPosition(),   
           draggable: true,
           icon: markerlist[i].icon,
           animation: google.maps.Animation.DROP,
          map: this.map
      });
}   
    var  poly = new google.maps.Polyline({
          path: Poli,
          strokeColor: '#000000',
          strokeOpacity: 1.0,
          strokeWeight: 5,
           fillColor: '#FF0000',
           fillOpacity: 1,
            clickable: false,
            editable: true,
            zIndex: 1
        });
        poly.setMap(this.map);

}
      }

addPoly()
{
// this.lng="hhhhh";
  var poly;
  var  path;
google.maps.event.clearListeners(this.map, 'click');
    poly = new google.maps.Polyline({
    
          strokeColor: '#000000',
          strokeOpacity: 1.0,
          strokeWeight: 5,
           fillColor: '#FF0000',
           fillOpacity: 1,
            clickable: false,
            editable: true,
            zIndex: 1
        });
        poly.setMap(this.map);

        // Add a listener for the click event
        google.maps.event.addListener(this.map, 'click', (event) => {
        addLatLng(event);
         this.Polyline.push(event.latLng);
       
           });

      // Handles click events on a map, and adds a new point to the Polyline.
      function addLatLng(event) {
        path = poly.getPath();
        path.push(event.latLng);


     
}

}
ZeigenPoly(pol)
{
  
 var  poly = new google.maps.Polyline({
          path: pol,
          strokeColor: '#000000',
          strokeOpacity: 1.0,
          strokeWeight: 5,
           fillColor: '#FF0000',
           fillOpacity: 1,
            clickable: false,
            editable: true,
            zIndex: 1
        });
        poly.setMap(this.map);
}


Suche()
{ var Pos;
 if(this.Destination!=null){
   var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 52.520008, lng: 13.404954},
         	
          zoom: 15,    
          
      //   mapTypeId: google.maps.MapTypeId.HYBRID
        });
    
  var geocoder = new google.maps.Geocoder();
       var address = this.Destination;
        geocoder.geocode({'address': address}, function(results, status) {
          if (status === 'OK') {
            Pos=results[0].geometry.location;
            map.setCenter(Pos);
             var marker = new google.maps.Marker({
             map: map,
              position: results[0].geometry.location
            });
           //  that.allMarkers.push(marker);
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        }); 

this.map=map;
     }
}


toggle() {
   this.visible = !this.visible;
  }
// function  for  show und Hide Picture
     toggleVisible() {
    this.visibleState = (this.visibleState == 'visible') ? 'invisible' : 'visible';
  }
  showRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Möchtest du ein neues Szenario starten?');

    alert.addInput({
      type: 'image',
    
      value: 'Bitte beachte. Alle deine jetzigen Daten auf der Karte werden dabei gelöscht.',
 
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });
    alert.present();
  }



   presentModal() {
// this.Szenario.push(this.allMarkers);
this.allMarkers.splice(0,this.allMarkers.length);
this.Polyline.splice(0,this.Polyline.length);
this.loadMap();
let modal = this.modalCtrl.create(ModalpagePage)
modal.present();
modal.onDidDismiss((data)=>{
this.SzenarioNameliste.push(data);

    });
  }
}
