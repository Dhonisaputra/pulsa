import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { CStoragesComponent } from '../../components/c-storages/c-storages';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    public barChartOptions:any = {
      scaleShowVerticalLines: false,
      responsive: true
    };
    public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    public barChartType:string = 'line';
    public barChartLegend:boolean = true;

    public barChartData:any[] = [
      {data: [65, 59, 80, 81, 56, 55, 40], label: 'Jumlah pembelian'},
    ];

    // events
    public chartClicked(e:any):void {
      console.log(e);
    }

    public chartHovered(e:any):void {
      console.log(e);
    }

    public randomize():void {
      // Only Change 3 values
      let data = [
        Math.round(Math.random() * 100),
        59,
        80, 
        (Math.random() * 100),
        56,
        (Math.random() * 100),
        40];
      let clone = JSON.parse(JSON.stringify(this.barChartData));
      clone[0].data = data;
      this.barChartData = clone;
      /**
       * (My guess), for Angular to recognize the change in the dataset
       * it has to change the dataset variable directly,
       * so one way around it, is to clone the data, change it and then
       * assign it;
       */
    }
    
    public doughnutChartLabels:string[] = ['5000', '10000', '15000'];
    public doughnutChartData:number[] = [350, 450, 100];
    public doughnutChartType:string = 'doughnut';


    
  constructor(public navCtrl: NavController, private nativeStorage: NativeStorage) {
      this.nativeStorage.setItem('storages', {isInstalled: false})
    .then(
      () => console.log('Stored item!'),
      error => console.error('Error storing item', error)
    );
      this.nativeStorage.getItem('storages')
      .then(function(data){
          console.log(data)
      },
        function(error){

         console.error(error)
      }
      );
  }
    
   

}
