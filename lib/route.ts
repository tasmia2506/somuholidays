// Hero journey route — edit this list to change the destinations shown in
// the animated route overlay. Order matters: the line draws from first to last.
// x/y are 0–100 positions on an abstract square canvas (not pixels), so the
// route stays correctly proportioned at any size.
export interface RouteStop {
  name: string;
  x: number;
  y: number;
}

export const ROUTE_STOPS: RouteStop[] = [
  { name: "Bengaluru", x: 6, y: 92 },
  { name: "Mysuru", x: 29, y: 66 },
  { name: "Coorg", x: 52, y: 78 },
  { name: "Ooty", x: 74, y: 46 },
  { name: "Goa", x: 94, y: 12 },
];

// On narrow screens only the first N stops are shown, per the hero design spec.
export const MOBILE_STOP_COUNT = 3;
