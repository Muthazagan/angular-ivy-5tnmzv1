import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  powers = ["Really Smart", "Super Flexible", "Weather Changer"];
  //hero = { name: "Dr.", alterEgo: "Dr. What", power: this.powers[0] };
  test = { name: "", alterEgo: "Dr. What", power: this.powers[0] };
}
