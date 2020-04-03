import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {

  numberOfLikes: number = 0;
  likeButtonClick(){
    this.numberOfLikes++;
  }

  
  numberOfDislikes: number =0;
    disLikeButtonClick(){
      this.numberOfDislikes++;
    }

  constructor() { }

  ngOnInit(): void {
  }

}
