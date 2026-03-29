/**
 * ==========================================================
 * AITDL AI AGENT BUILD SIGNATURE
 * ==========================================================
 * Architect    : Jawahar R Mallah
 * Designation  : AI Systems Architect & Author
 * Organization : AITDL Network | PrathamOne
 * Framework    : Autonomous AI Agent Development
 * Authored By  : Jawahar R Mallah
 * Version      : 1.2.0
 * Release Date : 29 March 2026
 * Environment  : Production (Static-Compatible Client AI)
 * ==========================================================
 */

import { useState, useCallback, useRef, useEffect } from 'react';
import { getOfflineContent } from '../utils/curriculum-offline';
import { streamText } from 'ai';
import { google } from '@ai-sdk/google';

export interface Message {
  id: string;
  text: string;
  teacherId: string;
  role?: string;
  isComplete: boolean;
}

export interface StreamParams {
  board: string;
  grade: number;
  subject: string;
  language: string;
  topic: string;
  lessonPhase: string;
  useMock: boolean;
}

export function useClassroomStream() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);
  const [currentTeacherId, setCurrentTeacherId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const abortControllerRef = useRef<AbortController | null>(null);
  const localStreamIntervalRef = useRef<any>(null);

  const startLocalStream = useCallback((params: StreamParams) => {
    setIsStreaming(true);
    setMessages([]);
    setCurrentTeacherId('scholar_1');

    const content = getOfflineContent(params.topic, params.lessonPhase, params.language);
    const chars = content.split('');
    let index = 0;
    let accumulated = '';
    const msgId = `offline_${Date.now()}`;

    if (localStreamIntervalRef.current) clearInterval(localStreamIntervalRef.current);

    localStreamIntervalRef.current = setInterval(() => {
      if (index >= chars.length) {
        clearInterval(localStreamIntervalRef.current);
        setIsStreaming(false);
        setMessages(prev => [{ ...prev[0], isComplete: true }]);
        return;
      }

      accumulated += chars[index];
      setMessages([{
        id: msgId,
        text: accumulated,
        teacherId: 'scholar_1',
        role: 'Teacher',
        isComplete: false
      }]);
      index++;
    }, 20);
  }, []);

  const startStream = useCallback(async (params: StreamParams) => {
    // 1. Reset state
    if (abortControllerRef.current) abortControllerRef.current.abort();
    if (localStreamIntervalRef.current) clearInterval(localStreamIntervalRef.current);

    abortControllerRef.current = new AbortController();
    const signal = abortControllerRef.current.signal;

    setIsStreaming(true);
    setError(null);
    setMessages([]); 
    setCurrentTeacherId('scholar_1');

    // Sovereign (Offline) Trigger or Mock Request
    if (params.useMock || (typeof window !== 'undefined' && !window.navigator.onLine)) {
      startLocalStream(params);
      return;
    }

    try {
      // Direct Client-Side AI Streaming (Static-Hosting Compatible)
      const { textStream } = await streamText({
        model: google('gemini-2.0-flash-exp'),
        system: `You are the "PrathamOne Autonomous Scholar", a premium AI teacher dedicated to students in Bharat.
        Your tone is supportive, energetic, and pedagogical.
        - Board: ${params.board}
        - Grade: ${params.grade}
        - Subject: ${params.subject}
        - Language: ${params.language}
        - Current Topic: ${params.topic}
        - Lesson Phase: ${params.lessonPhase} (Concept, Example, Practice, or Summary)

        Instructions:
        1. Teach in ${params.language}.
        2. Use local context and simple analogies.
        3. If identifying a misconception, heal it with a patient explanation.
        4. Focus on the ${params.lessonPhase} of the lesson.
        5. Provide content in professional Markdown.`,
        prompt: `Continue the lesson on ${params.topic}. We are in the ${params.lessonPhase} phase.`,
        abortSignal: signal,
      });

      let fullText = '';
      const msgId = `ai_${Date.now()}`;

      for await (const textDelta of textStream) {
        fullText += textDelta;
        setMessages([{
          id: msgId,
          text: fullText,
          teacherId: 'scholar_1',
          role: 'Teacher',
          isComplete: false
        }]);
      }

    } catch (err: any) {
      if (err.name === 'AbortError') return;
      setError(err.message || 'An unknown error occurred');
      console.error('Stream failure:', err);
      // Fail-over to Local Stream on API error
      startLocalStream(params);
    } finally {
      setIsStreaming(false);
      setMessages(prev => prev.map(m => ({ ...m, isComplete: true })));
    }
  }, [startLocalStream]);

  useEffect(() => {
    return () => {
      if (abortControllerRef.current) abortControllerRef.current.abort();
      if (localStreamIntervalRef.current) clearInterval(localStreamIntervalRef.current);
    };
  }, []);

  return {
    messages,
    isStreaming,
    currentTeacherId,
    error,
    startStream,
    setMessages,
  };
}



