// sliderController.ts
import { SliderModel, SliderConfig } from "../models/sliderModel";

// Slider Samples
const sliderConfigSamples: SliderConfig = {
  sampleContainer: document.querySelector(
    ".sample-container--samples"
  ) as HTMLElement,
  samples: document.querySelectorAll(
    ".sample--samples"
  ) as NodeListOf<HTMLElement>,
  nextBtn: document.querySelectorAll(".next"),
  previousBtn: document.querySelectorAll(".previous"),
  index: document.querySelectorAll(".index"),
  description: document.querySelector(
    ".samples__description-carousel"
  ) as HTMLElement,
};

SliderModel.initializeSlider(sliderConfigSamples);

// Slider It-Deployment
const sliderConfigItDeployment: SliderConfig = {
  sampleContainer: document.querySelector(
    ".sample-container--it"
  ) as HTMLElement,
  samples: document.querySelectorAll(".sample--it") as NodeListOf<HTMLElement>,
  nextBtn: document.querySelectorAll(".samples__button--next"),
  previousBtn: document.querySelectorAll(".samples__button--previous"),
  index: document.querySelectorAll(".samples__button--index"),
};

SliderModel.initializeSlider(sliderConfigItDeployment);
