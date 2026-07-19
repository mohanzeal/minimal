import type { InjectionKey, Ref } from "vue"

export type ComparisonMode = "hover" | "drag"

export interface ImageComparisonContextType {
  sliderPosition: Ref<number>
  mode: ComparisonMode
}

export const ImageComparisonContextKey: InjectionKey<ImageComparisonContextType> =
  Symbol("ImageComparison")