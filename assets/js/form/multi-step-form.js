/*!
    Source: https://github.com/rahulrajput83/Multi-Step-Form
    Modified by hawkeye116477
*/

class MultiStepForm {
    constructor(containerSelector, callbacks = {}) {
        this.callbacks = {
            onNext: null,
            onPrevious: null,
        };
        Object.assign(this.callbacks, callbacks);
        this.container = containerSelector;
    };
    run() {
        const prevBtns = this.container.querySelectorAll(".btn-prev");
        const nextBtns = this.container.querySelectorAll(".btn-next");
        const progress = this.container.querySelector(".progress");
        const formSteps = this.container.querySelectorAll(".form-step");
        const progressSteps = this.container.querySelectorAll(".progress-step");
        let formStepsNum = 0;
        
        /* Event Listener for Next Button. */
        nextBtns.forEach((btn) => {
            btn.addEventListener("click", async () => {
                if (this.callbacks.onNext != null) {
                    var result = await this.callbacks.onNext();
                    if (result == false) {
                        return false;
                    }
                }
                formStepsNum++;
                updateFormSteps();
                updateProgressbar();
            });
        });
        
        /* Event Listener for Back Button. */
        prevBtns.forEach((btn) => {
            btn.addEventListener("click", () => {
                formStepsNum--;
                updateFormSteps();
                updateProgressbar();
            });
        });
        
        /* Updates Form Items */
        function updateFormSteps() {
            formSteps.forEach((formStep) => {
                formStep.classList.contains("form-step-active") &&
                formStep.classList.remove("form-step-active")
            })
            formSteps[formStepsNum].classList.add("form-step-active");
        }
        
        /* Updates Progress Bar */
        function updateProgressbar() {
            progressSteps.forEach((progressStep, index) => {
                if ( index < formStepsNum + 1 ) {
                    progressStep.classList.add('progress-step-active')
                    
                    
                } else {
                    progressStep.classList.remove('progress-step-active')
                }
            })
            progress.style.width = ((formStepsNum) / (progressSteps.length - 1)) * 100 + "%";
        }         
    }
}
