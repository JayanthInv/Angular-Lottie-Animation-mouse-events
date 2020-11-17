import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  lottieConfig: Object;

  private anim: any;
  private animationSpeed: number = 1;

  constructor() {
    this.lottieConfig = {
      path:
        "https://raw.githubusercontent.com/chenqingspring/ng-lottie/master/demo/assets/pinjump.json",
      autoplay: false,
      loop: true
    };
  }

  handleAnimation(anim: any) {
    this.anim = anim;
  }

  out() {
    this.anim.stop();
  }

  over() {
    this.anim.play();
  }

  pause() {
    this.anim.pause();
  }

  setSpeed(speed: number) {
    this.animationSpeed = speed;
    this.anim.setSpeed(speed);
  }
}
