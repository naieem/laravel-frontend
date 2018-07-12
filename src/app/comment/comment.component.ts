import {Component, OnInit, Input} from '@angular/core';
import {FormGroup, FormControl, Form} from '@angular/forms';
import {DataBearerService} from '../data-bearer.service';
@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
    commentForm: FormGroup;
    @Input() filmId: any;
    error: any;
    isSuccess = false;
    loading: boolean;
    constructor(private databearer: DataBearerService) {
    }

    ngOnInit() {

        this.commentForm = new FormGroup({
            Name: new FormControl(),
            Comment: new FormControl()
        });
    }

    addNewComment() {
        const commentObj = this.commentForm.value;
        commentObj.film_id = this.filmId;
        commentObj.created_at = new Date();
        this.loading = true;
        this.databearer.createComment(commentObj).subscribe((response: any) => {
            this.loading = false;
            if (response && response.status) {
                this.databearer.newCommentArrived.emit(commentObj);
                this.commentForm.reset();
                this.isSuccess = true;
            } else {
                this.isSuccess = false;
                this.error = response;
            }
        });
    }
}
