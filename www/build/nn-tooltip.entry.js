import { r as registerInstance, h } from './index-5c2e9815.js';

const nnTooltipCss = ".my-tooltip{background:gray;font-size:11px;color:#fff;padding:5px;border-radius:3px;font-weight:600;width:max-content;position:fixed;display:inline-block;visibility:hidden}";

const NnTooltip = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentDidLoad() {
        let targetElement = document.getElementById(this.for);
        targetElement.addEventListener('mouseover', () => {
            let rect = targetElement.getBoundingClientRect();
            console.log(rect);
            this.setVisibility(true, rect);
        });
        targetElement.addEventListener('mouseout', () => {
            this.setVisibility(false, {});
        });
        console.log(targetElement);
    }
    setVisibility(isVisible, pos) {
        let visibility = isVisible ? 'visible' : 'hidden';
        this.myTooltip.style.top = (pos.top - 20) + "px";
        this.myTooltip.style.left = pos.left + "px";
        this.myTooltip.style.visibility = visibility;
        console.log(visibility);
    }
    render() {
        return (h("span", { ref: el => this.myTooltip = el, class: 'my-tooltip' }, this.text));
    }
};
NnTooltip.style = nnTooltipCss;

export { NnTooltip as nn_tooltip };
