import { Component, OnInit, Input, Pipe } from '@angular/core';
import {DataBearerService} from '../data-bearer.service';
@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  @Input() comments: any[];
  constructor(private databearer: DataBearerService) {
      this.databearer.newCommentArrived.subscribe((response: any) => {

          this.comments.push(response);
      });
  }
  ngOnInit() {
    console.log(this.comments);

  }

}
