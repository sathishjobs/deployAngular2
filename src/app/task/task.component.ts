import { Component, OnInit ,Input} from '@angular/core';
import { Subscription } from "rxjs/Rx";
import { FormGroup, 
         FormControl, 
         Validators, 
         FormBuilder } from "@angular/forms";
import { ImageResult,ResizeOptions } from "ng2-imageupload";
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
    taskForm: FormGroup;
      @Input() item;

  constructor() { 
    
  }

  ngOnInit() {
  }

  src: string = "";
    resizeOptions: ResizeOptions = {
        resizeMaxHeight: 128,
        resizeMaxWidth: 128
    };

  error:string="";

  allowedExt = ['jpg', 'jpeg', 'png'];
 

    selected(imageResult) {
        console.log(imageResult);
        if(imageResult.error)
        {
          console.log(imageResult.error);
        }
        if(imageResult.file.type=="image/jpeg" || imageResult.file.type=="image/png" || imageResult.file.type=="image/jpg" )
        {
          this.src = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;

          this.error="";
        } else {
          this.src="";
          this.error="This is not image format. Support file types:jpeg/jpg/png";
        }
    }

}
