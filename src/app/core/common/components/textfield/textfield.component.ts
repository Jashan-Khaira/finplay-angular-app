import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faEye, faEyeSlash, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { InputType } from './input-type.enum';

@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
  styleUrl: './textfield.component.scss'
})
export class TextfieldComponent {
  @Input() type: InputType = InputType.TEXT;
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() disabled: boolean = false;
  @Input() icon : IconDefinition | undefined

  showPassword: boolean = false;
  onFocused: boolean = false;
  eyeSlashIcon = faEyeSlash
  eyeIcon = faEye

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  toggleFocus(state: boolean) {
    console.log('toggleFocus', state);
    this.onFocused = state;
  }
  

  onInputChanged(event: Event) {
    const value = (event.target as HTMLInputElement).value;

    this.valueChange.emit(value);
  }
}
