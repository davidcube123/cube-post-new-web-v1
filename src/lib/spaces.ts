interface SpaceImage {
  id: number;
  src: string;
  rotation?: number;
}

// Ordenado: impactantes y salas primero, luego detalles y decoración
export const spaceImages: SpaceImage[] = [
  { id: 1, src: "/espacios/Grading_1.jpg" },
  { id: 2, src: "/espacios/1706794512070.jpg" },
  { id: 3, src: "/espacios/monitor_sony_trinitron.jpg" },
  { id: 4, src: "/espacios/espacio_color_1_-_2.jpg" },
  { id: 5, src: "/espacios/color_3.jpg" },
  { id: 6, src: "/espacios/logo_cube_resolve.jpeg" },
  { id: 7, src: "/espacios/lounge_bar.jpg" },
  { id: 8, src: "/espacios/puerta_color_1.jpg" },
  { id: 9, src: "/espacios/cubo_lmt_decoracion.jpg" },
  { id: 10, src: "/espacios/entrada.jpg" },
  { id: 11, src: "/espacios/bar_color_.jpg" },
  { id: 12, src: "/espacios/recepcion.jpg" },
  { id: 13, src: "/espacios/pasillo_entrada.jpg" },
  { id: 14, src: "/espacios/HW.jpg" },
  { id: 15, src: "/espacios/san.jpg" },
  { id: 16, src: "/espacios/san_2.jpg" },
  { id: 17, src: "/espacios/color_science_revistas.jpg" },
  { id: 18, src: "/espacios/sala_grading_monitores.jpg" },
  { id: 19, src: "/espacios/logo_CUbe_entrada.jpg" },
  { id: 20, src: "/espacios/20260213_151041.jpg", rotation: 90 },
  { id: 21, src: "/espacios/20260213_151138.jpg", rotation: 90 },
  { id: 22, src: "/espacios/20260213_150715.jpg", rotation: 90 },
  { id: 23, src: "/espacios/20260213_150815.jpg", rotation: 90 },
  { id: 24, src: "/espacios/20260213_151148.jpg", rotation: 90 },
  { id: 25, src: "/espacios/20251231_100137.jpg", rotation: 90 },
];
