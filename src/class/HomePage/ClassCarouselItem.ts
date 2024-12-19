
export class ClassCarouselItem {
    private _hinhAnh: string;
    private _label: string;
    private _des: string;


    constructor(hinhAnh: string, label: string ,des: string) {
        this._hinhAnh = hinhAnh;
        this._label = label;
        this._des = des;
    }


    get des(): string {
        return this._des;
    }

    set des(value: string) {
        this._des = value;
    }

    get hinhAnh(): string {
        return this._hinhAnh;
    }

    set hinhAnh(value: string) {
        this._hinhAnh = value;
    }

    get label(): string {
        return this._label;
    }

    set label(value: string) {
        this._label = value;
    }
}