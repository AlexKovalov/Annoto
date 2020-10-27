import { r as registerInstance, h } from './index-dd5fd80b.js';

const nnTooltipCss = "";

const NnTooltip = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("span", null, this.text));
    }
};
NnTooltip.style = nnTooltipCss;

export { NnTooltip as nn_tooltip };
