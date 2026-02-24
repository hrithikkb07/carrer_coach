// questionSelector.js

export const companyShuffleScore = (title, companySlug) => {
  let hash = 0;
  const str = title + companySlug;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
};

const difficultyScore = (difficulty, weights) =>
  weights?.[difficulty] ?? 1;

export const selectQuestionsForCompany = (
  questions,
  companySlug,
  profile
) => {
  return [...questions]
    .sort((a, b) => {
      const sa =
        companyShuffleScore(a.title, companySlug) *
        difficultyScore(a.difficulty, profile.difficultyWeight);

      const sb =
        companyShuffleScore(b.title, companySlug) *
        difficultyScore(b.difficulty, profile.difficultyWeight);

      return sb - sa;
    })
    .slice(0, profile.maxPerTopic);
};
