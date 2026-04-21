import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Card from './Card'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <h1 style={{textAlign:"center",color:"red"}}>ETERNAL LOGO</h1>
    <h2 style={{textAlign:"center"}}>POWERING INDIA'S CHANGING LIFESTYLES</h2>
    <div style={{display:"flex",justifyContent:"space-around"}}>
    <Card title="Zomato" image_url="https://b.zmtcdn.com/data/o2_assets/d1eee2be61cf47e2332cb7c49475c0981739777714.png"/>
    <Card title="Blinkit" image_url="https://b.zmtcdn.com/data/o2_assets/071cb96db84f20eea3a39804e113bdee1739777655.png"/>
    <Card title="District" image_url="https://b.zmtcdn.com/data/o2_assets/b750e7c0113f10cc6b3cec658c7229d71770799109.png"/>
    <Card title="Hyperpure" image_url="https://b.zmtcdn.com/data/o2_assets/9207cd0fc68c4ac55cfd3bfa00c02a351739777699.png"/>
    </div>

    
  </StrictMode>,
)
