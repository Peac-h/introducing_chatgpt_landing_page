// sliderView.ts
export interface SliderConfig {
  sampleContainer: HTMLElement;
  samples: NodeListOf<HTMLElement>;
  nextBtn: NodeListOf<Element>;
  previousBtn: NodeListOf<Element>;
  index: NodeListOf<Element>;
  description?: HTMLElement;
}

export class SliderView {
  static updateSlider(config: SliderConfig, currentIndex: number): void {
    const translateValue = -currentIndex * 100;

    config.samples.forEach((sample) => {
      sample.style.transform = `translateX(${translateValue}vw)`;
    });

    config.index.forEach(
      (index) => (index.textContent = `${currentIndex + 1}`)
    );

    if (config.description) {
      switch (currentIndex) {
        case 0:
          config.description.textContent = `asks the clarifying questions to debug code.`;
          break;
        case 1:
          config.description.textContent = `is able to understand the reference ("it") to the subject of the previous question ("fermat's little theorem").`;
          break;
        case 2:
          config.description.textContent = `provides responses to follow-up instructions.`;
          break;
      }
    }

    config.sampleContainer.setAttribute("data-current", `${currentIndex}`);
  }

  static initializeSlider(config: SliderConfig): void {
    let currentIndex = 0;

    config.nextBtn.forEach((button) => {
      button.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % config.samples.length;
        SliderView.updateSlider(config, currentIndex);
      });
    });

    config.previousBtn.forEach((button) => {
      button.addEventListener("click", () => {
        currentIndex =
          (currentIndex - 1 + config.samples.length) % config.samples.length;
        SliderView.updateSlider(config, currentIndex);
      });
    });
  }
}
