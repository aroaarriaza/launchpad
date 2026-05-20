export type TileStatus = "correct" | "present" | "absent" | "empty";
export type GameStatus = "playing" | "won" | "lost";

export interface GuessResult {
  word: string;
  statuses: TileStatus[];
}
