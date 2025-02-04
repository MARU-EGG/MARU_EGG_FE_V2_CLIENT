function Contact() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex text-label text-gray-500">
        <span className="w-1/2">학생부교과, 실기/실적 위주 문의</span>
        <span className="flex-1 whitespace-nowrap">
          입학관리팀 :{' '}
          <a href="tel:02-300-1799" className="underline underline-offset-4">
            02)300-1799
          </a>
          ,{' '}
          <a href="tel:02-300-1800" className="underline underline-offset-4">
            1800
          </a>
        </span>
      </div>
      <div className="flex text-label text-gray-500">
        <span className="w-1/2">학생부종합 문의</span>
        <span className="flex-1 whitespace-nowrap">
          인재발굴팀 :{' '}
          <a href="tel:02-300-1794" className="underline underline-offset-4">
            02)300-1794
          </a>
          ,{' '}
          <a href="tel:02-300-1844" className="underline underline-offset-4">
            1844
          </a>
        </span>
      </div>
    </div>
  );
}

export default Contact;
