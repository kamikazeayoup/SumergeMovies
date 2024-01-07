import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';


@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() selectedFilter : string = "all";
  @Output() filter :EventEmitter<string> = new EventEmitter<string>(); 
  public pageTitle : string = environment.title
  
  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }

  filterChanged(filter:string){
    this.filter.emit(filter);
  }

  logout(): void {
    localStorage.setItem('isAuthenticated' , 'false');
    this.router.navigate(['/login']);
  }

}
