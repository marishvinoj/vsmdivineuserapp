import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menubar-template',
  templateUrl: './menubar-template.component.html',
  styleUrls: ['./menubar-template.component.scss']
})
export class MenubarTemplateComponent  implements OnInit {
  items: MenuItem[]  = [];
  
  ngOnInit(): void {
    this.items = [
      {
          label: 'Menu',
          icon: 'pi pi-fw pi-file',
          items: [
              {
                  label: 'User List',
                  icon: 'pi pi-fw pi-list',
                  "routerLink": "userlist"
              },
              {
                  label: 'User Role List',
                  icon: 'pi pi-fw pi-list',
                  "routerLink": "userrolelist"
              },
              {
                  label: 'User Role Mapping List',  
                  icon: 'pi pi-fw pi-list',
                  "routerLink": "userrolemappinglist"
              },
              {
                  separator: true
              },
              // {
              //     label: 'PatientList',
              //     icon: 'pi pi-fw pi-external-link',
              //     "routerLink": "employee/PatientList"
              // },
              // {
              //     label: 'PatientOngrideditlist',
              //     icon: 'pi pi-fw pi-external-link',
              //     "routerLink": "employee/PatientOngrideditlist"
              // },
              // {
              //     label: 'Export',
              //     icon: 'pi pi-fw pi-external-link',
              //     "routerLink": "employee/ExcelExport"
              // },
              // {
              //     label: 'SearchPatient',
              //     icon: 'pi pi-search',
              //     "routerLink": "employee/SearchPatient"
              // },
              // {
              //     label: 'PatientDashboard',
              //     icon: 'pi pi-search',
              //     "routerLink": "employee/PatientDashboard/:id"
              // }
          ]
      },
      {
          label: 'Quit',
          icon: 'pi pi-fw pi-power-off'
      }
  ];
  }
  


}
