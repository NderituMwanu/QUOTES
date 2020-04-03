import { Component, OnInit } from '@angular/core';
import { Goal } from '../quote';
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals:Goal[] = [
    new Goal(1, 'James; ','Never regret anything that made you smile','Mark Twain', new Date(2020,1,1)),
    new Goal(2,'John; ','Everything you can imagine is real.','Pablo Picasso', new Date(2020, 3,1)),
    
    
  ];

  toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }

    deleteGoal(isComplete, index){
      if (isComplete){
        let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)
        
        if (toDelete){
          this.goals.splice(index, 1)
        }
      }
    }

  constructor() { }

  ngOnInit(): void {
  }

}
