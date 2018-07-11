import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Form} from '@angular/forms';
import {DataBearerService} from '../data-bearer.service';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  commentForm: FormGroup;
  constructor(private databearer: DataBearerService) { }

  ngOnInit() {
      this.commentForm = new FormGroup({
          Name: new FormControl(),
          Comment: new FormControl()
      });
  }
    addNewComment() {
      this.databearer
    }
}
