import { SearchedCourse } from 'src/app/searchedCourse';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  prueba = new SearchedCourse('asdas','asdsad','asdasd')
  title = 'Reportes ABET';
}
