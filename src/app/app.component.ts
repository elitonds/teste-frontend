import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../node_modules/primeng/components/common/menuitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  visibleSidebar =true;

  items: MenuItem[];

  ngOnInit() {
    this.items = [
        {
            label: 'File',
            icon: 'fa fa-fw fa-file-o',
            items: [{
                    label: 'New', 
                    icon: 'fa fa-fw fa-plus',
                    items: [
                        {label: 'Project'},
                        {label: 'Other'},
                    ]
                },
                {label: 'Open'},
                {label: 'Quit'}
            ]
        },
        {
            label: 'Edit',
            icon: 'fa fa-fw fa-edit',
            items: [
                {label: 'Undo', icon: 'fa fa-fw fa-mail-forward'},
                {label: 'Redo', icon: 'fa fa-fw fa-mail-reply'}
            ]
        },
        {
            label: 'Help',
            icon: 'fa fa-fw fa-question',
            items: [
                {
                    label: 'Contents'
                },
                {
                    label: 'Search', 
                    icon: 'fa fa-fw fa-search', 
                    items: [
                        {
                            label: 'Text', 
                            items: [
                                {
                                    label: 'Workspace'
                                }
                            ]
                        },
                        {
                            label: 'File'
                        }
                ]}
            ]
        },
        {
            label: 'Actions',
            icon: 'fa fa-fw fa-gear',
            items: [
                {
                    label: 'Edit',
                    icon: 'fa fa-fw fa-refresh',
                    items: [
                        {label: 'Save', icon: 'fa fa-fw fa-save'},
                        {label: 'Update', icon: 'fa fa-fw fa-save'},
                    ]
                },
                {
                    label: 'Other',
                    icon: 'fa fa-fw fa-phone',
                    items: [
                        {label: 'Delete', icon: 'fa fa-fw fa-minus'}
                    ]
                }
            ]
        }
    ];
}

  showHide(){
    this.visibleSidebar = !this.visibleSidebar;
  }

}
