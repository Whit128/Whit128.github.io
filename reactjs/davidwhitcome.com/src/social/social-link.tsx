export default class SocialLink {
    private _iconClass: string;
    private _text: string;
    private _link: string;

    constructor(iconClass: string, text: string, link: string) {
        this._iconClass = iconClass;
        this._text = text;
        this._link = link;
    }

    get iconClass() {
        return this._iconClass;
    }

    get text() {
        return this._text;
    }

    get link() {
        return this._link;
    }
}