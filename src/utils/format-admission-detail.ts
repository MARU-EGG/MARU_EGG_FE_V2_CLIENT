import { ResponseDetailAdmissionType } from '@/types/admission-type';

interface ReturnType {
  label: string;
  children: string[];
}

function formatAdmissionDetail(data: ResponseDetailAdmissionType[]): ReturnType[] {
  if (data[0].type === 'PYEONIP') {
    const formatData: ReturnType[] = [{ label: '편입전형', children: [] }];
    data.map((data) => {
      formatData[0].children.push(data.name);
    });
    return formatData;
  }

  const regex = /(.+)\((.+)\)/;
  const formatData = new Map();
  data.forEach((element) => {
    const match = element.name.match(regex);
    if (match) {
      const [, mainCategory, subCategory] = match;

      if (formatData.has(mainCategory)) {
        formatData.set(mainCategory, [...formatData.get(mainCategory), subCategory]);
      } else {
        formatData.set(mainCategory, [subCategory]);
      }
    }
  });

  return [...formatData].map((data) => {
    return { label: data[0], children: data[1] };
  });
}

export default formatAdmissionDetail;
