export const WORDS = [
  "ABAJO", "ABEJA", "ABRIR", "AGUJA", "ANTES", "ARENA", "ARBOL", "AVION",
  "BANCO", "BARCO", "BARRO", "BLUSA", "BRAVO", "BREVE", "BRUJA", "BURRO",
  "CABAL", "CALOR", "CAMPO", "CANAL", "CARTA", "CASCO", "CEBRA", "CERDO",
  "CHICO", "CIELO", "CINCO", "CLIMA", "COBRA", "COLOR", "CORAL", "CORTE",
  "COSTA", "CREMA", "CUERO", "CUEVA", "CULTO", "CURVA",
  "DANZA", "DEBUT", "DELTA", "DICHA", "DISCO", "DOBLE", "DOLOR", "DUCHA",
  "DUELO", "DULCE", "DUQUE",
  "ENERO", "ERROR",
  "FALSO", "FAVOR", "FERIA", "FIBRA", "FINCA", "FLOTA", "FONDO", "FORMA",
  "FRASE", "FRESA", "FRENO", "FRITO", "FRUTA", "FUEGO", "FUROR",
  "GALLO", "GAMBA", "GANSO", "GARRA", "GARZA", "GASTO", "GENIO", "GESTO",
  "GLOBO", "GOLFO", "GORRA", "GRANO", "GRIPE", "GRUPO", "GRUTA", "GUISO", "GUSTO",
  "HACHA", "HABER", "HABLA", "HIELO", "HIENA", "HIMNO", "HONGO", "HONOR",
  "HOTEL", "HUECO", "HUEVO", "HUMOR",
  "ICONO", "IDEAL", "INDIO",
  "JAMON", "JARRA", "JAULA", "JOVEN", "JUEGO", "JULIO", "JUNTO", "JUSTO",
  "LARGO", "LECHE", "LIMON", "LLAMA", "LLANO", "LUNES",
  "MADRE", "MANGA", "MANGO", "MARCO", "MARZO", "MELON", "MISMO",
  "MONTE", "MOSCA", "MUNDO",
  "NEGRO", "NIEVE", "NOBLE", "NOCHE", "NORTE",
  "ORDEN",
  "PALMA", "PAPEL", "PARED", "PATIO", "PECHO", "PEDAL", "PERRO", "PIANO",
  "PISTA", "PLATA", "PLAZA", "PLOMO", "PODER", "POETA", "POTRO", "PRADO",
  "QUESO",
  "RATON", "REINO", "RELOJ", "RENTA", "RIVAL", "ROBOT", "ROCIO", "RUEDA",
  "SABIO", "SALSA", "SALUD", "SAUCE", "SELLO", "SIETE", "SIGLO", "SOBRE",
  "SOLAR", "SUAVE", "SUELO",
  "TABLA", "TAREA", "TARRO", "TECHO", "TIGRE", "TINTO", "TOCAR", "TORNO",
  "TUMOR",
  "VALOR", "VAPOR", "VASCO", "VENTA", "VERDE", "VIEJO", "VIOLA", "VISTA", "VUELO",
  "ZUECO",
];

export function getRandomWord(): string {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}

export function isValidGuess(word: string): boolean {
  return word.length === 5 && /^[A-Z]+$/.test(word);
}
