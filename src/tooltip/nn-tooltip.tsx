import {Component, h, Prop} from "@stencil/core";

@Component({
    tag: "nn-tooltip",
    styleUrl: "nn-tooltip.css",
    shadow: true
})

export class NnTooltip {
    @Prop() text: string
    @Prop() for: string;
    private myTooltip?: HTMLElement;

    componentDidLoad(){
        let targetElement = document.getElementById(this.for);
        targetElement.addEventListener('mouseover', ()=>{
            let rect = targetElement.getBoundingClientRect();
            console.log(rect);
            this.setVisibility(true, rect);
        })
        targetElement.addEventListener('mouseout',()=>{
            this.setVisibility(false, {});
        })
        console.log(targetElement);
    }

    setVisibility(isVisible: boolean, pos){
        let visibility = isVisible ? 'visible': 'hidden';

        this.myTooltip.style.top = (pos.top-20)+"px";
        this.myTooltip.style.left = pos.left+"px";
        this.myTooltip.style.visibility = visibility;
        console.log(visibility);
    }

    render() {
        return (
            <span ref={el=> this.myTooltip=el as HTMLElement}
                class={'my-tooltip'}>
                {this.text}
            </span>
        );
    }
}
