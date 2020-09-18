import { Component, OnInit, ViewChild, AfterViewInit  } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import {Pipe,PipeTransform} from '@angular/core'



import { Const } from './../../_models/consts/const';
import  {FeedbackService} from './../../_services/feedback.service';
import { IFeedbackList } from 'src/app/_models/interfaces/FeedbackListAdmin.interface';



@Component({
  selector: 'app-admin-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit,AfterViewInit {


  public feedbackList:IFeedbackList[]=[];
  displayedColumns: string[] = Const.TABLE_ADMIN_FEEDBACK;
  dataSource: MatTableDataSource<IFeedbackList>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
  public feedbackService:FeedbackService
  	) { }

  ngOnInit(): void {

  	// this.LoadFeedback();
  }

  ngAfterViewInit(): void {
    this.LoadFeedback();
  }
  LoadFeedback()
  {
       this.feedbackService.getFeedback().subscribe((a:IFeedbackList[])=>{

          this.feedbackList= a ;
          this.dataSource = new MatTableDataSource(this.feedbackList);
                this.loadPaginator();
          console.log( this.feedbackList)
       });

  }


    loadPaginator(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

    applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



}
