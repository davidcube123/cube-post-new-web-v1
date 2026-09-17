"use client";
import { useState, useRef, useEffect } from "react";
import { spaceImages } from "@/lib/spaces";
import { useLanguage } from "@/lib/i18n";

// Visual collections, with the original room photograph used in the approved sketch first.
const zones = [
  { es: "Salas de color", en: "Colour rooms", indices: [1,0,2,3,4] },
  { es: "Imagen y color", en: "Image & colour", indices: [5,6,7,8] },
  { es: "Encuentros", en: "Gathering spaces", indices: [9,10,11,12] },
  { es: "Infraestructura", en: "Infrastructure", indices: [14,15,13] },
  { es: "Detalles de Cube", en: "Cube details", indices: [16,17,18,19,20,21,22,23,24] },
];
const wrap = (n:number, length:number) => ((n % length) + length) % length;
export default function Spaces() {
  const { t, language } = useLanguage(); const es = language === "es";
  const [zone,setZone] = useState(0); const [position,setPosition] = useState(0);
  const [turn,setTurn] = useState(0); const [zoom,setZoom] = useState(false);
  const dialog=useRef<HTMLDialogElement>(null); const opener=useRef<HTMLElement|null>(null);
  const drag=useRef<number|null>(null); const didDrag=useRef(false);
  const current=zones[zone].indices[position]; const photo=spaceImages[current];
  const title=es?zones[zone].es:zones[zone].en;
  useEffect(()=>{if(zoom){dialog.current?.showModal();document.body.style.overflow="hidden";}return()=>{document.body.style.overflow="";};},[zoom]);
  const close=()=>{dialog.current?.close();setZoom(false);opener.current?.focus();};
  const move=(step:number)=>{setZone(z=>wrap(z+step,zones.length));setPosition(0);setTurn(v=>v+step);};
  const select=(i:number)=>{let step=i-zone;if(step>2)step-=5;if(step< -2)step+=5;move(step);};
  return <section className="editorial-page immersive-spaces">
    <div className="page-heading"><h1>{t.spaces.title}</h1></div>
    <div className="space-journey">
      <div className="space-scene">
        <button className="space-hero-photo" aria-label={`${es?'Ampliar fotografía':'Enlarge photograph'} ${current+1}`} onClick={e=>{opener.current=e.currentTarget;setZoom(true);}}>
          <img key={photo.src} src={photo.src} alt={`${title} — ${position+1}`} className={photo.rotation?'turned-room':''}/>
          <span className="space-enlarge" aria-hidden="true">↗</span>
        </button>
        <div className="space-scene-caption" aria-live="polite"><h2>{title}</h2><span className="space-counter">{String(position+1).padStart(2,'0')} / {String(zones[zone].indices.length).padStart(2,'0')}</span></div>
        <div className="room-photo-controls"><button disabled={position===0} aria-label={es?'Fotografía anterior':'Previous photograph'} onClick={()=>setPosition(p=>p-1)}>←</button><button disabled={position===zones[zone].indices.length-1} aria-label={es?'Fotografía siguiente':'Next photograph'} onClick={()=>setPosition(p=>p+1)}>→</button></div>
      </div>
      <aside className="space-navigator" aria-label={es?'Explorar espacios':'Explore spaces'}>
        <p className="space-explore-label">{es?'Explora CUBE':'Explore CUBE'}</p>
        <button className="navigator-stage" aria-label={es?'Girar cubo: espacio siguiente':'Rotate cube: next space'} aria-describedby="cube-instructions"
          onClick={()=>{if(!didDrag.current)move(1);didDrag.current=false;}}
          onKeyDown={e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();move(e.key==='ArrowRight'?1:-1);}}}
          onPointerDown={e=>{drag.current=e.clientX;didDrag.current=false;e.currentTarget.setPointerCapture(e.pointerId);}}
          onPointerUp={e=>{if(drag.current!==null){const distance=e.clientX-drag.current;if(Math.abs(distance)>30){didDrag.current=true;move(distance<0?1:-1);}}drag.current=null;}}
          onPointerCancel={()=>{drag.current=null;didDrag.current=true;}}>
          <span className="navigator-shadow" aria-hidden="true"/>
          <span className="navigator-cube" style={{transform:`rotateX(-16deg) rotateY(${-28-turn*90}deg)`}} aria-hidden="true">
            {[0,1,2,3].map(face=>{const offset=wrap(face-wrap(turn,4),4);const z=zones[wrap(zone+offset,zones.length)];return <span key={face} className="navigator-face" style={{transform:`rotateY(${face*90}deg) translateZ(var(--nav-half))`}}><img draggable={false} src={offset===0?photo.src:spaceImages[z.indices[0]].src} className={offset===0&&photo.rotation?'turned-room':''} alt=""/></span>;})}
            <span className="navigator-lid"/><span className="navigator-base"/>
          </span>
        </button>
        <div className="space-orbit-selector">
          <svg viewBox="0 0 300 60" preserveAspectRatio="none" aria-hidden="true"><path d="M20 15 Q150 70 280 15"/></svg>
          {zones.map((z,i)=><button key={z.en} style={{top:`${[0,14,19,14,0][i]}px`}} aria-label={es?z.es:z.en} aria-pressed={i===zone} onClick={()=>select(i)}><span/></button>)}
        </div>
        <div className="cube-step-controls"><button aria-label={es?'Espacio anterior':'Previous space'} onClick={()=>move(-1)}>←</button><p id="cube-instructions">{es?'Gira para descubrir':'Turn to discover'}</p><button aria-label={es?'Espacio siguiente':'Next space'} onClick={()=>move(1)}>→</button></div>
      </aside>
    </div>
    <div className="room-contact-strip" aria-label={es?'Fotografías del espacio':'Space photographs'}>{zones[zone].indices.map((n,i)=><button key={n} aria-label={`${es?'Ver fotografía':'View photograph'} ${i+1}`} aria-pressed={i===position} onClick={()=>setPosition(i)}><img src={spaceImages[n].src} alt="" className={spaceImages[n].rotation?'turned-room':''}/></button>)}</div>
    <dialog ref={dialog} className="space-dialog immersive-space-dialog" aria-label={`${title} — ${position+1}`} onCancel={e=>{e.preventDefault();close();}} onClick={e=>{if(e.target===e.currentTarget)close();}}>{zoom&&<><button autoFocus className="dialog-close" onClick={close}>{es?'Cerrar':'Close'} ×</button><img src={photo.src} alt={`${title} ${position+1}`} className={photo.rotation?'turned-room':''}/></>}</dialog>
  </section>;
}
