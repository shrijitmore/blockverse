declare module 'jsvectormap' {
  interface JsVectorMapOptions {
    selector: string | HTMLElement
    map: string
    backgroundColor?: string
    draggable?: boolean
    zoomButtons?: boolean
    zoomOnScroll?: boolean
    regionStyle?: object
    markers?: Array<{ name: string; coords: [number, number] }>
    markerStyle?: object
    onRegionTooltipShow?: (event: Event, tooltip: unknown, code: string) => void
  }
  class JsVectorMap {
    constructor(options: JsVectorMapOptions)
    destroy(): void
  }
  export default JsVectorMap
}
declare module 'jsvectormap/dist/maps/world.js' {}
declare module 'jsvectormap/dist/maps/world-merc.js' {}
