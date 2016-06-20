import { Pipe, PipeTransform } from 'angular2/core';

const DEFAULT_LIMIT = 50;

@Pipe({ name: 'summary' })
export class SummaryPipe implements PipeTransform {
  transform(value: string, args: string[]) {
    var limit = (args && args[0]) ? parseInt(args[0]) : DEFAULT_LIMIT;
    if (value)
      return value.substring(0, limit) + " ...";
  }
}
