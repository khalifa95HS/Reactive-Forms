import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'valid-form',
  templateUrl: './valid-form.component.html',
  styleUrls: ['./valid-form.component.css']
})
export class ValidFormComponent implements OnInit {

  
  myForm:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email:['',[
        Validators.required,
        Validators.email
      ]],
      password:['', [
        Validators.required,
        Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')
      ]],
      age: [null,[
        Validators.required,
        Validators.min(2),
        Validators.maxLength(3),
        Validators.min(18),
        Validators.max(99)
      ]],
      agree: [false,[
        Validators.requiredTrue,
      ]]
    })
 }

 // get Email 
 get email(){
   return this.myForm.get('email');
 }

 get password(){
  return this.myForm.get('password');
}
get age(){
  return this.myForm.get('age');
}
get agree(){
  return this.myForm.get('agree');
}

}