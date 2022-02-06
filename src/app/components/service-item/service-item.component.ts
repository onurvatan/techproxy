import { Component, Input, OnInit } from '@angular/core';
import { ServiceItem } from '../../models/service-item'
@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.css']
})
export class ServiceItemComponent implements OnInit {

  @Input() ServiceItem: ServiceItem;

  constructor() { }

  ngOnInit(): void {
  }

}
