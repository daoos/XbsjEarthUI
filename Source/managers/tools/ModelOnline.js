/**
 * Lab 在线服务数据源选择
 * @class
 */
class ModelOnline {
    constructor(root) {
        this._root = root;
        this._comp = root._comp.$refs.modelOnline[0];

        XE.MVVM.extend(this, {
/**
            * 是否可见
            * @type {boolean}
            * @default false 
            * @instance
            * @memberof ModelOnline
            */
            show: false,
        });
        var tool =  root._comp.$refs.mainBarControl.$refs.model;

        this.unbind = XE.MVVM.bind(
            tool,
            "modelOnline",
            this,
            "show"
        );
        
        this.unbind2 = XE.MVVM.bind(
            this._comp,
            "show",
            this,
            "show"
        );
    }

    isDestroyed() {
        return false;
    }

    destroy() {
        
        this.unbind1 = this.unbind1 && this.unbind1();
        this.unbind2 = this.unbind2 && this.unbind2();

    }
}

export default ModelOnline;