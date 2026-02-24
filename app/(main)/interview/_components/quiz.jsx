"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { generateQuiz, saveQuizResult } from "@/actions/interview";
import QuizResult from "./quiz-result";
import useFetch from "@/hooks/use-fetch";
import { BarLoader } from "react-spinners";

export default function Quiz() {
  const [topic, setTopic] = useState("");
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isWaitingForQuiz, setIsWaitingForQuiz] = useState(false); // NEW

  const {
    loading: generatingQuiz,
    fn: generateQuizFn,
    data: quizData,
  } = useFetch(generateQuiz);

  const {
    loading: savingResult,
    fn: saveQuizResultFn,
    data: resultData,
    setData: setResultData,
  } = useFetch(saveQuizResult);

  const questions = Array.isArray(quizData)
    ? quizData
    : Array.isArray(quizData?.questions)
    ? quizData.questions
    : null;

  useEffect(() => {
    if (quizData?.error === "RATE_LIMIT") {
      toast.error("You can only generate 3 quizzes per hour ⏳");
      setQuizStarted(false);
      setIsWaitingForQuiz(false); // NEW
      return;
    }

    if (questions?.length) {
      setAnswers(new Array(questions.length).fill(null));
      setQuizStarted(true);
      setIsWaitingForQuiz(false); // NEW
    }
  }, [quizData, questions]);

  /* FIRST SCREEN */
  if (!quizStarted && !questions && !isWaitingForQuiz) {
    return (
      <Card className="max-w-xl mx-auto">
        <CardHeader>
          <CardTitle>Start Practice Quiz</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Enter a topic you want to practice.
          </p>

          <input
            type="text"
            placeholder="Enter topic..."
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
          />
        </CardContent>

        <CardFooter>
          <Button
            className="w-full"
            disabled={topic.trim().length < 3 || generatingQuiz}
            onClick={async () => {
              setIsWaitingForQuiz(true); // NEW
              await generateQuizFn(topic);
            }}
          >
            Start Quiz
          </Button>
        </CardFooter>
      </Card>
    );
  }

  /* GENERATING QUIZ LOADER */
  if (isWaitingForQuiz || generatingQuiz) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <BarLoader width={200} color="gray" />
        <p className="mt-4 text-lg text-muted-foreground">
          Generating your quiz...
        </p>
      </div>
    );
  }

  if (resultData) {
    return (
      <QuizResult
        result={resultData}
        onStartNew={() => {
          setTopic("");
          setQuizStarted(false);
          setCurrentQuestion(0);
          setAnswers([]);
          setShowExplanation(false);
          setResultData(null);
        }}
      />
    );
  }

  if (savingResult) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <BarLoader width={200} color="gray" />
        <p className="mt-4 text-lg text-muted-foreground">
          Generating your results...
        </p>
      </div>
    );
  }

  if (!questions || !questions.length) return null;

  const question = questions[currentQuestion];

  const handleAnswer = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
  };

  const calculateScore = () => {
    let correct = 0;
    answers.forEach((answer, idx) => {
      if (answer === questions[idx].correctAnswer) correct++;
    });
    return (correct / questions.length) * 100;
  };

  const finishQuiz = async () => {
    const score = calculateScore();
    await saveQuizResultFn(questions, answers, score);
    toast.success("Quiz completed!");
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((q) => q + 1);
      setShowExplanation(false);
    } else {
      finishQuiz();
    }
  };

  return (
    <Card className="mx-2">
      <CardHeader>
        <CardTitle>
          Question {currentQuestion + 1} of {questions.length}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-lg font-medium">{question.question}</p>

        <RadioGroup
          value={answers[currentQuestion]}
          onValueChange={handleAnswer}
        >
          {question.options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2">
              <RadioGroupItem value={option} />
              <Label>{option}</Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button onClick={handleNext} disabled={!answers[currentQuestion]}>
          {currentQuestion < questions.length - 1
            ? "Next Question"
            : "Finish Quiz"}
        </Button>
      </CardFooter>
    </Card>
  );
}
