const systemMessage = {
  introduction:
    '안녕하세요,\n명지대학교 입시 정보를 똑똑하게\n찾아주는 마루에그입니다!\n\n명지대학교 입시에 대해 궁금하신가요?\n아래 전형 중 하나를 선택해주세요!',
  admissionGuide: (type: string) =>
    `${type} 전형이 궁금하시군요!\n\n어떤 세부 전형이 궁금하신가요?\n아래에서 세부 전형을 선택해주세요!`,
  additionalInfo:
    '아래 버튼을 눌러 더 자세한 정보를 확인\n하거나 직접 질문해보세요!\n\n더욱 자세한 상담을 원하시면\n 명지대학교 입학처 02-300-1799,1800으로 전화주시길 바랍니다.',
  referenceGuide: '💡답변 출처를 알려드릴게요!\n출처를 클릭하면 모집요강으로\n확인할 수 있어요!',
  noReferenceGuide: '해당 답변에 대한 출처가 존재하지 않아요!',
  errorMessage: '서버가 답변을 불러오는데 실패했어요.',
  campusGuide:
    '학과별로 보고싶으신가요?\n명지대학교는 총 2개의 캠퍼스,12개의\n단과대와 63개의 학과(부)로 구성되어\n있습니다.\n아래 질문들을 통해서 궁금하신 학과(부)를\n찾아주세요!',
  seoulCampusIntro:
    '명지대학교 인문캠퍼스는 문과 계열\n전체와 일부 ICT 융합대학과가 존재하는\n문과 중심의 캠퍼스입니다.\n\n단과대를 선택해주세요',
  yonginCampusIntro:
    '명지대학교 자연캠퍼스는 이과 계열\n전체와 예술체육대학을 중심으로 존재하는\n공과대 중심의 캠퍼스입니다.\n\n단과대를 선택해주세요',
} as const;

export default systemMessage;
