import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormatter'
})
export class NumberFormatterPipe implements PipeTransform {

  transform(value: number, decimals: number = 2): string {
    if (!value && value !== 0) return '';

    const absValue = Math.abs(value);
    let formattedValue = '';

    if (absValue >= 1e12) {
      formattedValue = (value / 1e12).toFixed(decimals) + 'T'; // Trillion
    } else if (absValue >= 1e9) {
      formattedValue = (value / 1e9).toFixed(decimals) + 'B'; // Billion
    } else if (absValue >= 1e6) {
      formattedValue = (value / 1e6).toFixed(decimals) + 'M'; // Million
    } else if (absValue >= 1e3) {
      formattedValue = (value / 1e3).toFixed(decimals) + 'K'; // Thousand
    } else {
      formattedValue = value.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: decimals }); // Default US format
    }

    return formattedValue;
  }
}