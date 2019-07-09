import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ServiceService } from './../service.service';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss']
})
export class ChangeComponent implements OnInit {
 
  constructor(private fb: FormBuilder , private serv: ServiceService) { }
  change: FormGroup;
  oldp: any;
  password: any ;

  ngOnInit() {
    this.oldp = this.serv;
    console.log(this.oldp.pass );

    this.change = this.fb.group({
      old: new FormControl({ value: '', disabled: false }, [
        Validators.required
      ]),
      new: new FormControl({ value: '', disabled: false }, [
        Validators.required
      ])
    });
  }
  conform() {

    if (this.change.value.old === this.oldp.pass ) {
      this.password = true;

     }   else {
       this.password = false;
      }


  }

}
