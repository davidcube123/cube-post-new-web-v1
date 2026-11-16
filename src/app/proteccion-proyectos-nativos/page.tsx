const sections = [
  {
    "title": "Objeto y ámbito",
    "text": "Estas condiciones regulan la entrega y utilización de proyectos nativos y archivos de trabajo generados durante los servicios de postproducción audiovisual prestados por Motion Color Post, S.L. (Cube Post), incluyendo conformado, retimings, efectos, tratamiento de imagen, etalonaje, mastering y procesos relacionados.",
    "id": "apartado-1"
  },
  {
    "title": "Entregables contratados",
    "text": "Cube Post entregará los másteres, materiales, formatos y documentación expresamente identificados en el presupuesto, contrato o anexo técnico aceptado. La contratación de servicios de postproducción no incluye por sí sola la entrega de archivos nativos editables, bibliotecas de proyecto, estructuras de nodos ni configuraciones internas. Las solicitudes adicionales requerirán un acuerdo específico, excepto cuando exista una obligación contractual o legal previa.",
    "id": "apartado-2"
  },
  {
    "title": "Proyectos nativos de DaVinci Resolve",
    "text": "Los archivos .drp, .dra, copias de seguridad, bibliotecas de proyecto y demás soportes editables pueden incorporar decisiones técnicas y creativas del equipo de Cube Post, como conformados, retimings, grades, tracking, efectos, estructuras de nodos, transformaciones de color y referencias a herramientas propias. Su acceso, copia o entrega se limitará a lo expresamente acordado y jurídicamente procedente.",
    "id": "apartado-3"
  },
  {
    "title": "Titularidad y derechos",
    "text": "Los materiales originales aportados por el cliente y los derechos de la obra audiovisual corresponderán a sus respectivos titulares conforme a los acuerdos aplicables y la legislación. Las herramientas preexistentes, desarrollos independientes y conocimientos empresariales legítimamente controlados por Cube Post no se entienden transmitidos por el mero encargo ni por la entrega del resultado final. Ninguna previsión de estas condiciones atribuye a Cube Post derechos que legalmente correspondan a autores, productores o terceros.",
    "id": "apartado-4"
  },
  {
    "title": "Modalidades de entrega",
    "text": "Podrán acordarse: (a) entrega de másteres y documentación pactados; (b) entrega para continuidad mediante medios consolidados y archivos de intercambio, cuando resulte técnicamente viable; (c) proyecto editable adaptado, con alcance limitado; o (d) proyecto nativo completo cuando se haya pactado expresamente o resulte exigible. El contenido exacto, formato, versiones, verificaciones y, en su caso, contraprestación de cada modalidad se determinarán por escrito.",
    "id": "apartado-5"
  },
  {
    "title": "Continuidad técnica y transferencia a terceros",
    "text": "Cuando una producción deba continuar en otro estudio, las partes acordarán un paquete apropiado para la finalidad legítima de la transferencia. Siempre que resulte compatible con el contrato y las necesidades técnicas, podrá priorizarse la entrega de medios consolidados y documentación de intercambio, evitando la divulgación innecesaria de componentes internos confidenciales. Las limitaciones técnicas o de interoperabilidad se comunicarán antes de la entrega.",
    "id": "apartado-6"
  },
  {
    "title": "Uso autorizado y confidencialidad",
    "text": "La entrega excepcional de un proyecto editable no implica por sí misma autorización para reutilizar herramientas, librerías, LUTs o DCTLs en producciones distintas, comercializarlas o divulgarlas. El ámbito de uso y los destinatarios autorizados deberán constar en el acuerdo correspondiente, respetando los derechos de terceros y cualquier derecho adquirido legítimamente por el cliente. Las partes protegerán la información identificada razonablemente como confidencial, con acceso limitado al personal que necesite conocerla.",
    "id": "apartado-7"
  },
  {
    "title": "Dependencias técnicas y licencias de terceros",
    "text": "Los plugins, tipografías, códecs, LUTs, DCTLs y otros componentes licenciados por terceros solo se transmitirán en la medida permitida por sus respectivas licencias. El receptor será informado, según corresponda, de versiones de software, dependencias no incluidas y requisitos técnicos relevantes. La entrega de un archivo de proyecto no comporta la sublicencia automática de dichos recursos.",
    "id": "apartado-8"
  },
  {
    "title": "Solicitudes excepcionales y condiciones económicas",
    "text": "Toda solicitud extraordinaria de archivos editables se evaluará atendiendo al contrato vigente, los derechos afectados, la finalidad de uso, las necesidades de continuidad, las medidas de confidencialidad y la viabilidad técnica. Cuando la entrega no estuviera ya incluida en las obligaciones asumidas, podrán acordarse costes de preparación, consolidación, pruebas de calidad, soporte, licencias y transferencia. Las obligaciones previamente pactadas no podrán modificarse unilateralmente.",
    "id": "apartado-9"
  },
  {
    "title": "Aceptación, responsabilidad y prevalencia",
    "text": "El alcance, las pruebas de aceptación, la asistencia posterior y las responsabilidades aplicables serán los previstos en el contrato o anexo técnico. En caso de contradicción, prevalecerán las normas imperativas y las condiciones particulares válidamente acordadas. Estas condiciones complementan las Condiciones Generales de Venta de Cube Post y no sustituyen los compromisos previamente asumidos.",
    "id": "apartado-10"
  },
  {
    "title": "Contacto",
    "text": "Para solicitar información sobre entregables editables o continuidad técnica de una producción, el cliente podrá dirigirse a info@cube-post.com, identificando el título de la producción y el contrato o presupuesto de referencia.",
    "id": "apartado-11"
  }
];
const sources = [
  {
    "name": "Ley 1/2019, de Secretos Empresariales (arts. 1–3 y 6)",
    "url": "https://www.boe.es/buscar/act.php?id=BOE-A-2019-2364"
  },
  {
    "name": "Texto refundido de la Ley de Propiedad Intelectual (arts. 10, 43, 51 y 87)",
    "url": "https://www.boe.es/eli/es/rdlg/1996/04/12/1"
  },
  {
    "name": "Ley 3/1991, de Competencia Desleal (arts. 13 y 14)",
    "url": "https://www.boe.es/buscar/act.php?id=BOE-A-1991-628"
  },
  {
    "name": "Blackmagic Design, DaVinci Resolve 21.1 Reference Manual: proyectos .drp, configuraciones y LUTs",
    "url": "https://documents.blackmagicdesign.com/UserManuals/DaVinci_Resolve_21.1_Reference_Manual.pdf?_v=1788850810000"
  }
];
const accents = ["#00ff88", "#ffff00", "#ff00aa", "#00aaff"];
export default function ProteccionProyectosNativosPage() {
  return (<main className="min-h-screen py-20 grid-background legal-page"><div className="container mx-auto px-6 max-w-4xl"><div className="text-center mb-16"><p className="text-muted-foreground uppercase tracking-widest text-sm mb-5">Documentación legal / Anexo</p><h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">Protección y entrega de proyectos nativos</h1><p className="text-muted-foreground leading-relaxed">Condiciones específicas de entrega de proyectos editables de DaVinci Resolve y archivos de postproducción audiovisual.</p><p className="text-muted-foreground text-sm mt-5">Motion Color Post, S.L. · NIF B13983598 · Última actualización: 16 de noviembre de 2026</p></div><div className="prose prose-invert max-w-none space-y-8">{sections.map((section, i) => (<section id={section.id} key={section.id} className="p-6 rounded-xl border border-border/50 bg-card/30"><h2 className="text-2xl font-semibold mb-4" style={{color:accents[i%accents.length]}}>{i+1}. {section.title}</h2><p className="text-muted-foreground leading-relaxed">{section.text}</p></section>))}<section className="p-6 rounded-xl border border-border/50 bg-card/30"><h2 className="text-2xl font-semibold mb-4 text-[#00aaff]">12. Referencias normativas y técnicas</h2><ul className="space-y-3">{sources.map(source=><li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className="text-[#00ff88] underline underline-offset-4 hover:text-white">{source.name}</a></li>)}</ul><p className="text-muted-foreground leading-relaxed mt-5">Nota de implantación: texto operativo y contractual sujeto a revisión legal profesional, especialmente respecto a contratos ya firmados, derechos del productor, aportaciones de trabajadores y colaboradores y jurisdicciones extranjeras.</p></section></div></div></main>);
}
