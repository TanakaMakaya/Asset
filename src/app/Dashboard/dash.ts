import { Component, input } from "@angular/core";
import { NavbarComponent } from "../Navbar/nav";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-dash",
  imports: [FormsModule, NavbarComponent],
  templateUrl: 'dash.html',
  

})
export class dashboardComponent {
  
  name: string = '';
  people: string[] = [];

  editIndex: number | null = null;

  addOrUpdate() {
    if (!this.name.trim()) return;

    if (this.editIndex === null) {
      this.people.push(this.name);
    } else {
      this.people[this.editIndex] = this.name;
      this.editIndex = null;
    }

    this.name = '';
  }

  edit(i: number) {
    this.name = this.people[i];
    this.editIndex = i;
  }

  delete(i: number) {
    this.people.splice(i, 1);
}
}

