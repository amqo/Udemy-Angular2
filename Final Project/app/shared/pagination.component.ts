import {
  Component,
  Input, Output,
  EventEmitter,
  OnChanges } from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: 'app/shared/pagination.component.html'
})

export class PaginationComponent implements OnChanges {
  @Input('items') totalItems = 0;
  @Input('page-size') pageSize = 10;

  @Output('page-changed') pageChanged = new EventEmitter();

  pages: any[];
  currentPage;

  changePage(page) {
    this.currentPage = page;
    this.pageChanged.emit(page);
  }

  previous() {
    if (this.currentPage == 1) return;
    this.pageChanged.emit(--this.currentPage);
  }

  next() {
    if (this.currentPage == this.pages.length) return;
    this.pageChanged.emit(++this.currentPage);
  }

  ngOnChanges() {
    this.currentPage = 1;
    var pagesCount = Math.ceil(this.totalItems / this.pageSize);
    this.pages = [];
    for (var i = 1; i <= pagesCount; i++) {
      this.pages.push(i);
    }
  }

}
