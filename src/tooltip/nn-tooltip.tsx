import {Component, h, Prop} from "@stencil/core";

@Component({
    tag: "nn-tooltip",
    styleUrl: "nn-tooltip.css",
    shadow: true
})
export class NnTooltip {
    @Prop() text: string
    @Prop() for: string;

    render() {
        return (
            <span>
                {this.text}
            </span>
        );
    }
}

// Delay with Observables

// myDelay(i) {
//     return  of({}).pipe(delay(i));
// }
//
// test() {
//     console.log(new Date().toISOString());
//     this.myDelay(3000).subscribe(() => {
//         console.log(new Date().toISOString());
//     });
// }
//
// minDelay<T>(action: Observable<T>, minDelayMiliSec = 0): Observable<any[]> {
//     return  forkJoin(
//         [
//             action,
//             this.myDelay(minDelayMiliSec)
//         ]
//     );
// }
//
// test2() {
//     let showSpinner = false;
//
//     showSpinner = true;
//     this.minDelay(fromFetch(fetch(...)), 500).subscribe((data) => {
//         console.log(data[0]);
//         // update ui
//         showSpinner = false;
//     });
// }
