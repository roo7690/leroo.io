import { CanvasProvider } from "./canvas-provider"
import Draw3D from "./3d"
import Draw2D from "./2d"


export function Background({theme,media_src}:{theme:string,media_src:string}){
  return (
  <div id='background' className='loading'>
    <CanvasProvider default_theme={theme as any} media_src={media_src}>
      <Draw3D/>
      <Draw2D/>
    </CanvasProvider>
  </div>
  )
}