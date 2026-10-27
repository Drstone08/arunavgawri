import { useEffect, useState } from 'react';
import useReducedMotion from './useReducedMotion';

export default function useTypewriter(
  words,
  { typeSpeed = 85, deleteSpeed = 40, pause = 1500 } = {},
) {
  const reducedMotion = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (reducedMotion) {
      setText(words[0] ?? '');
      return undefined;
    }

    const word = words[wordIndex % words.length];
    if (!word) return undefined;

    let delay = isDeleting ? deleteSpeed : typeSpeed;
    if (!isDeleting && text === word) delay = pause;

    const timeout = window.setTimeout(() => {
      if (!isDeleting && text === word) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex((current) => (current + 1) % words.length);
        return;
      }

      setText(word.slice(0, text.length + (isDeleting ? -1 : 1)));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [
    deleteSpeed,
    isDeleting,
    pause,
    reducedMotion,
    text,
    typeSpeed,
    wordIndex,
    words,
  ]);

  return reducedMotion ? words[0] ?? '' : text;
}
