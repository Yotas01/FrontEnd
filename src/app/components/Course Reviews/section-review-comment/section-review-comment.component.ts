import { Component, Input, OnInit } from '@angular/core';
import { SectionReview } from 'src/app/model/sectionReview/section-review';

@Component({
  selector: 'app-section-review-comment',
  templateUrl: './section-review-comment.component.html',
  styleUrls: ['./section-review-comment.component.css']
})
export class SectionReviewCommentComponent implements OnInit {

  @Input() sectionReview!: SectionReview;

  constructor() { }

  ngOnInit(): void {
  }

}
