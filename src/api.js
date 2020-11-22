// fetch and etc...

export const plots =
  {
    "Party": {},
    "Political debate": {
      description: "March 2020. The presidential election race in the United States will begin very soon. Today, the assistant brought you a complete dossier on your main opponent. Now you have a complete analysis of his personality, his strengths and weaknesses. Make well-considered decisions and you will be able to get into the White house.",
      "logician_protagonist": {
        starting: "Question 1",
        questions: {
          "Question 1": {
            description: "The first step is the most important. How do you start your election campaign?",
            person: "logician",
            variants: [
              "I will write a provocative post on Twitter to bring a sensitive opponent to the conflict",
              "I will tell about examples of the opponent's intolerance to certain sexual minorities"
            ]
          },
          "Question 2.1": {
            description: "Your opponent wrote a post on Twitter about his candidacy for President. He denounced your past and called your political views unacceptable for a modern democratic society. How will you react?",
            person: "protagonist",
            variants: [
              "Call for a political debate",
              "Will write a response post on Twitter"
            ]
          },
          "Question 2.2": {
            description: "Your opponent gave several examples of your intolerance towards certain sexual minorities. The press demands an answer, what will you do?",
            person: "protagonist",
            variants: [
              "I will note that the words of my opponent are not confirmed by real facts and will tell about my participation in the tolerance company last year",
              "Will accuse my opponent of racial discrimination"
            ]
          },
          "Question 3": {
            description: "Media began to write about your tactlessness and intemperance unworthy of the US President. What will you do to improve your reputation?",
            person: "protagonist",
            variants: [
              "I will tell media about the opponent intolerance to the current system. Are citizens ready for a full census of the Constitution?",
              "Reputation can't be improved. I'll ask the assistant to find new dirt on the opponent"
            ]
          },
          "Question 4.1": {
            description: "Your opponent told you about your weak side. The media conducted an analysis of the your election campaign distorting some of the wording. Your rating has dropped. What will you do?",
            person: "logician",
            variants: [
              "Will post an article with simplified explanations of the main points of my election campaign",
              "Will give an interview where I will tell you how much my election campaign is better than my opponent's company"
            ]
          },
          "Question 4.2": {
            description: "The opponent announced some unpleasant details about your family's personal life. What'll we do?",
            person: "logician",
            variants: [
              "Will call this behavior unacceptable for the future President of the United States",
              "I'll return the favor and ask the assistant to find dirt on his family"
            ]
          }
        },
        variants: {
          "I will write a provocative post on Twitter to bring a sensitive opponent to the conflict": {
            points: 1,
            achievement: null,
            next_question: "Question 2.1"
          },
          "I will tell about examples of the opponent's intolerance to certain sexual minorities": {
            points: 0,
            achievement: null,
            next_question: "Question 2.2"
          },
          "Call for a political debate": {
            points: 1,
            achievement: {
              name: "Fighting weaknesses is commendable. Keep the reward for restraint",
              emoji: "🙊"
            },
            next_question: "Question 3"
          },
          "Will write a response post on Twitter": {
            points: 0,
            achievement: null,
            next_question: "Question 3"
          },
          "I will note that the words of my opponent are not confirmed by real facts and will tell about my participation in the tolerance company last year": {
            points: 1,
            achievement: {
              name: "Fighting weaknesses is commendable. Keep the reward for restraint",
              emoji: "🙊"
            },
            next_question: "Question 3"
          },
          "Will accuse my opponent of racial discrimination": {
            points: 0,
            achievement: null,
            next_question: "Question 3"
          },
          "I will tell media about the opponent intolerance to the current system. Are citizens ready for a full census of the Constitution?": {
            points: 1,
            achievement: null,
            next_question: "Question 4.1"
          },
          "Reputation can't be improved. I'll ask the assistant to find new dirt on the opponent": {
            points: 0,
            achievement: null,
            next_question: "Question 4.2"
          },
          "Will post an article with simplified explanations of the main points of my election campaign": {
            points: 1,
            achievement: {
              name: "Fighting weaknesses is commendable. Keep the reward for restraint discretion",
              emoji: "🤔"
            },
            next_question: null
          },
          "Will give an interview where I will tell you how much my election campaign is better than my opponent's company": {
            points: 0,
            achievement: null,
            next_question: null
          },
          "Will call this behavior unacceptable for the future President of the United States": {
            points: 1,
            achievement: {
              name: "Fighting weaknesses is commendable. Keep the reward for restraint discretion",
              emoji: "🤔"
            },
            next_question: null
          },
          "I'll return the favor and ask the assistant to find dirt on his family": {
            points: 0,
            achievement: null,
            next_question: null
          }
        }
      },
      'commander_protagonist': {
        starting: "Question 1",
        questions: {
          "Question 1": {
            description: "The first step is the most important. How do you start your election campaign?",
            person: "logician",
            variants: [
              "I will write a provocative post on Twitter to bring a sensitive opponent to the conflict",
              "I will tell about examples of the opponent's intolerance to certain sexual minorities"
            ]
          },
          "Question 2.1": {
            description: "Your opponent wrote a post on Twitter about his candidacy for President. He denounced your past and called your political views unacceptable for a modern democratic society. How will you react?",
            person: "protagonist",
            variants: [
              "Call for a political debate",
              "Will write a response post on Twitter"
            ]
          },
          "Question 2.2": {
            description: "Your opponent gave several examples of your intolerance towards certain sexual minorities. The press demands an answer, what will you do?",
            person: "protagonist",
            variants: [
              "I will note that the words of my opponent are not confirmed by real facts and will tell about my participation in the tolerance company last year",
              "Will accuse my opponent of racial discrimination"
            ]
          },
          "Question 3": {
            description: "Media began to write about your tactlessness and intemperance unworthy of the US President. What will you do to improve your reputation?",
            person: "protagonist",
            variants: [
              "Will tell about the opponent's habit of sacrificing everything to achieve the goal. Which President is better: a potential dictator or an ordinary choleric?",
              "Reputation can't be improved. I'll ask the assistant to find new dirt on the opponent"
            ]
          },
          "Question 4.1": {
            description: "Your opponent told you about your weak side. The media conducted an analysis of the your election campaign distorting some of the wording. Your rating has dropped. What will you do?",
            person: "logician",
            variants: [
              "Will post an article with simplified explanations of the main points of my election campaign",
              "Will give an interview where I will tell you how much my election campaign is better than my opponent's company"
            ]
          },
          "Question 4.2": {
            description: "The opponent announced some unpleasant details about your family's personal life. What'll we do?",
            person: "logician",
            variants: [
              "Will call this behavior unacceptable for the future President of the United States",
              "I'll return the favor and ask the assistant to find dirt on his family"
            ]
          }
        },
        variants: {
          "I will write a provocative post on Twitter to bring a sensitive opponent to the conflict": {
            points: 1,
            achievement: null,
            next_question: "Question 2.1"
          },
          "I will tell about examples of the opponent's intolerance to certain sexual minorities": {
            points: 0,
            achievement: null,
            next_question: "Question 2.2"
          },
          "Call for a political debate": {
            points: 1,
            achievement: {
              name: "Fighting weaknesses is commendable. Keep the reward for restraint",
              emoji: "🙊"
            },
            next_question: "Question 3"
          },
          "Will write a response post on Twitter": {
            points: 0,
            achievement: null,
            next_question: "Question 3"
          },
          "I will note that the words of my opponent are not confirmed by real facts and will tell about my participation in the tolerance company last year": {
            points: 1,
            achievement: {
              name: "Fighting weaknesses is commendable. Keep the reward for restraint",
              emoji: "🙊"
            },
            next_question: "Question 3"
          },
          "Will accuse my opponent of racial discrimination": {
            points: 0,
            achievement: null,
            next_question: "Question 3"
          },
          "I will tell media about the opponent intolerance to the current system. Are citizens ready for a full census of the Constitution?": {
            points: 1,
            achievement: null,
            next_question: "Question 4.1"
          },
          "Reputation can't be improved. I'll ask the assistant to find new dirt on the opponent": {
            points: 0,
            achievement: null,
            next_question: "Question 4.2"
          },
          "Will post an article with simplified explanations of the main points of my election campaign": {
            points: 1,
            achievement: {
              name: "Fighting weaknesses is commendable. Keep the reward for restraint discretion",
              emoji: "🤔"
            },
            next_question: null
          },
          "Will give an interview where I will tell you how much my election campaign is better than my opponent's company": {
            points: 0,
            achievement: null,
            next_question: null
          },
          "Will call this behavior unacceptable for the future President of the United States": {
            points: 1,
            achievement: {
              name: "Fighting weaknesses is commendable. Keep the reward for restraint discretion",
              emoji: "🤔"
            },
            next_question: null
          },
          "I'll return the favor and ask the assistant to find dirt on his family": {
            points: 0,
            achievement: null,
            next_question: null
          }
        }
      }
    }
  }

