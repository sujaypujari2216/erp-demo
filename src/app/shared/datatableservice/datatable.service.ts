import { Injectable } from '@angular/core';
declare const $;
@Injectable({
  providedIn: 'root'
})
export class DatatableService {

  initTable(fileName:String):void {
    console.log("Init");
    $(function (){ 

      // $('#example').append('<caption style="caption-side: bottom">Demo Table</caption>');
      $('#example').DataTable( {
        order: [],
        "responsive": "true",
        "pagingType": "simple_numbers",

        "language": {
        "searchPlaceholder": "Search...",
        "search": ""
        },
      "oLanguage": {
        "oPaginate": {
            "sNext": '<i class="fas fa-chevron-right" ></i>',
            "sPrevious": '<i class="fas fa-chevron-left" ></i>'
        }
     },

        dom: '<Bf<t>irp>',//'Blfrtip',

        buttons: [
          {
            extend: 'colvis',
            text:    '<i class="fas fa-columns"></i>',
            postfixButtons: [ 'colvisRestore' ]
          },
          {
            extend: 'copy',
            title: fileName,
            text:      '<i class="fas fa-copy"></i>',
            titleAttr: 'Copy'
          },
          {
            extend: 'excel',
            title: fileName,
            text:      '<i class="fas fa-file-excel"></i>',
            titleAttr: 'Excel'
          },
          {
            extend: 'csv',
            title: fileName,
            text: '<i class="fas fa-file-csv"></i>',
            titleAttr: 'CSV'
          },
          {
            extend: 'pdf',
            title: fileName,
            text: '<i class="fas fa-file-pdf"></i>',
            titleAttr: 'PDF'
          },
          {
            extend: 'print',
            title: fileName,
            text:      '<i class="fas fa-print"></i>',
            titleAttr: 'Print',
          } 
            //'colvis', 'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    } );
    } );
  }

  constructor() { }
}
