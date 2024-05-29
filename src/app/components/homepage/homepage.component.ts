import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent{

  AnimatedSplashScreenArray:any=[
    {
      "sideImage":"./assets/home/Section1/bat.svg",
      "centerbackgroundImage":"./assets/home/Section1/cricket ball.svg",
      "centerImage":"./assets/home/Section1/cricket man.svg",
      "bottomimage":"./assets/home/Section1/bats.svg"

    },{
      "sideImage":"./assets/home/Section1/sidefootball.svg",
      "centerbackgroundImage":"./assets/home/Section1/Football.svg",
      "centerImage":"./assets/home/Section1/Soccer man.svg",
      "bottomimage":"./assets/home/Section1/goal post.svg"
    },{
      "sideImage":"./assets/home/Section1/badminton.svg",
      "centerbackgroundImage":"./assets/home/Section1/badminton racket.svg",
      "centerImage":"./assets/home/Section1/badminton man.svg",
      "bottomimage":"./assets/home/Section1/rackets.svg"
    }
  ]

  AnimatedObject:any={};
  IteratedCount=0;
  ngOnInit(): void {
    const source=interval(2000);
    source.subscribe(()=>{
      if(this.IteratedCount==2){
            this.IteratedCount=0;
          }
      this.AnimatedObject=this.AnimatedSplashScreenArray[this.IteratedCount++];
      console.log(this.AnimatedObject)
    })
  }


}
