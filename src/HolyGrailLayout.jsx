import React from 'react'

function HolyGrailLayout() {
  return (
   <div style={{textAlign:'center'}}>
   <header>
    <div style={{height:'60px', backgroundColor:'orange', paddingTop:'10px'}}>Header</div>
   </header>

    <div style={{display:'flex', flexWrap: 'wrap' }}>
   <nav>
    <div style={{ flex: '0 0 80px',backgroundColor:'Coral',height:'500px', width:'80px',color:'white',  paddingTop:'10px'}}>Navigation</div>
   </nav>
   <main style={{flex:1}}>
    <div style={{  flex: '1 1 100%',backgroundColor:'papayawhip',height:'500px',width:'100% ' ,color:'black', paddingTop:'10px'}}>Main</div>
   </main>
   <aside>
    <div style={{ flex: '0 0 80px',backgroundColor:'peachpuff',height:'500px', width:'80px', color:'white', paddingTop:'10px'}}>SideBar</div>
   </aside>
   </div>

   <footer style={{backgroundColor:'gray',height:'70px', paddingTop:'10px'}}>Footer</footer>
   </div>
  )
}

export default HolyGrailLayout
