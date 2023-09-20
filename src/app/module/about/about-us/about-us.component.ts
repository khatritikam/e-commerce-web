import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit{

images = [
  {
    imageSrc:'./../../../../assets/farm1.jpg',
    imageAlt:'farm1'
  },
  {
    imageSrc:'./../../../../assets/farm1.webp',
    imageAlt:'farm2'
  },
  {
    imageSrc:'./../../../../assets/farm3.jpg',
    imageAlt:'farm3'
  },
  {
    imageSrc:'./../../../../assets/farm4.webp',
    imageAlt:'farm4'
  },
  {
    imageSrc:'./../../../../assets/farm5.jpg',
    imageAlt:'farm5'
  },
  {
    imageSrc:'./../../../../assets/farm6.avif',
    imageAlt:'farm6'
  },
  {
    imageSrc:'/../../../../assets//farm7.jpg',
    imageAlt:'farm7'
  }
]

leaders = [
  {
    leaderImgSrc:'./../../../../assets/leader1.jpg',
    leaderName:'Michael',
    leaderPost:'chief executive officer, orgFarm group'
  },
  {
    leaderImgSrc:'./../../../../assets/leader2.jpg',
    leaderName:'William',
    leaderPost:'chief financial officer,orgFarm group'
  },
  {
    leaderImgSrc:'./../../../../assets/leader3.avif',
    leaderName:'David',
    leaderPost:'chief product and technology officer,orgFarm group'
  },
  {
    leaderImgSrc:'./../../../../assets/leader4.jpg',
    leaderName:'Elizabeth ',
    leaderPost:'chief people officer,orgFarm group'
  },
  {
    leaderImgSrc:'./../../../../assets/leader5.jpg',
    leaderName:'Charlotte ',
    leaderPost:'chief corporate affairs officer,orgFarm group'
  },
  {
    leaderImgSrc:'/../../../../assets/leader6.jpg',
    leaderName:'James',
    leaderPost:'chief marketing officer,orgFarm group'
  },
]
 
 constructor(){}

 ngOnInit(): void {
   
 }

  
}
