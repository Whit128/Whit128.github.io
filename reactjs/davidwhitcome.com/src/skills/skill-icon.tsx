export default class SkillIcon {
  private _iconClass: string;
  private _text: string;
  
  constructor(iconClass: string, text: string) {
    this._iconClass = iconClass;
    this._text = text;
  }

  get iconClass(): string {
    return this._iconClass;
  }

  get text(): string {
    return this._text;
  }
};