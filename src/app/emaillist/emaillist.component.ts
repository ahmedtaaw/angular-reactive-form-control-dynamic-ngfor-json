import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupName, FormBuilder, Validators, FormArray,AbstractControl, ValidatorFn } from '@angular/forms';
import {IEmaillist} from './emaillist'
import {EmaillistService} from './emaillist.service';
import {InlineEditorComponent} from 'ng2-inline-editor';
@Component({
  selector: 'app-emaillist',
  templateUrl: './emaillist.component.html',
  styleUrls: ['./emaillist.component.css']
})
export class EmaillistComponent implements OnInit {
  Imemberemails:IEmaillist[];
  membersForm:FormGroup;
  constructor(
    private _memberemailsService:EmaillistService,
    private fb: FormBuilder
  ) {
    this.membersForm=this.fb.group({
      memberDetails: this.fb.array([])
    });
  }

  ngOnInit() {
    this.Imemberemails=this._memberemailsService.membersJson;
    this.membersForm=this.fb.group({
      newEmail:'',
      memberDetails:this.fb.array(
        this.Imemberemails.map(x=>this.fb.group({
          newEmail:[x.memberemail]
        }))
      )
    });
    console.log(this.membersForm);
  }

}
