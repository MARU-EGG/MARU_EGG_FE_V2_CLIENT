function getQuestionPrompt(question: string | ((type: string) => string), category: string) {
  if (typeof question === 'function') {
    return question(category);
  }
  return question;
}
export default getQuestionPrompt;
