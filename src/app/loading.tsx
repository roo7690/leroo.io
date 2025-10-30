import { cookies } from "next/headers"

export default async function Loading(){
  const lang=cookies().get('lang')?.value || 'en'
  
  return (
    <div style={{
      width:'100%',
      height:'calc(100vh - calc(15*var(--unit)))',
      backgroundImage:`url(${process.env.MEDIA}/img/logo.png)`,
      backgroundSize:'calc(14*var(--unit)) calc(14*var(--unit))',
      backgroundRepeat:'no-repeat',
      backgroundPosition:'calc(50% - calc(17*var(--unit))) center',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      paddingLeft:'calc(3*var(--unit))'
    }}>
      | {lang==='en'?'Loading...':'Chargement...'}
    </div>
  )
}