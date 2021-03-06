import { Component, VERSION } from "@angular/core";
import { NgForm } from "@angular/forms";

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
    file: ""
  };
  file: any;
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
}
