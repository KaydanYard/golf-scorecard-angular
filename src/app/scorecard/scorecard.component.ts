import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { GolfCourses } from '../interfaces/golf-courses';
// _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-

const coursesObj: GolfCourses[] = [];

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.scss']
})

export class ScorecardComponent implements OnInit {
  dataSource;
  courses = coursesObj;
  displayedColumns: string[] = ['hole', 'tee_type', 'par', 'yards', 'playerOne', 'playerTwo', 'playerThree', 'playerFour'];

  selectedCourse: string = '';
  selectedTeeType: string = '';
  teeTypeNum;

  constructor(private api: ApiService) {

  }

  ngOnInit(): void {
    this.api.getCourses(this.selectedCourse).subscribe(data => {
      console.warn(data);
    })
  }

  courseSelected(event: any) {
    this.api.getCourses(event.value).subscribe((data: any) => {
      console.log(data.data.holes)
      this.dataSource = data.data.holes
    });
    this.selectedCourse = event.value;
    console.log(this.selectedCourse);
  }

  teeTypeSelected(event: any) {
    this.teeTypeNum = null;
    this.selectedTeeType = event.value;
    if (this.selectedTeeType == 'pro') {
      this.teeTypeNum = 0;
    } else if (this.selectedTeeType == 'champion') {
      this.teeTypeNum = 1;
    } else if (this.selectedTeeType == 'men') {
      this.teeTypeNum = 2;
    } else {
      this.teeTypeNum = 3;
    }
  }
}