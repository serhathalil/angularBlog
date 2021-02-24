import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';
import { MyvalidationService } from 'src/app/services/myvalidation.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  commentForm:FormGroup;
  success:boolean;
  info:string;

  constructor(public commentService:CommentService, private route:ActivatedRoute, public myvalidationService:MyvalidationService) { }

  ngOnInit(): void {

    this.commentForm=new FormGroup({
      yorumAdSoyad:new FormControl("",Validators.required),
      yorumEmail:new FormControl("", Validators.required),
      yorumIcerik:new FormControl("",Validators.required),
      makaleid:new FormControl("")
    });
  }

  get getControls(){
    return this.commentForm.controls;
  }

  onSubmit(){
    if(this.commentForm.valid){

      let id= Number(this.route.snapshot.paramMap.get("id"));

      this.commentForm.controls.makaleid.setValue(id);

      this.commentService.addComment(this.commentForm.value).subscribe(data=>{
        this.success=true;
        this.info="Yorumunuz başarıyla eklenmiştir";

      },error=>{
        this.success=false;
        this.info="Bir hata oluştu, lütfen daha sonra tekrar deneyiniz";
      })
    }
  }


}
