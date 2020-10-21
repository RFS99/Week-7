import {Component, Input, OnInit} from '@angular/core';
import {Contact} from '../../contacts.model';

@Component({
  selector: 'app-sample02',
  templateUrl: './sample02.component.html',
  styleUrls: ['./sample02.component.scss'],
})
export class Sample02Component implements OnInit {
  @Input() contact: Contact;
  constructor() { }

  ngOnInit() {}

}
