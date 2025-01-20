const systemMessage = {
  introduction:
    '안녕하세요,\n명지대학교 입시 정보를 똑똑하게\n찾아주는 마루에그입니다!\n\n명지대학교 입시에 대해 궁금하신가요?\n아래 전형 중 하나를 선택해주세요!',
  admissionGuide: (type: string) =>
    `${type} 전형이 궁금하시군요!\n\n어떤 세부 전형이 궁금하신가요?\n아래에서 세부 전형을 선택해주세요!`,
  additionalInfo:
    '아래 버튼을 눌러 더 자세한 정보를 확인\n하거나 직접 질문해보세요!\n\n더욱 자세한 상담을 원하시면\n 명지대학교 입학처 02-300-1799,1800으로 전화주시길 바랍니다.',
  referenceGuide: '💡답변 출처를 알려드릴게요!\n출처를 클릭하면 모집요강으로\n확인할 수 있어요!',
  errorMessage: '서버가 답변을 불러오는데 실패했어요.',
} as const;

export default systemMessage;
