// O Record<string, string> esta dizendo que a chave é do tipo string e o valor também é do tipo string
// a chave é o tipo e o valor é a estilização, o Record é uma forma mais simplificada e melhor de definir o tipo dos dois
const TypeColors: Record<string, string> = {
  normal: "bg-gray-400",
  fire: "bg-red-500",
  water: "bg-blue-500",
  grass: "bg-green-500",
  electric: "bg-yellow-400",
  ice: "bg-cyan-300",
  fighting: "bg-orange-700",
  flying: "bg-indigo-300",
  poison: "bg-purple-500",
  ground: "bg-amber-600",
  rock: "bg-stone-500",
  bug: "bg-lime-500",
  ghost: "bg-violet-700",
  steel: "bg-slate-500",
  psychic: "bg-pink-500",
  dragon: "bg-indigo-700",
  dark: "bg-gray-800",
  fairy: "bg-pink-300",
};

export default TypeColors;
