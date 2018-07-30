import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../../../node_modules/primeng/components/common/menuitem';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  title = 'app';

  visibleSidebar = true;

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'New',
        icon: 'fa fa-fw fa-file-o'
      },
      {
        label: 'List',
        icon: 'fa fa-list-alt'
      }
    ];
  }

  showHide() {
    this.visibleSidebar = !this.visibleSidebar;
  }

}
