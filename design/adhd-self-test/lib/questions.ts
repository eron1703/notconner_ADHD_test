export const questions = [
  // Inattention (10 questions)
  { id: 1, text: "I start tasks but get distracted before finishing them.", category: "Inattention" },
  { id: 2, text: "I have difficulty sustaining attention in tasks or play activities.", category: "Inattention" },
  {
    id: 3,
    text: "I often make careless mistakes in schoolwork, at work, or during other activities.",
    category: "Inattention",
  },
  { id: 4, text: "I often do not seem to listen when spoken to directly.", category: "Inattention" },
  {
    id: 5,
    text: "I often fail to follow through on instructions and fail to finish schoolwork, chores, or duties in the workplace (e.g., loses focus, side-tracked).",
    category: "Inattention",
  },
  { id: 6, text: "I often have difficulty organizing tasks and activities.", category: "Inattention" },
  {
    id: 7,
    text: "I often avoid, dislike, or am reluctant to engage in tasks that require sustained mental effort (e.g., schoolwork or homework; for adolescents and adults, preparing reports, completing lengthy papers).",
    category: "Inattention",
  },
  {
    id: 8,
    text: "I often lose things necessary for tasks or activities (e.g., school materials, pencils, books, tools, wallets, keys, paperwork, eyeglasses, mobile telephones).",
    category: "Inattention",
  },
  { id: 9, text: "I am often easily distracted by extraneous stimuli.", category: "Inattention" },
  { id: 10, text: "I am often forgetful in daily activities.", category: "Inattention" },

  // Impulsivity (10 questions)
  { id: 11, text: "I often blurt out an answer before a question has been completed.", category: "Impulsivity" },
  {
    id: 12,
    text: "I often have difficulty waiting my turn (e.g., in queues, conversations).",
    category: "Impulsivity",
  },
  {
    id: 13,
    text: "I often interrupt or intrude on others (e.g., butts into conversations, games, or activities; may start using other people’s things without asking or receiving permission).",
    category: "Impulsivity",
  },
  { id: 14, text: "I often act without thinking about the consequences.", category: "Impulsivity" },
  { id: 15, text: "I often make important decisions impulsively.", category: "Impulsivity" },
  { id: 16, text: "I often have trouble controlling my temper.", category: "Impulsivity" },
  { id: 17, text: "I often speak excessively.", category: "Impulsivity" },
  { id: 18, text: "I often engage in risky behaviors without considering safety.", category: "Impulsivity" },
  { id: 19, text: "I often find it hard to resist temptations.", category: "Impulsivity" },
  { id: 20, text: "I often change activities frequently without completing them.", category: "Impulsivity" },

  // Hyperactivity (10 questions)
  { id: 21, text: "I often fidget with or tap hands or feet, or squirm in seat.", category: "Hyperactivity" },
  {
    id: 22,
    text: "I often leave seat in situations when remaining seated is expected (e.g., leaves his or her place in the classroom, in the office or other workplace, or in other situations that require remaining in place).",
    category: "Hyperactivity",
  },
  {
    id: 23,
    text: "I often run about or climb in situations where it is inappropriate (e.g., in adolescents or adults, may be limited to feeling restless).",
    category: "Hyperactivity",
  },
  { id: 24, text: "I am often unable to play or engage in leisure activities quietly.", category: "Hyperactivity" },
  {
    id: 25,
    text: "I am often 'on the go,' acting as if 'driven by a motor' (e.g., is unable to be or uncomfortable being still for extended time, as in restaurants, meetings; may be experienced by others as being restless or difficult to keep up with).",
    category: "Hyperactivity",
  },
  { id: 26, text: "I often talk excessively.", category: "Hyperactivity" },
  { id: 27, text: "I often feel restless.", category: "Hyperactivity" },
  { id: 28, text: "I often have difficulty relaxing.", category: "Hyperactivity" },
  { id: 29, text: "I often feel a need to be constantly active.", category: "Hyperactivity" },
  {
    id: 30,
    text: "I often have difficulty staying still during long conversations or meetings.",
    category: "Hyperactivity",
  },
]

export type Question = {
  id: number
  text: string
  category: "Inattention" | "Impulsivity" | "Hyperactivity"
}
