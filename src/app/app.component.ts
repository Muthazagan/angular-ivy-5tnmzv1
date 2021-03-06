import { Component, VERSION } from "@angular/core";
import { NgForm } from "@angular/forms";
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  powers = ["Really Smart", "Super Flexible", "Weather Changer"];
  //hero = { name: "Dr.", alterEgo: "Dr. What", power: this.powers[0] };
  test = {
    name: "",
    email: "",
    alterEgo: "Dr. What",
    power: this.powers[0],
    mobile: "",
    file: [""]
  };
  SERVER_URL = "http://localhost:3000/upload";
  testForm: FormGroup;
  file: any;
  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) {}
  ngOnInit() {
    this.testForm = this.formBuilder.group({
      profile: [""]
    });
  }

  onSubmit(testForm: NgForm) {
    console.log(testForm.value.name); // { first: '', last: '' }
    console.log(testForm.value); // false
    alert("Form Submitted Successfully!..");
  }

  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.testForm.get("profile").setValue(file);
    }
  }
}
