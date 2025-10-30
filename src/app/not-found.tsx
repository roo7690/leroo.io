import { cookies } from "next/headers"
import {Txt} from "@data-static"

export default async function NotFound(){
  const lang=cookies().get('lang')?.value || 'en'
  const txt=Txt.get('layouts',lang).res_error[404]
  
  return (
    <div style={{
      width:'100%',
      height:'calc(100vh - calc(15*var(--unit)))',
      backgroundImage:`url(/img/logo.png)`,
      backgroundSize:'calc(14*var(--unit)) calc(14*var(--unit))',
      backgroundRepeat:'no-repeat',
      backgroundPosition:'calc(50% - calc(17*var(--unit))) center',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      paddingLeft:'calc(3*var(--unit))'
    }}>
      | {txt}
    </div>
  )
}