interface ContactItemProps {
  title: string;
  department: string;
  numbers: number[];
}
function ContactItem({ title, department, numbers }: ContactItemProps) {
  return (
    <div className="flex text-label text-gray-500">
      <span className="w-1/2">{title}</span>
      <span className="flex-1 whitespace-nowrap">
        {department} :{' '}
        <a href={`tel:02-300-${numbers[0]}`} className="underline underline-offset-4">
          02)300-{numbers[0]}
        </a>
        ,{' '}
        <a href={`tel:02-300-${numbers[1]}`} className="underline underline-offset-4">
          {numbers[1]}
        </a>
      </span>
    </div>
  );
}

function Contact() {
  return (
    <div className="flex flex-col gap-3">
      <ContactItem title="학생부교과, 실기/실적 위주 문의" department="입학관리팀" numbers={[1799, 1800]} />
      <ContactItem title="학생부종합 문의" department="인재발굴팀" numbers={[1794, 1844]} />
    </div>
  );
}

export default Contact;
