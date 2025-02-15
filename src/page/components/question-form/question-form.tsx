import { SendIcon } from '@/assets/svg';
import { useQuestionForm } from '@/hooks/use-question-form-hook';
import { ChatSteps } from '@/types/steps';

interface QuestionFormProps {
  changeStep: (step: ChatSteps) => void;
}

function QuestionForm({ changeStep }: QuestionFormProps) {
  const { content, isLoading, setContent, handleSubmit } = useQuestionForm({ changeStep });

  return (
    <div className="absolute bottom-0 h-20 w-full bg-white px-2">
      <form className="flex h-20" onSubmit={handleSubmit}>
        <input
          className={`h-11 w-80 bg-white ${isLoading && 'cursor-progress'} focus:outline-none`}
          placeholder={'질문을 입력해주세요'}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          disabled={isLoading}
        />
        <button
          type="submit"
          className={`${isLoading && 'cursor-progress'} flex h-11 w-11 items-center justify-center`}
          disabled={isLoading || !content}
        >
          <SendIcon />
        </button>
      </form>
    </div>
  );
}

export default QuestionForm;
