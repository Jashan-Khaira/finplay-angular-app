import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonStyle } from './button-type.enum';
import { ButtonState } from './button-state.enum';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent implements OnInit {
    @Input() id: string = '';
    @Input() height: string = 'h-[50px]';
    @Input() fontStyle : string = 'text-text-16-500';
    @Input() label: string = '';
    @Input() buttonStyle: ButtonStyle = ButtonStyle.FLAT_BUTTON; 
    @Input() buttonState: ButtonState = ButtonState.ENABLED;
    @Output() onButtonClick: EventEmitter<string> = new EventEmitter<string>();
    style = "";

    spinnerIcon = faSpinner;


    ngOnInit(): void {
      // TODO : Base on the button style, set the style attribute"
      this.initStyle();
    }


    initStyle(): void {
      switch(this.buttonStyle) {
        case ButtonStyle.FLAT_BUTTON:
          this.style =  this.height + ' ' + 'bg-primary text-white rounded-lg w-full ' + this.fontStyle ;
          break;
        case ButtonStyle.OUTLINED_BUTTON:
          this.style = this.height + ' ' + 'border border-primary text-primary rounded-lg w-full ' + this.fontStyle;
          break;
        case ButtonStyle.RAISED_BUTTON:
          this.style =  this.height + ' ' + 'bg-primary text-white rounded-lg w-full shadow-lg ' + this.fontStyle;
          break;
        case ButtonStyle.TEXT_BUTTON:
          this.style = 'raised-button';
          break;
        default:
          this.style = 'flat-button';
          break;
      }
    }

    onClick(): void {
      if(this.onButtonClick) {
        this.onButtonClick.emit(this.id);
      }else {
        throw new Error('onButtonClick is not defined');
      }
    }
}
