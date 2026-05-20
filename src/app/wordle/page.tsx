import { Metadata } from "next";
import WordleGame from "@/components/wordle/WordleGame";

export const metadata: Metadata = {
  title: "Wordle",
  description: "Adivina la palabra de 5 letras en 6 intentos. En español.",
};

export default function WordlePage() {
  return (
    <main className="max-w-sm mx-auto px-4 py-12">
      <WordleGame />
    </main>
  );
}
