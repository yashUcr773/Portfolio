import { Injectable } from '@angular/core';

@Injectable()
export class SnackbarService {

    snackQueue: snack[] = [];
    isSnacking = false;

    enqueueSnack(snack: snack) {
        this.snackQueue.push(snack);
        this.eatSnack();
    }

    eatSnack() {

        if (this.isSnacking || this.snackQueue.length == 0) {
            return
        }

        let snack: any = this.snackQueue.shift();
        let snackbar = document.getElementById('snackbar');
        let snackText: any = snackbar?.querySelector('#snackbar-text');
        snackText.innerText = snack?.message;
        snackbar?.classList.add('show');
        snackbar?.classList.add(...snack.classes);
        this.isSnacking = true;

        setTimeout(() => {
            this.isSnacking = false;
            if (snackbar) {
                snackbar.className = "";
            }
            setTimeout(() => {
                this.eatSnack();
            }, 100)
        }, 4500)


    }

}

interface snack {
    message: string
    classes: string[]
}