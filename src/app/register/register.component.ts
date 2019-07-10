import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { IMyDpOptions } from 'mydatepicker';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  disabled = false;
  showFilter = false;
  limitSelection = false;
  states: any = [];
  selectedItems: any = [];
  dropdownSettings: any = {};
  myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'yyyy-mm-dd',
    disableSince: { year: (new Date()).getFullYear() - 18, month: new Date().getMonth() - 1, day: new Date().getDay() },
    // disableUntil: {year: 2001, month: 6, day: 1},

  };


  constructor(private fb: FormBuilder) { }
  registerform: FormGroup;
  date: any;

  ngOnInit() {
    this.registerform = this.fb.group({
      name: new FormControl({ value: '', disabled: false }, [Validators.required, Validators.pattern('[A-Za-z]{1,20}')]),
      dob: new FormControl({ value: '', disabled: false }, [Validators.required]),
      // dob: [null, Validators.required ],
      num: new FormControl({ value: '', disabled: false }, [Validators.required, Validators.pattern('[0-9]{10}')]),
      // tslint:disable-next-line: max-line-length
      email: new FormControl({ value: '', disabled: false }, [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      state: new FormControl({ value: '', disabled: true }, [Validators.required]),
      gender: new FormControl({ value: '', disabled: false }, [Validators.required]),
      check: new FormControl({ value: '', disabled: false }, [Validators.required])
    });

    this.states = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      // selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  setDate() {
    // Set today date using the patchValue function
    this.date = new Date();
    // tslint:disable-next-line: align
    this.registerform.patchValue({
      myDate: {
        date: {
          year: this.date.getFullYear(),
          month: this.date.getMonth() + 1,
          day: this.date.getDate()
        }
      }
    });
  }

  clearDate(): void {
    // Clear the date using the patchValue function
    this.registerform.patchValue({ myDate: null });
  }

}
