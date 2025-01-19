import { useEffect } from 'react';
import Markdown from 'react-markdown';
import Chat from '@/components/chat/chat';
import useQuestionReferencesStore from '@/stores/store/question-references-store';
import { PostQuestionResponse } from '@/types/questions';

function ResultMessage({ result }: { result: PostQuestionResponse }) {
  const { setReferences } = useQuestionReferencesStore();
  useEffect(() => {
    setReferences(result.references);
  }, []);
  return (
    <Chat role="system">
      <Markdown>{result.answer.content}</Markdown>
    </Chat>
  );
}

export default ResultMessage;
