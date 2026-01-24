import { useState, useMemo } from "react";
import questionsData from "../../data/questions.json";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";
import confetti from "canvas-confetti";

type Answer = "Martin" | "Mechi" | "Ninguno de los dos" | "Los dos";


export const TriviaGame = () => {
    const [gameState, setGameState] = useState<"intro" | "playing" | "finished">("intro");
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [lastAnswerCorrect, setLastAnswerCorrect] = useState<boolean | null>(null);

    // Shuffle and pick 10 questions when game starts
    const gameQuestions = useMemo(() => {
        if (gameState !== "playing") return [];
        return [...questionsData]
            .sort(() => 0.5 - Math.random())
            .slice(0, 10);
    }, [gameState]);

    const handleStart = () => {
        setScore(0);
        setCurrentQuestionIndex(0);
        setGameState("playing");
        setLastAnswerCorrect(null);
    };

    const handleAnswer = (selectedAnswer: Answer) => {
        const currentQuestion = gameQuestions[currentQuestionIndex];
        const isCorrect = currentQuestion.answer === selectedAnswer;

        if (isCorrect) {
            setScore((prev) => prev + 10);
            confetti({
                particleCount: 50,
                spread: 60,
                origin: { y: 0.7 },
                colors: ['#A4B494', '#C5A059', '#F9F7F2'] // Sage, Gold, Cream
            });
        }

        setLastAnswerCorrect(isCorrect);

        setTimeout(() => {
            setLastAnswerCorrect(null);
            if (currentQuestionIndex < 9) {
                setCurrentQuestionIndex((prev) => prev + 1);
            } else {
                setGameState("finished");
                if (score + (isCorrect ? 10 : 0) >= 70) {
                    confetti({
                        particleCount: 200,
                        spread: 100,
                        origin: { y: 0.6 }
                    });
                }
            }
        }, 800);
    };

    const options: Answer[] = ["Martin", "Mechi", "Los dos", "Ninguno de los dos"];

    return (
        <Section id="trivia" className="text-center" alternate>
            <div className="max-w-2xl mx-auto min-h-[400px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                    {gameState === "intro" && (
                        <motion.div
                            key="intro"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-8"
                        >
                            <h2 className="font-serif text-4xl md:text-5xl text-wedding-sage">
                                Adiviná quién
                            </h2>
                            <p className="text-wedding-text/80 text-lg">
                                ¡Poné a prueba qué tanto conocés a los novios con este juego!
                                Son 10 preguntas. ¿Podrás llegar a los 100 puntos?
                                Premio especial si llegas a los 100 puntos.
                            </p>
                            <Button onClick={handleStart} size="lg" className="w-full md:w-auto px-12">
                                ¡Jugar Ahora!
                            </Button>
                        </motion.div>
                    )}

                    {gameState === "playing" && (
                        <motion.div
                            key="playing"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="space-y-8"
                        >
                            <div className="flex justify-between items-center text-sm font-medium text-wedding-text/60">
                                <span>Pregunta {currentQuestionIndex + 1}/10</span>
                                <span>Puntos: {score}</span>
                            </div>

                            <motion.h3
                                key={gameQuestions[currentQuestionIndex].id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="font-serif text-2xl md:text-3xl text-wedding-text min-h-[80px] flex items-center justify-center"
                            >
                                {gameQuestions[currentQuestionIndex].question}
                            </motion.h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {options.map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => handleAnswer(option)}
                                        disabled={lastAnswerCorrect !== null}
                                        className={cn(
                                            "p-4 rounded-xl border transition-all duration-200 font-medium",
                                            "hover:bg-wedding-sage hover:text-white hover:border-wedding-sage",
                                            "bg-white border-wedding-gold/30 text-wedding-text",
                                            "disabled:opacity-50 disabled:cursor-not-allowed"
                                        )}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>

                            {lastAnswerCorrect !== null && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className={cn(
                                        "text-lg font-bold",
                                        lastAnswerCorrect ? "text-green-600" : "text-red-500"
                                    )}
                                >
                                    {lastAnswerCorrect ? "¡Correcto! +10" : "¡Ups! Incorrecto"}
                                </motion.div>
                            )}
                        </motion.div>
                    )}

                    {gameState === "finished" && (
                        <motion.div
                            key="finished"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="space-y-6"
                        >
                            <h2 className="font-serif text-3xl text-wedding-text">
                                ¡Juego Terminado!
                            </h2>

                            <div className="text-6xl font-serif text-wedding-sage font-bold">
                                {score} <span className="text-2xl text-wedding-text/60">/ 100</span>
                            </div>

                            <p className="text-xl text-wedding-text">
                                {score === 100 ? "¡Increíble! El premio especial es para vos es un gran abrazo y que seguis invitado a la boda." :
                                    score >= 70 ? "¡Muy bien! Se nota que nos conoces mucho." :
                                        score >= 40 ? "Mmm... dudamos de tu asistencia a la boda. P.d.: Mentira, te esperamos!" :
                                            "¿Seguro que te invitaron? Yo que vos lo vuelvo a intentar."}
                            </p>

                            <Button onClick={handleStart} variant="outline" className="mt-4">
                                Jugar de nuevo
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </Section>
    );
};
